"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  keepLauncherVisible,
  openLiveChat,
  waitForZE,
  LP2_CHAT_LABELS,
} from "@/lib/zendesk";

function isLp2Path(pathname: string | null) {
  if (!pathname) return false;
  return pathname === "/lp2" || pathname.startsWith("/lp2/");
}

function textMatchesLp2Trigger(text: string) {
  const normalized = text.replace(/\s+/g, " ").trim().toLowerCase();
  if (!normalized) return false;
  return LP2_CHAT_LABELS.some(
    (label) => normalized === label || normalized.includes(label),
  );
}

function setupWidgetListeners() {
  if (typeof window.zE !== "function") return;

  window.zE("webWidget:on", "close", () => {
    keepLauncherVisible();
  });

  window.zE("webWidget:on", "userEvent", (event: unknown) => {
    const action =
      typeof event === "object" &&
      event !== null &&
      "action" in event &&
      typeof (event as { action?: unknown }).action === "string"
        ? (event as { action: string }).action.toLowerCase()
        : "";

    if (
      action.includes("minimised") ||
      action.includes("minimized") ||
      action.includes("web widget closed")
    ) {
      keepLauncherVisible();
    }
  });

  window.zE("webWidget:on", "chat:unreadMessages", (count: unknown) => {
    const unread = typeof count === "number" ? count : Number(count);
    if (unread > 0) {
      void openLiveChat();
    }
  });
}

/** Client-side Zendesk behaviors (auto-open, reopen, CTA interceptors). */
export function ZendeskWidget() {
  const pathname = usePathname();
  const listenersReady = useRef(false);
  const autoOpenStarted = useRef(false);

  useEffect(() => {
    let cancelled = false;
    let autoOpenTimer: number | undefined;

    void waitForZE()
      .then((zE) => {
        if (cancelled) return;

        if (!listenersReady.current) {
          setupWidgetListeners();
          listenersReady.current = true;
        }

        if (!autoOpenStarted.current) {
          autoOpenStarted.current = true;
          autoOpenTimer = window.setTimeout(() => {
            if (cancelled) return;
            zE("webWidget", "show");
            zE("webWidget", "open");
          }, 2000);
        }
      })
      .catch((error) => {
        console.error("[zendesk] widget init failed", error);
      });

    return () => {
      cancelled = true;
      if (autoOpenTimer) window.clearTimeout(autoOpenTimer);
    };
  }, []);

  // Site-wide: .open-livechat buttons
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const trigger = target.closest(".open-livechat");
      if (!trigger) return;
      event.preventDefault();
      void openLiveChat();
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // /lp2 only: label / title / #testimonals interceptor
  useEffect(() => {
    if (!isLp2Path(pathname)) return;

    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      if (target.closest(".open-livechat")) return;

      const clickable = target.closest(
        "a, button, [role='button'], [title='Live Chat'], #testimonals, [href='#testimonals']",
      );
      if (!clickable) return;

      const title = clickable.getAttribute("title") || "";
      const id = clickable.id || "";
      const href = clickable.getAttribute("href") || "";
      const text = (clickable.textContent || "").trim();

      const shouldOpen =
        title === "Live Chat" ||
        id === "testimonals" ||
        href === "#testimonals" ||
        textMatchesLp2Trigger(text);

      if (!shouldOpen) return;

      event.preventDefault();
      void openLiveChat();
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [pathname]);

  return null;
}
