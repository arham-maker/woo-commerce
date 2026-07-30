"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { ASSETS } from "@/lib/constants";
import { FadeIn, useMotionReady } from "@/components/motion/fade-in";
import { GetStartedDialog } from "@/components/get-started-dialog";
import { LiveChatLink } from "@/components/layout/header";
import { cn } from "@/lib/utils";

type ServicePageHeroProps = {
  title: ReactNode;
  description: string;
  image: string;
  imageAlt?: string;
  /** Optional eyebrow / subtitle above the title */
  subtitle?: string;
  backgroundClassName?: string;
  /** Trustpilot image, Excellent stars, or none */
  proof?: "trustpilot" | "stars" | "none";
  alignItems?: "end" | "center";
  imageWidth?: number;
  imageHeight?: number;
  titleClassName?: string;
  imageClassName?: string;
  contentClassName?: string;
  className?: string;
};

export function ServicePageHero({
  title,
  description,
  image,
  imageAlt = "",
  subtitle,
  backgroundClassName = "bg-[#EBF1F3]",
  proof = "trustpilot",
  alignItems = "end",
  imageWidth = 800,
  imageHeight = 620,
  titleClassName,
  imageClassName,
  contentClassName,
  className,
}: ServicePageHeroProps) {
  const ready = useMotionReady();

  return (
    <section
      className={cn(
        "relative overflow-hidden pt-[60px] pb-0",
        backgroundClassName,
        className,
      )}
    >
      <div
        className={cn(
          "relative mx-auto grid max-w-[1320px] gap-8 px-4 pt-0 pb-0 sm:px-6 md:gap-10 md:px-8 lg:grid-cols-2 lg:gap-8 lg:px-10 xl:pl-16 xl:pr-10",
          alignItems === "end" ? "items-end" : "items-center",
        )}
      >
        <div className={cn("space-y-5 pb-8 lg:pb-[80px]", contentClassName)}>
          {subtitle ? (
            <p
              className={cn(
                "text-base font-bold leading-none text-black transition-transform duration-700 md:text-xl",
                ready ? "translate-x-0" : "-translate-x-8",
              )}
            >
              {subtitle}
            </p>
          ) : null}

          <h1
            className={cn(
              "max-w-xl pb-4 text-[32px] font-medium leading-[1.15] tracking-tight text-black transition-transform delay-75 duration-700 sm:text-[44px] lg:pb-[35px] lg:text-[60px]",
              ready ? "translate-x-0" : "-translate-x-8",
              titleClassName,
            )}
          >
            {typeof title === "string" ? (
              <span className="font-bold">{title}</span>
            ) : (
              title
            )}
          </h1>

          <p
            className={cn(
              "max-w-lg pb-2.5 text-base leading-relaxed text-[#333] transition-transform delay-150 duration-700 md:pb-[45px] md:text-xl",
              ready ? "translate-x-0" : "-translate-x-6",
            )}
          >
            {description}
          </p>

          <div
            className={cn(
              "flex flex-wrap items-center gap-5 transition-transform delay-300 duration-700",
              ready ? "translate-y-0" : "translate-y-4",
            )}
          >
            <GetStartedDialog size="lg" />
            <LiveChatLink />
          </div>

          {proof === "trustpilot" ? (
            <div className="pt-1">
              <Image
                src={ASSETS.trustpilot}
                alt="Trustpilot reviews"
                width={342}
                height={44}
                className="h-auto w-[220px] max-w-full object-contain sm:w-[280px] md:w-[342px]"
              />
            </div>
          ) : null}

          {proof === "stars" ? (
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <span className="text-sm font-medium">Excellent</span>
              <div className="flex items-center gap-0.5" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-star text-star" />
                ))}
              </div>
              <span className="text-sm text-muted">4.5 Star reviews</span>
            </div>
          ) : null}
        </div>

        <FadeIn
          direction="right"
          delay={0.15}
          className="relative flex justify-center lg:justify-end"
        >
          <Image
            src={image}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            className={cn(
              "h-auto w-full max-w-[520px] object-contain object-bottom lg:max-w-none",
              imageClassName,
            )}
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </FadeIn>
      </div>
    </section>
  );
}
