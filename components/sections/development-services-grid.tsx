"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in";
import { Container } from "@/components/layout/container";
import { GetStartedDialog } from "@/components/get-started-dialog";
import { cn } from "@/lib/utils";

export type DevelopmentServiceCard = {
  title: ReactNode;
  body: string;
  icon: string;
};

type DevelopmentServicesGridProps = {
  title: ReactNode;
  lead: string;
  items: DevelopmentServiceCard[];
  showCta?: boolean;
  className?: string;
  gridClassName?: string;
};

export function DevelopmentServicesGrid({
  title,
  lead,
  items,
  showCta = true,
  className,
  gridClassName,
}: DevelopmentServicesGridProps) {
  return (
    <section
      className={cn("bg-white py-12 md:pt-[95px] md:pb-[50px]", className)}
    >
      <Container>
        <FadeIn className="mx-auto mb-10 max-w-4xl px-5 text-center md:mb-14">
          <h2 className="mb-5 text-[28px] font-medium leading-[1.15] tracking-tight text-[#333] md:mb-6 md:text-[40px] lg:text-[44px]">
            {title}
          </h2>
          <p className="text-base leading-relaxed text-[#333] md:text-lg">
            {lead}
          </p>
        </FadeIn>

        <Stagger
          className={cn(
            "grid gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[42px]",
            gridClassName,
          )}
        >
          {items.map((item, i) => (
            <StaggerItem key={i} index={i}>
              <article className="flex h-full flex-col items-center gap-5 rounded-[10px] bg-[#F7F6F6] p-[15px] text-center transition-shadow duration-300 hover:shadow-[0_0_20px_2px_rgba(0,0,0,0.1)] xl:gap-5 xl:rounded-[15px] xl:p-[30px]">
                <div className="flex h-[70px] items-center justify-center xl:h-[90px]">
                  <Image
                    src={item.icon}
                    alt=""
                    width={107}
                    height={91}
                    className="h-auto max-h-full w-auto object-contain"
                    unoptimized
                  />
                </div>
                <div className="flex flex-1 flex-col gap-4">
                  <h3
                    className={cn(
                      "text-lg font-bold leading-none text-[#333] md:text-xl xl:text-[30px]",
                      !showCta && "pb-2 xl:pb-[30px]",
                    )}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs leading-[1.33] text-[#333] md:text-sm xl:text-lg">
                    {item.body}
                  </p>
                </div>
                {showCta ? (
                  <GetStartedDialog
                    size="lg"
                    triggerClassName="mt-auto font-bold text-lg"
                  />
                ) : null}
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
