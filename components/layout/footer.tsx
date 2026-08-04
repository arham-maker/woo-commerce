import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ASSETS, SITE } from "@/lib/constants";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

const companyLinks = [
  { label: "About", href: "/about-us" },
  { label: "Reviews", href: "/reviews" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "FAQs", href: "/faq" },
  { label: "Contact Us", href: "/contact-us" },
];

const serviceLinks = [
  { label: "Logo Design", href: "/logo-design" },
  { label: "Website Design", href: "/website-design" },
  { label: "Social Media", href: "/social-media" },
  { label: "Digital Marketing", href: "/digital-marketing" },
  { label: "Domain Hosting", href: "/domain-and-hosting" },
];

const solutionLinks = [
  { label: "Custom Woocommerce Design", href: "/custom-woocommerce-design" },
  { label: "Custom Woocommerce Development", href: "/custom-woocommerce-development" },
  { label: "Woocommerce Theme Development", href: "/woocommerce-theme-development" },
  { label: "Woocommerce Plugin Development", href: "/woocommerce-plugin-development" },
  { label: "Woocommerce Maintenance Services", href: "/woocommerce-maintenance" },
  { label: "Woocommerce Migration Services", href: "/woocommerce-migration" },
];

function FooterMenu({
  title,
  links,
  className,
}: {
  title: string;
  links: { label: string; href: string }[];
  className?: string;
}) {
  return (
    <div className={className}>
      <h6 className="pb-3 text-sm font-bold leading-normal text-white lg:pb-[15px] lg:text-lg xl:text-xl min-[1400px]:pb-[18px] min-[1400px]:text-2xl">
        {title}
      </h6>
      <ul className="flex flex-col gap-2.5 min-[1400px]:gap-[15px]">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="group flex items-start gap-2.5 text-[10px] font-normal leading-[1.2] text-white transition-colors hover:text-brand lg:text-sm lg:leading-[1.2] min-[1400px]:items-center min-[1400px]:gap-[15px] min-[1400px]:text-base min-[1400px]:leading-normal"
            >
              <span className="mt-0.5 text-[10px] text-brand min-[1400px]:mt-0 min-[1400px]:text-xs">
                <ArrowRight className="size-2.5 lg:size-3" strokeWidth={3} />
              </span>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SiteLogo({ className }: { className?: string }) {
  return (
    <Image
      src={ASSETS.logo}
      alt="WooCommerce Web"
      width={280}
      height={52}
      className={className}
    />
  );
}

export function Footer() {
  return (
    <>
      <footer className="bg-black py-10 lg:pt-[70px] lg:pb-[30px] xl:pt-[86px] xl:pb-10">
        <Container>
          <div className="pb-[30px] md:pb-10 xl:pb-20">
            <div className="flex flex-col md:flex-row md:gap-4 xl:gap-8">
              {/* Left — live: col-md-3 / col-xl-5 */}
              <div className="md:w-1/4 xl:w-5/12">
                <div className="pb-[15px]">
                  <SiteLogo className="h-auto w-[140px] lg:w-[200px] xl:w-[240px]" />
                </div>
                <h6 className="text-xl font-bold leading-normal text-white xl:text-[26px] min-[1400px]:text-[30px]">
                  Let&apos;s develop <br className="hidden sm:block" />
                  e-Com Store together!
                </h6>

                <div className="flex flex-col gap-[7px] pt-[15px] pb-5 md:pb-0 lg:gap-2.5 lg:pt-[25px] xl:gap-[15px] xl:pt-[38px]">
                  <p className="text-sm font-bold text-white min-[1400px]:text-base">
                    Company
                  </p>
                  <div className="flex flex-col items-start gap-1.5 lg:flex-row lg:flex-wrap lg:items-center lg:gap-[15px]">
                    <p className="w-auto text-sm font-bold text-white lg:w-[60px] min-[1400px]:text-base">
                      USA
                    </p>
                    <a
                      href={SITE.phoneHref}
                      className="text-sm font-light text-white transition-colors hover:text-brand min-[1400px]:text-base"
                    >
                      {SITE.phone}
                    </a>
                  </div>
                  <div className="flex flex-col items-start gap-1.5 lg:flex-row lg:flex-wrap lg:items-center lg:gap-[15px]">
                    <p className="w-auto text-sm font-bold text-white lg:w-[60px] min-[1400px]:text-base">
                      Email
                    </p>
                    <a
                      href={SITE.emailHref}
                      className="text-sm font-light text-white transition-colors hover:text-brand min-[1400px]:text-base"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Right menus — live: flex wrap; md+ 25/25/45; xl+ equal gap-50 */}
              <div className="flex flex-wrap gap-5 md:w-3/4 md:flex-nowrap md:gap-[15px] xl:w-7/12 xl:gap-[50px]">
                <FooterMenu
                  title="Company"
                  links={companyLinks}
                  className="min-w-0 flex-1 basis-[calc(50%-10px)] md:flex-none md:basis-1/4 md:max-w-[25%] xl:max-w-none xl:flex-1 xl:basis-0"
                />
                <FooterMenu
                  title="Services"
                  links={serviceLinks}
                  className="min-w-0 flex-1 basis-[calc(50%-10px)] md:flex-none md:basis-1/4 md:max-w-[25%] xl:max-w-none xl:flex-1 xl:basis-0"
                />
                <FooterMenu
                  title="Solutions"
                  links={solutionLinks}
                  className="min-w-0 w-full flex-none basis-full md:basis-[45%] md:max-w-[45%] xl:max-w-none xl:flex-1 xl:basis-0"
                />
              </div>
            </div>
          </div>

          <ul
            className={cn(
              "flex flex-wrap items-center justify-center gap-2.5",
              "md:gap-6 md:px-[5%] lg:gap-11 lg:px-[15%] xl:px-0",
            )}
          >
            {ASSETS.footerBadges.map((src, i) => (
              <li key={src}>
                <Image
                  src={src}
                  alt={`Certification badge ${i + 1}`}
                  width={120}
                  height={60}
                  className="h-8 w-auto object-contain md:h-10 xl:h-14"
                />
              </li>
            ))}
          </ul>
        </Container>
      </footer>

      <div className="bg-[#2A282C]">
        <Container>
          <div className="flex flex-col items-center justify-between gap-2.5 py-2.5 md:flex-row md:gap-4 md:py-5">
            <p className="text-center text-[10px] leading-[1.4] text-white md:text-left lg:text-sm lg:leading-[1.42]">
              Copyright © 2024 WooCommerce Web.{" "}
              <Link
                href="/terms"
                className="font-bold text-[#999] underline transition-colors hover:text-brand"
              >
                TERMS &amp; CONDITIONS
              </Link>{" "}
              <Link
                href="/privacy-policy"
                className="font-bold text-[#999] underline transition-colors hover:text-brand"
              >
                PRIVACY POLICY
              </Link>
            </p>
            <div className="w-[150px] shrink-0 md:w-[15%] xl:w-auto">
              <Image
                src={ASSETS.payment}
                alt="Accepted payment methods"
                width={220}
                height={32}
                className="h-auto w-full object-contain xl:h-8 xl:w-auto"
              />
            </div>
          </div>

          <div className="pb-6 pt-2">
            <p className="mx-auto max-w-5xl text-center text-xs leading-relaxed text-white">
              <span className="text-sm font-bold text-[#999]">Disclaimer</span>
              <br />
              WooCommerce Web is an independent company that provides
              design and development services for e-commerce solutions. We are
              not affiliated, associated, authorized, endorsed by, or in any way
              officially connected with WooCommerce., or any of its subsidiaries
              or affiliates. The name &quot;WooCommerce&quot; as well as related
              names, marks, emblems, and images are registered trademarks of
              their respective owners.
            </p>
          </div>
        </Container>
      </div>
    </>
  );
}
