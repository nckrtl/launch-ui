import { defineConfig } from "vite-plus";
import type { UserConfig } from "vite-plus";
import { getPlugins } from "./plugins.ts";
import type { LaunchConfigOptions, CraftConfigOptions } from "./types.ts";

export type { LaunchConfigOptions, CraftConfigOptions } from "./types.ts";
export { getPlugins } from "./plugins.ts";

/**
 * Create a complete Vite config for a Launch React app.
 *
 * Returns a Promise<UserConfig> — Vite's defineConfig supports async functions.
 * The async is needed because plugin imports resolve from the consumer's node_modules.
 *
 * @example
 * import { defineLaunchConfig } from '@hardimpactdev/launch-ui/vite';
 * export default defineLaunchConfig();
 */
export async function defineLaunchConfig(options: LaunchConfigOptions = {}) {
    const { lint, staged, ...launchOptions } = options;
    const plugins = await getPlugins(launchOptions);

    return defineConfig(() => ({
        ...(lint ? { lint } : {}),
        staged: staged ?? { "*": "vp check --fix" },
        plugins,
        server: {
            watch: {
                // Laravel vendor/ can contain recursive symlinks (e.g.
                // orchestra/testbench-core laravel/vendor -> vendor) that crash
                // the dev watcher with ELOOP once a path-repo package is
                // symlinked in. vendor/ is never part of the Vite module graph.
                ignored: ["**/vendor/**"],
            },
        },
    } as UserConfig));
}

/**
 * @deprecated Use `defineLaunchConfig` instead.
 */
export const defineCraftConfig = defineLaunchConfig;
