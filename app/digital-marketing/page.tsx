import type { Metadata } from "next";
import { TopBar } from "@/components/layout/top-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { DigitalMarketingHero } from "@/components/sections/digital-marketing-hero";
import { Clients } from "@/components/sections/clients";
import { DigitalMarketingFeatures } from "@/components/sections/digital-marketing-features";
import { DigitalMarketingPlatforms } from "@/components/sections/digital-marketing-platforms";
import { DigitalMarketingPricing } from "@/components/sections/digital-marketing-pricing";
import { Trusted } from "@/components/sections/trusted";
import { Testimonials } from "@/components/sections/testimonials";
import { ReviewsCta } from "@/components/sections/reviews-cta";
import { ContactCta } from "@/components/sections/contact-cta";

export const metadata: Metadata = {
  title: "Eliminate your toughest internet Marketing | Woo Commerce Launchpad",
  description:
    "Strike out your entire digital marketing to-do list and see profound ROI with a single team of digital marketing specialists.",
};

export default function DigitalMarketingPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1">
        <DigitalMarketingHero />
        <Clients />
        <DigitalMarketingFeatures />
        <DigitalMarketingPlatforms />
        <DigitalMarketingPricing />
        <Trusted />
        <Testimonials />
        <ReviewsCta />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
