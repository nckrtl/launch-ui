import type { Plugin } from "vite-plus";

const VIRTUAL_MODULE_ID = "virtual:launch-agentation";
const RESOLVED_VIRTUAL_MODULE_ID = "\0" + VIRTUAL_MODULE_ID;

const AGENTATION_RUNTIME = `
function injectStyles() {
    if (document.getElementById("launch-agentation-styles") || document.getElementById("craft-agentation-styles")) return;
    const style = document.createElement("style");
    style.id = "launch-agentation-styles";
    style.textContent = \`
        [data-agentation-toolbar] { display: none !important; }
        [data-agentation-toolbar].agentation-visible { display: block !important; }
        #laravel-toolbar-shadow-host.toolbar-external-active {
            opacity: 0 !important;
            pointer-events: none !important;
            transition: opacity 0.15s ease;
        }
    \`;
    document.head.appendChild(style);
}

function syncCount(count) {
    window.dispatchEvent(
        new CustomEvent("toolbar:agentation:state", {
            detail: { annotationCount: count },
        }),
    );
}

function readAnnotationCount() {
    try {
        const key = "feedback-annotations-" + window.location.pathname;
        const stored = JSON.parse(localStorage.getItem(key) ?? "[]");
        return Array.isArray(stored) ? stored.length : 0;
    } catch {
        return 0;
    }
}

export function mountAgentation() {
    injectStyles();

    let count = readAnnotationCount();
    let loaded = false;

    // The runtime is heavy (agentation + a second react-dom root), so it only
    // loads once the toolbar proves it is on the page — via its request-state
    // event, or via its host element when the toolbar mounted first. Pages
    // without the toolbar (production visitors) never download it.
    function loadAgentation() {
        if (loaded) return;
        loaded = true;

        import("agentation").then(({ Agentation }) => {
            import("react-dom/client").then(({ createRoot }) => {
                import("react/jsx-runtime").then(({ jsx }) => {
                    const container = document.createElement("div");
                    container.id = "agentation-root";
                    document.body.appendChild(container);
                    createRoot(container).render(
                        jsx(Agentation, {
                            onAnnotationAdd: () => syncCount(++count),
                            onAnnotationDelete: () => syncCount(--count),
                            onAnnotationsClear: () => { count = 0; syncCount(0); },
                        }),
                    );
                });
            });
        });
    }

    window.addEventListener("toolbar:agentation:request-state", () => {
        syncCount(count);
        loadAgentation();
    });

    if (document.getElementById("laravel-toolbar-shadow-host")) {
        loadAgentation();
    }
}
`;

const INIT_CODE = `
import { mountAgentation } from "virtual:launch-agentation";
if (typeof window !== "undefined") {
    mountAgentation();
}
`;

/**
 * Vite plugin that provides Agentation integration:
 * 1. A virtual module with mountAgentation()
 * 2. An alias so "@hardimpactdev/launch-ui/agentation" (and legacy "@hardimpactdev/craft-ui-react/agentation") resolves to it
 * 3. Auto-injection of mountAgentation() into the app entry point. The
 *    injected code is a lightweight listener; the agentation runtime itself
 *    is only downloaded when the laravel-toolbar is present on the page.
 */
export function launchAgentationPlugin(): Plugin {
    return {
        name: "launch-agentation",
        enforce: "pre",

        config() {
            return {
                resolve: {
                    alias: {
                        "@hardimpactdev/launch-ui/agentation": VIRTUAL_MODULE_ID,
                        "@hardimpactdev/craft-ui-react/agentation": VIRTUAL_MODULE_ID,
                    },
                },
            };
        },

        resolveId(id) {
            if (
                id === VIRTUAL_MODULE_ID ||
                id === "virtual:craft-agentation" ||
                id === "@hardimpactdev/launch-ui/agentation" ||
                id === "@hardimpactdev/craft-ui-react/agentation"
            ) {
                return RESOLVED_VIRTUAL_MODULE_ID;
            }
        },

        load(id) {
            if (id === RESOLVED_VIRTUAL_MODULE_ID) {
                return AGENTATION_RUNTIME;
            }
        },

        transform(code, id) {
            if (!id.match(/resources\/js\/app\.(tsx|ts|jsx|js)$/)) {
                return null;
            }
            return { code: INIT_CODE + code, map: null };
        },
    };
}

/**
 * @deprecated Use `launchAgentationPlugin` instead.
 */
export const craftAgentationPlugin = launchAgentationPlugin;
