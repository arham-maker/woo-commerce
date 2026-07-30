"use client";

import { Check, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { GetStartedDialog } from "@/components/get-started-dialog";

const packages = [
  {
    name: "Best Seller",
    tagline: "Ideal solution for beginners",
    price: 149,
    original: 298,
    features: [
      "4 Logo Design Concepts",
      "5 Revision Cycle",
      "1 Dedicated Designer",
      "24/7 Chat Support",
      "Free Color Options",
      "Free Fav Icon",
      "Print Friendly Design (PNG, JPG)",
      "100% Ownership Rights",
      "100% Money Back Guarantee",
    ],
  },
  {
    name: "The Ultimate",
    tagline: "Startup-friendly design package",
    price: 249,
    original: 498,
    features: [
      "6 Logo Design Concepts",
      "Unlimited Revisions",
      "2 Dedicated Designers",
      "Free Color Options",
      "Free Grayscale Format",
      "Free Icon",
      "24 To 48 Hours TAT",
      "All File Formats (Ai, PSD, EPS, PNG, JPG, PDF)",
      "100% Ownership Rights",
      "100% Money Back Guarantee",
    ],
  },
  {
    name: "Business Plus",
    tagline: "Optimal for small and medium businesses",
    price: 349,
    original: 698,
    features: [
      "8 Logo Design Concepts",
      "Unlimited Revisions",
      "3 Dedicated Designers",
      "Free Stationery Design (Business Card, Letterhead, Envelope)",
      "Free Icon",
      "Free Color Options",
      "Free Grayscale Format",
      "24 To 48 Hours TAT",
      "$50 Off On Website Order",
      "All File Formats (Ai, PSD, EPS, PNG, JPG, PDF)",
      "100% Ownership Rights",
      "100% Money Back Guarantee",
    ],
  },
];

export function LogoDesignPricing() {
  return (
    <section className="bg-[#F9F9F9] py-16 md:py-[100px]">
      <Container>
        <FadeIn className="mx-auto mb-10 max-w-4xl text-center md:mb-14">
          <h2 className="text-[28px] font-medium leading-[1.15] tracking-tight text-[#333] md:text-[40px] lg:text-[44px]">
            A Price for Every Budget. Choose the Right Plan for You!
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
                  <span className="flex flex-wrap items-center justify-center gap-1 rounded-[15px] bg-[#ECECEC] px-2.5 py-2 text-center text-xs font-normal leading-[1.4] text-black md:text-[12px]">
                    <span className="line-through">${pkg.original}</span>
                    <span>Save 50% off!</span>
                  </span>
                </div>

                <div className="flex w-full flex-col gap-5">
                  <h4 className="text-xl font-bold leading-[1.2] text-[#333]">
                    DESIGN PACKAGE INCLUDES:
                  </h4>
                  <ul className="flex max-h-[218px] flex-col gap-[15px] overflow-y-auto pr-1 [scrollbar-width:thin]">
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
