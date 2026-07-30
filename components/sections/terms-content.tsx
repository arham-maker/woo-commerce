import { LegalContent } from "@/components/sections/legal-content";
import { TERMS_SECTIONS } from "@/lib/terms-content";

export function TermsContent() {
  return <LegalContent sections={TERMS_SECTIONS} />;
}
