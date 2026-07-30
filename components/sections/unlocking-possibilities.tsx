"use client";

import Image from "next/image";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

export type UnlockingItem = {
  title: string;
  icon?: string;
  body?: string;
};

type UnlockingPossibilitiesProps = {
  title: string;
  items: UnlockingItem[];
  className?: string;
};

export function UnlockingPossibilities({
  title,
  items,
  className,
}: UnlockingPossibilitiesProps) {
  return (
    <section
      className={cn("bg-white py-12 md:pt-[65px] md:pb-[150px]", className)}
    >
      <Container>
        <FadeIn className="mx-auto mb-10 max-w-5xl px-4 text-center md:mb-14 md:px-10">
          <h2 className="text-[28px] font-medium leading-[1.15] tracking-tight text-[#333] md:text-[40px] lg:text-[44px]">
            {title}
          </h2>
        </FadeIn>

        <Stagger className="grid gap-[23px] sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const hasIcon = Boolean(item.icon);
            const hasBody = Boolean(item.body);

            return (
              <StaggerItem key={item.title} index={i}>
                <article
                  className={cn(
                    "group h-full rounded-[10px] bg-[#F7F6F6] transition-colors duration-300 hover:bg-brand xl:rounded-[15px]",
                    hasIcon
                      ? "flex items-center gap-[30px] px-5 py-6 xl:px-8 xl:py-[30px]"
                      : "flex flex-col px-5 py-6 xl:px-8 xl:py-[30px]",
                  )}
                >
                  {hasIcon ? (
                    <div className="flex size-[65px] shrink-0 items-center justify-center">
                      <Image
                        src={item.icon!}
                        alt=""
                        width={65}
                        height={65}
                        className="h-auto max-h-full w-auto object-contain transition-[filter] duration-300 group-hover:brightness-0 group-hover:invert"
                        unoptimized
                      />
                    </div>
                  ) : null}

                  <div
                    className={cn(
                      "flex flex-col",
                      hasBody ? "gap-4 md:gap-[30px]" : "",
                    )}
                  >
                    <h3 className="text-lg font-semibold leading-[1.25] text-[#333] transition-colors duration-300 group-hover:text-white md:text-xl xl:text-2xl">
                      {item.title}
                    </h3>
                    {hasBody ? (
                      <p className="text-sm leading-[1.33] text-[#333] transition-colors duration-300 group-hover:text-white md:text-base xl:text-lg">
                        {item.body}
                      </p>
                    ) : null}
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
