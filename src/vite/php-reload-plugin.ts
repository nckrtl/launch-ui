import { isCSSRequest } from "vite-plus";
import type { Plugin } from "vite-plus";

const EVENT = "launch:php-update";

/** Batches the reloads when one save touches several PHP files. */
const RELOAD_DELAY_MS = 50;

const CLIENT_CODE = `
import { router as __launchRouter } from "@inertiajs/react";

if (import.meta.hot) {
  let __launchReloadTimer;
  import.meta.hot.on(${JSON.stringify(EVENT)}, () => {
    clearTimeout(__launchReloadTimer);
    __launchReloadTimer = setTimeout(() => __launchRouter.reload(), ${RELOAD_DELAY_MS});
  });
}
`;

/**
 * Vite plugin that refreshes Inertia props when PHP changes, instead of reloading the page.
 *
 * Tailwind scans PHP files for classes and sends a full reload when one changes. This plugin
 * runs first: it keeps the Tailwind CSS update, drops the full reload, and tells the browser
 * to call `router.reload()`, which keeps scroll position and component state.
 *
 * Blade files still reload the page, because the root view is outside Inertia's props.
 */
export function launchPhpReloadPlugin(entries: string[]): Plugin {
  const entryPaths = entries.map((entry) => `/${entry.replace(/^\.?\//, "")}`);

  return {
    name: "launch:php-reload",
    apply: "serve",
    enforce: "pre",

    transform(code, id) {
      if (!entryPaths.some((entry) => id.endsWith(entry)) || isCSSRequest(id)) {
        return null;
      }
      return { code: code + CLIENT_CODE, map: null };
    },

    hotUpdate({ file, modules }) {
      if (!file.endsWith(".php") || file.endsWith(".blade.php")) {
        return;
      }

      if (this.environment.name === "client") {
        this.environment.hot.send({ type: "custom", event: EVENT, data: { file } });
      }

      // Tailwind watches PHP files from its stylesheets, so those stylesheets import them.
      return modules.flatMap((module) =>
        [...module.importers].filter((importer) => importer.id && isCSSRequest(importer.id)),
      );
    },
  };
}
