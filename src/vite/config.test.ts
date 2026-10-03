import { mkdtemp, mkdir, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vite-plus/test";
import { createServer, resolveConfig } from "vite-plus";
import { defineLaunchConfig } from "./index.ts";
import { inertiaOptions } from "./environment.ts";
import { getPlugins, launchPublicDevServerUrlPlugin } from "./plugins.ts";

const orbitEnv = {
  ORBIT_DEV_SERVER_ORIGIN: "https://commander.test/__orbit/vite",
};
const temporaryDirectories: string[] = [];

afterEach(async () => {
  await Promise.all(
    temporaryDirectories
      .splice(0)
      .map((directory) => rm(directory, { recursive: true, force: true })),
  );
});

describe("Orbit development server", () => {
  it("uses the public proxy for assets and WebSockets without changing the bind address", async () => {
    const config = await resolveConfig(
      {
        configFile: false,
        plugins: await getPlugins({ inertia: false, wayfinder: false }, orbitEnv),
        server: { host: "127.0.0.1", port: 5173 },
      },
      "serve",
    );

    expect(config.base).toBe("/__orbit/vite/");
    expect(config.server.origin + config.base.replace(/\/$/, "")).toBe(
      orbitEnv.ORBIT_DEV_SERVER_ORIGIN,
    );
    expect(config.server.host).toBe("127.0.0.1");
    expect(config.server.port).toBe(5173);
    expect(config.server.ws).toMatchObject({
      host: "commander.test",
      protocol: "wss",
      clientPort: 443,
      path: "hmr",
    });
  });

  it("supports HTTP and custom public ports", async () => {
    const config = await resolveConfig(
      {
        configFile: false,
        plugins: [
          launchPublicDevServerUrlPlugin({
            ORBIT_DEV_SERVER_ORIGIN: "http://app.test:8080/assets/",
          }),
        ],
      },
      "serve",
    );

    expect(config.base).toBe("/assets/");
    expect(config.server.origin).toBe("http://app.test:8080");
    expect(config.server.ws).toMatchObject({ protocol: "ws", clientPort: 8080 });
  });

  it("preserves explicit overrides", async () => {
    const config = await resolveConfig(
      {
        configFile: false,
        plugins: [launchPublicDevServerUrlPlugin(orbitEnv)],
        base: "/custom/",
        server: {
          origin: "https://assets.test",
          ws: { host: "ws.test", clientPort: 8443, path: "updates" },
        },
      },
      "serve",
    );

    expect(config.base).toBe("/custom/");
    expect(config.server.origin).toBe("https://assets.test");
    expect(config.server.ws).toMatchObject({ host: "ws.test", clientPort: 8443, path: "updates" });
  });

  it.each(["hmr", "ws"] as const)("respects disabled %s", async (option) => {
    const config = await resolveConfig(
      {
        configFile: false,
        plugins: [launchPublicDevServerUrlPlugin(orbitEnv)],
        server: { [option]: false },
      },
      "serve",
    );

    expect(config.server.ws).toBe(false);
  });

  it("keeps direct local development free of Orbit proxy settings", async () => {
    const config = await resolveConfig(
      {
        configFile: false,
        plugins: [
          launchPublicDevServerUrlPlugin({
            APP_URL: "https://app.test",
            VITE_APP_URL: "https://app.test",
          }),
        ],
      },
      "serve",
    );

    expect(config.base).toBe("/");
    expect(config.server.origin).toBeUndefined();
    expect(config.server.host).toBeUndefined();
    expect(config.server.ws).toMatchObject({ host: "app.test" });
    expect(config.server.ws).not.toHaveProperty("clientPort");
  });

  it("does not change production asset paths", async () => {
    const config = await resolveConfig(
      {
        configFile: false,
        plugins: [launchPublicDevServerUrlPlugin(orbitEnv)],
        base: "/build/",
      },
      "build",
    );

    expect(config.base).toBe("/build/");
    expect(config.server.origin).toBeUndefined();
  });

  it("rejects a non-HTTP Orbit URL", () => {
    expect(() =>
      launchPublicDevServerUrlPlugin({ ORBIT_DEV_SERVER_ORIGIN: "file:///tmp/assets" }),
    ).toThrow("HTTP or HTTPS");
  });

  it("displays the public proxy URL without the internal port", async () => {
    const directory = await mkdtemp(join(tmpdir(), "launch-vite-"));
    temporaryDirectories.push(directory);
    const server = await createServer({
      configFile: false,
      root: directory,
      plugins: [launchPublicDevServerUrlPlugin(orbitEnv)],
      server: { host: "127.0.0.1", port: 0 },
    });

    try {
      await server.listen();
      expect(server.resolvedUrls?.local[0]).toBe("https://commander.test/__orbit/vite/");
    } finally {
      await server.close();
    }
  });
});

describe("SSR port", () => {
  it("uses the instance port while preserving the custom entry", () => {
    expect(
      inertiaOptions({ ssr: { entry: "resources/js/ssr.tsx" } }, { INERTIA_SSR_PORT: "13729" }),
    ).toEqual({ ssr: { entry: "resources/js/ssr.tsx", port: 13729 } });
  });

  it("lets explicit options override the environment", () => {
    expect(inertiaOptions({ ssr: { port: 14000 } }, { INERTIA_SSR_PORT: "13729" })).toEqual({
      ssr: { port: 14000 },
    });
  });

  it("preserves the upstream default and disabled SSR", () => {
    expect(inertiaOptions(undefined, {})).toBeUndefined();
    expect(inertiaOptions({ ssr: false }, { INERTIA_SSR_PORT: "invalid" })).toEqual({ ssr: false });
  });

  it.each(["invalid", "0", "65536", "13719.5", " "])(
    "rejects an invalid environment port: %s",
    (port) => {
      expect(() => inertiaOptions(undefined, { INERTIA_SSR_PORT: port })).toThrow(
        "INERTIA_SSR_PORT",
      );
    },
  );
});

describe("Launch defaults", () => {
  it("provides formatting and PHP hooks with explicit overrides", async () => {
    const defaults = await (
      await defineLaunchConfig({ inertia: false, wayfinder: false })
    )({ command: "serve", mode: "development" });
    expect(defaults).toMatchObject({
      fmt: { ignorePatterns: [".agents/**"] },
      staged: { "*": "vp check --fix", "*.php": "vendor/bin/pint" },
    });

    const custom = await (
      await defineLaunchConfig({
        inertia: false,
        wayfinder: false,
        fmt: { ignorePatterns: [] },
        staged: {},
      })
    )({ command: "serve", mode: "development" });
    expect(custom).toMatchObject({ fmt: { ignorePatterns: [] }, staged: {} });
  });

  it("watches source files while excluding caches, profiles, and vendor", async () => {
    const directory = await mkdtemp(join(tmpdir(), "launch-watch-"));
    temporaryDirectories.push(directory);
    for (const folder of [
      "resources/js",
      "storage/framework/cache",
      "storage/inertia-devtools",
      "bootstrap/cache",
      "vendor/package",
    ]) {
      await mkdir(join(directory, folder), { recursive: true });
      await writeFile(join(directory, folder, "fixture.txt"), "fixture");
    }

    const defaults = await (
      await defineLaunchConfig({ inertia: false, wayfinder: false })
    )({ command: "serve", mode: "development" });
    const server = await createServer({
      configFile: false,
      root: directory,
      server: { ...defaults.server, middlewareMode: true },
    });
    try {
      await expect
        .poll(() => Object.keys(server.watcher.getWatched()))
        .toContain(join(directory, "resources/js"));
      const watched = Object.keys(server.watcher.getWatched());
      expect(watched).toContain(join(directory, "resources/js"));
      expect(watched.some((path) => /\/(storage|vendor|bootstrap\/cache)(\/|$)/.test(path))).toBe(
        false,
      );
    } finally {
      await server.close();
    }
  });
});
