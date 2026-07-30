"use client";

import { ASSETS } from "@/lib/constants";
import { ServicePackageCta } from "@/components/sections/service-package-cta";

export function LogoDesignCustomCta() {
  return (
    <ServicePackageCta
      title="Looking for a custom logo design package?"
      lead="Looking for a custom logo design package?"
      image={ASSETS.logoDesignCustom}
      imageAlt="Custom logo design package"
    />
  );
}
