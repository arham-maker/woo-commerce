"use client";

import { Star } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/layout/container";
import { GetStartedDialog } from "@/components/get-started-dialog";
import { LiveChatLink } from "@/components/layout/header";

export function PricingHero() {
  return (
    <section className="bg-hero-bg pt-14 pb-16 md:pt-[60px] md:pb-20">
      <Container>
        <FadeIn className="mx-auto max-w-5xl text-center">
          <h1 className="mb-[15px] text-[32px] font-medium leading-[1.15] tracking-tight text-black md:text-[60px]">
            Affordable Plans. Exceptional Growth.
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-[#333] md:text-[19px]">
            Choose a pricing package that supports your marketing goals and
            drives long-term success.
          </p>

          <div className="mb-6 flex flex-wrap items-center justify-center gap-5">
            <GetStartedDialog size="lg" />
            <LiveChatLink />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-sm font-medium">Excellent</span>
            <div className="flex items-center gap-0.5" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-star text-star" />
              ))}
            </div>
            <span className="text-sm text-muted">4.5 Star reviews</span>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
