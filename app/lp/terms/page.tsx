import type { Metadata } from "next";
import { LpHeader } from "@/components/lp/lp-header";
import { LpFooter } from "@/components/lp/lp-footer";
import { LegalPageBanner } from "@/components/sections/legal-page-banner";
import { TermsContent } from "@/components/sections/terms-content";
import { TERMS_INTRO } from "@/lib/terms-content";

export const metadata: Metadata = {
  title: "Terms And Conditions | WooCommerce Web",
  description:
    "These guidelines outline using the materials and data on the WooCommerce Web website.",
};

export default function Lp1TermsPage() {
  return (
    <>
      <LpHeader />
      <main className="flex-1">
        <LegalPageBanner
          title="Terms And Conditions"
          intro={TERMS_INTRO}
          variant="lp"
        />
        <TermsContent />
      </main>
      <LpFooter />
    </>
  );
}
