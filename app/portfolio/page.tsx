import type { Metadata } from "next";
import { TopBar } from "@/components/layout/top-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PortfolioHero } from "@/components/sections/portfolio-hero";
import { Clients } from "@/components/sections/clients";
import { WebsitePortfolio } from "@/components/sections/website-portfolio";
import { Trusted } from "@/components/sections/trusted";
import { Testimonials } from "@/components/sections/testimonials";
import { ReviewsCta } from "@/components/sections/reviews-cta";
import { Faq } from "@/components/sections/faq";

export const metadata: Metadata = {
  title: "Please take a look at our elaborate portfolio | WooCommerce Web",
  description:
    "Explore WooCommerce Web'ss website portfolio and see the excellence we provide to our clients.",
};

export default function PortfolioPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1">
        <PortfolioHero />
        <Clients />
        <WebsitePortfolio />
        <Trusted />
        <Testimonials />
        <ReviewsCta />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
