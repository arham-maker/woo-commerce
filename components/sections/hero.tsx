"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ASSETS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { GetStartedDialog } from "@/components/get-started-dialog";
import { LiveChatLink } from "@/components/layout/header";
import { useMotionReady } from "@/components/motion/fade-in";

export function Hero() {
  const ready = useMotionReady();
  const [selected, setSelected] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3500, stopOnInteraction: false }),
  ]);
  const [thumbRef, thumbApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const index = emblaApi.selectedScrollSnap();
    setSelected(index);
    thumbApi?.scrollTo(index);
  }, [emblaApi, thumbApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollToClients = () => {
    document
      .getElementById("downsection")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative overflow-hidden bg-hero-bg">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(127,84,179,0.08),transparent_55%)]" />

      <button
        type="button"
        onClick={scrollToClients}
        className="absolute top-1/2 left-[3%] z-10 hidden h-[230px] w-5 -translate-y-1/2 flex-col items-center justify-end gap-[60px] lg:inline-flex"
        aria-label="Scroll down to clients"
      >
        <span className="origin-center -rotate-90 whitespace-nowrap pt-0.5 text-sm font-semibold leading-tight text-[#666]">
          Scroll Down
        </span>
        <span className="icon shrink-0" aria-hidden>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="114"
            viewBox="0 0 8 114"
            fill="none"
          >
            <path
              d="M3.64644 113.354C3.8417 113.549 4.15829 113.549 4.35355 113.354L7.53553 110.172C7.73079 109.976 7.73079 109.66 7.53553 109.464C7.34027 109.269 7.02368 109.269 6.82842 109.464L4 112.293L1.17157 109.464C0.976306 109.269 0.659724 109.269 0.464461 109.464C0.269199 109.66 0.269199 109.976 0.464461 110.172L3.64644 113.354ZM3.5 -2.18557e-08L3.5 113L4.5 113L4.5 2.18557e-08L3.5 -2.18557e-08Z"
              fill="#00B67A"
            />
          </svg>
        </span>
      </button>

      <div className="relative mx-auto grid max-w-[1320px] items-center gap-6 px-4 py-10 sm:gap-8 sm:px-6 md:gap-10 md:px-8 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-20 xl:pl-16 xl:pr-10">
        <div className="space-y-4 sm:space-y-6">
          <h1
            className={cn(
              "max-w-xl text-2xl font-medium leading-[1.15] tracking-tight text-black transition-transform duration-700 sm:text-[40px] md:text-[48px]",
              ready ? "translate-x-0" : "-translate-x-8",
            )}
          >
            Achieve{" "}
            <br className="hidden sm:block" />
            E-Commerce Success with WooCommerce
          </h1>

          <p
            className={cn(
              "max-w-lg text-sm leading-relaxed text-muted transition-transform delay-150 duration-700 sm:text-base md:text-lg",
              ready ? "translate-x-0" : "-translate-x-6",
            )}
          >
            Whatever your success goals are, WooCommerce Launchpad helps you
            reach them. Our WordPress-based ecommerce platform supports merchants
            and developers in building and maintaining thriving, enduring
            businesses.
          </p>

          <div
            className={cn(
              "flex flex-wrap items-center gap-3 transition-transform delay-300 duration-700 sm:gap-5",
              ready ? "translate-y-0" : "translate-y-4",
            )}
          >
            <GetStartedDialog
              size="lg"
              triggerClassName="h-auto gap-1.5 rounded-full px-5 py-3 text-xs font-semibold sm:gap-2 sm:px-9 sm:py-4 sm:text-lg sm:font-bold"
            />
            <LiveChatLink />
          </div>

          <div className="pt-1">
            <Image
              src={ASSETS.trustpilot}
              alt="Excellent 4.5 Star reviews on Trustpilot"
              width={342}
              height={44}
              className="h-auto w-[220px] max-w-full object-contain sm:w-[280px] md:w-[342px]"
            />
          </div>
        </div>

        <div
          className={cn(
            "relative mt-2 transition-transform delay-200 duration-1000 sm:mt-0",
            ready ? "translate-x-0" : "translate-x-10",
          )}
        >
          <div
            className="overflow-hidden rounded-xl shadow-xl sm:rounded-2xl"
            ref={emblaRef}
          >
            <div className="flex">
              {ASSETS.hero.map((src, i) => (
                <div key={src + i} className="min-w-0 flex-[0_0_100%]">
                  <Image
                    src={src}
                    alt={`Portfolio showcase ${i + 1}`}
                    width={691}
                    height={504}
                    className="h-auto w-full object-cover"
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-3 overflow-hidden sm:mt-4" ref={thumbRef}>
            <div className="flex gap-2 sm:gap-3">
              {ASSETS.hero.map((src, i) => (
                <button
                  key={`thumb-${src}-${i}`}
                  type="button"
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={cn(
                    "min-w-0 flex-[0_0_20%] overflow-hidden rounded-md border-2 transition-all sm:rounded-lg",
                    selected === i
                      ? "border-brand opacity-100"
                      : "border-transparent opacity-70 hover:opacity-100",
                  )}
                >
                  <Image
                    src={src}
                    alt=""
                    width={140}
                    height={100}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
