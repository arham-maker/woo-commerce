"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ASSETS } from "@/lib/constants";
import { FadeIn } from "@/components/motion/fade-in";
import { GetStartedDialog } from "@/components/get-started-dialog";
import { LiveChatLink } from "@/components/layout/header";
import { Container } from "@/components/layout/container";

const highlights = [
  "One of only 17 certified WooCommerce Experts in the US.",
  "Part of the select 31 certified WooCommerce Experts worldwide.",
];

export function Trusted() {
  return (
    <section className="relative mt-16 overflow-hidden bg-[#2B2B2B] md:mt-24">
      <Container>
        <div className="grid items-center lg:grid-cols-12">
          <FadeIn direction="left" className="py-12 lg:col-span-7 lg:py-16">
            <div className="flex max-w-xl flex-col gap-7">
              <h2 className="text-[32px] font-medium leading-[1.2] tracking-tight text-white md:text-[40px]">
                Your Trusted Partner in WooCommerce Development
              </h2>

              <ul className="flex flex-col gap-5">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-base leading-relaxed text-white md:text-lg"
                  >
                    <ArrowRight className="mt-1 size-4 shrink-0 text-[#FFC498]" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-base text-white/80 md:text-lg">
                Leverage our certified expertise to achieve outstanding e-commerce
                results.
              </p>

              <div className="flex flex-wrap items-center gap-5">
                <GetStartedDialog />
                <LiveChatLink variant="dark" />
              </div>
            </div>
          </FadeIn>

          <FadeIn
            direction="right"
            delay={0.15}
            className="relative lg:col-span-5 lg:-mt-28 lg:mb-0"
          >
            <div className="lg:w-[125%] lg:-ml-[20%]">
              <Image
                src={ASSETS.trusted}
                alt="Trusted WooCommerce partner"
                width={592}
                height={700}
                className="h-auto w-full object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
