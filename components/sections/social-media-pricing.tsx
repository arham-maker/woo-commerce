"use client";

import { Check, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { GetStartedDialog } from "@/components/get-started-dialog";

const packages = [
  {
    name: "Starter",
    tagline: "Limited visibility, slow follower growth.",
    price: 1000,
    features: [
      "8 posts/month (1 platform)",
      "Basic graphics + captions",
      "Scheduling and posting",
      "Google Business Profile optimization",
    ],
  },
  {
    name: "Growth",
    tagline:
      "More engagement, multi-channel presence, stronger brand consistency.",
    price: 2000,
    features: [
      "12–16 posts/month (2 platforms)",
      "Reels + carousel content",
      "Community management (comments & inbox)",
      "$100–$200 in boosted posts",
    ],
  },
  {
    name: "Dominator",
    tagline:
      "Full domination across platforms, rapid reach, and sales-focused campaigns.",
    price: 3000,
    features: [
      "20+ posts/month (3+ platforms)",
      "Reels, carousels, stories, influencer collabs",
      "Full community management",
      "Paid campaigns setup + monthly reporting",
    ],
  },
];

export function SocialMediaPricing() {
  return (
    <section className="bg-[#F9F9F9] py-16 md:py-[100px]">
      <Container>
        <FadeIn className="mx-auto mb-10 max-w-4xl text-center md:mb-[60px]">
          <h2 className="text-[28px] font-medium leading-[1.15] tracking-tight text-[#333] md:text-[40px] lg:text-[44px]">
            Comprehensive Pricing and Package{" "}
            <br className="hidden sm:block" />
            Options for Your Social Meda Marketing
          </h2>
        </FadeIn>

        <Stagger className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {packages.map((pkg, i) => (
            <StaggerItem key={pkg.name} index={i}>
              <article className="flex h-full flex-col gap-[25px] rounded-[30px] bg-white p-[30px] transition-shadow duration-300 hover:shadow-[0_0_20px_4px_rgba(0,0,0,0.1)]">
                <div>
                  <h3 className="pb-2.5 text-[26px] font-semibold leading-[1.2] tracking-tight text-[#2A3342] md:text-[30px]">
                    {pkg.name}
                  </h3>
                  <p className="text-sm font-medium leading-[1.3] text-[#8896AB] md:text-[22px]">
                    {pkg.tagline}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[48px] font-semibold leading-[1.2] tracking-tight text-brand md:text-[55px]">
                    ${pkg.price}
                  </span>
                  <span className="flex items-center justify-center rounded-[15px] bg-[#ECECEC] px-2.5 py-2 text-center text-xs font-normal leading-[1.4] text-black md:text-[12px]">
                    /month
                  </span>
                </div>

                <div className="flex w-full flex-col gap-5">
                  <h4 className="text-xl font-bold leading-[1.2] text-[#333]">
                    Features:
                  </h4>
                  <ul className="flex flex-col gap-[15px]">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-[15px] text-base leading-[1.2] text-[#556987] md:text-lg"
                      >
                        <Check className="mt-0.5 size-4 shrink-0 text-star" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto flex w-full flex-col items-center gap-[15px]">
                  <GetStartedDialog
                    triggerLabel="Get Started Now"
                    triggerClassName="w-full"
                  />
                  <Button variant="outline" className="w-full" asChild>
                    <a href={SITE.phoneHref}>
                      <Phone className="size-4" />
                      {SITE.phone}
                    </a>
                  </Button>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
