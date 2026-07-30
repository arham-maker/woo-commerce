import type { Metadata } from "next";
import { TopBar } from "@/components/layout/top-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ServicePageHero } from "@/components/sections/service-page-hero";
import { Clients } from "@/components/sections/clients";
import { DevelopmentServicesGrid } from "@/components/sections/development-services-grid";
import { Pricing } from "@/components/sections/pricing";
import { DreamWebsiteCta } from "@/components/sections/dream-website-cta";
import { UnlockingPossibilities } from "@/components/sections/unlocking-possibilities";
import { Process } from "@/components/sections/process";
import { Trusted } from "@/components/sections/trusted";
import { Testimonials } from "@/components/sections/testimonials";
import { ReviewsCta } from "@/components/sections/reviews-cta";
import { Faq } from "@/components/sections/faq";
import { ContactCta } from "@/components/sections/contact-cta";
import { ASSETS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Functionality with Tailored Plugins | Woo Commerce Launchpad",
  description:
    "WooCommerce Launchpad excels in developing robust, feature-rich plugins that boost functionality, optimize performance, and enrich the user journey.",
};

const aboutServices = [
  {
    title: "Custom Plugin Development",
    body: "Crafting unique plugins tailored to your specific business needs and website functionality.",
    icon: ASSETS.pluginAboutIcons[0],
  },
  {
    title: "WordPress Speed Optimization",
    body: "Implementing strategies to significantly improve your website's loading speed for a better user experience.",
    icon: ASSETS.pluginAboutIcons[1],
  },
  {
    title: "Custom Post Type Development",
    body: "Creating specialized post types to organize content uniquely and efficiently on your website.",
    icon: ASSETS.pluginAboutIcons[2],
  },
  {
    title: "WordPress Membership Website Development",
    body: "Designing and developing custom membership platforms for exclusive content access and user engagement.",
    icon: ASSETS.pluginAboutIcons[3],
  },
  {
    title: "WordPress Plugin Customization",
    body: "Modifying and enhancing existing plugins to better align with your website's specific requirements.",
    icon: ASSETS.pluginAboutIcons[4],
  },
  {
    title: "Custom Hooks Development",
    body: "Developing specific hooks to extend and modify the core functionality of your WordPress site.",
    icon: ASSETS.pluginAboutIcons[5],
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

export default function WoocommercePluginDevelopmentPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1">
        <ServicePageHero
          subtitle="Boost Your E-Commerce"
          title="Functionality with Tailored Plugins"
          description="WooCommerce Launchpad excels in developing robust, feature-rich plugins that boost functionality, optimize performance, and enrich the user journey."
          image={ASSETS.pluginDevHero}
          imageAlt="WooCommerce plugin development"
          imageWidth={938}
          imageHeight={629}
        />
        <Clients />
        <DevelopmentServicesGrid
          title={
            <>
              About Our Woocommerce Plugin <br className="hidden sm:block" />{" "}
              Development Service
            </>
          }
          lead="At WooCommerce Launchpad, our WordPress plugin development service is dedicated to crafting custom plugins tailored to your specific needs. We pride ourselves on our deep understanding of the WordPress Core API, which allows us to develop powerful plugins that seamlessly integrate with various WordPress versions and remain theme-neutral."
          items={aboutServices}
          showCta={false}
          gridClassName="gap-7 lg:gap-7"
        />
        <Pricing title="Packages that Fit Every Budget" />
        <DreamWebsiteCta />
        <UnlockingPossibilities
          title="Possibilities of our WooCommerce Development Services are limitless, unlocking a world of opportunities for your business."
          items={unlockingItems}
        />
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
