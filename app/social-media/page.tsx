import type { Metadata } from "next";
import { TopBar } from "@/components/layout/top-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SocialMediaHero } from "@/components/sections/social-media-hero";
import { Clients } from "@/components/sections/clients";
import { SocialMediaBenefits } from "@/components/sections/social-media-benefits";
import { ServicePackageCta } from "@/components/sections/service-package-cta";
import { ImageGallery } from "@/components/sections/image-gallery";
import { SocialMediaPricing } from "@/components/sections/social-media-pricing";
import { Trusted } from "@/components/sections/trusted";
import { Testimonials } from "@/components/sections/testimonials";
import { ReviewsCta } from "@/components/sections/reviews-cta";
import { ContactCta } from "@/components/sections/contact-cta";
import { ASSETS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "A powerful solution for social media management | WooCommerce Web",
  description:
    "Our all-in-one social media management platform unlocks the full potential of social to transform your marketing strategy.",
};

export default function SocialMediaPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1">
        <SocialMediaHero />
        <Clients />
        <SocialMediaBenefits />
        <ServicePackageCta
          title="Get the Best Value for Your Investment!"
          lead="View our pricing options and choose a plan that delivers results and fits your budget."
          image={ASSETS.socialMediaCustom}
          imageAlt="Social media marketing value"
        />
        <ImageGallery
          title={
            <>
              Have a look at some of our{" "}
              <br className="hidden sm:block" />
              Social Media designs
            </>
          }
          lead="We have won many awards for our impressive client social media pages, here is why:"
          images={ASSETS.socialMediaGallery}
          columns={3}
          rounded
        />
        <SocialMediaPricing />
        <Trusted />
        <Testimonials />
        <ReviewsCta />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
