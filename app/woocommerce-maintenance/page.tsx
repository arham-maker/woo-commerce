import type { Metadata } from "next";
import { TopBar } from "@/components/layout/top-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ServicePageHero } from "@/components/sections/service-page-hero";
import { Clients } from "@/components/sections/clients";
import { DevelopmentServicesGrid } from "@/components/sections/development-services-grid";
import { Pricing } from "@/components/sections/pricing";
import { DreamWebsiteCta } from "@/components/sections/dream-website-cta";
import { Process } from "@/components/sections/process";
import { Trusted } from "@/components/sections/trusted";
import { Testimonials } from "@/components/sections/testimonials";
import { ReviewsCta } from "@/components/sections/reviews-cta";
import { Faq } from "@/components/sections/faq";
import { ContactCta } from "@/components/sections/contact-cta";
import { ASSETS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "WooCommerce Maintenance | WooCommerce Web",
  description:
    "At WooCommerce Web, we elevate your store with proactive maintenance. Our team expertly manages updates, security, and performance.",
};

const maintenanceServices = [
  {
    title: "Plugin & Site Updates",
    body: "Plugins make your site awesome. What’s not awesome is dealing with plugin updates. Fortunately, you don’t have to; we’ll keep them up-to-date to enhance usability and performance. Our WP Autopilot services grease the gears that keep your site running like a well-oiled machine.",
    icon: ASSETS.maintenanceServiceIcons[0],
  },
  {
    title: "Performance Optimization",
    body: "Site not fast enough? People will click over to your competitors. Even a great website design can get bogged down with speed issues. Our WooCommerce maintenance service plans will optimize your speed, performance, and keep the customers flowing.",
    icon: ASSETS.maintenanceServiceIcons[1],
  },
  {
    title: "Security Monitoring",
    body: "Hackers, trojans, security threats. Who needs ‘em? No one wants to deal with these headaches. Our security support will check for vulnerable code and potential threats so you’ll stay secure before a threat tries to take down your site.",
    icon: ASSETS.maintenanceServiceIcons[2],
  },
  {
    title: "Dedicated Hosting",
    body: "Our plans include free hosting optimized for WooCommerce. This allows us to have full control of the performance aspect of your site so that it runs as quick and safely as possible.",
    icon: ASSETS.maintenanceServiceIcons[3],
  },
  {
    title: "Development",
    body: "With the development package included with your plan, you also get a group of full-stack engineers who can build custom functionality on your site, adjust your theme, fix visual or functional bugs, etc.",
    icon: ASSETS.maintenanceServiceIcons[4],
  },
  {
    title: "Quick Responses",
    body: "Have an emergency? We’re standing by. Our quick response time ensures you never loose sales over technical issues with your site. You can also get direct access to our team via Slack.",
    icon: ASSETS.maintenanceServiceIcons[5],
  },
];

export default function WoocommerceMaintenancePage() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1">
        <ServicePageHero
          subtitle="Elevate Your Store with expert"
          title="WooCommerce Maintenance"
          description="At WooCommerce Web, we elevate your store with proactive maintenance. Our team expertly manages updates, security, and performance, so you can focus on growing your business and delighting customers."
          image={ASSETS.maintenanceHero}
          imageAlt="WooCommerce maintenance"
          imageWidth={784}
          imageHeight={569}
        />
        <Clients />
        <DevelopmentServicesGrid
          title="WooCommerce maintenance services: even bad ass stores need upkeep."
          lead="SeedProd is the Best Drag & Drop WordPress Website Builder Plugin. Here are the features that make SeedProd the most powerful and user-friendly page builder plugin in the market."
          items={maintenanceServices}
          showCta={false}
          gridClassName="gap-7 lg:gap-7"
        />
        <Pricing title="Packages that Fit Every Budget" />
        <DreamWebsiteCta />
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
