"use client";

import Image from "next/image";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in";
import { Container } from "@/components/layout/container";

export type IndustryItem = {
  title: string;
  body: string;
  icon: string;
};

type IndustrySolutionsProps = {
  title: string;
  lead: string;
  items: IndustryItem[];
};

export function IndustrySolutions({
  title,
  lead,
  items,
}: IndustrySolutionsProps) {
  return (
    <section className="bg-[#F9F9F9] py-14 md:py-[100px]">
      <Container>
        <FadeIn className="mx-auto mb-10 max-w-4xl px-5 text-center md:mb-14">
          <h2 className="mb-5 pb-0 text-[28px] font-medium leading-[1.15] tracking-tight text-[#333] md:mb-[30px] md:text-[40px] lg:text-[44px]">
            {title}
          </h2>
          <p className="text-base leading-relaxed text-[#333] md:text-lg">
            {lead}
          </p>
        </FadeIn>

        <Stagger className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <StaggerItem key={item.title} index={i}>
              <article className="flex h-full flex-col justify-between gap-[30px] rounded-[10px] bg-white p-6 transition-shadow duration-300 hover:shadow-[0_0_15px_2px_rgba(0,0,0,0.1)] xl:rounded-[15px] xl:p-10">
                <div>
                  <h3 className="mb-2 text-base font-normal leading-snug text-[#333] md:text-lg xl:text-xl">
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-[#999] md:text-sm">
                    {item.body}
                  </p>
                </div>
                <div className="flex h-10 items-end">
                  <Image
                    src={item.icon}
                    alt=""
                    width={43}
                    height={41}
                    className="h-auto max-h-10 w-auto object-contain"
                    unoptimized
                  />
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
