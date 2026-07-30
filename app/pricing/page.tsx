import type { Metadata } from "next";
import { TopBar } from "@/components/layout/top-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PricingHero } from "@/components/sections/pricing-hero";
import { Clients } from "@/components/sections/clients";
import { Pricing } from "@/components/sections/pricing";

export const metadata: Metadata = {
  title: "Packages | WooCommerce Launchpad",
  description:
    "Affordable WooCommerce pricing packages that support your marketing goals and drive long-term success.",
};

export default function PricingPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1">
        <PricingHero />
        <Clients />
        <Pricing title="Packages that Fit Every Budget" />
      </main>
      <Footer />
    </>
  );
}
