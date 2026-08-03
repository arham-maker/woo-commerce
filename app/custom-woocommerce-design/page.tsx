import type { Metadata } from "next";
import { TopBar } from "@/components/layout/top-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ServicePageHero } from "@/components/sections/service-page-hero";
import { Clients } from "@/components/sections/clients";
import { FeatureSplitSection } from "@/components/sections/feature-split-section";
import { ContentCtaRows } from "@/components/sections/content-cta-rows";
import { Pricing } from "@/components/sections/pricing";
import { Portfolio } from "@/components/sections/portfolio";
import { Process } from "@/components/sections/process";
import { Trusted } from "@/components/sections/trusted";
import { Testimonials } from "@/components/sections/testimonials";
import { ReviewsCta } from "@/components/sections/reviews-cta";
import { Faq } from "@/components/sections/faq";
import { ContactCta } from "@/components/sections/contact-cta";
import { ASSETS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Custom Woo-Commerce Designs | WooCommerce Web",
  description:
    "Get a personalized WooCommerce design that highlights your brand and delivers a seamless user experience.",
};

const whyWooItems = [
  { label: "User-Friendly Interface" },
  { label: "Customizable and Scalable" },
  { label: "Cost-Effective" },
  { label: "Seamless Integrations" },
  { label: "SEO-Friendly" },
];

const growthProcessItems = [
  {
    label: "Faster loading",
    body: (
      <>
        BrandName is{" "}
        <strong className="font-bold text-[#FFC498]">
          designed for performance
        </strong>{" "}
        so your site loads faster.
      </>
    ),
  },
  {
    label: "Built with SEO in mind",
    body: (
      <>
        Get the{" "}
        <strong className="font-bold text-[#FFC498]">SEO capabilities</strong>{" "}
        you need to optimize your site for search visibility.
      </>
    ),
  },
  {
    label: "Enterprise-grade security",
    body: "Wix is designed for performance so your site loads faster.",
  },
  {
    label: "Resilient infrastructure",
    body: (
      <>
        Multi-cloud hosting ensures{" "}
        <span className="font-semibold text-[#FFC498]">99.9%</span> uptime, even
        during traffic spikes.
      </>
    ),
  },
  {
    label: "Accessible for everyone",
    body: (
      <>
        Make your own website inclusive with{" "}
        <strong className="font-bold text-[#FFC498]">
          built-in accessibility tools
        </strong>
        .
      </>
    ),
  },
];

const designServiceRows = [
  {
    title: (
      <>
        WooCommerce <br className="hidden sm:block" /> Development Services
      </>
    ),
    body: "We at WooCommerce Web know how to transform your online shop into a powerhouse of sales and success. Our seasoned developers wield the latest technologies and best practices to ensure that your tailor-made store is secure, scalable, and optimized for speed and performance.",
    image: ASSETS.customDesignRows[0],
    imageAlt: "WooCommerce development services",
    imageSide: "right" as const,
  },
  {
    title: (
      <>
        Power up your <br className="hidden sm:block" /> WooCommerce store
      </>
    ),
    body: "Save time, sell more, and stay ahead of the competition — hire one of our trusted WooExpert agencies to help you start or optimize your WooCommerce store.",
    image: ASSETS.customDesignRows[1],
    imageAlt: "Power up your WooCommerce store",
    imageSide: "left" as const,
  },
  {
    title: "Custom Design solutions for high-volume stores",
    body: "Save time, sell more, and stay ahead of the competition — hire one of our trusted WooExpert agencies to help you start or optimize your WooCommerce store.",
    image: ASSETS.customDesignRows[2],
    imageAlt: "Custom design solutions for high-volume stores",
    imageSide: "right" as const,
  },
];

export default function CustomWoocommerceDesignPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1">
        <ServicePageHero
          subtitle="Brand-Focused Design"
          title={
            <span className="font-bold">
              Custom Woo-
              <br />
              Commerce Designs
            </span>
          }
          description="Get a personalized WooCommerce design that highlights your brand and delivers a seamless user experience."
          image={ASSETS.customDesignHero}
          imageAlt="Custom WooCommerce designs"
          imageWidth={802}
          imageHeight={604}
        />
        <Clients />
        <FeatureSplitSection
          title="Why WooCommerce is the Best Choice for Your Online Store"
          lead="Transform your e-commerce experience with WooCommerce’s powerful features and flexibility."
          image={ASSETS.whyWooCommerce}
          imageAlt="Why choose WooCommerce"
          items={whyWooItems}
          variant="bullets"
          showCta
          tone="dark"
          backgroundImage={ASSETS.whyWooCommerceBg}
        />
        <Pricing title="Packages that Fit Every Budget" />
        <ContentCtaRows rows={designServiceRows} />
        <FeatureSplitSection
          title="A website Process engineered for growth"
          image={ASSETS.websiteProcessGrowth}
          imageAlt="Website process engineered for growth"
          items={growthProcessItems}
          variant="process"
          tone="dark"
          backgroundImage={ASSETS.websiteProcessGrowthBg}
        />
        <Portfolio />
        <Process />
        <Trusted />
        <Testimonials />
        <ReviewsCta />
        <Faq phoneDisplay="1 (888) 894-6005" />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
