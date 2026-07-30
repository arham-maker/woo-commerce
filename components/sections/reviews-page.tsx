"use client";

import Image from "next/image";
import { ASSETS } from "@/lib/constants";
import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/layout/container";

const REVIEW_COLUMNS = [
  ASSETS.testiImages.slice(0, 3),
  ASSETS.testiImages.slice(3, 6),
  ASSETS.testiImages.slice(6),
] as const;

export function ReviewsPageSection() {
  return (
    <section className="bg-white py-16 md:py-20 md:pb-[170px]">
      <Container>
        <div className="mb-10 grid items-center gap-6 pb-6 md:mb-14 md:grid-cols-2 md:gap-8 md:pb-24">
          <FadeIn direction="left">
            <h2 className="text-[28px] font-bold leading-[1.1] text-[#333] md:text-[42px] md:leading-[1] lg:text-[60px] lg:leading-[60px]">
              Hear from Our Satisfied Clients
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} direction="right">
            <p className="text-base leading-relaxed text-[#333] md:text-xl md:leading-[30px] lg:text-2xl">
              Clients share how our solutions helped them overcome challenges,
              grow their businesses, and achieve their goals.
            </p>
          </FadeIn>
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-7">
          {REVIEW_COLUMNS.map((column, colIndex) => (
            <FadeIn
              key={colIndex}
              delay={0.1 + colIndex * 0.08}
              className="flex flex-col gap-4"
            >
              {column.map((item) => (
                <div key={item.src} className="overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    className="h-auto w-full"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              ))}
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
