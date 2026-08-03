"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ASSETS } from "@/lib/constants";
import { FadeIn } from "@/components/motion/fade-in";
import { Counter } from "@/components/motion/counter";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "Our partnership with WooCommerce Web transformed our online store into a top-performing sales machine. Their comprehensive development approach, from design to integration, was flawless.",
    name: "Sarah J.",
    role: "Founder of Trendy Boutique",
  },
  {
    quote:
      "Migrating to WooCommerce with WooCommerce Web was seamless and efficient. Their expertise and support ensured a smooth transition, and our new site is faster and more reliable than ever.",
    name: "Emily R.",
    role: "Owner of Gourmet Delights",
  },
  {
    quote:
      "WooCommerce Web delivered beyond our expectations. Their team crafted a visually stunning and highly functional WooCommerce site that perfectly aligns with our brand.",
    name: "James T.",
    role: "CEO of Tech Innovators",
  },
  {
    quote:
      "WooCommerce Web exceeded our expectations in every way. Their team provided a high-performance, SEO-friendly website that has significantly boosted our online presence.",
    name: "Michael B.",
    role: "Director of Digital Strategy",
  },
  {
    quote:
      "The custom solutions provided by WooCommerce Web have revolutionized our e-commerce operations. Their expertise in custom development and integrations has streamlined our processes and improved our customer experience. We highly recommend their services.",
    name: "Lisa W.",
    role: "Chief Operating Officer",
  },
];

const platformStats = [
  {
    value: 3.6,
    suffix: "M",
    label: "Online stores\nBuilt with WooCommerce",
    source: "StoreLeads (using Woo Cart/Checkout)",
    decimals: 1,
  },
  {
    value: 31,
    suffix: "%",
    label: "of the top 1 million\necommerce sites",
    source: "StoreLeads (using Woo Cart/Checkout)",
    decimals: 0,
  },
  {
    value: 43,
    suffix: "%",
    label: "of the web is built\non WordPress",
    source: "W3Techs, Usage Statistics and Market Share of WordPress",
    decimals: 0,
  },
];

function NavButton({
  onClick,
  label,
  children,
  className,
}: {
  onClick: () => void;
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={cn(
        "absolute top-[28%] z-10 hidden size-[60px] place-items-center rounded-full border-2 border-star bg-white text-black transition-transform hover:scale-105 md:grid",
        className,
      )}
    >
      {children}
    </button>
  );
}

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4500, stopOnInteraction: true }),
  ]);

  return (
    <section id="reviews" className="bg-[#F9F9F9] pt-20 pb-16 md:pt-[130px] md:pb-24">
      <Container>
        <FadeIn className="mx-auto max-w-4xl text-center">
          <h2 className="text-[32px] font-medium leading-[1.15] tracking-tight text-[#333] md:text-[44px]">
            The most-trusted ecommerce platform
            <br className="hidden sm:block" /> for building success ✨
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-3 md:mt-20 md:gap-6">
          {platformStats.map((stat, i) => (
            <FadeIn key={stat.label} delay={0.1 + i * 0.1}>
              <div className="flex h-full flex-col rounded-[15px] bg-white p-8 md:p-10">
                <p className="text-5xl font-medium leading-none text-[#333] md:text-[90px]">
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </p>
                <h3 className="mt-4 mb-5 whitespace-pre-line text-lg leading-snug text-[#333] md:text-xl">
                  {stat.label}
                </h3>
                <p className="mt-auto text-xs leading-snug text-[#999]">
                  {stat.source}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2} className="relative mt-16 md:mt-[150px]">
          <NavButton
            label="Previous review"
            onClick={() => emblaApi?.scrollPrev()}
            className="left-2 translate-x-0"
          >
            <ArrowLeft className="size-5" />
          </NavButton>
          <NavButton
            label="Next review"
            onClick={() => emblaApi?.scrollNext()}
            className="right-2 translate-x-0"
          >
            <ArrowRight className="size-5" />
          </NavButton>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((item) => (
                <div key={item.name} className="min-w-0 flex-[0_0_100%] px-4 md:px-14">
                  <blockquote className="mx-auto max-w-4xl pb-10 text-center md:pb-16">
                    <p className="text-xl font-medium leading-relaxed text-[#333] md:text-[30px] md:leading-[1.66]">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                    <footer className="mt-8 text-base text-[#333] md:text-lg">
                      <cite className="not-italic">
                        — {item.name},
                        <br />
                        {item.role}
                      </cite>
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 text-base text-[#333] md:gap-3 md:text-xl">
            <span className="flex pl-4">
              {ASSETS.reviews.map((src, i) => (
                <Image
                  key={src}
                  src={src}
                  alt=""
                  width={48}
                  height={48}
                  className="-ml-3 size-10 rounded-full border-2 border-white object-cover first:ml-0 md:size-12"
                />
              ))}
            </span>
            <strong className="font-bold">7000+</strong>
            <em className="font-light not-italic">reviews on</em>
            <Image
              src={ASSETS.trustpilot}
              alt="Trustpilot"
              width={94}
              height={26}
              className="h-5 w-auto md:h-6"
            />
          </div>

          <div className="mt-8 flex justify-center gap-4 md:hidden">
            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              aria-label="Previous review"
              className="grid size-12 place-items-center rounded-full border-2 border-star bg-white"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              aria-label="Next review"
              className="grid size-12 place-items-center rounded-full border-2 border-star bg-white"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
