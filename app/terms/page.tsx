import type { Metadata } from "next";
import { TopBar } from "@/components/layout/top-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LegalPageBanner } from "@/components/sections/legal-page-banner";
import { TermsContent } from "@/components/sections/terms-content";
import { TERMS_INTRO } from "@/lib/terms-content";

export const metadata: Metadata = {
  title: "Terms And Conditions | WooCommerce Web",
  description:
    "These guidelines outline using the materials and data on the WooCommerce Web website.",
};

export default function TermsPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1">
        <LegalPageBanner
          title="Terms And Conditions"
          intro={TERMS_INTRO}
          variant="main"
        />
        <TermsContent />
      </main>
      <Footer />
    </>
  );
}
