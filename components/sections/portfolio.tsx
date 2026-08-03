"use client";

import { useEffect, useRef } from "react";
import { ASSETS } from "@/lib/constants";
import { FadeIn } from "@/components/motion/fade-in";
import {
  Container,
  SectionLead,
  SectionTitle,
} from "@/components/layout/container";
import { cn } from "@/lib/utils";

/** Matches live site row order (gallery videos repeated across two scroll rows). */
const portfolioRows = [
  [
    ASSETS.gallery[0],
    ASSETS.gallery[1],
    ASSETS.gallery[2],
    ASSETS.gallery[0],
    ASSETS.gallery[1],
    ASSETS.gallery[2],
  ],
  [
    ASSETS.gallery[3],
    ASSETS.gallery[4],
    ASSETS.gallery[5],
    ASSETS.gallery[6],
    ASSETS.gallery[3],
    ASSETS.gallery[4],
    ASSETS.gallery[5],
    ASSETS.gallery[6],
  ],
];

/** Mirrors live site scrollable.js: edge proximity → horizontal scroll velocity. */
const EDGE_THRESHOLD = 300;
const MAX_VELOCITY = 10;

function useScrollOnHover(enabled = true) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;

    let velocity = 0;
    let rafId = 0;
    let active = true;

    const tick = () => {
      if (!active) return;
      if (velocity !== 0) el.scrollLeft += velocity;
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    const onMove = (e: MouseEvent) => {
      if (window.matchMedia("(max-width: 767px)").matches) {
        velocity = 0;
        return;
      }
      const left = e.clientX;
      const right = document.documentElement.clientWidth - e.clientX;

      if (left < EDGE_THRESHOLD) {
        velocity = ((EDGE_THRESHOLD - left) / EDGE_THRESHOLD) * -MAX_VELOCITY;
      } else if (right < EDGE_THRESHOLD) {
        velocity = ((EDGE_THRESHOLD - right) / EDGE_THRESHOLD) * MAX_VELOCITY;
      } else {
        velocity = 0;
      }
    };

    const onLeave = () => {
      velocity = 0;
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);

    // Center middle card like live site
    const center = () => {
      const track = el.firstElementChild as HTMLElement | null;
      if (!track) return;
      const cards = track.children;
      if (cards.length < 2) return;
      const mid = Math.round(cards.length / 2) - 1;
      const midEl = cards[mid] as HTMLElement;
      const cardW = (cards[0] as HTMLElement).clientWidth;
      el.scrollLeft = midEl.offsetLeft - (window.innerWidth - cardW) / 2;
    };
    center();
    window.addEventListener("resize", center);

    return () => {
      active = false;
      cancelAnimationFrame(rafId);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", center);
    };
  }, [enabled]);

  return ref;
}

function PortfolioCard({ src, index }: { src: string; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div
      className={cn(
        "relative w-[min(468px,33.33vw)] shrink-0 overflow-hidden bg-white",
        "shadow-[0_7px_21px_rgba(0,0,0,0.1)] transition-shadow duration-300",
        "hover:shadow-[0_14px_42px_rgba(0,0,0,0.2)]",
      )}
      onMouseOver={() => {
        const video = videoRef.current;
        if (!video) return;
        void video.play().catch(() => {});
      }}
      onMouseOut={() => {
        videoRef.current?.pause();
      }}
    >
      <video
        ref={videoRef}
        muted
        playsInline
        loop
        preload="metadata"
        className="block h-auto w-full"
        aria-label={`WooCommerce project ${index + 1}`}
      >
        <source src={src} type="video/webm" />
        <source src={src.replace(".webm", ".mp4")} type="video/mp4" />
      </video>
    </div>
  );
}

function PortfolioRow({
  items,
  rowIndex,
}: {
  items: string[];
  rowIndex: number;
}) {
  const scrollRef = useScrollOnHover();

  return (
    <div
      ref={scrollRef}
      className="overflow-x-auto overflow-y-hidden scrollbar-none [&::-webkit-scrollbar]:hidden"
    >
      <div className="flex w-max gap-3 px-3 pb-1 pt-2 md:gap-4 md:px-4">
        {items.map((src, i) => (
          <PortfolioCard
            key={`${rowIndex}-${src}-${i}`}
            src={src}
            index={rowIndex * 10 + i}
          />
        ))}
      </div>
    </div>
  );
}

type PortfolioProps = {
  lead?: string;
};

export function Portfolio({
  lead = "WooCommerce Web is dedicated to making your online store a beacon of sales and success. Our talented developers use the latest technological advancements to achieve this transformation.",
}: PortfolioProps) {
  return (
    <section id="portfolio" className="bg-white py-10 sm:py-16 md:py-24">
      <Container>
        <FadeIn className="mx-auto mb-3 max-w-4xl text-center sm:mb-4">
          <SectionTitle>Some WooCommerce Websites Developed by us</SectionTitle>
        </FadeIn>
        <FadeIn delay={0.1} className="mx-auto mb-8 max-w-4xl text-center sm:mb-10 md:mb-12 ">
          <SectionLead>{lead}</SectionLead>
        </FadeIn>
      </Container>

      <FadeIn delay={0.15} className="space-y-3 md:space-y-4">
        {portfolioRows.map((row, rowIndex) => (
          <PortfolioRow key={rowIndex} items={row} rowIndex={rowIndex} />
        ))}
      </FadeIn>
    </section>
  );
}
