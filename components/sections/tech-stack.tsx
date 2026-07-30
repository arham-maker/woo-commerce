"use client";

import { useState } from "react";
import Image from "next/image";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

export type TechItem = {
  name: string;
  icon: string;
};

type TechStackProps = {
  title?: string;
  lead?: string;
  tabs?: string[];
  items: TechItem[];
};

export function TechStack({
  title = "WooCommerce Development Technology Stack We Use",
  lead = "Our WooCommerce developers use the latest frameworks, programming languages, and technologies for optimal results.",
  tabs = ["FRONTEND", "BACKEND", "PLATFORMS", "DATABASE", "UI/UX"],
  items,
}: TechStackProps) {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#2A282C] py-14 md:py-[110px] md:pb-[150px]">
      <Container>
        <FadeIn className="mx-auto mb-10 max-w-4xl px-4 text-center md:mb-14 md:px-12">
          <h2 className="mb-5 pb-0 text-[28px] font-medium leading-[1.15] tracking-tight text-white md:mb-5 md:pb-5 md:text-[40px] lg:text-[44px]">
            {title}
          </h2>
          <p className="text-base leading-relaxed text-white md:text-lg">
            {lead}
          </p>
        </FadeIn>

        <div className="mb-10 px-2 md:mb-[90px] md:px-12">
          <ul className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 md:gap-0 md:border-0 md:pb-0">
            {tabs.map((tab, i) => (
              <li key={tab}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className={cn(
                    "text-sm font-medium leading-[1.2] transition-colors md:text-xl",
                    active === i
                      ? "text-[#FF6C6C]"
                      : "text-white hover:text-brand",
                  )}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <Stagger
          key={active}
          className="grid grid-cols-2 gap-y-10 sm:grid-cols-3 md:grid-cols-5 md:gap-y-[70px]"
        >
          {items.map((item, i) => (
            <StaggerItem key={`${active}-${item.name}`} index={i}>
              <div className="group flex flex-col items-center text-center transition-transform duration-300 hover:scale-[1.08]">
                <div className="flex h-[45px] items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={56}
                    height={50}
                    className="h-full w-auto object-contain transition-[filter] duration-300"
                    unoptimized
                  />
                </div>
                <p className="pt-[30px] text-base font-medium leading-[1.2] text-white md:text-[22px]">
                  {item.name}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
