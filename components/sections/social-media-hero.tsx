"use client";

import { ASSETS } from "@/lib/constants";
import { ServicePageHero } from "@/components/sections/service-page-hero";

export function SocialMediaHero() {
  return (
    <ServicePageHero
      title="A powerful solution for social media management"
      description="Our all-in-one social media management platform unlocks the full potential of social to transform not just your marketing strategy—but every area of your organization."
      image={ASSETS.socialMediaHero}
      imageAlt="Social media management dashboard"
      backgroundClassName="bg-[#AFD8F8]"
      imageWidth={592}
      imageHeight={568}
    />
  );
}
