export const ZENDESK_SNIPPET_KEY = "923e51fa-97d5-49a2-9055-0fb23e466aba";
export const ZENDESK_SNIPPET_SRC = `https://static.zdassets.com/ekr/snippet.js?key=${ZENDESK_SNIPPET_KEY}`;

declare global {
  interface Window {
    zE?: (...args: unknown[]) => void;
    zESettings?: {
      webWidget: {
        zIndex: number;
        offset: { horizontal: string; vertical: string };
      };
    };
  }
}

export function waitForZE(timeoutMs = 15_000): Promise<(...args: unknown[]) => void> {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined") {
      reject(new Error("zE is only available in the browser"));
      return;
    }

    if (typeof window.zE === "function") {
      resolve(window.zE);
      return;
    }

    const started = Date.now();
    const timer = window.setInterval(() => {
      if (typeof window.zE === "function") {
        window.clearInterval(timer);
        resolve(window.zE);
        return;
      }
      if (Date.now() - started >= timeoutMs) {
        window.clearInterval(timer);
        reject(new Error("Zendesk widget did not load in time"));
      }
    }, 100);
  });
}

/** Opens the Zendesk web widget (show + open). */
export async function openLiveChat() {
  try {
    const zE = await waitForZE();
    zE("webWidget", "show");
    zE("webWidget", "open");
  } catch (error) {
    console.error("[zendesk] openLiveChat failed", error);
  }
}

export function keepLauncherVisible() {
  if (typeof window.zE !== "function") return;
  window.zE("webWidget", "show");
  window.setTimeout(() => {
    if (typeof window.zE === "function") {
      window.zE("webWidget", "show");
    }
  }, 150);
}

export const LP2_CHAT_LABELS = [
  "live chat",
  "free consultation",
  "consult an expert",
  "get in touch",
] as const;
