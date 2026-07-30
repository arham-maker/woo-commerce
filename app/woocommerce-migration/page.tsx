import type { Metadata } from "next";
import { TopBar } from "@/components/layout/top-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ServicePageHero } from "@/components/sections/service-page-hero";
import { Clients } from "@/components/sections/clients";
import { FeatureSplitSection } from "@/components/sections/feature-split-section";
import { Pricing } from "@/components/sections/pricing";
import { UnlockingPossibilities } from "@/components/sections/unlocking-possibilities";
import { DreamWebsiteCta } from "@/components/sections/dream-website-cta";
import { Portfolio } from "@/components/sections/portfolio";
import { Process } from "@/components/sections/process";
import { Trusted } from "@/components/sections/trusted";
import { Testimonials } from "@/components/sections/testimonials";
import { ReviewsCta } from "@/components/sections/reviews-cta";
import { Faq } from "@/components/sections/faq";
import { ContactCta } from "@/components/sections/contact-cta";
import { ASSETS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Migration for a Seamless Transition | Woo Commerce Launchpad",
  description:
    "At WooCommerce Launchpad, we ensure a smooth, efficient migration of your WooCommerce store. Our expert team handles all aspects, safeguarding data, minimizing downtime, and preserving performance.",
};

const migrationServices = [
  {
    title: "Full Data Migration",
    body: "Transfer all your products, customer information, and orders accurately to your new WooCommerce setup.",
  },
  {
    title: "Theme and Design Migration",
    body: "Ensure that your existing theme and design are seamlessly integrated into your new WooCommerce site.",
  },
  {
    title: "Plugin Migration and Integration",
    body: "Move your existing plugins and set up new integrations to match your store’s functionality.",
  },
  {
    title: "SEO Preservation",
    body: "Maintain your current search engine rankings by preserving SEO settings and redirects throughout the migration.",
  },
  {
    title: "Performance Optimization",
    body: "Optimize the new setup for speed and performance, ensuring a smooth transition and enhanced user experience.",
  },
  {
    title: "Post-Migration Support",
    body: "Provide ongoing support and troubleshooting to address any issues and ensure a flawless transition.",
  },
];

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

export default function WoocommerceMigrationPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1">
        <ServicePageHero
          subtitle="Expert WooCommerce"
          title="Migration for a Seamless Transition"
          description="At WooCommerce Launchpad, we ensure a smooth, efficient migration of your WooCommerce store. Our expert team handles all aspects, safeguarding data, minimizing downtime, and preserving performance."
          image={ASSETS.migrationHero}
          imageAlt="WooCommerce migration"
          imageWidth={667}
          imageHeight={592}
          alignItems="center"
        />
        <Clients />
        <FeatureSplitSection
          title="Why Choose WooCommerce Launchpad for Migration?"
          lead="WooCommerce Launchpad brings unparalleled expertise to every migration project, ensuring a seamless and stress-free transition. Our meticulous approach and commitment to excellence mean your WooCommerce store will be up and running smoothly, with minimal disruption and maximum efficiency."
          image={ASSETS.migrationWhy}
          imageAlt="Why choose WooCommerce Launchpad for migration"
          showCta
          tone="light"
          className="pb-0 md:pb-0"
        />
        <Pricing title="Packages that Fit Every Budget" />
        <UnlockingPossibilities
          title="Our WooCommerce Migration Services Include"
          items={migrationServices}
          className="md:pb-12"
        />
        <DreamWebsiteCta />
        <UnlockingPossibilities
          title="Possibilities of our WooCommerce Development Services are limitless, unlocking a world of opportunities for your business."
          items={unlockingItems}
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
