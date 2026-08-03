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

function WooMark({ className }: { className?: string }) {
  return (
    <svg
      width="161"
      height="96"
      viewBox="0 0 161 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="WOO"
    >
      <path
        d="M80.5 95.6403C124.959 95.6403 161 74.2305 161 47.8202C161 21.4098 124.959 0 80.5 0C36.0411 0 0 21.4098 0 47.8202C0 74.2305 36.0411 95.6403 80.5 95.6403Z"
        fill="#7F54B3"
      />
      <path
        d="M80.4997 0C78.4401 0 76.4027 0.0442916 74.3875 0.132875C115.992 1.98574 148.775 22.6256 148.775 47.8202C148.775 73.0147 115.992 93.6546 74.3875 95.5075C76.4027 95.5961 78.4401 95.6403 80.4997 95.6403C124.954 95.6403 161 74.2254 161 47.8202C161 21.415 124.954 0 80.4997 0Z"
        fill="#B07DEF"
      />
      <path
        d="M24.0584 64.1041C21.0244 52.5736 18.0052 42.3422 14.9934 33.7422C18.3153 32.8712 21.6519 32.0665 25.0033 31.3357C26.5018 37.758 28.0078 44.5937 29.5137 51.7985C29.558 51.7985 29.6023 51.7985 29.6465 51.7985C31.5363 44.7413 33.4335 37.2118 35.338 29.2983C38.1358 28.8111 40.9335 28.3756 43.746 27.9843C45.6506 35.8387 47.5551 44.04 49.4597 52.5071C49.5113 52.5071 49.563 52.5071 49.6147 52.5071C51.128 44.1212 52.6487 35.5213 54.162 26.7589C57.565 26.4341 60.9681 26.1758 64.3786 25.9912C61.2929 40.7108 58.2073 55.1498 55.1216 68.9614C51.7481 68.6514 48.3745 68.2675 45.0157 67.8246C43.2072 60.1179 41.406 52.6548 39.6048 45.5164C39.5531 45.5164 39.5014 45.5164 39.4498 45.5164C37.6486 52.7138 35.8548 59.6012 34.0536 66.1046C30.7095 65.5067 27.3729 64.8349 24.0584 64.0968V64.1041Z"
        fill="white"
      />
      <path
        d="M83.652 70.8653C79.9389 70.9539 76.7056 70.0017 73.9595 68.075C71.2134 66.1483 69.0948 63.4317 67.5889 59.977C66.083 56.5222 65.3374 52.4843 65.3374 47.8411V47.782C65.3374 43.1314 66.0904 39.1009 67.5889 35.6461C69.0874 32.1914 71.2134 29.4748 73.9595 27.5629C76.7056 25.651 79.9315 24.6987 83.652 24.7947C87.3651 24.8833 90.591 25.9906 93.3371 27.9984C96.0758 29.9989 98.1944 32.7229 99.7003 36.089C101.206 39.4626 101.959 43.3381 101.959 47.7968V47.8558C101.959 52.3219 101.206 56.1974 99.7003 59.5784C98.1944 62.9519 96.0758 65.6758 93.3445 67.6837C90.6131 69.6842 87.3799 70.7915 83.652 70.8875V70.8653ZM83.652 59.2757C85.3424 59.2536 86.8114 58.7663 88.0516 57.8288C89.2918 56.8913 90.2441 55.57 90.9158 53.8647C91.5876 52.1595 91.9197 50.1516 91.9197 47.8411V47.782C91.9197 45.4641 91.5802 43.471 90.9084 41.7879C90.2293 40.1048 89.277 38.7761 88.0369 37.8238C86.7967 36.8641 85.3351 36.3696 83.6594 36.3474C81.9689 36.3253 80.4999 36.7829 79.2671 37.7131C78.0343 38.6432 77.0747 39.9646 76.4029 41.6772C75.7238 43.3898 75.3916 45.4272 75.3916 47.782V47.8411C75.3916 50.1959 75.7312 52.2333 76.4029 53.9607C77.0821 55.6807 78.0343 57.0094 79.2671 57.9248C80.4999 58.8475 81.9615 59.2978 83.6594 59.2757H83.652Z"
        fill="white"
      />
      <path
        d="M122.762 66.6647C119.093 67.3733 115.897 67.115 113.18 65.7936C110.456 64.4796 108.345 62.2429 106.854 59.1498C105.355 56.0568 104.61 52.2404 104.61 47.8333V47.7743C104.61 43.3673 105.355 39.5508 106.854 36.4578C108.352 33.3648 110.456 31.1354 113.18 29.8288C115.904 28.5222 119.101 28.2638 122.762 28.9725C126.431 29.6738 129.598 31.1354 132.292 33.0621C134.979 34.9962 137.061 37.2255 138.53 39.7058C139.999 42.1935 140.737 44.7994 140.737 47.7891V47.826C140.737 50.8156 139.999 53.4289 138.53 55.9166C137.061 58.3969 134.987 60.641 132.299 62.5677C129.62 64.487 126.438 65.9486 122.762 66.6573V66.6647ZM122.762 57.1863C124.43 57.0239 125.877 56.5071 127.095 55.673C128.313 54.8388 129.251 53.7537 129.908 52.4249C130.565 51.0888 130.897 49.5755 130.897 47.826C130.897 47.8112 130.897 47.7964 130.897 47.7817C130.897 46.0322 130.565 44.5262 129.9 43.2049C129.236 41.8909 128.298 40.8057 127.073 39.9568C125.855 39.1153 124.416 38.5838 122.755 38.4214C121.086 38.259 119.639 38.5173 118.414 39.2186C117.196 39.9199 116.251 41.0051 115.579 42.4667C114.908 43.9283 114.575 45.7073 114.575 47.7743V47.826C114.575 49.8929 114.908 51.6793 115.579 53.1483C116.251 54.6173 117.196 55.7025 118.414 56.3964C119.632 57.0903 121.079 57.3413 122.755 57.1789L122.762 57.1863Z"
        fill="white"
      />
    </svg>
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
                  <WooMark className="h-auto w-[70px] lg:w-[120px] xl:w-[161px]" />
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
              Woocommercelaunchpad is an independent company that provides
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
