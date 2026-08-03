import type { Metadata } from "next";
import { TopBar } from "@/components/layout/top-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ServicePageHero } from "@/components/sections/service-page-hero";
import { Clients } from "@/components/sections/clients";
import { ContentCtaRows } from "@/components/sections/content-cta-rows";
import { AboutBundleCta } from "@/components/sections/about-bundle-cta";
import { LoveLettersReviews } from "@/components/sections/love-letters-reviews";
import { ReviewsCta } from "@/components/sections/reviews-cta";
import { Faq } from "@/components/sections/faq";
import { ContactCta } from "@/components/sections/contact-cta";
import { ASSETS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us | WooCommerce Web",
  description:
    "A global design agency — phenomenal concepts, flawless execution, and seamless service delivery from WooCommerce Web.",
};

const aboutAgencyRows = [
  {
    title: "More than Your Average Design Agency",
    body: "Our internal team is made up of design professionals. They are industry-specific, very innovative, and very skilled. We are unique from other businesses since we don't outsource your job to independent contractors. Instead, we employ specialized designers who can produce Original Designs that satisfy our client's requirements.",
    image: ASSETS.aboutAgency,
    imageAlt: "Design agency team collaboration",
    imageSide: "right" as const,
  },
];

export default function AboutUsPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1">
        <ServicePageHero
          title={
            <span className="font-bold">
              A Global Design
              <br className="hidden sm:block" /> Agency
            </span>
          }
          description="Phenomenal concepts, flawless execution, and seamless service delivery is just the beginning at WooCommerce Web."
          image={ASSETS.aboutHero}
          imageAlt="A Global Design Agency"
          imageWidth={406}
          imageHeight={608}
          proof="trustpilot"
          alignItems="end"
          backgroundClassName="bg-[#EBF1F3]"
          contentClassName="pb-8 lg:pb-20"
          imageClassName="max-w-[260px] sm:max-w-[340px] lg:max-w-[406px]"
        />
        <Clients />
        <ContentCtaRows
          rows={aboutAgencyRows}
          className="py-14 md:pt-[110px] md:pb-[50px]"
        />
        <AboutBundleCta />
        <LoveLettersReviews />
        <ReviewsCta />
        <Faq phoneDisplay="1 (888) 894-6005" />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
