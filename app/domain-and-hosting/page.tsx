import type { Metadata } from "next";
import { TopBar } from "@/components/layout/top-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { DomainHostingHero } from "@/components/sections/domain-hosting-hero";
import { Clients } from "@/components/sections/clients";
import { DomainHostingFeatures } from "@/components/sections/domain-hosting-features";
import { DomainHostingBadges } from "@/components/sections/domain-hosting-badges";
import { Testimonials } from "@/components/sections/testimonials";
import { ReviewsCta } from "@/components/sections/reviews-cta";
import { Faq } from "@/components/sections/faq";
import { ContactCta } from "@/components/sections/contact-cta";

export const metadata: Metadata = {
  title: "Get reliable hosting and web management solutions | Woo Commerce Launchpad",
  description:
    "At WooCommerce Launchpad, we offer comprehensive hosting and web management solutions that cater to every aspect of your online presence.",
};

export default function DomainAndHostingPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1">
        <DomainHostingHero />
        <Clients />
        <DomainHostingFeatures />
        <DomainHostingBadges />
        <Testimonials />
        <ReviewsCta />
        <Faq phoneDisplay="1 (888) 894-6005" />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
