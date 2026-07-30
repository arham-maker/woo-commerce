"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ASSETS } from "@/lib/constants";
import { FadeIn } from "@/components/motion/fade-in";
import { Counter } from "@/components/motion/counter";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

const defaultStats = [
  { sub: "Completed", value: 2500, suffix: "+", label: "PROJECTS" },
  { sub: "Worked With", value: 1500, suffix: "+", label: "CLIENTS" },
  { sub: "Expertise in", value: 100, suffix: "+", label: "PLATFORMS" },
  { sub: "Response Time", value: 50, suffix: "", label: "MINUTES" },
];

const bullets = [
  "Certified WooCommerce Experts",
  "Comprehensive End-to-End Delivery",
  "Over 1,300 WooCommerce Projects Successfully Delivered",
  "Timely Delivery with Competitive Pricing",
  "Extensive Experience in Both B2C and B2B eCommerce Across Various Industries",
  "Proven Track Record of 100% Customer Satisfaction",
  "Consistently SEO-Friendly and High-Performance Websites",
  "Specialized in Custom Development, Enterprise System Integrations, and Plugin Development",
];

type ComprehensiveProps = {
  /** LP1 shows 10+ platforms instead of 100+. */
  platformsValue?: number;
  /** LP1: 2×2 orange stats + purple right panel. */
  variant?: "default" | "lp";
};

export function Comprehensive({
  platformsValue,
  variant = "default",
}: ComprehensiveProps) {
  const isLp = variant === "lp";
  const stats = defaultStats.map((stat) =>
    stat.label === "PLATFORMS" && platformsValue != null
      ? { ...stat, value: platformsValue }
      : stat,
  );

  return (
    <section id="stats" className="bg-white py-16 md:py-[85px]">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <FadeIn direction="left" className="lg:col-span-7">
            <h2 className="mb-6 max-w-2xl text-[28px] font-bold leading-[1.25] text-[#333] md:mb-8 md:text-[30px]">
              Comprehensive WooCommerce Development Services by WooCommerce
              Launchpad
            </h2>
            <p className="mb-10 max-w-2xl text-base leading-relaxed text-black md:mb-12 md:text-xl">
              At WooCommerce Launchpad, e-commerce website development extends
              beyond engineering. It starts with meticulous planning and effective
              UI/UX design, followed by robust core engineering, thorough quality
              control, efficient data management, and strategic marketing
              alignment. Our holistic approach ensures your website is more than
              just a digital asset; it becomes a powerful driver of revenue.
            </p>

            <div
              className={cn(
                "grid gap-3",
                isLp
                  ? "grid-cols-2 gap-3 md:gap-[12px]"
                  : "grid-cols-2 sm:grid-cols-4 sm:gap-3",
              )}
            >
              {stats.map((stat, i) => (
                <FadeIn key={stat.label} delay={i * 0.08}>
                  <div
                    className={cn(
                      "flex h-full flex-col items-center justify-center text-center transition-shadow duration-300 hover:shadow-md",
                      isLp
                        ? "gap-[34px] rounded-[30px] border-2 border-[#D9D9D9] bg-white px-[10px] py-3 md:px-[23px] md:py-[55px]"
                        : "gap-6 rounded-[15px] border border-brand bg-white px-3 py-10 md:gap-8 md:px-4 md:py-14",
                    )}
                  >
                    <span
                      className={cn(
                        "text-black",
                        isLp ? "text-sm md:text-lg" : "text-sm md:text-lg",
                      )}
                    >
                      {stat.sub}
                    </span>
                    <p
                      className={cn(
                        "font-bold leading-none",
                        isLp
                          ? "text-[25px] text-[#FC6424] md:text-[40px] xl:text-[60px]"
                          : "text-3xl text-brand md:text-4xl",
                      )}
                    >
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </p>
                    <em
                      className={cn(
                        "not-italic",
                        isLp
                          ? "text-sm text-[#999] md:text-xl"
                          : "text-sm text-black md:text-xl",
                      )}
                    >
                      {stat.label}
                    </em>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.1} className="lg:col-span-5">
            <div
              className={cn(
                "rounded-[15px] px-6 py-10 md:px-8 md:py-12",
                isLp
                  ? "flex flex-col gap-10 bg-brand px-[30px] py-[50px] md:gap-10 md:px-[30px] md:py-[50px]"
                  : "bg-[#F9F9F9]",
              )}
            >
              <ul className="flex flex-col gap-8 md:gap-10">
                {bullets.map((item) => (
                  <li
                    key={item}
                    className={cn(
                      "group flex gap-5 text-base transition-all duration-300 hover:gap-4 md:gap-7 md:text-xl md:hover:gap-5",
                      isLp ? "text-white md:gap-[30px]" : "text-black",
                    )}
                  >
                    <ArrowRight className="mt-1 size-5 shrink-0 text-[#FFC498] transition-transform duration-300 group-hover:translate-x-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {isLp ? (
                <Image
                  src={ASSETS.lp.statsDevices}
                  alt="WooCommerce stores on multiple devices"
                  width={458}
                  height={198}
                  className="mx-auto h-auto w-full max-w-[458px] object-contain"
                />
              ) : null}
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
