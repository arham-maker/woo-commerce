"use client";

import Image from "next/image";
import { ASSETS } from "@/lib/constants";
import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/layout/container";

export function DomainHostingBadges() {
  return (
    <section className="bg-[#333] py-10 md:py-20">
      <Container>
        <FadeIn className="mx-auto mb-8 max-w-3xl px-5 text-center md:mb-12">
          <h2 className="mb-5 text-[28px] font-medium leading-[1.15] tracking-tight text-white md:mb-5 md:text-[40px] lg:text-[44px]">
            Top-Rated Web Hosting Services
          </h2>
          <p className="text-base leading-relaxed text-white md:text-lg">
            Need help with your website? Get expert assistance via live chat or
            email.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <ul className="flex flex-wrap items-center justify-around gap-5 md:gap-10 lg:gap-[70px]">
            {ASSETS.domainHostingBadges.map((src, i) => (
              <li key={src} className="flex shrink-0 items-center justify-center">
                <Image
                  src={src}
                  alt={`Hosting partner badge ${i + 1}`}
                  width={251}
                  height={135}
                  className="h-auto w-[110px] object-contain sm:w-[160px] md:w-[200px] lg:w-[236px]"
                  sizes="(max-width: 640px) 110px, (max-width: 1024px) 200px, 236px"
                />
              </li>
            ))}
          </ul>
        </FadeIn>
      </Container>
    </section>
  );
}
