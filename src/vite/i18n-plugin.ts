import { readFileSync } from "node:fs";
import { posix, sep } from "node:path";
import type { Plugin } from "vite-plus";
import type { LaunchConfigOptions } from "./types.ts";

const VIRTUAL_MODULE_ID = "virtual:launch-i18n";
const RESOLVED_VIRTUAL_MODULE_ID = "\0" + VIRTUAL_MODULE_ID;
const ENTRY_PATTERN = /resources\/js\/app\.(tsx|ts|jsx|js)$/;
const UPDATE_EVENT = "launch:i18n-update";

/**
 * The i18n runtime — a self-contained module.
 *
 * Exports:
 * - __()          — translate a key (plain function, works anywhere)
 * - setLocale()   — switch language + notify subscribers + persist
 * - getLocale()   — get current locale
 * - useLocale()   — React hook that re-renders on locale change
 * - initI18n()    — load translations (called automatically by the Vite plugin)
 * - updateTranslations() — replace one translation file (called on hot update)
 */
const I18N_RUNTIME = `
import { useSyncExternalStore } from "react";

let locale = "en";
let fallbackLocale = "en";
let version = 0;
const sources = {};
const messages = {};
const listeners = new Set();

function notify() { version++; listeners.forEach(fn => fn()); }

function rebuildMessages() {
    for (const lang of Object.keys(messages)) delete messages[lang];
    for (const [path, translations] of Object.entries(sources)) {
        const match = path.match(/\\/([a-z]{2}(?:[-_][a-zA-Z]+)?)\\.json$/);
        if (!match) continue;
        const lang = match[1].replace("-", "_");
        messages[lang] = { ...(messages[lang] || {}), ...translations };
    }
}

export function initI18n(options) {
    locale = options.locale ?? "en";
    fallbackLocale = options.fallbackLocale ?? "en";
    for (const [path, mod] of Object.entries(options.files)) {
        sources[path] = "default" in mod ? mod.default : mod;
    }
    rebuildMessages();
}

export function updateTranslations(path, translations) {
    sources[path] = translations;
    rebuildMessages();
    notify();
}

export function setLocale(lang) {
    locale = lang;
    if (typeof localStorage !== "undefined") localStorage.setItem("locale", lang);
    if (typeof document !== "undefined") {
        document.cookie = "locale=" + lang + ";path=/;SameSite=Lax;max-age=31536000";
        document.documentElement.setAttribute("lang", lang.replace("_", "-"));
    }
    notify();
}

export function getLocale() { return locale; }

export function useLocale() {
    useSyncExternalStore(
        (cb) => { listeners.add(cb); return () => listeners.delete(cb); },
        () => version,
        () => version,
    );
    return locale;
}

export function __(key, replacements) {
    const msg = messages[locale]?.[key] ?? messages[fallbackLocale]?.[key] ?? key;
    if (!replacements) return msg;
    return Object.entries(replacements).reduce((result, [param, value]) => {
        const str = String(value);
        return result
            .replace(new RegExp(":" + param, "g"), str)
            .replace(new RegExp(":" + param.charAt(0).toUpperCase() + param.slice(1), "g"), str.charAt(0).toUpperCase() + str.slice(1))
            .replace(new RegExp(":" + param.toUpperCase(), "g"), str.toUpperCase());
    }, msg);
}
`;

/**
 * Vite plugin that provides launch i18n:
 * 1. A virtual module "virtual:launch-i18n" with __, setLocale, getLocale, useLocale, initI18n
 * 2. An alias so "@nckrtl/launch-ui/i18n" (and legacy "@nckrtl/craft-ui-react/i18n") resolves to the virtual module
 * 3. Auto-injection of initI18n() into the app entry point
 * 4. Hot updates for translation files: the browser swaps in the new messages instead of
 *    reloading the page. With `reloadEvent`, the plugin also sends that event afterwards, so
 *    components that call __() without useLocale() render again.
 */
export function launchI18nPlugin(
  i18n: NonNullable<LaunchConfigOptions["i18n"]>,
  { reloadEvent }: { reloadEvent?: string } = {},
): Plugin {
  const opts = typeof i18n === "object" ? i18n : {};
  const locale = opts.locale ?? "en";
  const fallbackLocale = opts.fallbackLocale ?? "en";
  const langPath = opts.langPath ?? "/lang/*.json";

  const initCode = `
import { initI18n, updateTranslations as __launchUpdateTranslations } from "virtual:launch-i18n";
initI18n({
    locale: ${JSON.stringify(locale)},
    fallbackLocale: ${JSON.stringify(fallbackLocale)},
    files: import.meta.glob(${JSON.stringify(langPath)}, { eager: true }),
});
if (import.meta.hot) {
    import.meta.hot.on(${JSON.stringify(UPDATE_EVENT)}, ({ path, translations }) => {
        __launchUpdateTranslations(path, translations);
    });
}
`;

  return {
    name: "launch-i18n",
    enforce: "pre",

    config() {
      return {
        resolve: {
          alias: {
            "@nckrtl/launch-ui/i18n": VIRTUAL_MODULE_ID,
            "@nckrtl/craft-ui-react/i18n": VIRTUAL_MODULE_ID,
          },
        },
      };
    },

    resolveId(id) {
      if (
        id === VIRTUAL_MODULE_ID ||
        id === "virtual:craft-i18n" ||
        id === "@nckrtl/launch-ui/i18n" ||
        id === "@nckrtl/craft-ui-react/i18n"
      ) {
        return RESOLVED_VIRTUAL_MODULE_ID;
      }
    },

    load(id) {
      if (id === RESOLVED_VIRTUAL_MODULE_ID) {
        return I18N_RUNTIME;
      }
    },

    transform(code, id) {
      if (!id.match(ENTRY_PATTERN)) {
        return null;
      }
      return { code: initCode + code, map: null };
    },

    hotUpdate({ file, modules, timestamp }) {
      if (this.environment.name !== "client" || !file.endsWith(".json")) return;

      const entry = modules
        .flatMap((module) => [...module.importers])
        .find((importer) => importer.file && ENTRY_PATTERN.test(importer.file));
      if (!entry?.file) return;

      let translations: unknown;
      try {
        translations = JSON.parse(readFileSync(file, "utf-8"));
      } catch {
        // Let Vite report the broken file.
        return;
      }

      for (const module of modules) {
        this.environment.moduleGraph.invalidateModule(module, new Set(), timestamp, true);
      }

      const path = translationKey(file, entry.file, this.environment.config.root, langPath);
      this.environment.hot.send({
        type: "custom",
        event: UPDATE_EVENT,
        data: { path, translations },
      });
      if (reloadEvent) {
        this.environment.hot.send({ type: "custom", event: reloadEvent, data: { file } });
      }

      return [];
    },
  };
}

/** The key import.meta.glob gives the file, so the update replaces the right source. */
function translationKey(file: string, entry: string, root: string, langPath: string): string {
  const toPosix = (path: string) => path.split(sep).join("/");
  if (langPath.startsWith("/")) {
    return "/" + posix.relative(toPosix(root), toPosix(file));
  }
  const relative = posix.relative(posix.dirname(toPosix(entry)), toPosix(file));
  return relative.startsWith(".") ? relative : "./" + relative;
}

/**
 * @deprecated Use `launchI18nPlugin` instead.
 */
export const craftI18nPlugin = launchI18nPlugin;
