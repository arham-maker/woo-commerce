import type { Metadata } from "next";
import { TopBar } from "@/components/layout/top-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThankYouHero } from "@/components/sections/thank-you-hero";

export const metadata: Metadata = {
  title: "Thank You | WooCommerce Web",
  description:
    "Thanks! We have received your request. Expect a quick reply from WooCommerce Web.",
};

export default function ThankYouPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1">
        <ThankYouHero />
      </main>
      <Footer />
    </>
  );
}
