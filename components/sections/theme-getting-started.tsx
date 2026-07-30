"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

export type ThemeGettingStartedStep = {
  stepLabel: string;
  title: string;
  body: ReactNode;
  bullets?: string[];
  image: string;
  imageAlt?: string;
  imageSide?: "left" | "right";
};

type ThemeGettingStartedProps = {
  title?: string;
  lead?: string;
  steps: ThemeGettingStartedStep[];
};

export function ThemeGettingStarted({
  title = "Getting Started Has Never Been This Easy",
  lead = "With our simple 3 step process, you can have a customized website in minutes…",
  steps,
}: ThemeGettingStartedProps) {
  return (
    <section className="bg-white py-12 md:pt-[95px] md:pb-[70px]">
      <Container>
        <FadeIn className="mx-auto mb-10 max-w-4xl px-4 text-center md:mb-14 md:px-12">
          <h2 className="mb-5 text-[28px] font-medium leading-[1.15] tracking-tight text-[#333] md:mb-[30px] md:text-[40px] lg:text-[44px]">
            {title}
          </h2>
          <p className="text-base leading-relaxed text-[#333] md:text-lg lg:text-xl">
            {lead}
          </p>
        </FadeIn>

        <div className="flex flex-col gap-14 md:gap-[70px]">
          {steps.map((step) => {
            const imageLeft = step.imageSide === "left";
            const text = (
              <FadeIn direction={imageLeft ? "right" : "left"}>
                <p className="text-xl font-normal leading-[1.2] text-[#333] md:text-[30px]">
                  {step.stepLabel}
                </p>
                <h3 className="mb-4 text-[28px] font-normal leading-[1.2] text-[#333] md:mb-0 md:pb-[25px] md:text-[40px] lg:text-[44px]">
                  {step.title}
                </h3>
                <div className="text-base leading-[1.5] text-[#333] md:text-xl lg:text-2xl">
                  {step.body}
                </div>
                {step.bullets?.length ? (
                  <ul className="mt-8 flex flex-col md:mt-[55px]">
                    {step.bullets.map((bullet, bi) => (
                      <li
                        key={bullet}
                        className={cn(
                          "flex items-center gap-5 text-base font-normal leading-[1.2] text-[#333] md:text-xl lg:text-2xl",
                          bi === step.bullets!.length - 1
                            ? "pb-0"
                            : "pb-[15px]",
                        )}
                      >
                        <span className="mt-[-3px] size-1.5 shrink-0 rounded-full bg-[#333]" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </FadeIn>
            );
            const media = (
              <FadeIn
                direction={imageLeft ? "left" : "right"}
                delay={0.1}
                className={cn(
                  "flex",
                  imageLeft ? "justify-start" : "justify-end",
                )}
              >
                <Image
                  src={step.image}
                  alt={step.imageAlt || ""}
                  width={640}
                  height={480}
                  className="h-auto w-full max-w-md object-contain lg:max-w-none"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </FadeIn>
            );

            return (
              <div
                key={`${step.stepLabel}-${step.title}`}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
              >
                {imageLeft ? (
                  <>
                    {media}
                    {text}
                  </>
                ) : (
                  <>
                    {text}
                    {media}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
