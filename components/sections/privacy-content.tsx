import { LegalContent } from "@/components/sections/legal-content";
import { PRIVACY_SECTIONS } from "@/lib/privacy-content";

export function PrivacyContent() {
  return <LegalContent sections={PRIVACY_SECTIONS} />;
}
