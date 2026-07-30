"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ASSETS } from "@/lib/constants";
import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/layout/container";

const highlights = [
  "We are one of the only 17 certified Woocommerce Experts in the US",
  "We are one of the only 31 certified Woocommerce Experts across the world",
];

export function LpCertified() {
  return (
    <section className="bg-[#2B2B2B] py-14 md:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <FadeIn direction="left">
            <h2 className="mb-8 text-[28px] font-medium leading-[1.15] tracking-tight text-white md:mb-10 md:text-[40px] lg:text-[44px]">
              A Certified WooCommerce
              <br className="hidden sm:block" /> Developer you can trust
            </h2>
            <ul className="flex flex-col gap-5 md:gap-6">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-base text-white md:text-lg"
                >
                  <ArrowRight className="mt-1 size-4 shrink-0 text-brand" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn
            direction="right"
            delay={0.1}
            className="flex justify-center lg:justify-end"
          >
            <Image
              src={ASSETS.lp.certified}
              alt="Certified WooCommerce developer"
              width={560}
              height={480}
              className="h-auto w-full max-w-md object-contain lg:max-w-none"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
