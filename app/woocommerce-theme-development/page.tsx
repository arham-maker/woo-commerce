import type { Metadata } from "next";
import { TopBar } from "@/components/layout/top-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ServicePageHero } from "@/components/sections/service-page-hero";
import { Clients } from "@/components/sections/clients";
import { FeatureSplitSection } from "@/components/sections/feature-split-section";
import { ThemeGettingStarted } from "@/components/sections/theme-getting-started";
import { Pricing } from "@/components/sections/pricing";
import { DesignToCodeConversion } from "@/components/sections/design-to-code-conversion";
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
  title: "Beautiful Websites In Minutes… | Woo Commerce Launchpad",
  description:
    "Built from the ground up for lightning-fast performance, yet filled with modern features that will make building websites fun again.",
};

const gettingStartedSteps = [
  {
    stepLabel: "Step 1:",
    title: "Choose a Starting Point",
    body: "Leave the design to us by starting your next website project with one of our professionally designed starter templates created with you in mind. We offer starter templates for:",
    bullets: [
      "Personal Brands / Influencers",
      "Ecommerce Seller",
      "Online Course Creators",
      "Local Businesses",
      "Online Agencies",
    ],
    image: ASSETS.themeDevSteps[0],
    imageAlt: "Choose a starting point",
    imageSide: "right" as const,
  },
  {
    stepLabel: "Step 2:",
    title: "Choose Your Colors",
    body: "Instantly change the look and feel of your website, sitewide by choosing one of our 12 pre-configured professional color palettes. We consulted with web design industry experts to create inclusive color palettes ideal for:",
    bullets: [
      "Professional Business Design",
      "Feminine Focused Business",
      "Accessible Ready Light & Dark Color Choices",
    ],
    image: ASSETS.themeDevSteps[1],
    imageAlt: "Choose your colors",
    imageSide: "left" as const,
  },
  {
    stepLabel: "Step 1:",
    title: "Choose Your Fonts",
    body: "As with our pre-selected color choices, you can also choose from 12 different professional font pairings to have your website reflect your personality.",
    image: ASSETS.themeDevSteps[2],
    imageAlt: "Choose your fonts",
    imageSide: "right" as const,
  },
];

const conversionCards = [
  {
    title: (
      <>
        Figma to <br /> WooCommerce
      </>
    ),
    icon: ASSETS.themeDevConversionIcons[0],
    bullets: [
      "Ensure your Figma designs are translated into WordPress themes with exact visual fidelity.",
      "Adapt designs for optimal viewing on all devices, maintaining a seamless user experience.",
      "Incorporate interactive features from Figma into WordPress, enhancing user engagement.",
    ],
  },
  {
    title: (
      <>
        Adobe XD to <br /> WooCommerce
      </>
    ),
    icon: ASSETS.themeDevConversionIcons[1],
    bullets: [
      "Preserve the original design aesthetics from Adobe XD when converting to WordPress.",
      "Optimize the user interface for intuitive navigation and interaction.",
      "Add dynamic features to your WordPress site, reflecting the interactive elements of Adobe XD designs.",
    ],
  },
  {
    title: (
      <>
        HTML5 to <br /> WooCommerce
      </>
    ),
    icon: ASSETS.themeDevConversionIcons[2],
    bullets: [
      "Upgrade from static HTML5 to a dynamic WordPress CMS for easier content updates.",
      "Utilize WordPress’s customization options to expand and modify your site as needed.",
      "OurImprove search engine rankings with WordPress’s built-in SEO tools and plugins.",
    ],
  },
  {
    title: (
      <>
        UI Prototypes <br /> to WooCommerce
      </>
    ),
    icon: ASSETS.themeDevConversionIcons[3],
    bullets: [
      "Convert UI prototypes into fully functional WordPress websites, staying true to your original vision.",
      "Bring UI prototype interactions to life, providing a dynamic user experience.",
      "Ensure your WordPress site is optimized for speed and performance, maintaining a smooth user journey.",
    ],
  },
];

export default function WoocommerceThemeDevelopmentPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1">
        <ServicePageHero
          subtitle="Effortlessly Build Fast &"
          title="Beautiful Websites In Minutes…"
          description="Built from the ground up for lightning-fast performance, yet filled with modern features that will make building websites fun again"
          image={ASSETS.themeDevHero}
          imageAlt="WooCommerce theme development"
          imageWidth={699}
          imageHeight={458}
          alignItems="center"
        />
        <Clients />
        <FeatureSplitSection
          title="Why Choose Our WooCommerce Theme Development Services"
          lead="At WooCommerce Web, we create custom themes that are not only visually stunning but also optimized for performance and user experience. Our expert developers ensure that your WooCommerce theme is tailored to meet your unique business needs, providing a seamless shopping experience for your customers."
          image={ASSETS.themeDevWhy}
          imageAlt="Why choose our WooCommerce theme development"
          showCta
          tone="light"
          className="bg-[#F9F9F9]"
        />
        <ThemeGettingStarted steps={gettingStartedSteps} />
        <Pricing title="Packages that Fit Every Budget" />
        <DesignToCodeConversion items={conversionCards} />
        <DreamWebsiteCta />
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
