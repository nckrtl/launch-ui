import type { PluginOption } from "vite-plus";

/**
 * Options for defineLaunchConfig
 *
 * Each inner plugin's options are exposed as a top-level key.
 * Pass `false` to disable a plugin entirely.
 */
export interface LaunchConfigOptions {
  /** Laravel Vite plugin options */
  laravel?: {
    input?: string[];
    /** Files that reload the page. Defaults to `resources/views/**` when `phpReload` is on. */
    refresh?: boolean | string | string[];
    ssr?: string;
    detectTls?: string | boolean;
  };

  /** @inertiajs/vite plugin options, or `false` to disable */
  inertia?:
    | false
    | {
        ssr?: false | { entry?: string; port?: number };
      };

  /** @vitejs/plugin-react options */
  react?: {
    babel?: {
      plugins?: string[];
    };
  };

  /** @laravel/vite-plugin-wayfinder options, or `false` to disable */
  wayfinder?:
    | false
    | {
        formVariants?: boolean;
      };

  /**
   * Refresh Inertia props when a PHP file changes, instead of reloading the page.
   * Applies to the dev server when Inertia is enabled. Blade files still reload the page.
   * Default: true.
   */
  phpReload?: boolean;

  /**
   * Enable i18n support. When true, injects initI18n() into app entry.
   * The __ function becomes available via: import { __ } from '@nckrtl/launch-ui/i18n'
   */
  i18n?:
    | boolean
    | {
        /** Active locale (default: "en") */
        locale?: string;
        /** Fallback locale (default: "en") */
        fallbackLocale?: string;
        /** Glob pattern for lang files (default: "/lang/*.json") */
        langPath?: string;
      };

  /** Additional Vite plugins to include */
  plugins?: PluginOption[];

  /** VitePlus lint options — passed through to defineConfig */
  lint?: {
    options?: {
      typeAware?: boolean;
      typeCheck?: boolean;
    };
  };

  /** Formatting options, including an override for the default .agents exclusion. */
  fmt?: {
    ignorePatterns?: string[];
  };

  /**
   * VitePlus staged command map for pre-commit hooks. Keys are glob patterns,
   * values are the shell command to run on matching staged files. Defaults
   * to VitePlus formatting plus Pint for PHP files — override to customize.
   */
  staged?: Record<string, string>;
}

/**
 * @deprecated Use `LaunchConfigOptions` instead.
 */
export type CraftConfigOptions = LaunchConfigOptions;
