"use client";

import Image from "next/image";
import { ASSETS } from "@/lib/constants";
import { FadeIn } from "@/components/motion/fade-in";

export function Clients({ image = ASSETS.clients }: { image?: string }) {
  return (
    <section id="downsection" className="scroll-mt-24 border-b border-border bg-white">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center gap-3 px-4 py-4 sm:gap-6 sm:px-6 sm:py-8 md:flex-row md:gap-8 md:px-8 md:py-10">
        <FadeIn direction="left" className="shrink-0">
          <h2 className="text-center text-sm font-semibold sm:text-base md:max-w-[180px] md:text-left md:text-xl">
            Our Verifiable Genuine Clients
          </h2>
        </FadeIn>
        <FadeIn direction="right" delay={0.15} className="w-full flex-1">
          <Image
            src={image}
            alt="Client logos including Uplyft Capital, grokio, Movie Showdown, Scentlab, and Zorko"
            width={844}
            height={43}
            className="h-auto w-full object-contain"
          />
        </FadeIn>
      </div>
    </section>
  );
}
