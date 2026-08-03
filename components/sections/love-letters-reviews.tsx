"use client";

import { Star } from "lucide-react";
import { SITE } from "@/lib/constants";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in";
import { Container } from "@/components/layout/container";

const reviews = Array.from({ length: 6 }, () => ({
  title: "Best Job!!!",
  body: "My business just got off the ground, thus I wanted the greatest logo possible. Choosing only one agency was challenging. So, I looked through reviews of custom logo creators on numerous websites, and I'm so happy I found WooCommerce Web. They truly are the finest!",
  author: "Diesel Simon",
  rating: 5,
}));

export function LoveLettersReviews() {
  return (
    <section className="bg-white py-10 md:pt-[80px] md:pb-[100px]">
      <Container>
        <div className="mb-8 grid items-center gap-4 md:mb-10 md:grid-cols-2 md:gap-8 md:pb-0">
          <FadeIn direction="left">
            <h2 className="text-[28px] font-bold leading-[1.1] text-[#333] md:text-[42px] md:leading-none lg:text-[50px]">
              Love Letters From Our Clients
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} direction="right">
            <p className="text-base leading-relaxed text-[#333] md:text-xl md:leading-[1.25] lg:text-[22px]">
              Still have questions? Call{" "}
              <a
                href={SITE.phoneHref}
                className="text-brand transition-colors hover:underline"
              >
                +1 (888) 894-6005
              </a>{" "}
              or{" "}
              <button
                type="button"
                className="text-brand transition-colors hover:underline"
              >
                LIVE CHAT
              </button>{" "}
              with us for real-time support.
            </p>
          </FadeIn>
        </div>

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {reviews.map((review, i) => (
            <StaggerItem key={`${review.author}-${i}`} index={i}>
              <article className="flex h-full flex-col gap-6 rounded-[10px] bg-white px-5 py-8 transition-shadow duration-[400ms] hover:shadow-[0_22px_60px_0_rgba(0,0,0,0.1)] sm:gap-8 sm:px-8 sm:py-10 md:px-10 md:py-[40px]">
                <div className="space-y-4 sm:space-y-5">
                  <h3 className="text-xl font-semibold leading-none text-black md:text-2xl">
                    {review.title}
                  </h3>
                  <p className="text-base leading-[1.66] tracking-[0.72px] text-[#666] md:text-lg">
                    {review.body}
                  </p>
                </div>
                <div className="mt-auto flex items-center gap-[13px] text-sm text-[#333]">
                  <span>{review.author}</span>
                  <span className="inline-flex items-center gap-0.5" aria-hidden>
                    {Array.from({ length: review.rating }).map((_, s) => (
                      <Star
                        key={s}
                        className="size-4 fill-[#F3D943] text-[#F3D943]"
                      />
                    ))}
                  </span>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
