import type { Metadata } from "next";
import { TopBar } from "@/components/layout/top-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LegalPageBanner } from "@/components/sections/legal-page-banner";
import { PrivacyContent } from "@/components/sections/privacy-content";
import { PRIVACY_INTRO } from "@/lib/privacy-content";

export const metadata: Metadata = {
  title: "Privacy Policy | Woo Commerce Launchpad",
  description:
    "At Woo Commerce Launchpad, we prioritize the respect and transparency of user data and GDPR compliance.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1">
        <LegalPageBanner
          title="Privacy Policy"
          intro={PRIVACY_INTRO}
          variant="main"
        />
        <PrivacyContent />
      </main>
      <Footer />
    </>
  );
}
