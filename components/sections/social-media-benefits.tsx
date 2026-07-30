"use client";

import type { LucideIcon } from "lucide-react";
import {
  Monitor,
  Search,
  Crosshair,
  Users,
  SlidersHorizontal,
  HeartHandshake,
} from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in";
import { Container } from "@/components/layout/container";

const benefits: {
  title: string;
  body: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Better Online Exposure",
    body: "Social media marketing is continually progressing and adapting, becoming a powerful online marketing resource for companies and brands.",
    icon: Monitor,
  },
  {
    title: "High Search Rankings",
    body: "Search engines like Google and Bing now integrate updates, Tweets, profiles and comments into their results pages, recognizing the importance of social interaction.",
    icon: Search,
  },
  {
    title: "Specific Audience Targeting",
    body: "No matter how valuable and engaging your content, it won’t generate conversions if it doesn’t reach the right audience. Marketing through social media allows you to identify",
    icon: Crosshair,
  },
  {
    title: "Improved Customer Reach",
    body: "A Global Web Index study shows that approximately 54 percent of online users utilize social media platforms for product research. Furthermore, 49 percent of consumers",
    icon: Users,
  },
  {
    title: "Complete Brand Control",
    body: "Social media marketing packages are tailored to your specific needs and financial capacity. This means you have complete control over your branding, budget and social media content",
    icon: SlidersHorizontal,
  },
  {
    title: "Enhanced Customer Trust",
    body: "Understanding how to use social media for marketing allows you to build a thought leadership brand and create deep, meaningful connections with your followers",
    icon: HeartHandshake,
  },
];

export function SocialMediaBenefits() {
  return (
    <section className="bg-white py-12 md:pt-[95px] md:pb-[50px]">
      <Container>
        <FadeIn className="mx-auto mb-10 max-w-4xl px-5 text-center md:mb-14">
          <h2 className="mb-5 text-[28px] font-medium leading-[1.15] tracking-tight text-[#333] md:mb-6 md:text-[40px] lg:text-[44px]">
            What Are the Benefits of Social Media Marketing Services
          </h2>
          <p className="text-base leading-relaxed text-[#333] md:text-lg">
            Social media marketing services have numerous advantages for
            startups and established brands. With the right social media
            marketing plan and campaign monitoring system, social media content
            marketing can lead to increased search traffic, better SEO,
            healthier customer engagement and improved brand loyalty.
          </p>
        </FadeIn>

        <Stagger className="grid gap-[42px] sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, i) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title} index={i}>
                <article className="flex h-full flex-col items-start justify-start gap-2.5 rounded-[10px] bg-[#F7F6F6] p-[15px] text-left transition-shadow duration-300 hover:shadow-[0_0_20px_2px_rgba(0,0,0,0.1)] xl:gap-5 xl:rounded-[15px] xl:p-[30px]">
                  <div className="flex size-[60px] shrink-0 items-center justify-center rounded-full bg-[#FF6C6C] xl:size-[65px]">
                    <Icon
                      className="size-7 text-white xl:size-8"
                      strokeWidth={1.75}
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
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
