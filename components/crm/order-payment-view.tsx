"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { ASSETS } from "@/lib/constants";
import {
  DEFAULT_ORDER_PACKAGE,
  loadOrderPackage,
  type OrderPackage,
} from "@/lib/order-package";
// import { SecurePaymentModal } from "@/components/crm/secure-payment-modal";
import { cn } from "@/lib/utils";

const STEPS = [
  { num: "01", label: "Sign up" },
  { num: "02", label: "Project Brief" },
  { num: "03", label: "Order Preview" },
  { num: "04", label: "Secure payment" },
] as const;

export function OrderPaymentView() {
  const router = useRouter();
  const [pkg, setPkg] = useState<OrderPackage>(DEFAULT_ORDER_PACKAGE);
  // const [paymentOpen, setPaymentOpen] = useState(false);

  useEffect(() => {
    setPkg(loadOrderPackage());
  }, []);

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.72), rgba(0,0,0,0.78)), url(${ASSETS.orderProcessBg})`,
      }}
    >
      <header className="relative z-10 border-b border-black/5 bg-[#ffffffb3] backdrop-blur-sm">
        <div className="mx-auto flex h-[70px] max-w-[1200px] items-center justify-between gap-4 px-4 sm:px-6">
          <Link href="/" className="shrink-0">
            <Image
              src={ASSETS.logo}
              alt="WooCommerce Launchpad"
              width={200}
              height={44}
              className="h-9 w-auto sm:h-10"
              priority
            />
          </Link>

          <div className="flex items-center gap-3 sm:gap-5">
            <button
              type="button"
              className="hidden items-center gap-2 text-left sm:inline-flex"
            >
              <MessageCircle className="size-5 text-[#333]" />
              <span className="flex flex-col leading-tight">
                <span className="text-[11px] text-[#666]">Need Assistance?</span>
                <span className="text-sm font-semibold text-[#222]">
                  Live Chat
                </span>
              </span>
            </button>

            <button
              type="button"
              className="rounded-full border border-[#ddd] bg-white px-4 py-2 text-xs font-semibold text-black transition-colors hover:bg-[#f7f7f7] sm:px-5 sm:text-sm"
            >
              Request a Quote
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-[1100px] px-4 pb-16 pt-10 sm:px-6 sm:pt-14">
        <h1 className="mb-8 text-center text-3xl font-bold tracking-tight text-white sm:mb-10 sm:text-4xl md:text-5xl">
          Order Process
        </h1>

        <ol className="mb-0 flex overflow-x-auto rounded-t-md bg-[#7b8175] scrollbar-none">
          {STEPS.map((step, index) => {
            const active = index === STEPS.length - 1;
            return (
              <li
                key={step.num}
                className={cn(
                  "flex min-w-[140px] flex-1 items-center justify-center gap-2 px-3 py-3 text-sm sm:min-w-0 sm:px-4 sm:py-3.5 sm:text-base",
                  active
                    ? "relative z-[1] rounded-t-md bg-white font-semibold text-black shadow-sm"
                    : "font-medium text-white/90",
                )}
              >
                <span
                  className={cn(
                    "inline-flex size-6 shrink-0 items-center justify-center rounded-[3px] text-xs font-bold sm:size-7 sm:text-sm",
                    active
                      ? "bg-[#e8e8e8] text-black"
                      : "bg-white text-black",
                  )}
                >
                  {step.num}
                </span>
                <span className="whitespace-nowrap">{step.label}</span>
              </li>
            );
          })}
        </ol>

        <section className="rounded-b-xl bg-white px-5 py-8 shadow-xl sm:px-8 sm:py-10 md:rounded-b-2xl md:px-10 md:py-12">
          <div className="grid items-start gap-8 md:grid-cols-2 md:gap-10 lg:gap-14">
            <div className="flex flex-col items-center">
              <div className="w-full rounded-md bg-[#e8e8e8] px-4 py-4 text-center sm:px-6 sm:py-5">
                <p className="text-base text-[#222] sm:text-lg">
                  Package Name:{" "}
                  <span className="font-medium">
                    {pkg.name} - {pkg.category}
                  </span>
                </p>
                <p className="mt-2 text-lg text-[#222] sm:text-xl">
                  Total Price:{" "}
                  <span className="text-2xl font-bold sm:text-3xl">
                    ${pkg.price}
                  </span>
                </p>
              </div>

              {/* Payment button (temporarily disabled)
              <button
                type="button"
                onClick={() => setPaymentOpen(true)}
                className="mt-6 rounded-full bg-[#635bff] px-10 py-3.5 text-base font-semibold tracking-wide text-white transition-colors hover:bg-[#3f4b66] sm:mt-8 sm:px-12 sm:py-4 sm:text-lg"
              >
                Pay Your Amount
              </button>
              */}

              <button
                type="button"
                onClick={() => router.back()}
                className="mt-6 rounded-full bg-[#635bff] px-10 py-3.5 text-base font-semibold tracking-wide text-white transition-colors hover:bg-[#3f4b66] sm:mt-8 sm:px-12 sm:py-4 sm:text-lg"
              >
                Back
              </button>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-bold text-[#222] sm:mb-5 sm:text-2xl">
                Your Package Includes:
              </h2>
              <ul className="space-y-2.5 sm:space-y-3">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-base text-[#333] sm:text-lg"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#888]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Payment form modal (temporarily disabled)
      <SecurePaymentModal
        open={paymentOpen}
        onOpenChange={setPaymentOpen}
        amount={pkg.price}
      />
      */}
    </div>
  );
}
