"use client";

import Image from "next/image";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in";
import { Container } from "@/components/layout/container";

const features = [
  {
    title: "Competitor Research",
    body: "We analyse your competitors, assess your goods and services, and create a branding strategy.",
    icon: "/icons/website-design/competitor-research.svg",
  },
  {
    title: "Website Sitemap Finalization",
    body: "Our professionals decide on the ideal web architecture to attract reliable customers website.",
    icon: "/icons/website-design/sitemap.svg",
  },
  {
    title: "Pages With Custom Designs",
    body: "Each page has a unique design, limitless modifications, and stock images.",
    icon: "/icons/website-design/custom-designs.svg",
  },
  {
    title: "Website Content Creation",
    body: "Unique content is written and SEO to improve online performance & search rankings.",
    icon: "/icons/website-design/content-creation.svg",
  },
  {
    title: "Website Development",
    body: "We analyze your competitors, assess your goods and services, and create a branding strategy.",
    icon: "/icons/website-design/development.svg",
  },
  {
    title: "CMS",
    body: "Our professionals decide on the ideal web architecture to attract reliable customers website.",
    icon: "/icons/website-design/cms.svg",
  },
  {
    title: "Technical Training of Your Site",
    body: "Each page has a unique design, limitless modifications, and stock images.",
    icon: "/icons/website-design/training.svg",
  },
  {
    title: "Other Items",
    body: "Unique content is written and SEO to improve online performance & search rankings.",
    icon: "/icons/website-design/other.svg",
  },
] as const;

export function WebsiteDesignFeatures() {
  return (
    <section className="bg-white py-12 md:pt-[95px] md:pb-[50px]">
      <Container>
        <FadeIn className="mx-auto mb-10 max-w-4xl px-5 text-center md:mb-14">
          <h2 className="mb-5 text-[28px] font-medium leading-[1.15] tracking-tight text-[#333] md:mb-6 md:text-[40px] lg:text-[44px]">
            Let Industry Experts in Design and Development Boost Your Online
            Visibility.
          </h2>
          <p className="text-base leading-relaxed text-[#333] md:text-lg">
            You get the following in every package:
          </p>
        </FadeIn>

        <Stagger className="grid gap-[42px] sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, i) => (
            <StaggerItem key={item.title} index={i}>
              <article className="flex h-full flex-col items-start justify-start gap-2.5 rounded-[10px] bg-[#F7F6F6] p-[15px] text-left transition-shadow duration-300 hover:shadow-[0_0_20px_2px_rgba(0,0,0,0.1)] xl:gap-5 xl:rounded-[15px] xl:p-[30px]">
                <div className="flex h-[60px] items-center xl:h-[65px]">
                  <Image
                    src={item.icon}
                    alt=""
                    width={65}
                    height={65}
                    className="h-auto w-[48px] object-contain xl:w-[65px]"
                  />
                </div>
                <div>
                  <h3 className="mb-[15px] text-base font-bold leading-none text-[#333] md:text-lg xl:mb-[25px] xl:text-2xl">
                    {item.title}
                  </h3>
                  <p className="text-xs leading-[1.33] text-[#333] md:text-sm xl:text-lg">
                    {item.body}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
