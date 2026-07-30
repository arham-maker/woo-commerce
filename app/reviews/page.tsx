import type { Metadata } from "next";
import { TopBar } from "@/components/layout/top-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageBanner } from "@/components/sections/page-banner";
import { ReviewsPageSection } from "@/components/sections/reviews-page";

export const metadata: Metadata = {
  title: "See What Our Customers Say | WooCommerce Launchpad",
  description:
    "See why clients love working with WooCommerce Launchpad. Hear from satisfied clients about how our solutions helped them grow.",
};

export default function ReviewsPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1">
        <PageBanner
          title={
            <>
              See Why Clients Love <br className="hidden sm:block" />
              Working with Us
            </>
          }
          description="We have helped brands achieve success with strategic solutions tailored to their needs."
        />
        <ReviewsPageSection />
      </main>
      <Footer />
    </>
  );
}
