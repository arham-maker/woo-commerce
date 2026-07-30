"use client";

import Image from "next/image";
import { ASSETS } from "@/lib/constants";
import { FadeIn } from "@/components/motion/fade-in";
import { GetStartedDialog } from "@/components/get-started-dialog";
import { LiveChatLink } from "@/components/layout/header";

export function CaseStudy() {
  return (
    <section className="relative overflow-hidden bg-[#F7F6F6]">
      {/* Large outline watermark — sits behind “Fuel Coffee” */}
      {/* <span
        aria-hidden
        className="pointer-events-none absolute top-4 left-4 z-0 select-none text-[clamp(3.5rem,12vw,6.25rem)] leading-none font-bold text-transparent md:top-5 md:left-[60px]"
        style={{
          WebkitTextStroke: "1px rgba(0, 0, 0, 0.1)",
        }}
      >
        Case studies
      </span> */}
      


<div className="outline-title text-white pb-2 text-5xl  text-center mb-12 mt-8 pointer-events-none absolute top-4 left-4 z-0 select-none text-[clamp(3.5rem,12vw,6.25rem)] leading-none font-bold md:top-5 md:left-[60px]">
       Case studies
</div>


      <div className="relative z-[1] grid items-center lg:grid-cols-2 pl-12">
        <FadeIn direction="left" className="px-4 py-10 sm:px-8 md:py-12 lg:pl-[200px]  ">
          <h2 className="mb-4 text-[36px] lg:mt-28 font-bold leading-[1.15] tracking-tight text-gray-800 md:mb-5 md:text-[44px]">
            Fuel Coffee
          </h2>
          <p className="mb-8 max-w-xl text-base leading-relaxed text-black md:mb-10 md:text-lg">
            Fuel Coffee Company partnered with WooCommerce Launchpad to create a
            dynamic online store that reflects their brand&apos;s unique identity
            and caters to their growing customer base. Our team developed a
            custom WooCommerce site, featuring intuitive navigation and a secure,
            user-friendly interface. By integrating advanced payment gateways and
            inventory management systems, we streamlined their operations and
            enhanced the overall shopping experience. As a result, Fuel Coffee
            Company saw a significant increase in online sales and customer
            satisfaction, positioning them for continued growth in the competitive
            coffee market.
          </p>
          <div className="flex flex-wrap items-center gap-5 pt-2 md:pt-8">
            <GetStartedDialog />
            <LiveChatLink />
          </div>
        </FadeIn>

        <FadeIn direction="right" delay={0.15} className="w-full">
          <Image
            src={ASSETS.coffee}
            alt="Fuel Coffee case study"
            width={1120}
            height={826}
            className="h-auto w-full object-contain"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </FadeIn>
      </div>
    </section>
  );
}
