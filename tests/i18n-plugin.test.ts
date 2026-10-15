import assert from "node:assert/strict";
import test from "node:test";
import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { launchI18nPlugin } from "../src/vite/i18n-plugin.ts";

test("injects the configured locale and translation glob", () => {
  const plugin = launchI18nPlugin({
    locale: "nl",
    fallbackLocale: "en",
    langPath: "../../lang/*.json",
  });

  assert.equal(typeof plugin.transform, "function");

  const result = plugin.transform("export const application = true;", "/app/resources/js/app.tsx");

  assert.ok(result && typeof result === "object" && "code" in result);
  assert.match(result.code, /locale: "nl"/);
  assert.match(result.code, /fallbackLocale: "en"/);
  assert.match(
    result.code,
    /import\.meta\.glob\("\.\.\/\.\.\/lang\/\*\.json", \{ eager: true \}\)/,
  );
  assert.doesNotMatch(result.code, /import\.meta\.glob\(""/);
});

test("loads JSON translation files into the runtime", async () => {
  const plugin = launchI18nPlugin(true);

  assert.equal(typeof plugin.resolveId, "function");
  assert.equal(typeof plugin.load, "function");

  const resolvedId = plugin.resolveId("virtual:launch-i18n");
  assert.equal(typeof resolvedId, "string");

  const loaded = plugin.load(resolvedId);
  assert.equal(typeof loaded, "string");

  const source = loaded.replace(
    'import { useSyncExternalStore } from "react";',
    "const useSyncExternalStore = () => undefined;",
  );
  const runtime = await import(
    `data:text/javascript;base64,${Buffer.from(source).toString("base64")}`
  );

  runtime.initI18n({
    locale: "nl",
    fallbackLocale: "en",
    files: {
      "/lang/en.json": { greeting: "Hello :name" },
      "/lang/nl.json": { default: { greeting: "Hallo :name" } },
    },
  });

  assert.equal(runtime.__("greeting", { name: "Nick" }), "Hallo Nick");
});

async function loadRuntime() {
  const plugin = launchI18nPlugin(true);
  const source = plugin
    .load(plugin.resolveId("virtual:launch-i18n"))
    .replace(
      'import { useSyncExternalStore } from "react";',
      "const useSyncExternalStore = () => undefined;",
    );

  return import(
    `data:text/javascript;base64,${Buffer.from(source).toString("base64")}#${Math.random()}`
  );
}

test("replaces one translation file on update", async () => {
  const runtime = await loadRuntime();

  runtime.initI18n({
    locale: "en",
    files: {
      "/lang/en.json": { title: "Dinner", removed: "Gone" },
      "/lang/nl.json": { title: "Avondeten" },
    },
  });
  runtime.updateTranslations("/lang/en.json", { title: "Supper" });

  assert.equal(runtime.__("title"), "Supper");
  assert.equal(runtime.__("removed"), "removed");
  runtime.setLocale("nl");
  assert.equal(runtime.__("title"), "Avondeten");
});

test("injects a hot update listener into the entry", () => {
  const plugin = launchI18nPlugin(true);
  const result = plugin.transform("", "/app/resources/js/app.tsx");

  assert.match(result.code, /import\.meta\.hot\.on\("launch:i18n-update"/);
});

function hotUpdateContext(root) {
  const sent = [];
  const invalidated = [];

  return {
    sent,
    invalidated,
    context: {
      environment: {
        name: "client",
        config: { root },
        hot: { send: (payload) => sent.push(payload) },
        moduleGraph: { invalidateModule: (module) => invalidated.push(module) },
      },
    },
  };
}

function translationModule(root) {
  return {
    file: join(root, "lang/en.json"),
    importers: new Set([{ file: join(root, "resources/js/app.tsx") }]),
  };
}

test("sends changed translations instead of a full reload", () => {
  const root = mkdtempSync(join(tmpdir(), "launch-i18n-"));
  mkdirSync(join(root, "lang"));
  writeFileSync(join(root, "lang/en.json"), '{"title": "Supper"}');

  const plugin = launchI18nPlugin(true, { reloadEvent: "launch:php-update" });
  const module = translationModule(root);
  const { context, sent, invalidated } = hotUpdateContext(root);

  const result = plugin.hotUpdate.call(context, {
    file: module.file,
    modules: [module],
    timestamp: 1,
  });

  assert.deepEqual(result, []);
  assert.deepEqual(invalidated, [module]);
  assert.deepEqual(sent, [
    {
      type: "custom",
      event: "launch:i18n-update",
      data: { path: "/lang/en.json", translations: { title: "Supper" } },
    },
    { type: "custom", event: "launch:php-update", data: { file: module.file } },
  ]);
});

test("uses the glob key of a relative lang path", () => {
  const root = mkdtempSync(join(tmpdir(), "launch-i18n-"));
  mkdirSync(join(root, "lang"));
  writeFileSync(join(root, "lang/en.json"), "{}");

  const plugin = launchI18nPlugin({ langPath: "../../lang/*.json" });
  const module = translationModule(root);
  const { context, sent } = hotUpdateContext(root);

  plugin.hotUpdate.call(context, { file: module.file, modules: [module], timestamp: 1 });

  assert.equal(sent[0].data.path, "../../lang/en.json");
});

test("leaves broken and unrelated JSON to Vite", () => {
  const root = mkdtempSync(join(tmpdir(), "launch-i18n-"));
  mkdirSync(join(root, "lang"));
  writeFileSync(join(root, "lang/en.json"), "{");

  const plugin = launchI18nPlugin(true);
  const module = translationModule(root);
  const { context, sent } = hotUpdateContext(root);

  assert.equal(
    plugin.hotUpdate.call(context, { file: module.file, modules: [module], timestamp: 1 }),
    undefined,
  );

  const unrelated = { file: join(root, "data.json"), importers: new Set() };
  assert.equal(
    plugin.hotUpdate.call(context, { file: unrelated.file, modules: [unrelated], timestamp: 1 }),
    undefined,
  );
  assert.deepEqual(sent, []);
});
