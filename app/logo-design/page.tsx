import type { Metadata } from "next";
import { TopBar } from "@/components/layout/top-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LogoDesignHero } from "@/components/sections/logo-design-hero";
import { Clients } from "@/components/sections/clients";
import { LogoDesignTypes } from "@/components/sections/logo-design-types";
import { LogoDesignCustomCta } from "@/components/sections/logo-design-custom-cta";
import { ImageGallery } from "@/components/sections/image-gallery";
import { LogoDesignPricing } from "@/components/sections/logo-design-pricing";
import { Process } from "@/components/sections/process";
import { Trusted } from "@/components/sections/trusted";
import { Testimonials } from "@/components/sections/testimonials";
import { ReviewsCta } from "@/components/sections/reviews-cta";
import { Faq } from "@/components/sections/faq";
import { ContactCta } from "@/components/sections/contact-cta";
import { ASSETS } from "@/lib/constants";
import { LOGO_DESIGN_FAQS } from "@/lib/logo-design-faqs";

export const metadata: Metadata = {
  title: "Get a Professional Logo Designer for $149 only | WooCommerce Launchpad",
  description:
    "Our logo designers craft professional, bespoke, and customer-centric logo designs starting at $149.",
};

const logoProcessSteps = [
  {
    num: "01",
    title: "Discovery",
    description:
      "We start by exploring your brand's core values, mission, and target audience to align the logo design with your brand's identity.",
  },
  {
    num: "02",
    title: "Research",
    description:
      "We conduct thorough research on industry trends and competitors to create a logo that stands out and captures your brand's uniqueness.",
  },
  {
    num: "03",
    title: "Conceptualization",
    description:
      "We brainstorm and sketch multiple design concepts, experimenting with different styles, fonts, and elements to find the best fit for your brand.",
  },
  {
    num: "04",
    title: "Design",
    description:
      "We develop the chosen concepts into detailed, polished logo designs, focusing on visual appeal and functional versatility.",
  },
  {
    num: "05",
    title: "Feedback",
    description:
      "We present the designs for your review, incorporating your feedback and making revisions to ensure the final logo meets your vision and expectations.",
  },
  {
    num: "06",
    title: "Finalization",
    description:
      "We provide the completed logo in various formats, including vector files, ensuring it's ready for all types of media and uses.",
  },
];

export default function LogoDesignPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1">
        <LogoDesignHero />
        <Clients />
        <LogoDesignTypes />
        <LogoDesignCustomCta />
        <ImageGallery
          title={
            <>
              Have a look at some of our{" "}
              <br className="hidden sm:block" />
              logo designs
            </>
          }
          lead="We have won many awards for our impressive logos, here is why:"
          images={ASSETS.logoDesignGallery}
          columns={4}
          rounded
        />
        <LogoDesignPricing />
        <Process
          title="Our 6-Step Process to Create the Perfect Logo You'll Love"
          steps={logoProcessSteps}
        />
        <Trusted />
        <Testimonials />
        <ReviewsCta />
        <Faq items={LOGO_DESIGN_FAQS} phoneDisplay="+1 (888) 894-6005" />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
