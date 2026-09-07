import assert from "node:assert/strict";
import test from "node:test";
import { launchI18nPlugin } from "../src/vite/i18n-plugin.ts";

test("injects the configured locale and translation glob", () => {
    const plugin = launchI18nPlugin({
        locale: "nl",
        fallbackLocale: "en",
        langPath: "../../lang/*.json",
    });

    assert.equal(typeof plugin.transform, "function");

    const result = plugin.transform(
        "export const application = true;",
        "/app/resources/js/app.tsx",
    );

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
