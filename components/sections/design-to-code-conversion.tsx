"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in";
import { Container } from "@/components/layout/container";

export type DesignToCodeCard = {
  title: ReactNode;
  icon: string;
  bullets: string[];
};

type DesignToCodeConversionProps = {
  title?: string;
  lead?: string;
  items: DesignToCodeCard[];
};

export function DesignToCodeConversion({
  title = "Design to Code Conversion",
  lead = "Enhance your online store's functionality and user experience with our bespoke WooCommerce development services.",
  items,
}: DesignToCodeConversionProps) {
  return (
    <section className="bg-white py-12 md:pt-[70px] md:pb-[45px]">
      <Container>
        <FadeIn className="mx-auto mb-10 max-w-4xl px-5 text-center md:mb-14">
          <h2 className="mb-5 text-[28px] font-medium leading-[1.15] tracking-tight text-[#333] md:mb-5 md:pb-5 md:text-[40px] lg:text-[44px]">
            {title}
          </h2>
          <p className="text-base leading-relaxed text-[#333] md:text-lg">
            {lead}
          </p>
        </FadeIn>

        <Stagger className="grid gap-7 md:grid-cols-2">
          {items.map((item, i) => (
            <StaggerItem key={i} index={i}>
              <article className="flex h-full flex-col gap-5 rounded-[10px] bg-[#F7F6F6] px-5 py-6 transition-shadow duration-300 hover:shadow-[0_0_20px_5px_rgba(0,0,0,0.2)] xl:rounded-[15px] xl:px-8 xl:py-[30px]">
                <div className="flex items-center gap-[15px]">
                  <div className="flex size-[70px] shrink-0 items-center justify-center xl:size-[85px]">
                    <Image
                      src={item.icon}
                      alt=""
                      width={86}
                      height={86}
                      className="h-auto w-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold leading-none text-[#333] md:text-2xl xl:text-[30px]">
                    {item.title}
                  </h3>
                </div>
                <ul className="flex flex-col gap-5">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-5 text-sm font-normal leading-[1.3] text-[#333] md:text-base xl:text-lg"
                    >
                      <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-[#333]" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
