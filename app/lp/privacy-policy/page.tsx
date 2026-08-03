import type { Metadata } from "next";
import { LpHeader } from "@/components/lp/lp-header";
import { LpFooter } from "@/components/lp/lp-footer";
import { LegalPageBanner } from "@/components/sections/legal-page-banner";
import { PrivacyContent } from "@/components/sections/privacy-content";
import { PRIVACY_INTRO } from "@/lib/privacy-content";

export const metadata: Metadata = {
  title: "Privacy Policy | WooCommerce Web",
  description:
    "At WooCommerce Web, we prioritize the respect and transparency of user data and GDPR compliance.",
};

export default function Lp1PrivacyPolicyPage() {
  return (
    <>
      <LpHeader />
      <main className="flex-1">
        <LegalPageBanner
          title="Privacy Policy"
          intro={PRIVACY_INTRO}
          variant="lp"
        />
        <PrivacyContent />
      </main>
      <LpFooter />
    </>
  );
}
