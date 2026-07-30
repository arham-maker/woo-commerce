"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/layout/container";
import { LiveChatConsultantCta } from "@/components/live-chat-consultant-cta";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

type ImageGalleryProps = {
  title: ReactNode;
  lead: string;
  images: readonly string[];
  columns?: 3 | 4;
  rounded?: boolean;
  showConsultantCta?: boolean;
};

export function ImageGallery({
  title,
  lead,
  images,
  columns = 3,
  rounded = false,
  showConsultantCta = true,
}: ImageGalleryProps) {
  const [active, setActive] = useState<string | null>(null);
  // Live logoDesignSection3: 4-up = 25%, row-wrap3 (portfolio/social) = 33.33% at all breakpoints.
  const colClass =
    columns === 4
      ? "w-1/4 flex-[0_0_25%] p-3"
      : "w-1/3 flex-[0_0_33.333%] p-3";

  return (
    <section className="bg-white py-16 md:py-[150px]">
      <Container>
        <FadeIn className="mx-auto mb-10 max-w-3xl px-5 text-center md:mb-14">
          <h2 className="mb-5 text-[28px] font-medium leading-[1.15] tracking-tight text-[#333] md:mb-6 md:text-[40px] lg:text-[44px]">
            {title}
          </h2>
          <p className="text-base leading-relaxed text-[#333] md:text-lg">
            {lead}
          </p>
        </FadeIn>

        <div className="flex flex-wrap">
          {images.map((src, i) => (
            <FadeIn
              key={src}
              delay={0.05 * (i % columns)}
              className={colClass}
            >
              <button
                type="button"
                onClick={() => setActive(src)}
                className={`block h-full max-h-[400px] w-full overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                  rounded ? "" : ""
                }`}
              >
                <Image
                  src={src}
                  alt={`Gallery item ${i + 1}`}
                  width={800}
                  height={1200}
                  className={`h-auto w-full object-cover object-top ${
                    rounded ? "" : "rounded-none"
                  }`}
                  sizes={columns === 4 ? "25vw" : "33vw"}
                />
              </button>
            </FadeIn>
          ))}
        </div>

        {showConsultantCta ? (
          <FadeIn delay={0.15} className="pt-[50px] md:pt-[70px]">
            <LiveChatConsultantCta />
          </FadeIn>
        ) : null}
      </Container>

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-h-[90vh] max-w-[90vw] overflow-y-auto border-none bg-transparent p-0 shadow-none sm:max-w-4xl">
          <DialogTitle className="sr-only">Gallery preview</DialogTitle>
          {active ? (
            <Image
              src={active}
              alt="Full preview"
              width={1400}
              height={4000}
              className="h-auto w-full rounded-none"
              sizes="90vw"
            />
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
