"use client";

import { ASSETS } from "@/lib/constants";
import { ServicePageHero } from "@/components/sections/service-page-hero";

export function DomainHostingHero() {
  return (
    <ServicePageHero
      subtitle="Get reliable"
      title="Hosting and web management solutions"
      description="At WooCommerce Web, we offer comprehensive hosting and web management solutions that cater to every aspect of your online presence."
      image={ASSETS.domainHostingHero}
      imageAlt="Domain and hosting solutions"
      imageWidth={677}
      imageHeight={625}
    />
  );
}
