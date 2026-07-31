"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in";
import { Container } from "@/components/layout/container";
import { PackageCardActions } from "@/components/sections/package-card-actions";
import { cn } from "@/lib/utils";
import {
  formatPackagePrice,
  ppcPackages,
  seoPackages,
} from "@/lib/packages";

export function DigitalMarketingPricing() {
  const [tab, setTab] = useState<"seo" | "ppc">("seo");
  const packages = tab === "seo" ? seoPackages : ppcPackages;

  return (
    <section className="bg-[#F9F9F9] py-16 md:py-[100px]">
      <Container>
        <FadeIn className="mx-auto mb-10 max-w-4xl text-center md:mb-12">
          <h2 className="text-[28px] font-medium leading-[1.15] tracking-tight text-[#333] md:text-[40px] lg:text-[44px]">
            Comprehensive Pricing and Package{" "}
            <br className="hidden sm:block" />
            Options for Your Digital Marketing
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} className="mb-12 flex justify-center">
          <div className="inline-flex items-center justify-center gap-0">
            {(
              [
                { id: "seo", label: "SEO" },
                { id: "ppc", label: "PPC" },
              ] as const
            ).map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setTab(item.id)}
                className={cn(
                  "inline-flex items-center rounded-full px-[50px] pt-5 pb-[17px] text-lg font-bold leading-[0.8] transition-colors",
                  tab === item.id
                    ? "bg-brand text-white"
                    : "bg-transparent text-black hover:text-brand",
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </FadeIn>

        <Stagger
          key={tab}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {packages.map((pkg, i) => (
            <StaggerItem key={pkg.slug} index={i}>
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
                    {formatPackagePrice(pkg)}
                  </span>
                  <span className="flex items-center justify-center rounded-[15px] bg-[#ECECEC] px-2.5 py-2 text-center text-xs font-normal leading-[1.4] text-black md:text-[12px]">
                    {pkg.priceSuffix}
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

                <PackageCardActions
                  slug={pkg.slug}
                  orderPackage={{
                    name: pkg.name,
                    category: pkg.category,
                    price: pkg.price,
                    features: [...pkg.features],
                  }}
                />
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
