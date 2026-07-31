export type PricingPackage = {
  slug: string;
  name: string;
  tagline: string;
  price: number;
  original?: number;
  priceSuffix?: string;
  popular?: boolean;
  category: string;
  includesLabel?: string;
  features: string[];
};

export const ecommercePackages: PricingPackage[] = [
  {
    slug: "starter-launch",
    name: "Starter Launch",
    tagline: "For beginners who just want to get online quickly.",
    price: 350,
    original: 700,
    category: "web",
    includesLabel: "PACKAGE INCLUDES:",
    features: [
      "WooCommerce Store Setup",
      "10 Products Uploaded",
      "Mobile Responsive Store",
      "Product Categories Setup",
    ],
  },
  {
    slug: "launch-store",
    name: "Launch Store",
    tagline: "For small stores ready to scale up from day one.",
    price: 650,
    original: 1300,
    category: "web",
    includesLabel: "PACKAGE INCLUDES:",
    features: [
      "Everything in Starter PLUS",
      "30 Products Uploaded",
      "Payment Gateway Integration",
      "SSL & Security Setup",
      "Basic Checkout Setup",
    ],
  },
  {
    slug: "growth-store",
    name: "Growth Store",
    tagline: "For ambitious sellers who want growth-focused features.",
    price: 1250,
    original: 2500,
    category: "web",
    includesLabel: "PACKAGE INCLUDES:",
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
    slug: "pro-seller",
    name: "Pro Seller",
    tagline: "For growing brands that need automation and global reach.",
    price: 1950,
    original: 3900,
    popular: true,
    category: "web",
    includesLabel: "PACKAGE INCLUDES:",
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
    slug: "scale-business",
    name: "Scale Business",
    tagline: "For established businesses with complex operations.",
    price: 3500,
    original: 7000,
    category: "web",
    includesLabel: "PACKAGE INCLUDES:",
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
    slug: "enterprise",
    name: "Enterprise",
    tagline:
      "For high-volume brands that want a strategic partner to grow revenue continuously.",
    price: 7000,
    original: 14000,
    category: "web",
    includesLabel: "PACKAGE INCLUDES:",
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

export const informativePackages: PricingPackage[] = [
  {
    slug: "informative-starter",
    name: "Starter",
    tagline:
      "Let our expert team design a Wix website that drives results and takes your online business to new heights.",
    price: 299,
    original: 598,
    category: "informative",
    includesLabel: "PACKAGE INCLUDES:",
    features: [
      "1–3 page site",
      "Contact form with spam filter",
      "Basic brand styling (colors & fonts)",
      "Launch in 14 days",
    ],
  },
  {
    slug: "informative-standard",
    name: "Standard",
    tagline:
      "Our team will help you build a stunning website that attracts visitors and converts them into loyal customers.",
    price: 499,
    original: 998,
    category: "informative",
    includesLabel: "PACKAGE INCLUDES:",
    features: [
      "Includes all features from Starter",
      "4–5 page site (Home, About, Services, Blog, Contact)",
      "Blog/news section for updates",
      "Lead capture form with auto-email response",
      "Social media link integration",
    ],
  },
  {
    slug: "informative-professional",
    name: "Professional",
    tagline:
      "Get in touch with our team of Wix experts to build a site that drives results for your business.",
    price: 799,
    original: 1598,
    popular: true,
    category: "informative",
    includesLabel: "PACKAGE INCLUDES:",
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
    slug: "informative-business",
    name: "Business",
    tagline:
      "From design to launch, we'll help you create a Wix website that perfectly reflects your brand.",
    price: 1199,
    original: 2398,
    category: "informative",
    includesLabel: "PACKAGE INCLUDES:",
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
    slug: "informative-premium",
    name: "Premium",
    tagline:
      "Let's collaborate on a website that's optimized, engaging, and designed to help your business thrive.",
    price: 1699,
    original: 3398,
    category: "informative",
    includesLabel: "PACKAGE INCLUDES:",
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
    slug: "informative-ultimate",
    name: "Ultimate",
    tagline:
      "Our expert team will build a Wix website that's tailored to your brand and designed to boost your online presence.",
    price: 2299,
    original: 4598,
    category: "informative",
    includesLabel: "PACKAGE INCLUDES:",
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

export const logoDesignPackages: PricingPackage[] = [
  {
    slug: "logo-best-seller",
    name: "Best Seller",
    tagline: "Ideal solution for beginners",
    price: 149,
    original: 298,
    category: "logo",
    includesLabel: "DESIGN PACKAGE INCLUDES:",
    features: [
      "4 Logo Design Concepts",
      "5 Revision Cycle",
      "1 Dedicated Designer",
      "24/7 Chat Support",
      "Free Color Options",
      "Free Fav Icon",
      "Print Friendly Design (PNG, JPG)",
      "100% Ownership Rights",
      "100% Money Back Guarantee",
    ],
  },
  {
    slug: "logo-the-ultimate",
    name: "The Ultimate",
    tagline: "Startup-friendly design package",
    price: 249,
    original: 498,
    category: "logo",
    includesLabel: "DESIGN PACKAGE INCLUDES:",
    features: [
      "6 Logo Design Concepts",
      "Unlimited Revisions",
      "2 Dedicated Designers",
      "Free Color Options",
      "Free Grayscale Format",
      "Free Icon",
      "24 To 48 Hours TAT",
      "All File Formats (Ai, PSD, EPS, PNG, JPG, PDF)",
      "100% Ownership Rights",
      "100% Money Back Guarantee",
    ],
  },
  {
    slug: "logo-business-plus",
    name: "Business Plus",
    tagline: "Optimal for small and medium businesses",
    price: 349,
    original: 698,
    category: "logo",
    includesLabel: "DESIGN PACKAGE INCLUDES:",
    features: [
      "8 Logo Design Concepts",
      "Unlimited Revisions",
      "3 Dedicated Designers",
      "Free Stationery Design (Business Card, Letterhead, Envelope)",
      "Free Icon",
      "Free Color Options",
      "Free Grayscale Format",
      "24 To 48 Hours TAT",
      "$50 Off On Website Order",
      "All File Formats (Ai, PSD, EPS, PNG, JPG, PDF)",
      "100% Ownership Rights",
      "100% Money Back Guarantee",
    ],
  },
];

export const socialMediaPackages: PricingPackage[] = [
  {
    slug: "social-starter",
    name: "Starter",
    tagline: "Limited visibility, slow follower growth.",
    price: 1000,
    priceSuffix: "/month",
    category: "social",
    includesLabel: "PACKAGE INCLUDES:",
    features: [
      "8 posts/month (1 platform)",
      "Basic graphics + captions",
      "Scheduling and posting",
      "Google Business Profile optimization",
    ],
  },
  {
    slug: "social-growth",
    name: "Growth",
    tagline:
      "More engagement, multi-channel presence, stronger brand consistency.",
    price: 2000,
    priceSuffix: "/month",
    category: "social",
    includesLabel: "PACKAGE INCLUDES:",
    features: [
      "12–16 posts/month (2 platforms)",
      "Reels + carousel content",
      "Community management (comments & inbox)",
      "$100–$200 in boosted posts",
    ],
  },
  {
    slug: "social-dominator",
    name: "Dominator",
    tagline:
      "Full domination across platforms, rapid reach, and sales-focused campaigns.",
    price: 3000,
    priceSuffix: "/month",
    category: "social",
    includesLabel: "PACKAGE INCLUDES:",
    features: [
      "20+ posts/month (3+ platforms)",
      "Reels, carousels, stories, influencer collabs",
      "Full community management",
      "Paid campaigns setup + monthly reporting",
    ],
  },
];

export const seoPackages: PricingPackage[] = [
  {
    slug: "seo-starter",
    name: "Starter",
    tagline:
      "Limited reach and slow ranking growth. Good for very small businesses only.",
    price: 750,
    priceSuffix: "/month",
    category: "seo",
    includesLabel: "PACKAGE INCLUDES:",
    features: [
      "Basic keyword research",
      "On-page SEO (10 pages)",
      "2 blogs/month",
      "Google Business Profile optimization",
    ],
  },
  {
    slug: "seo-growth",
    name: "Growth",
    tagline: "Faster traffic growth, stronger authority, better conversions.",
    price: 1500,
    priceSuffix: "/month",
    category: "seo",
    includesLabel: "PACKAGE INCLUDES:",
    features: [
      "Advanced keyword clustering",
      "On-page SEO (20+ pages)",
      "Monthly backlink outreach (5–10 links)",
      "Technical SEO fixes",
    ],
  },
  {
    slug: "seo-dominator",
    name: "Dominator",
    tagline:
      "Maximum authority and long-term dominance. Designed for scaling businesses that want to outrank all competitors.",
    price: 2500,
    priceSuffix: "/month",
    category: "seo",
    includesLabel: "PACKAGE INCLUDES:",
    features: [
      "Full content cluster strategy",
      "6–8 blogs/month",
      "Aggressive link building (15+ links/month)",
      "Advanced local SEO + citations",
      "Conversion rate optimization (CRO)",
    ],
  },
];

export const ppcPackages: PricingPackage[] = [
  {
    slug: "ppc-starter",
    name: "Starter",
    tagline: "Limited impressions, low testing capacity.",
    price: 850,
    priceSuffix: "Ad Spend",
    category: "ppc",
    includesLabel: "PACKAGE INCLUDES:",
    features: [
      "Google Ads (search only)",
      "3–5 ad groups",
      "1 landing page optimization",
      "Monthly reporting",
    ],
  },
  {
    slug: "ppc-growth",
    name: "Growth",
    tagline:
      "Multi-channel reach, faster ROI testing, stronger lead funnel.",
    price: 1600,
    priceSuffix: "Ad Spend",
    category: "ppc",
    includesLabel: "PACKAGE INCLUDES:",
    features: [
      "Google Search + Display ads",
      "Facebook/Instagram Ads",
      "Remarketing campaigns",
      "A/B testing weekly",
      "Conversion tracking setup",
    ],
  },
  {
    slug: "ppc-dominator",
    name: "Dominator",
    tagline:
      "Scales ad spend efficiently, lowers cost per lead, drives exponential lead generation.",
    price: 2500,
    priceSuffix: "Ad Spend",
    category: "ppc",
    includesLabel: "PACKAGE INCLUDES:",
    features: [
      "Full-funnel campaigns (search, display, video, social)",
      "Advanced targeting + lookalike audiences",
      "Multiple landing pages optimized",
      "Ongoing A/B testing + CRO",
    ],
  },
];

export const allPackages: PricingPackage[] = [
  ...ecommercePackages,
  ...informativePackages,
  ...logoDesignPackages,
  ...socialMediaPackages,
  ...seoPackages,
  ...ppcPackages,
];

export function getPackageBySlug(slug: string): PricingPackage | undefined {
  return allPackages.find((pkg) => pkg.slug === slug);
}

export function getAllPackageSlugs(): string[] {
  return allPackages.map((pkg) => pkg.slug);
}

export function formatPackagePrice(pkg: PricingPackage): string {
  if (pkg.category === "seo" && pkg.slug === "seo-dominator") {
    return `$${pkg.price.toLocaleString()}+`;
  }
  if (pkg.category === "ppc") {
    return `$${pkg.price.toLocaleString()}+`;
  }
  return `$${pkg.price.toLocaleString()}`;
}

export function packageDetailsPath(slug: string): string {
  return `/package-details/${slug}`;
}
