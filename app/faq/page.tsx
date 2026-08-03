import type { Metadata } from "next";
import { TopBar } from "@/components/layout/top-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageBanner } from "@/components/sections/page-banner";
import { FaqPageSection } from "@/components/sections/faq-page";

export const metadata: Metadata = {
  title: "Got Questions? Contact Our Team For Expert Guidance. | WooCommerce Web",
  description:
    "Frequently asked questions about WooCommerce Web services, timelines, migrations, support, and more.",
};

export default function FaqPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1">
        <PageBanner
          title={
            <>
              Got Questions? <br className="hidden sm:block" />
              Contact Our Team For Expert Guidance.
            </>
          }
        />
        <FaqPageSection />
      </main>
      <Footer />
    </>
  );
}
