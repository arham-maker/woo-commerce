"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/layout/container";
import { GetStartedDialog } from "@/components/get-started-dialog";
import { LiveChatLink } from "@/components/layout/header";
import { cn } from "@/lib/utils";

export type ContentCtaRow = {
  title: ReactNode;
  body: string;
  image: string;
  imageAlt?: string;
  /** Image on the left (text right) or image on the right (text left) */
  imageSide?: "left" | "right";
};

type ContentCtaRowsProps = {
  rows: ContentCtaRow[];
  /** LP1 dark content rows use #2A282C with light text. */
  tone?: "light" | "dark";
  className?: string;
};

export function ContentCtaRows({
  rows,
  tone = "light",
  className,
}: ContentCtaRowsProps) {
  const dark = tone === "dark";

  return (
    <section
      className={cn(
        "py-10 md:py-16",
        dark ? "bg-[#2A282C]" : "bg-white",
        className,
      )}
    >
      <Container>
        <div className="flex flex-col gap-14 md:gap-[90px]">
          {rows.map((row, i) => {
            const imageLeft = row.imageSide === "left";
            const text = (
              <FadeIn direction={imageLeft ? "right" : "left"}>
                <h2
                  className={cn(
                    "mb-5 text-[28px] font-medium leading-[1.15] tracking-tight md:mb-6 md:text-[40px] lg:text-[44px]",
                    dark ? "text-white" : "text-[#333]",
                  )}
                >
                  {row.title}
                </h2>
                <p
                  className={cn(
                    "mb-8 pt-2 text-base leading-relaxed md:mb-10 md:pt-[35px] md:text-lg",
                    dark ? "text-white/85" : "text-[#333]",
                  )}
                >
                  {row.body}
                </p>
                <div className="flex flex-wrap items-center gap-5">
                  <GetStartedDialog size="lg" />
                  <LiveChatLink variant={dark ? "dark" : "light"} />
                </div>
              </FadeIn>
            );
            const media = (
              <FadeIn
                direction={imageLeft ? "left" : "right"}
                delay={0.1}
                className={cn(
                  "flex",
                  imageLeft ? "justify-start lg:justify-end" : "justify-end",
                )}
              >
                <Image
                  src={row.image}
                  alt={row.imageAlt || ""}
                  width={800}
                  height={600}
                  className="h-auto w-full max-w-md object-contain lg:max-w-none"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </FadeIn>
            );

            return (
              <div
                key={i}
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
