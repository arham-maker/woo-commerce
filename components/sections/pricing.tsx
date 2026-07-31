"use client";

import { useState, type ReactNode } from "react";
import { Check } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in";
import { PackageCardActions } from "@/components/sections/package-card-actions";
import { cn } from "@/lib/utils";
import {
  Container,
  SectionTitle,
} from "@/components/layout/container";
import {
  ecommercePackages,
  formatPackagePrice,
  informativePackages,
  type PricingPackage,
} from "@/lib/packages";

function PackageCard({
  pkg,
  showViewDetails,
}: {
  pkg: PricingPackage;
  showViewDetails: boolean;
}) {
  return (
    <article
      className={cn(
        "relative flex h-[640px] flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        pkg.popular ? "border-brand ring-2 ring-brand/20" : "border-border",
      )}
    >
      {pkg.popular && (
        <div className="bg-brand px-4 py-1.5 text-center text-xs font-semibold tracking-wide text-white uppercase">
          Most Popular
        </div>
      )}
      <div className="flex min-h-0 flex-1 flex-col p-6">
        <div className="mb-4 shrink-0 border-b border-border pb-4">
          <h3 className="text-xl font-semibold">{pkg.name}</h3>
          <p className="mt-2 line-clamp-2 text-base text-muted">{pkg.tagline}</p>
          <div className="mt-4 flex items-end gap-2">
            <span className="text-4xl font-semibold text-brand">
              {formatPackagePrice(pkg)}
            </span>
            {pkg.original != null && (
              <span className="mb-1 text-base text-muted line-through">
                ${pkg.original.toLocaleString()}
              </span>
            )}
          </div>
          {pkg.original != null && (
            <p className="mt-1 text-sm font-medium text-star">Save 50% off!</p>
          )}
        </div>

        <p className="mb-3 shrink-0 text-xs font-semibold tracking-wide text-foreground/70 uppercase">
          Package Includes:
        </p>
        <ul className="mb-5 min-h-0 flex-1 space-y-2.5 overflow-y-auto pr-1 [scrollbar-width:thin]">
          {pkg.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-base text-muted"
            >
              <Check className="mt-1 size-4 shrink-0 text-brand" />
              {feature}
            </li>
          ))}
        </ul>

        <PackageCardActions
          showViewDetails={showViewDetails}
          slug={pkg.slug}
          orderPackage={{
            name: pkg.name,
            category: pkg.category,
            price: pkg.price,
            features: [...pkg.features],
          }}
        />
      </div>
    </article>
  );
}

export function Pricing({
  title = "Comprehensive Pricing and Package Options for Your WooCommerce Store",
  className,
  showViewDetails = true,
}: {
  title?: ReactNode;
  className?: string;
  showViewDetails?: boolean;
}) {
  const [tab, setTab] = useState<"ecommerce" | "informative">("ecommerce");
  const packages =
    tab === "ecommerce" ? ecommercePackages : informativePackages;

  return (
    <section
      id="pricing"
      className={cn("bg-[#F9F9F9] py-10 sm:py-16 md:py-[100px]", className)}
    >
      <Container>
        <FadeIn className="mx-auto mb-5 max-w-4xl text-center sm:mb-8">
          <SectionTitle>{title}</SectionTitle>
        </FadeIn>

        <FadeIn delay={0.1} className="mb-6 flex justify-center sm:mb-10">
          <div className="inline-flex rounded-full p-1">
            <button
              type="button"
              onClick={() => setTab("ecommerce")}
              className={cn(
                "rounded-full border-none bg-none px-4 py-2 text-sm font-bold transition-all sm:px-7 sm:py-2.5 sm:text-xl",
                tab === "ecommerce"
                  ? "bg-brand text-white shadow-sm"
                  : "text-gray-800 hover:text-foreground",
              )}
            >
              E-commerce
            </button>
            <button
              type="button"
              onClick={() => setTab("informative")}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-bold transition-all sm:px-7 sm:py-2.5 sm:text-xl",
                tab === "informative"
                  ? "bg-brand text-white shadow-sm"
                  : "text-gray-800 hover:text-foreground",
              )}
            >
              Informative
            </button>
          </div>
        </FadeIn>

        <Stagger
          key={tab}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {packages.map((pkg) => (
            <StaggerItem key={`${tab}-${pkg.slug}`}>
              <PackageCard pkg={pkg} showViewDetails={showViewDetails} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
