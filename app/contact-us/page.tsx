import type { Metadata } from "next";
import { TopBar } from "@/components/layout/top-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactUsBanner } from "@/components/sections/contact-us-banner";
import { ContactUsSection } from "@/components/sections/contact-us-section";

export const metadata: Metadata = {
  title: "Contact Us | Woo Commerce Launchpad",
  description:
    "Contact WooCommerce Launchpad for WooCommerce website design and development needs.",
};

export default function ContactUsPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1 bg-white">
        <ContactUsBanner />
        <ContactUsSection />
      </main>
      <Footer />
    </>
  );
}
