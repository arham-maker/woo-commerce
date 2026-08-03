import type { Metadata } from "next";
import { ASSETS } from "@/lib/constants";
import { LpHeader } from "@/components/lp/lp-header";
import { LpHero } from "@/components/lp/lp-hero";
import { LpFooter } from "@/components/lp/lp-footer";
import { LpServices } from "@/components/lp/lp-services";
import { LpTestimonials } from "@/components/lp/lp-testimonials";
import { LpCertified } from "@/components/lp/lp-certified";
import { Clients } from "@/components/sections/clients";
import { Portfolio } from "@/components/sections/portfolio";
import { Process } from "@/components/sections/process";
import { Pricing } from "@/components/sections/pricing";
import { Comprehensive } from "@/components/sections/comprehensive";
import { DreamWebsiteCta } from "@/components/sections/dream-website-cta";
import { UnlockingPossibilities } from "@/components/sections/unlocking-possibilities";
import { ContentCtaRows } from "@/components/sections/content-cta-rows";
import { ReviewsCta } from "@/components/sections/reviews-cta";
import { Faq } from "@/components/sections/faq";
import { ContactCta } from "@/components/sections/contact-cta";

export const metadata: Metadata = {
  title: "Expert WooCommerce Store Development Services - WooCommerce Web",
  description:
    "Supercharge your e-commerce success with expert WooCommerce solutions from WooCommerce Web.",
};

const unlockingItems = [
  { title: "Third Party Data Sync", icon: ASSETS.pluginUnlockIcons[0] },
  { title: "Payment Gateway Plugin", icon: ASSETS.pluginUnlockIcons[1] },
  { title: "Interactive User Interfaces", icon: ASSETS.pluginUnlockIcons[2] },
  {
    title: "Content Restriction & Paywall",
    icon: ASSETS.pluginUnlockIcons[3],
  },
  { title: "Integrate third party tool", icon: ASSETS.pluginUnlockIcons[4] },
  {
    title: "Membership and Subscription Management",
    icon: ASSETS.pluginUnlockIcons[5],
  },
  { title: "Social Media Integration", icon: ASSETS.pluginUnlockIcons[6] },
  {
    title: "Custom Analytics and Reporting",
    icon: ASSETS.pluginUnlockIcons[7],
  },
  { title: "AI Content Generation", icon: ASSETS.pluginUnlockIcons[8] },
  {
    title: "Automated News / Blog Websites",
    icon: ASSETS.pluginUnlockIcons[9],
  },
  {
    title: "Custom Forms and Data Collection",
    icon: ASSETS.pluginUnlockIcons[10],
  },
  {
    title: "Personalized Marketing Tools",
    icon: ASSETS.pluginUnlockIcons[11],
  },
];

const contentRows = [
  {
    title: (
      <>
        WooCommerce <br className="hidden sm:block" /> Development Services
      </>
    ),
    body: "We at WooCommerce Web know how to transform your online shop into a powerhouse of sales and success. Our seasoned developers wield the latest technologies and best practices to ensure that your tailor-made store is secure, scalable, and optimized for speed and performance.",
    image: ASSETS.lp.contentRows[0],
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
    image: ASSETS.lp.contentRows[1],
    imageAlt: "Power up your WooCommerce store",
    imageSide: "left" as const,
  },
  {
    title: "Custom Design solutions for high-volume stores",
    body: "Save time, sell more, and stay ahead of the competition — hire one of our trusted WooExpert agencies to help you start or optimize your WooCommerce store.",
    image: ASSETS.lp.contentRows[2],
    imageAlt: "Custom design solutions for high-volume stores",
    imageSide: "right" as const,
  },
];

export default function Lp1Page() {
  return (
    <>
      <LpHeader />
      <main className="flex-1">
        <LpHero />
        <Clients image={ASSETS.lp.clients} />
        <Portfolio
          lead="We at WooCommerce Web know how to transform your online shop into a powerhouse of sales and success. Our seasoned developers wield the latest technologies."
        />
        <Process />
        <Pricing
          showViewDetails={false}
          title={
            <>
              Comprehensive Pricing and Package
              <br className="hidden sm:block" />
              Options for Your WooCommerce Store
            </>
          }
        />
        <LpServices />
        <Comprehensive platformsValue={10} variant="lp" />
        <DreamWebsiteCta />
        <LpTestimonials />
        <LpCertified />
        <UnlockingPossibilities
          title="Possibilities of our WooCommerce Development Services are limitless, unlocking a world of opportunities for your business."
          items={unlockingItems}
        />
        <ContentCtaRows rows={contentRows} tone="dark" />
        <ReviewsCta
          reviewLine="Check out our Woocommerce website design customer reviews"
          ratingNote="(4.5 average from 2,355 rating)"
        />
        <Faq phoneDisplay="1 (888) 894-6005" />
        <ContactCta />
      </main>
      <LpFooter />
    </>
  );
}
