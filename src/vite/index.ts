import { defineConfig, loadEnv } from "vite-plus";
import type { UserConfig } from "vite-plus";
import { getPlugins } from "./plugins.ts";
import type { LaunchConfigOptions } from "./types.ts";

export type { LaunchConfigOptions, CraftConfigOptions } from "./types.ts";
export { getPlugins } from "./plugins.ts";

/**
 * Create a complete Vite config for a Launch React app.
 *
 * Returns a Promise<UserConfig> — Vite's defineConfig supports async functions.
 * The async is needed because plugin imports resolve from the consumer's node_modules.
 *
 * @example
 * import { defineLaunchConfig } from '@nckrtl/launch-ui/vite';
 * export default defineLaunchConfig();
 */
export async function defineLaunchConfig(options: LaunchConfigOptions = {}) {
  const { lint, fmt, staged, ...launchOptions } = options;

  return defineConfig(
    async ({ mode }) =>
      ({
        ...(lint ? { lint } : {}),
        fmt: fmt ?? { ignorePatterns: [".agents/**"] },
        staged: staged ?? { "*": "vp check --fix", "*.php": "vendor/bin/pint" },
        plugins: await getPlugins(launchOptions, loadEnv(mode, process.cwd(), "")),
        server: {
          watch: {
            // Avoid vendor symlink loops and scanning generated runtime files.
            ignored: ["**/vendor/**", "**/storage/**", "**/bootstrap/cache/**"],
          },
        },
      }) as UserConfig,
  );
}

/**
 * @deprecated Use `defineLaunchConfig` instead.
 */
export const defineCraftConfig = defineLaunchConfig;
