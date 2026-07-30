"use client";

import { ASSETS } from "@/lib/constants";
import { ServicePageHero } from "@/components/sections/service-page-hero";

export function DigitalMarketingHero() {
  return (
    <ServicePageHero
      subtitle="Digital Marketing Solutions that"
      title="Eliminate your toughest internet Marketing"
      description="Strike out your entire digital marketing to-do list, break through your growth plateau and see profound ROI with a single team of digital marketing specialists."
      image={ASSETS.digitalMarketingHero}
      imageAlt="Digital marketing solutions"
      imageWidth={732}
      imageHeight={630}
    />
  );
}
