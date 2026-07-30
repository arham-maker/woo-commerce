"use client";

import { useState, type ReactNode } from "react";
import { Check, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { GetStartedDialog } from "@/components/get-started-dialog";
import { cn } from "@/lib/utils";
import {
  Container,
  SectionTitle,
} from "@/components/layout/container";

const ecommercePackages = [
  {
    name: "Starter Launch",
    tagline: "For beginners who just want to get online quickly.",
    price: 350,
    original: 700,
    features: [
      "WooCommerce Store Setup",
      "10 Products Uploaded",
      "Mobile Responsive Store",
      "Product Categories Setup",
    ],
  },
  {
    name: "Launch Store",
    tagline: "For small stores ready to scale up from day one.",
    price: 650,
    original: 1300,
    features: [
      "Everything in Starter PLUS",
      "30 Products Uploaded",
      "Payment Gateway Integration",
      "SSL & Security Setup",
      "Basic Checkout Setup",
    ],
  },
  {
    name: "Growth Store",
    tagline: "For ambitious sellers who want growth-focused features.",
    price: 1250,
    original: 2500,
    features: [
      "Everything in Launch Store PLUS",
      "75 Products Uploaded",
      "Premium Theme Customization",
      "Shipping & Tax Setup",
      "Discount Coupons Setup",
      "Inventory Management",
      "Product Variations Setup",
      "Order Notification Emails",
    ],
  },
  {
    name: "Pro Seller",
    tagline: "For growing brands that need automation and global reach.",
    price: 1950,
    original: 3900,
    popular: true,
    features: [
      "Everything in Growth PLUS",
      "150 Products Uploaded",
      "Upsells & Cross-Sells",
      "Product Reviews",
      "Wishlist Functionality",
      "Cart Abandonment Recovery",
      "Email Marketing Integration",
    ],
  },
  {
    name: "Scale Business",
    tagline: "For established businesses with complex operations.",
    price: 3500,
    original: 7000,
    features: [
      "Everything in Pro Seller PLUS",
      "Unlimited Products",
      "Multiple Payment Gateways",
      "Advanced Shipping Rules",
      "Multi-Currency Support",
      "Analytics Dashboard",
      "Speed Optimization",
      "Automated Email Notifications",
      "Conversion Optimization",
    ],
  },
  {
    name: "Enterprise",
    tagline:
      "For high-volume brands that want a strategic partner to grow revenue continuously.",
    price: 7000,
    original: 14000,
    features: [
      "Everything in Scale Business PLUS",
      "Custom Design & UX",
      "Custom Plugin Development",
      "Client/User Dashboard Area",
      "Marketplace Integrations",
      "CRM / ERP Integrations",
      "Automation Workflows",
      "Invoicing System",
      "Complete Database Creation",
      "Dedicated Project Manager",
      "VIP Priority Support",
    ],
  },
];

const informativePackages = [
  {
    name: "Starter",
    tagline:
      "Let our expert team design a Wix website that drives results and takes your online business to new heights.",
    price: 299,
    original: 598,
    features: [
      "1–3 page site",
      "Contact form with spam filter",
      "Basic brand styling (colors & fonts)",
      "Launch in 14 days",
    ],
  },
  {
    name: "Standard",
    tagline:
      "Our team will help you build a stunning website that attracts visitors and converts them into loyal customers.",
    price: 499,
    original: 998,
    features: [
      "Includes all features from Starter",
      "4–5 page site (Home, About, Services, Blog, Contact)",
      "Blog/news section for updates",
      "Lead capture form with auto-email response",
      "Social media link integration",
    ],
  },
  {
    name: "Professional",
    tagline:
      "Get in touch with our team of Wix experts to build a site that drives results for your business.",
    price: 799,
    original: 1598,
    popular: true,
    features: [
      "Includes all features from Standard",
      "6–8 pages",
      "Custom visuals & icons",
      "Testimonial or case study section",
      "Booking/calendar integration",
      "Blog with category filters",
      "Image gallery or portfolio section",
      "Mobile & tablet responsive",
    ],
  },
  {
    name: "Business",
    tagline:
      "From design to launch, we'll help you create a Wix website that perfectly reflects your brand.",
    price: 1199,
    original: 2398,
    features: [
      "Includes all features from Professional",
      "8–10 pages",
      "Live chat integration",
      "Social media feed display",
      "Newsletter signup with email automation",
      "FAQ or resources section",
      "Google Analytics setup",
      "Mobile & tablet responsive",
    ],
  },
  {
    name: "Premium",
    tagline:
      "Let's collaborate on a website that's optimized, engaging, and designed to help your business thrive.",
    price: 1699,
    original: 3398,
    features: [
      "Includes all features from Business",
      "10–12 pages",
      "Review platform integration",
      "Event or promotion calendar",
      "Speed optimization for mobile users",
      "Landing page for Google Ads",
      "Google Map embed for location",
    ],
  },
  {
    name: "Ultimate",
    tagline:
      "Our expert team will build a Wix website that's tailored to your brand and designed to boost your online presence.",
    price: 2299,
    original: 4598,
    features: [
      "Includes all features from Premium",
      "12+ custom-designed pages",
      "Custom lead magnets (PDFs, checklists)",
      "Multi-location setup",
      "Blog automation (RSS or YouTube)",
      "1 month ongoing optimization",
      "Priority support",
    ],
  },
];

type Package = (typeof ecommercePackages)[number];

function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <article
      className={cn(
        "relative flex h-[640px] flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        "popular" in pkg && pkg.popular
          ? "border-brand ring-2 ring-brand/20"
          : "border-border",
      )}
    >
      {"popular" in pkg && pkg.popular && (
        <div className="bg-brand px-4 py-1.5 text-center text-xs font-semibold tracking-wide text-white uppercase">
          Most Popular
        </div>
      )}
      <div className="flex min-h-0 flex-1 flex-col p-6">
        <div className="mb-4 shrink-0 border-b border-border pb-4">
          <h3 className="text-xl font-semibold">{pkg.name}</h3>
          <p className="mt-2 line-clamp-2 text-base text-muted">{pkg.tagline}</p>
          <div className="mt-4 flex items-end gap-2">
            <span className="text-4xl font-semibold text-brand">
              ${pkg.price.toLocaleString()}
            </span>
            <span className="mb-1 text-base text-muted line-through">
              ${pkg.original.toLocaleString()}
            </span>
          </div>
          <p className="mt-1 text-sm font-medium text-star">Save 50% off!</p>
        </div>

        <p className="mb-3 shrink-0 text-xs font-semibold tracking-wide text-foreground/70 uppercase">
          Package Includes:
        </p>
        <ul className="mb-5 min-h-0 flex-1 space-y-2.5 overflow-y-auto pr-1 [scrollbar-width:thin]">
          {pkg.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-base text-muted"
            >
              <Check className="mt-1 size-4 shrink-0 text-brand" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-auto shrink-0 space-y-3">
          <GetStartedDialog
            triggerLabel="Get Started Now"
            triggerClassName="w-full"
            orderPackage={{
              name: pkg.name,
              category: "web",
              price: pkg.price,
              features: [...pkg.features],
            }}
          />
          <Button variant="outline" className="w-full" asChild>
            <a href={SITE.phoneHref}>
              <Phone className="size-4" />
              {SITE.phone}
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}

export function Pricing({
  title = "Comprehensive Pricing and Package Options for Your WooCommerce Store",
  className,
}: {
  title?: ReactNode;
  className?: string;
}) {
  const [tab, setTab] = useState<"ecommerce" | "informative">("ecommerce");
  const packages =
    tab === "ecommerce" ? ecommercePackages : informativePackages;

  return (
    <section
      id="pricing"
      className={cn("bg-[#F9F9F9] py-10 sm:py-16 md:py-[100px]", className)}
    >
      <Container>
        <FadeIn className="mx-auto mb-5 max-w-4xl text-center sm:mb-8">
          <SectionTitle>{title}</SectionTitle>
        </FadeIn>

        <FadeIn delay={0.1} className="mb-6 flex justify-center sm:mb-10">
          <div className="inline-flex rounded-full p-1">
            <button
              type="button"
              onClick={() => setTab("ecommerce")}
              className={cn(
                "rounded-full border-none bg-none px-4 py-2 text-sm font-bold transition-all sm:px-7 sm:py-2.5 sm:text-xl",
                tab === "ecommerce"
                  ? "bg-brand text-white shadow-sm"
                  : "text-gray-800 hover:text-foreground",
              )}
            >
              E-commerce
            </button>
            <button
              type="button"
              onClick={() => setTab("informative")}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-bold transition-all sm:px-7 sm:py-2.5 sm:text-xl",
                tab === "informative"
                  ? "bg-brand text-white shadow-sm"
                  : "text-gray-800 hover:text-foreground",
              )}
            >
              Informative
            </button>
          </div>
        </FadeIn>

        <Stagger
          key={tab}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {packages.map((pkg) => (
            <StaggerItem key={`${tab}-${pkg.name}`}>
              <PackageCard pkg={pkg} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
