import { Check, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";
import {
  formatPackagePrice,
  type PricingPackage,
} from "@/lib/packages";
import { Container } from "@/components/layout/container";
import { GetStartedDialog } from "@/components/get-started-dialog";
import { cn } from "@/lib/utils";

type PackageDetailsContentProps = {
  pkg: PricingPackage;
};

export function PackageDetailsContent({ pkg }: PackageDetailsContentProps) {
  const showSaveBadge = typeof pkg.original === "number";

  return (
    <section className="bg-white py-10 sm:py-14 md:py-16 lg:py-[70px]">
      <Container>
        <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
          <article
            className={cn(
              "rounded-[30px] bg-white p-6 shadow-[0_0_20px_4px_rgba(0,0,0,0.08)]",
              "sm:p-8 md:p-[30px]",
            )}
          >
            <h2 className="pb-2.5 text-[26px] font-semibold leading-[1.2] tracking-tight text-[#2A3342] md:text-[30px]">
              {pkg.name}
            </h2>
            <p className="text-sm font-medium leading-[1.3] text-[#8896AB] md:text-[22px]">
              {pkg.tagline}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2 sm:mt-6">
              <span className="text-[48px] font-semibold leading-[1.2] tracking-tight text-brand md:text-[55px]">
                {formatPackagePrice(pkg)}
              </span>
              {showSaveBadge ? (
                <span className="flex flex-wrap items-center justify-center gap-1 rounded-[15px] bg-[#ECECEC] px-2.5 py-2 text-center text-xs font-normal leading-[1.4] text-black md:text-[12px]">
                  <span className="line-through">
                    ${pkg.original!.toLocaleString()}
                  </span>
                  <span>Save 50% off!</span>
                </span>
              ) : pkg.priceSuffix ? (
                <span className="flex items-center justify-center rounded-[15px] bg-[#ECECEC] px-2.5 py-2 text-center text-xs font-normal leading-[1.4] text-black md:text-[12px]">
                  {pkg.priceSuffix}
                </span>
              ) : null}
            </div>

            <div className="mt-8 flex flex-col items-stretch gap-4 sm:mt-10 sm:flex-row sm:items-center sm:gap-5">
              <GetStartedDialog
                triggerLabel="Get Started Now"
                triggerClassName="w-full sm:w-auto"
                orderPackage={{
                  name: pkg.name,
                  category: pkg.category,
                  price: pkg.price,
                  features: [...pkg.features],
                }}
              />
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center justify-center gap-2 text-base font-medium text-[#333] transition-colors hover:text-brand sm:justify-start"
              >
                <Phone className="size-4 shrink-0 text-brand" />
                {SITE.phone}
              </a>
            </div>
          </article>

          <article
            className={cn(
              "rounded-[30px] bg-white p-6 shadow-[0_0_20px_4px_rgba(0,0,0,0.08)]",
              "sm:p-8 md:p-[30px]",
            )}
          >
            <h3 className="text-xl font-bold leading-[1.2] text-[#333]">
              {pkg.includesLabel ?? "PACKAGE INCLUDES:"}
            </h3>
            <ul className="mt-5 flex flex-col gap-[15px]">
              {pkg.features.map((feature) => (
                <li
                  key={feature}
                  className="flex gap-[15px] text-base leading-[1.2] text-[#556987] md:text-lg"
                >
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-star text-white">
                    <Check className="size-3 stroke-[3]" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Container>
    </section>
  );
}
