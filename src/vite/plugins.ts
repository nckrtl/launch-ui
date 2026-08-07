import { existsSync, readFileSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { join } from "node:path";
import type { PluginOption, ViteDevServer } from "vite-plus";
import type { LaunchConfigOptions } from "./types.ts";

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
        (typeof exports === "string" ? exports : exports?.import ?? exports?.default)
        ?? pkgJson.module
        ?? pkgJson.main
        ?? "index.js";

    return import(pathToFileURL(join(pkgDir, entry)).href);
}

/**
 * Assemble all Vite plugins for the Launch React stack
 */
export async function getPlugins(
    options: LaunchConfigOptions,
): Promise<PluginOption[]> {
    const [
        { default: laravel },
        { default: react },
        { default: tailwindcss },
    ] = await Promise.all([
        importFromConsumer("laravel-vite-plugin"),
        importFromConsumer("@vitejs/plugin-react"),
        importFromConsumer("@tailwindcss/vite"),
    ]);

    // When VITE_APP_URL is set we are running behind orbit's dev proxy with
    // an orbit-issued TLS cert (VITE_DEV_SERVER_KEY/CERT). Disable
    // laravel-vite-plugin's Herd/Valet auto-detection so it does not bind the
    // dev server to an unrelated valet host (e.g. <app>.beast) and emit asset /
    // HMR URLs the app's CSP — scoped to the orbit domain — would block.
    const runningBehindProxy =
        typeof process.env.VITE_APP_URL === "string" &&
        process.env.VITE_APP_URL !== "";

    const plugins: PluginOption[] = [
        launchAliasPlugin(),
        laravel({
            input: options.laravel?.input ?? ["resources/js/app.tsx"],
            ssr: options.laravel?.ssr,
            refresh: options.laravel?.refresh ?? true,
            ...(runningBehindProxy ? { detectTls: false } : {}),
        }),
        react(options.react),
        tailwindcss(),
    ];

    if (options.inertia !== false) {
        const { default: inertia } = await importFromConsumer("@inertiajs/vite");
        plugins.push(
            inertia(
                typeof options.inertia === "object" ? options.inertia : undefined,
            ),
        );
    }

    if (options.wayfinder !== false) {
        const { wayfinder } = await importFromConsumer(
            "@laravel/vite-plugin-wayfinder",
        );
        const wayfinderOptions =
            typeof options.wayfinder === "object" ? options.wayfinder : {};
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

    if (options.agentation !== false) {
        const { launchAgentationPlugin } = await import("./agentation-plugin.ts");
        plugins.push(launchAgentationPlugin());
    }

    plugins.push(launchPublicDevServerUrlPlugin());

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
                            find: /^@nckrtl\/craft-ui-react\/agentation$/,
                            replacement: "@nckrtl/launch-ui/agentation",
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

function launchPublicDevServerUrlPlugin(): PluginOption {
    return {
        name: "launch:public-dev-server-url",
        apply: "serve",
        configureServer(server) {
            server.httpServer?.once("listening", () => {
                const preferredUrl = getPublicDevServerUrl(server);

                if (!preferredUrl || !server.resolvedUrls) {
                    return;
                }

                server.resolvedUrls.local = preferUrl(
                    server.resolvedUrls.local,
                    preferredUrl,
                );
            });
        },
    };
}

function getPublicDevServerUrl(server: ViteDevServer): string | null {
    const rawOrigin =
        server.config.env.VITE_DEV_SERVER_ORIGIN
        ?? server.config.env.VITE_APP_URL
        ?? server.config.env.APP_URL;

    if (typeof rawOrigin !== "string" || rawOrigin === "") {
        return null;
    }

    try {
        const url = new URL(rawOrigin);

        if (url.protocol !== "http:" && url.protocol !== "https:") {
            return null;
        }

        const address = server.httpServer?.address();
        const port =
            address && typeof address !== "string"
                ? address.port
                : server.config.server.port;

        if (port) {
            url.port = String(port);
        }

        url.pathname = "/";
        url.search = "";
        url.hash = "";

        return url.toString();
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
