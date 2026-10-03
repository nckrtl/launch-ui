import type { LaunchConfigOptions } from "./types.ts";

export type Environment = Record<string, string | undefined>;

export function orbitDevServerUrl(env: Environment): URL | null {
  const origin = env.ORBIT_DEV_SERVER_ORIGIN;

  if (!origin) {
    return null;
  }

  const url = new URL(origin);

  if (url.protocol !== "http:" && url.protocol !== "https:") {
    throw new Error("ORBIT_DEV_SERVER_ORIGIN must be an HTTP or HTTPS URL.");
  }

  return url;
}

export function inertiaOptions(
  options: LaunchConfigOptions["inertia"],
  env: Environment,
): Exclude<LaunchConfigOptions["inertia"], false> {
  if (options === false || options?.ssr === false) {
    return options === false ? undefined : options;
  }

  // Explicit options win; otherwise preserve Inertia's default when no env port is set.
  if (options?.ssr?.port !== undefined || !env.INERTIA_SSR_PORT) {
    return options;
  }

  const port = Number(env.INERTIA_SSR_PORT);

  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error("INERTIA_SSR_PORT must be an integer between 1 and 65535.");
  }

  return { ...options, ssr: { ...options?.ssr, port } };
}
