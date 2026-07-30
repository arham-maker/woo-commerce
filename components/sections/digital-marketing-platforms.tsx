"use client";

import Image from "next/image";
import { ASSETS } from "@/lib/constants";
import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/layout/container";

const platforms = [
  {
    label: "Tiktok Advertising Agency",
    img: ASSETS.digitalMarketingPlatforms[0],
  },
  {
    label: "Twitter Advertising Agency",
    img: ASSETS.digitalMarketingPlatforms[1],
  },
];

export function DigitalMarketingPlatforms() {
  return (
    <section className="mt-5 bg-[#333] py-10 md:mt-10 md:py-20 xl:mt-[60px] xl:py-[110px]">
      <Container>
        <FadeIn className="mb-8 md:mb-[60px] xl:mb-[90px]">
          <div className="grid items-center gap-5 md:grid-cols-2 md:gap-8">
            <h2 className="text-[28px] font-medium leading-[1.15] tracking-tight text-white md:text-[40px] lg:text-[44px]">
              Unlock Social Potential with Premier Social Media Marketing
              Services
            </h2>
            <p className="text-sm leading-relaxed text-white md:text-xl xl:text-2xl">
              Elevate your digital growth with WooCommerce Launchpad’s top-tier
              social media marketing services. We harness the power of each
              platform to precisely target and engage your audience, driving
              impactful results.
            </p>
          </div>
        </FadeIn>

        <div className="grid items-center gap-5 md:grid-cols-2 md:gap-8">
          <FadeIn direction="left">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {platforms.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-2.5 text-center md:gap-[30px]"
                >
                  <div className="flex w-full items-center justify-center">
                    <Image
                      src={item.img}
                      alt={item.label}
                      width={280}
                      height={280}
                      className="h-auto w-full max-w-[180px] object-contain md:max-w-[240px] xl:max-w-[280px]"
                      sizes="(max-width: 768px) 40vw, 20vw"
                    />
                  </div>
                  <span className="px-2.5 text-sm font-medium leading-[1.13] text-white md:px-5 md:text-xl xl:text-[30px]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.1}>
            <div className="ml-auto flex w-full flex-col items-start justify-center gap-2.5 rounded-[5px] bg-white p-[15px] md:w-[90%] md:gap-[15px] md:p-5 xl:gap-7 xl:rounded-[15px] xl:px-[52px] xl:py-[65px]">
              <p className="text-sm font-medium leading-[1.5] text-[#333] md:text-sm xl:text-lg xl:leading-[1.66]">
                At WooCommerce Launchpad, we craft tailored marketing strategies
                for TikTok and Twitter that align with your business goals. Our
                team creates engaging content, manages ad campaigns, and
                analyzes performance to maximize your reach and engagement. We
                optimize your presence on these platforms to boost brand
                visibility and drive meaningful conversions.
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
