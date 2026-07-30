import type { Metadata } from "next";
import { TopBar } from "@/components/layout/top-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ServicePageHero } from "@/components/sections/service-page-hero";
import { Clients } from "@/components/sections/clients";
import { FeatureSplitSection } from "@/components/sections/feature-split-section";
import { Pricing } from "@/components/sections/pricing";
import { DevelopmentServicesGrid } from "@/components/sections/development-services-grid";
import { DreamWebsiteCta } from "@/components/sections/dream-website-cta";
import { IndustrySolutions } from "@/components/sections/industry-solutions";
import { TechStack } from "@/components/sections/tech-stack";
import { Process } from "@/components/sections/process";
import { Trusted } from "@/components/sections/trusted";
import { Testimonials } from "@/components/sections/testimonials";
import { ReviewsCta } from "@/components/sections/reviews-cta";
import { Faq } from "@/components/sections/faq";
import { ContactCta } from "@/components/sections/contact-cta";
import { ASSETS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "WooCommerce Development Services | Woo Commerce Launchpad",
  description:
    "Benefit from over 12 years of expertise in e-commerce solutions with WooCommerce development services.",
};

const developmentServices = [
  {
    title: (
      <>
        <span className="font-normal">WooCommerce </span>Theme Development
      </>
    ),
    body: "Craft visually stunning and highly functional online stores with WooCommerce theme development services. Create a custom theme tailored to your brand for a unique and engaging user experience.",
    icon: ASSETS.developmentServiceIcons[0],
  },
  {
    title: (
      <>
        <span className="font-normal">WooCommerce </span>Plugin Development
      </>
    ),
    body: "Craft visually stunning and highly functional online stores with WooCommerce theme development services. Create a custom theme tailored to your brand for a unique and engaging user experience.",
    icon: ASSETS.developmentServiceIcons[1],
  },
  {
    title: (
      <>
        <span className="font-normal">WooCommerce </span>Custom Development
      </>
    ),
    body: "Make your WooCommerce store work better for you with development services. Whether you need to change existing features or add new ones, we can tailor your online store to fit your business.",
    icon: ASSETS.developmentServiceIcons[2],
  },
  {
    title: (
      <>
        <span className="font-normal">WooCommerce </span>Migration Services
      </>
    ),
    body: "Seamlessly migrate your existing e-commerce store to WooCommerce with migration services. Ensure a smooth transition, minimizing downtime, and preserving your store's data and functionality.",
    icon: ASSETS.developmentServiceIcons[3],
  },
  {
    title: (
      <>
        <span className="font-normal">WooCommerce </span>Integration
      </>
    ),
    body: "Integrate WooCommerce with other third-party services and platforms to enhance your store's capabilities. From payment gateway integration to third-party API integration, we've got you covered.",
    icon: ASSETS.developmentServiceIcons[4],
  },
  {
    title: (
      <>
        <span className="font-normal">WooCommerce </span>Maintenance & Support
      </>
    ),
    body: "WooCommerce store running smoothly with maintenance & support services. Get regular updates, fixes for any problems, & help with technical issues to make sure your online store stays up and running.",
    icon: ASSETS.developmentServiceIcons[5],
  },
];

const industries = [
  {
    title: "Healthcare",
    body: "Empowering healthcare through e-commerce.",
    icon: ASSETS.industryIcons.healthcare,
  },
  {
    title: "Fintech",
    body: "Secure solutions for financial services.",
    icon: ASSETS.industryIcons.fintech,
  },
  {
    title: "Logistics",
    body: "Streamlined logistics for efficient operations.",
    icon: ASSETS.industryIcons.logistics,
  },
  {
    title: "Educations",
    body: "Educational platforms that inspire learning.",
    icon: ASSETS.industryIcons.educations,
  },
  {
    title: "Fleet Management",
    body: "Optimizing fleet operations with technology.",
    icon: ASSETS.industryIcons.fleetManagement,
  },
  {
    title: "Retail",
    body: "Transforming retail with online sales.",
    icon: ASSETS.industryIcons.retail,
  },
  {
    title: "Manufacturing",
    body: "Enhancing manufacturing with digital solutions.",
    icon: ASSETS.industryIcons.manufacturing,
  },
  {
    title: "Real Estate",
    body: "Boosting real estate with e-commerce.",
    icon: ASSETS.industryIcons.realEstate,
  },
  {
    title: "Oil and Gas",
    body: "Innovative e-commerce for energy sector.",
    icon: ASSETS.industryIcons.oilAndGas,
  },
  {
    title: "Event Management",
    body: "Event management simplified with e-commerce.",
    icon: ASSETS.industryIcons.eventManagement,
  },
  {
    title: "Sports",
    body: "Sports commerce that engages fans.",
    icon: ASSETS.industryIcons.sports,
  },
  {
    title: "Human Resources",
    body: "HR solutions integrated with e-commerce.",
    icon: ASSETS.industryIcons.humanResources,
  },
];

export default function CustomWoocommerceDevelopmentPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1">
        <ServicePageHero
          title="WooCommerce Development Services"
          description="Benefit from over 12 years of expertise in e-commerce solutions with Intelivita's WooCommerce development services."
          image={ASSETS.customDevelopmentHero}
          imageAlt="WooCommerce development services"
          imageWidth={766}
          imageHeight={623}
        />
        <Clients />
        <FeatureSplitSection
          title={
            <>
              WooCommerce Development
              <br />
              Services
            </>
          }
          lead={
            <>
              <p>
                WooCommerce development is essential for businesses aiming to
                establish a strong online presence and maximize e-commerce
                potential. It involves customizing and optimizing WooCommerce, a
                robust e-commerce platform on WordPress, to create seamless
                online stores.
              </p>
              <p>
                Businesses choose custom WooCommerce development for its
                flexibility and scalability, allowing extensive customization for
                unique online stores.
              </p>
            </>
          }
          image={ASSETS.customDevelopmentIntro}
          imageAlt="WooCommerce development"
          showCta
          tone="dark"
          backgroundImage={ASSETS.whyWooCommerceBg}
        />
        <Pricing title="Packages that Fit Every Budget" />
        <DevelopmentServicesGrid
          title="Our WooCommerce Development Services To Build Websites That Convert"
          lead="Enhance your online store's functionality and user experience with our bespoke WooCommerce development services."
          items={developmentServices}
        />
        <DreamWebsiteCta />
        <IndustrySolutions
          title="Industry-Focused WooCommerce Development Solutions For Various Industries"
          lead="Get custom WooCommerce solutions designed for your industry. Stand out and succeed online with our expertise. Whether you're in retail or healthcare, we have solutions tailored for you."
          items={industries}
        />
        <TechStack items={[...ASSETS.techStackIcons]} />
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
