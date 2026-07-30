"use client";

import Image from "next/image";
import { Check, Star, MessageSquare } from "lucide-react";
import { ASSETS } from "@/lib/constants";
import { FadeIn, useMotionReady } from "@/components/motion/fade-in";
import { GetStartedDialog } from "@/components/get-started-dialog";
import { cn } from "@/lib/utils";

const bullets = [
  "Unique WooCommerce websites perfectly tailored to your brand.",
  "Lightning-fast, mobile-friendly sites ensuring a flawless shopping experience.",
  "Continuous maintenance and expert support to keep your store thriving.",
];

export function LpHero() {
  const ready = useMotionReady();

  return (
    <section
      className="relative overflow-hidden pb-0"
      style={{
        backgroundImage:
          "linear-gradient(97deg, rgb(39, 52, 44) 7.39%, rgb(156, 164, 130) 100%)",
      }}
    >
      <div className="relative mx-auto grid max-w-[1320px] items-center gap-8 px-4 pt-10 pb-0 sm:px-6 md:px-8 lg:grid-cols-2 lg:gap-6 lg:px-10 lg:pt-14 xl:pl-16 xl:pr-6">
        <div className="space-y-5 pb-10 lg:pb-14">
          <h1
            className={cn(
              "max-w-xl text-[28px] font-semibold leading-[1] tracking-tight text-white transition-transform duration-700 sm:text-[32px] lg:text-[34px]",
              ready ? "translate-x-0" : "-translate-x-8",
            )}
          >
            Supercharge Your E-Commerce Success with Expert WooCommerce Solutions
          </h1>

          <p
            className={cn(
              "max-w-lg text-base leading-relaxed text-white transition-transform delay-75 duration-700",
              ready ? "translate-x-0" : "-translate-x-6",
            )}
          >
            At WooCommerce Launchpad, we transform your online store into a sales
            powerhouse. Our expert team crafts stunning, bespoke WooCommerce
            websites that perform flawlessly and maximize customer satisfaction.
          </p>

          <ul
            className={cn(
              "space-y-2.5 transition-transform delay-150 duration-700",
              ready ? "translate-x-0" : "-translate-x-6",
            )}
          >
            {bullets.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm leading-snug text-white sm:text-base"
              >
                <Check
                  className="mt-0.5 size-4 shrink-0 stroke-[3] text-[#FFDE6A]"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div
            className={cn(
              "flex flex-wrap items-center gap-5 pt-1 transition-transform delay-200 duration-700",
              ready ? "translate-y-0" : "translate-y-4",
            )}
          >
            <GetStartedDialog
              size="lg"
              triggerClassName="font-bold text-[18px]"
            />
            <button
              type="button"
              className="inline-flex items-center gap-2 text-xl font-bold text-white transition-opacity hover:opacity-80 sm:text-2xl"
            >
              <MessageSquare className="size-5 fill-none text-brand" strokeWidth={2} />
              Live chat
            </button>
          </div>

          <p
            className={cn(
              "flex flex-wrap items-center gap-2 pt-2 text-sm text-white transition-opacity delay-300 duration-700",
              ready ? "opacity-100" : "opacity-0",
            )}
          >
            We are rated 4.5
            <span className="inline-flex items-center gap-0.5" aria-hidden>
              {Array.from({ length: 4 }).map((_, i) => (
                <Star
                  key={i}
                  className="size-3.5 fill-[#FFA700] text-[#FFA700]"
                />
              ))}
              <Star className="size-3.5 fill-[#FFA700]/50 text-[#FFA700]" />
            </span>
            Among 34,578 Satisfied Customers
          </p>
        </div>

        <FadeIn
          direction="right"
          delay={0.15}
          className="relative flex justify-center lg:justify-end"
        >
          <Image
            src={ASSETS.lp.hero}
            alt="WooCommerce expert with store mockup"
            width={902}
            height={671}
            className="h-auto w-full max-w-[560px] object-contain object-bottom lg:max-w-none"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </FadeIn>
      </div>
    </section>
  );
}
