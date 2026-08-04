import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/lib/constants";
import { Container } from "@/components/layout/container";

export function LpFooter() {
  return (
    <>
      <footer className="bg-black pt-[50px] pb-[30px]">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <Link href="/lp" className="shrink-0">
              <Image
                src={ASSETS.lp.footerLogo}
                alt="WooCommerce Web"
                width={280}
                height={52}
                className="h-10 w-auto md:h-12"
              />
            </Link>
            <Image
              src={ASSETS.lp.footerCards}
              alt="Accepted payment methods"
              width={420}
              height={40}
              className="h-8 w-auto max-w-full object-contain md:h-10"
            />
          </div>
        </Container>
      </footer>

      <div className="bg-black pb-6">
        <Container>
          <div className="flex flex-col gap-3 border-t border-white/10 pt-5 text-sm text-white/80 md:flex-row md:items-center md:justify-between">
            <p>© WooCommerce Web 2024. All rights reserved.</p>
            <p className="md:text-right">
              <Link href="/lp/terms" className="hover:text-white">
                TERMS & CONDITIONS
              </Link>
              {" | "}
              <Link href="/lp/privacy-policy" className="hover:text-white">
                PRIVACY POLICY
              </Link>
            </p>
          </div>
          <p className="mt-6 text-center text-xs leading-relaxed text-white/60 md:text-[12px]">
            <span className="text-sm text-white/80">Disclaimer</span>
            <br />
            WooCommerce Web is an independent company that provides design
            and development services for e-commerce solutions. We are not
            affiliated, associated, authorized, endorsed by, or in any way
            officially connected with WooCommerce., or any of its subsidiaries
            or affiliates. The name &quot;WooCommerce&quot; as well as related
            names, marks, emblems, and images are registered trademarks of their
            respective owners.
          </p>
        </Container>
      </div>
    </>
  );
}
