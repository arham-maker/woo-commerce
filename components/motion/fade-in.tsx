"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Ensures client-only effects run after hydration. */
export function useMotionReady() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);
  return ready;
}

function useInViewOnce(margin = "0px 0px -60px 0px") {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || inView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: margin, threshold: 0.12 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [inView, margin]);

  return { ref, inView };
}

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
};

const hiddenTransforms = {
  up: "translate-y-8",
  down: "-translate-y-8",
  left: "translate-x-10",
  right: "-translate-x-10",
  none: "",
};

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
}: FadeInProps) {
  const { ref, inView } = useInViewOnce();

  return (
    <div
      ref={ref}
      className={cn(
        "transition-transform duration-700 ease-out will-change-transform",
        inView ? "translate-x-0 translate-y-0" : hiddenTransforms[direction],
        className,
      )}
      style={{ transitionDelay: `${delay * 1000}ms` }}
    >
      {children}
    </div>
  );
}

export function Stagger({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInViewOnce();

  return (
    <div
      ref={ref}
      className={className}
      data-inview={inView ? "true" : "false"}
      style={{ ["--stagger-delay" as string]: `${delay * 1000}ms` }}
    >
      {children}
    </div>
  );
}

export function StaggerItem({
  children,
  className,
  index = 0,
}: {
  children: ReactNode;
  className?: string;
  index?: number;
}) {
  return (
    <div
      className={cn(
        "translate-y-8 transition-transform duration-700 ease-out will-change-transform [[data-inview=true]_&]:translate-y-0",
        className,
      )}
      style={{ transitionDelay: `calc(var(--stagger-delay, 0ms) + ${index * 100}ms)` }}
    >
      {children}
    </div>
  );
}
