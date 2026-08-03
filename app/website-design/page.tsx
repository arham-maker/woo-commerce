import type { Metadata } from "next";
import { TopBar } from "@/components/layout/top-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ServicePageHero } from "@/components/sections/service-page-hero";
import { Clients } from "@/components/sections/clients";
import { WebsiteDesignFeatures } from "@/components/sections/website-design-features";
import { ServicePackageCta } from "@/components/sections/service-package-cta";
import { ImageGallery } from "@/components/sections/image-gallery";
import { Pricing } from "@/components/sections/pricing";
import { Process } from "@/components/sections/process";
import { Trusted } from "@/components/sections/trusted";
import { Testimonials } from "@/components/sections/testimonials";
import { ReviewsCta } from "@/components/sections/reviews-cta";
import { Faq } from "@/components/sections/faq";
import { ContactCta } from "@/components/sections/contact-cta";
import { ASSETS } from "@/lib/constants";
import { WEBSITE_DESIGN_FAQS } from "@/lib/website-design-faqs";

export const metadata: Metadata = {
  title: "Website Design Services Starting from $350 Only",
  description:
    "Level up your online presence with WooCommerce Web'ss custom web design services.",
};

const websiteProcessSteps = [
  {
    num: "01",
    title: "Discovery & Planning",
    description:
      "We begin by understanding your business goals, target audience, and brand identity. This phase involves gathering requirements, analyzing competitors, and defining the project scope to create a solid foundation for the design.",
  },
  {
    num: "02",
    title: "Research & Strategy",
    description:
      "Our team conducts in-depth research on industry trends, user behavior, and design best practices. We develop a strategic plan that outlines the site’s structure, content strategy, and user experience goals to ensure a well-informed design approach.",
  },
  {
    num: "03",
    title: "Wireframing & Prototyping",
    description:
      "We create wireframes and prototypes to map out the website’s layout and functionality. This stage involves developing low-fidelity designs to visualize the structure and user flow, allowing for early feedback and adjustments.",
  },
  {
    num: "04",
    title: "Design & Development",
    description:
      "Once the wireframes are approved, we move on to designing the site’s visual elements, including color schemes, typography, and imagery. Our developers then bring the design to life, coding the site to ensure it is responsive, functional, and aligned with your brand.",
  },
  {
    num: "05",
    title: "Testing & Quality Assurance",
    description:
      "We rigorously test the website across various devices and browsers to identify and fix any issues. Our quality assurance process ensures that the site performs optimally, is free of bugs, and meets all design and functionality requirements.",
  },
  {
    num: "06",
    title: "Launch & Support",
    description:
      "After finalizing the design and development, we launch your website and monitor its performance to ensure a smooth transition. We provide ongoing support and maintenance to address any post-launch issues and make updates as needed.",
  },
];

export default function WebsiteDesignPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1">
        <ServicePageHero
          title={
            <span className="font-bold">
              Website Design Services Starting from{" "}
              <span className="text-brand">$350</span> Only
            </span>
          }
          description="Level up your online presence with WooCommerce Web'ss custom web design services. Our team of web professionals will conjure up a visually captivating and user-friendly website masterpiece that'll leave your competitors spellbound."
          image={ASSETS.websiteDesignHero}
          imageAlt="Website design services showcase"
          proof="trustpilot"
          alignItems="center"
          imageClassName="lg:w-[130%] lg:max-w-none"
          className="overflow-visible"
        />
        <Clients />
        <WebsiteDesignFeatures />
        <ServicePackageCta
          title="Build More than a Website"
          lead="From selling online, starting a blog and organizing events to promoting your business and building your community, create a website that can grow with you."
          image={ASSETS.websiteDesignCustom}
          imageAlt="Build more than a website"
        />
        <ImageGallery
          title="Exclusive Projects We’ve Worked On"
          lead="Witness our captivating portfolio of bespoke websites, where we transform our client’s visionary ideas into stunning digital realities that exceed all expectations."
          images={ASSETS.websiteDesign}
          columns={3}
          rounded
        />
        <Pricing
          title={
            <>
              Comprehensive Pricing and Package
              <br className="hidden sm:block" /> Options for Your Website
            </>
          }
        />
        <Process
          title="Our Comprehensive Website Design Process"
          steps={websiteProcessSteps}
        />
        <Trusted />
        <Testimonials />
        <ReviewsCta />
        <Faq items={WEBSITE_DESIGN_FAQS} phoneDisplay="+1 (888) 894-6005" />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
