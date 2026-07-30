"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { ASSETS } from "@/lib/constants";
import { FadeIn, useMotionReady } from "@/components/motion/fade-in";
import { GetStartedDialog } from "@/components/get-started-dialog";
import { LiveChatLink } from "@/components/layout/header";
import { cn } from "@/lib/utils";

export function LogoDesignHero() {
  const ready = useMotionReady();

  return (
    <section className="relative overflow-hidden bg-hero-bg">
      <div className="relative mx-auto grid max-w-[1320px] items-center gap-10 px-4 pt-[60px] pb-10 sm:px-6 md:px-8 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:pb-0 xl:pl-16 xl:pr-10">
        <div className="space-y-6 pb-6 lg:pb-16">
          <h1
            className={cn(
              "max-w-xl text-[32px] font-bold leading-[1.15] tracking-tight text-black transition-transform duration-700 sm:text-[44px] lg:text-[60px]",
              ready ? "translate-x-0" : "-translate-x-8",
            )}
          >
            Get a Professional Logo Designer for{" "}
            <span className="text-brand">$149</span> only
          </h1>

          <p
            className={cn(
              "max-w-lg pb-[10px] text-base leading-relaxed text-[#333] transition-transform delay-150 duration-700 md:text-lg",
              ready ? "translate-x-0" : "-translate-x-6",
            )}
          >
            Our logo designers craft a professional, bespoke, and
            customer-centric logo designs.
          </p>

          <div
            className={cn(
              "flex flex-wrap items-center gap-5 transition-transform delay-300 duration-700",
              ready ? "translate-y-0" : "translate-y-4",
            )}
          >
            <GetStartedDialog size="lg" />
            <LiveChatLink />
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <span className="text-sm font-medium">Excellent</span>
            <div className="flex items-center gap-0.5" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-star text-star" />
              ))}
            </div>
            <span className="text-sm text-muted">4.5 Star reviews</span>
          </div>
        </div>

        <FadeIn
          direction="right"
          delay={0.15}
          className="relative flex justify-center lg:justify-end"
        >
          <Image
            src={ASSETS.logoDesignHero}
            alt="Professional logo design showcase"
            width={592}
            height={568}
            className="h-auto w-full max-w-[480px] object-contain lg:max-w-none"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </FadeIn>
      </div>
    </section>
  );
}
