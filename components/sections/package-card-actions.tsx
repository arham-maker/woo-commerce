import Link from "next/link";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/constants";
import { packageDetailsPath } from "@/lib/packages";
import { GetStartedDialog } from "@/components/get-started-dialog";
import type { OrderPackage } from "@/lib/order-package";
import { cn } from "@/lib/utils";

type PackageCardActionsProps = {
  orderPackage: OrderPackage;
  slug?: string;
  showViewDetails?: boolean;
  className?: string;
  triggerClassName?: string;
};

export function PackageCardActions({
  orderPackage,
  slug,
  showViewDetails = true,
  className,
  triggerClassName = "w-full",
}: PackageCardActionsProps) {
  return (
    <div
      className={cn(
        "mt-auto flex w-full flex-col items-center gap-3 sm:gap-[15px]",
        className,
      )}
    >
      <GetStartedDialog
        triggerLabel="Get Started Now"
        triggerClassName={triggerClassName}
        orderPackage={orderPackage}
      />

      <a
        href={SITE.phoneHref}
        className="inline-flex items-center justify-center gap-2 text-base font-bold text-black transition-colors hover:text-brand md:text-lg"
      >
        <Phone className="size-4 shrink-0" strokeWidth={2.25} />
        {SITE.phone}
      </a>

      {showViewDetails && slug ? (
        <Link
          href={packageDetailsPath(slug)}
          className="text-base font-medium text-brand transition-colors hover:text-brand-hover"
        >
          View Details
        </Link>
      ) : null}
    </div>
  );
}
