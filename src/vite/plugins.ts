import { existsSync, readFileSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { join } from "node:path";
import type { PluginOption, ViteDevServer } from "vite-plus";
import type { LaunchConfigOptions } from "./types.ts";
import { inertiaOptions, orbitDevServerUrl } from "./environment.ts";
import type { Environment } from "./environment.ts";

/**
 * Import a package from the consumer project's node_modules.
 * Reads the package's entry point from its package.json exports/main field,
 * then imports it via file:// URL for ESM compatibility.
 */
async function importFromConsumer(pkg: string) {
  const nodeModules = join(process.cwd(), "node_modules");

  // Handle subpath imports like "laravel-react-i18n/vite"
  const parts = pkg.startsWith("@")
    ? [pkg.split("/").slice(0, 2).join("/"), ...pkg.split("/").slice(2)]
    : pkg.split("/");

  const pkgName = parts[0];
  const subpath = parts.slice(1).join("/");

  if (subpath) {
    const filePath = join(nodeModules, pkgName, subpath);
    const resolved = existsSync(filePath) ? filePath : `${filePath}.js`;
    return import(pathToFileURL(resolved).href);
  }

  const pkgDir = join(nodeModules, pkgName);
  const pkgJson = JSON.parse(readFileSync(join(pkgDir, "package.json"), "utf-8"));
  const exports = pkgJson.exports?.["."];
  const entry =
    (typeof exports === "string" ? exports : (exports?.import ?? exports?.default)) ??
    pkgJson.module ??
    pkgJson.main ??
    "index.js";

  return import(pathToFileURL(join(pkgDir, entry)).href);
}

/**
 * Assemble all Vite plugins for the Launch React stack
 */
export async function getPlugins(
  options: LaunchConfigOptions,
  env: Environment = process.env,
): Promise<PluginOption[]> {
  const [{ default: laravel }, { default: react }, { default: tailwindcss }] = await Promise.all([
    importFromConsumer("laravel-vite-plugin"),
    importFromConsumer("@vitejs/plugin-react"),
    importFromConsumer("@tailwindcss/vite"),
  ]);

  const orbitUrl = orbitDevServerUrl(env);

  const plugins: PluginOption[] = [
    launchAliasPlugin(),
    laravel({
      input: options.laravel?.input ?? ["resources/js/app.tsx"],
      ssr: options.laravel?.ssr,
      refresh: options.laravel?.refresh ?? true,
      detectTls: options.laravel?.detectTls ?? (orbitUrl ? false : undefined),
    }),
    react(options.react),
    tailwindcss(),
  ];

  if (options.inertia !== false) {
    const { default: inertia } = await importFromConsumer("@inertiajs/vite");
    plugins.push(inertia(inertiaOptions(options.inertia, env)));
  }

  if (options.wayfinder !== false) {
    const { wayfinder } = await importFromConsumer("@laravel/vite-plugin-wayfinder");
    const wayfinderOptions = typeof options.wayfinder === "object" ? options.wayfinder : {};
    plugins.push(
      wayfinder({
        formVariants: true,
        ...wayfinderOptions,
      }),
    );
  }

  if (options.i18n) {
    const { launchI18nPlugin } = await import("./i18n-plugin.ts");
    plugins.push(launchI18nPlugin(options.i18n));
  }

  plugins.push(launchPublicDevServerUrlPlugin(env));

  const runners = await getArtisanRunners();
  if (runners) {
    plugins.push(runners);
  }

  if (options.plugins) {
    plugins.push(...options.plugins);
  }

  return plugins;
}

function launchAliasPlugin(): PluginOption {
  return {
    name: "launch:alias-fallback",
    config() {
      return {
        resolve: {
          alias: [
            {
              find: /^@nckrtl\/craft-ui-react\/vite$/,
              replacement: "@nckrtl/launch-ui/vite",
            },
            {
              find: /^@nckrtl\/craft-ui-react\/i18n$/,
              replacement: "@nckrtl/launch-ui/i18n",
            },
            {
              find: /^@nckrtl\/craft-ui-react\/(.*)$/,
              replacement: "@nckrtl/launch-ui/$1",
            },
          ],
        },
      };
    },
  };
}

export function launchPublicDevServerUrlPlugin(env: Environment): PluginOption {
  const orbitUrl = orbitDevServerUrl(env);
  return {
    name: "launch:public-dev-server-url",
    apply: "serve",
    config(config) {
      const publicUrl = orbitUrl ?? getPublicDevServerOrigin(env);

      if (!publicUrl) {
        return;
      }

      return {
        ...(orbitUrl ? { base: config.base ?? `${orbitUrl.pathname.replace(/\/$/, "")}/` } : {}),
        server: {
          ...(orbitUrl ? { origin: config.server?.origin ?? orbitUrl.origin } : {}),
          ws:
            config.server?.ws === false || config.server?.hmr === false
              ? false
              : {
                  host: publicUrl.hostname,
                  ...(orbitUrl
                    ? {
                        protocol: orbitUrl.protocol === "https:" ? "wss" : "ws",
                        clientPort: Number(
                          orbitUrl.port || (orbitUrl.protocol === "https:" ? 443 : 80),
                        ),
                        path: "hmr",
                      }
                    : {}),
                  ...(typeof config.server?.ws === "object" ? config.server.ws : {}),
                },
        },
      };
    },
    configureServer(server) {
      server.httpServer?.once("listening", () => {
        const preferredUrl = orbitUrl
          ? `${server.config.server.origin}${server.config.base}`
          : getPublicDevServerUrl(server);

        if (!preferredUrl || !server.resolvedUrls) {
          return;
        }

        server.resolvedUrls.local = preferUrl(server.resolvedUrls.local, preferredUrl);
      });
    },
  };
}

function getPublicDevServerUrl(server: ViteDevServer): string | null {
  const url = getPublicDevServerOrigin(server.config.env);

  if (!url) {
    return null;
  }

  const address = server.httpServer?.address();
  const port = address && typeof address !== "string" ? address.port : server.config.server.port;

  if (port) {
    url.port = String(port);
  }

  url.pathname = "/";
  url.search = "";
  url.hash = "";

  return url.toString();
}

function getPublicDevServerOrigin(env: Environment): URL | null {
  const rawOrigin = env.VITE_DEV_SERVER_ORIGIN ?? env.VITE_APP_URL ?? env.APP_URL;

  if (!rawOrigin) {
    return null;
  }

  try {
    const url = new URL(rawOrigin);

    return url.protocol === "http:" || url.protocol === "https:" ? url : null;
  } catch {
    return null;
  }
}

function preferUrl(urls: string[], preferredUrl: string): string[] {
  const preferredOrigin = new URL(preferredUrl).origin;

  return [
    preferredUrl,
    ...urls.filter((url) => {
      try {
        return new URL(url).origin !== preferredOrigin;
      } catch {
        return url !== preferredUrl;
      }
    }),
  ];
}

async function getArtisanRunners(): Promise<PluginOption | null> {
  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  try {
    const { run } = await importFromConsumer("vite-plugin-run");
    return run([
      {
        name: "waymaker",
        run: ["php", "artisan", "waymaker:generate"],
        pattern: ["app/**/Http/**/*.php"],
      },
      {
        name: "typescript",
        run: ["php", "artisan", "typescript:transform"],
        pattern: ["app/{Data,Enums}/**/*.php"],
      },
    ]);
  } catch {
    return null;
  }
}
