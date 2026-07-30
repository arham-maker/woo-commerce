"use client";

import Image from "next/image";
import { ASSETS } from "@/lib/constants";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in";
import { Container } from "@/components/layout/container";

const features = [
  {
    title: "Reclaim your work day",
    body: "You only have so many hours in the day. Make the most of them with BrandName, which provides you with a marketing team that includes a dedicated account manager, SEO expert, web designer, web developer, & all the other skillsets you need to deliver great digital marketing campaigns.",
    icon: ASSETS.digitalMarketingIcons[0],
  },
  {
    title: "Set your involvement level",
    body: "Looking for a hands-free solution? Want to brainstorm new marketing initiatives? Prefer to implement site changes yourself? No matter your preferred level of involvement, you can customize our website marketing services to meet your unique needs.",
    icon: ASSETS.digitalMarketingIcons[1],
  },
  {
    title: "Get your expert advice on-demand",
    body: "No matter how valuable and engaging your content, it won’t generate conversions if it doesn’t reach the right audience. Marketing through social media allows you to identify",
    icon: ASSETS.digitalMarketingIcons[2],
  },
  {
    title: "Get your expert advice on-demand",
    body: "With more than 500 in-house experts and 28 years of experience, our digital marketing company has the knowledge you need to navigate market changes, research marketing channels, and alleviate data silos.",
    icon: ASSETS.digitalMarketingIcons[3],
  },
  {
    title: "Accelerate Marketing ROI",
    body: "You only have so many hours in the day. Make the most of them with BrandName, which provides you with a marketing team that includes a dedicated account manager, SEO expert, web designer, web developer, & all the other skillsets you need to deliver great digital marketing campaigns.",
    icon: ASSETS.digitalMarketingIcons[4],
  },
  {
    title: "Track your ROI by channel",
    body: "Looking for a hands-free solution? Want to brainstorm new marketing initiatives? Prefer to implement site changes yourself? No matter your preferred level of involvement, you can customize our website marketing services to meet your unique needs.",
    icon: ASSETS.digitalMarketingIcons[5],
  },
  {
    title: "Scale your strategy",
    body: "Whether you want to try a new strategy or expand an existing one, WebFX’s team of 500+ specialists can meet your growing needs. So, say goodbye to the hassle of switching agencies and hiring freelancers because, with our digital marketing",
    icon: ASSETS.digitalMarketingIcons[6],
  },
  {
    title: "Outperform competition",
    body: "Let competitors take second place with website marketing services that have helped businesses like yours adapt to change for over 28 years. From market disruptions to industry changes to marketing shifts, we can help your business turn challenges into opportunities.",
    icon: ASSETS.digitalMarketingIcons[7],
  },
  {
    title: "Streamline your marketing",
    body: "With WebFX, you don’t have to work with a list of agencies. As a full-service digital marketing services company, we can build, implement, and manage your omnichannel marketing strategy — and save you the headaches of working with and coordinating between multiple agencies.",
    icon: ASSETS.digitalMarketingIcons[8],
  },
];

export function DigitalMarketingFeatures() {
  return (
    <section className="bg-white py-12 md:pt-[95px] md:pb-[50px]">
      <Container>
        <FadeIn className="mx-auto mb-10 max-w-4xl px-5 text-center md:mb-14">
          <h2 className="mb-5 text-[28px] font-medium leading-[1.15] tracking-tight text-[#333] md:mb-6 md:text-[40px] lg:text-[44px]">
            Your search for Internet marketing services ends here
          </h2>
          <p className="text-base leading-relaxed text-[#333] md:text-lg">
            When your company partners with you:
          </p>
        </FadeIn>

        <Stagger className="grid gap-[42px] sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, i) => (
            <StaggerItem key={`${item.title}-${i}`} index={i}>
              <article className="flex h-full flex-col items-start justify-start gap-2.5 rounded-[10px] bg-[#F7F6F6] p-[15px] text-left transition-shadow duration-300 hover:shadow-[0_0_20px_2px_rgba(0,0,0,0.1)] xl:gap-5 xl:rounded-[15px] xl:p-[30px]">
                <div className="flex h-[60px] items-center xl:h-[65px]">
                  <Image
                    src={item.icon}
                    alt=""
                    width={52}
                    height={52}
                    className="h-auto max-h-full w-auto object-contain"
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
