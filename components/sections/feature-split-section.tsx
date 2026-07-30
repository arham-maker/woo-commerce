"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/layout/container";
import { GetStartedDialog } from "@/components/get-started-dialog";
import { LiveChatLink } from "@/components/layout/header";
import { cn } from "@/lib/utils";

export type FeatureSplitItem = {
  label: string;
  body?: ReactNode;
};

type FeatureSplitSectionProps = {
  title: ReactNode;
  lead?: ReactNode;
  image: string;
  imageAlt?: string;
  items?: FeatureSplitItem[];
  variant?: "bullets" | "process";
  showCta?: boolean;
  imageSide?: "left" | "right";
  className?: string;
  /** Dark photo/solid backgrounds use light text (live innerSection1). */
  tone?: "light" | "dark";
  backgroundImage?: string;
};

export function FeatureSplitSection({
  title,
  lead,
  image,
  imageAlt = "",
  items = [],
  variant = "bullets",
  showCta = false,
  imageSide = "right",
  className,
  tone = "light",
  backgroundImage,
}: FeatureSplitSectionProps) {
  const dark = tone === "dark";

  const textCol = (
    <FadeIn direction={imageSide === "right" ? "left" : "right"}>
      <h2
        className={cn(
          "mb-5 text-[28px] font-medium leading-[1.15] tracking-tight md:mb-10 md:pb-0 md:text-[40px] lg:text-[44px]",
          dark ? "text-white" : "text-[#333]",
        )}
      >
        {title}
      </h2>
      {lead ? (
        typeof lead === "string" ? (
          <p
            className={cn(
              "mb-8 text-base leading-relaxed md:mb-10 md:pr-[60px] md:text-lg",
              dark ? "text-white" : "text-[#333]",
            )}
          >
            {lead}
          </p>
        ) : (
          <div
            className={cn(
              "mb-8 space-y-4 text-base leading-relaxed md:mb-10 md:pr-[60px] md:text-lg",
              dark ? "text-white" : "text-[#333]",
            )}
          >
            {lead}
          </div>
        )
      ) : null}

      {items.length > 0 && variant === "bullets" ? (
        <ul className="mb-8 flex flex-col gap-2.5 pb-2 md:mb-10 md:pb-[45px]">
          {items.map((item) => (
            <li
              key={item.label}
              className={cn(
                "flex items-center gap-2.5 text-base font-normal leading-[1.2] md:text-xl",
                dark ? "text-white" : "text-[#333]",
              )}
            >
              <span
                className={cn(
                  "size-1.5 shrink-0 rounded-full",
                  dark ? "bg-white" : "bg-[#333]",
                )}
              />
              <span className={cn(dark && "font-bold text-[#FFC498]")}>
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      ) : null}

      {items.length > 0 && variant === "process" ? (
        <ol className="flex flex-col gap-[30px]">
          {items.map((item) => (
            <li key={item.label} className="group">
              <h3
                className={cn(
                  "mb-[25px] flex items-start gap-[25px] text-lg font-bold leading-[1.2] transition-[gap] duration-300 group-hover:gap-[15px] md:text-2xl",
                  dark ? "text-white" : "text-[#333]",
                )}
              >
                <ArrowRight
                  className={cn(
                    "mt-1 size-4 shrink-0",
                    dark ? "text-[#FFC498]" : "text-brand",
                  )}
                />
                {item.label}
              </h3>
              {item.body ? (
                <p
                  className={cn(
                    "pl-0 text-base leading-[1.2] transition-colors duration-300 md:text-xl",
                    dark
                      ? "text-[#969697] group-hover:text-white"
                      : "text-[#333]",
                  )}
                >
                  {item.body}
                </p>
              ) : null}
            </li>
          ))}
        </ol>
      ) : null}

      {showCta ? (
        <div className="flex flex-wrap items-center gap-5">
          <GetStartedDialog size="lg" />
          <LiveChatLink variant={dark ? "dark" : "light"} />
        </div>
      ) : null}
    </FadeIn>
  );

  const imageCol = (
    <FadeIn
      direction={imageSide === "right" ? "right" : "left"}
      delay={0.1}
      className={cn(
        "flex",
        imageSide === "right" ? "justify-end" : "justify-start",
      )}
    >
      <Image
        src={image}
        alt={imageAlt}
        width={900}
        height={700}
        className="h-auto w-full max-w-xl object-contain lg:max-w-none"
        sizes="(max-width: 1024px) 100vw, 55vw"
      />
    </FadeIn>
  );

  return (
    <section
      className={cn(
        "bg-cover bg-no-repeat py-14 md:py-[110px]",
        !backgroundImage && (dark ? "bg-[#333]" : "bg-white"),
        backgroundImage && "bg-[position:45%_0%]",
        className,
      )}
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})` }
          : undefined
      }
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            {imageSide === "right" ? textCol : imageCol}
          </div>
          <div className="lg:col-span-7">
            {imageSide === "right" ? imageCol : textCol}
          </div>
        </div>
      </Container>
    </section>
  );
}
