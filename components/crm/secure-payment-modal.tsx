"use client";

// Payment form temporarily disabled — uncomment below to restore
/*
import { X } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const inputClass =
  "w-full rounded-md border border-[#d8d8d8] bg-white px-3 py-2.5 text-sm text-[#333] outline-none placeholder:text-[#9a9a9a] focus:border-[#aaa]";
*/

type SecurePaymentModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  amount: number;
};

export function SecurePaymentModal(_props: SecurePaymentModalProps) {
  return null;

  /* Payment form (temporarily commented out)
  const { open, onOpenChange, amount } = _props;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        overlayClassName="bg-[rgba(0,0,0,0.32)] backdrop-blur-[7.2px]"
        className={cn(
          "gap-0 border-0 bg-transparent p-0 shadow-none",
          "w-[calc(100%-1.5rem)] max-w-[420px]",
        )}
      >
        <div className="relative rounded-[20px] bg-[#f7d4cf] p-3 shadow-[0_4px_30px_rgba(0,0,0,0.1)] sm:p-4">
          <DialogClose className="absolute -top-1 -right-1 z-10 flex size-[30px] items-center justify-center rounded-full border-2 border-[#1b1919] bg-transparent text-[#1b1919] transition-colors hover:bg-white/40 sm:top-1 sm:right-1">
            <X className="size-4 stroke-[2.5]" />
            <span className="sr-only">Close</span>
          </DialogClose>

          <div className="rounded-[16px] bg-white px-4 py-5 sm:px-6 sm:py-6">
            <DialogTitle className="sr-only">Secure payment</DialogTitle>

            <form
              className="space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="grid grid-cols-2 gap-3">
                <input
                  name="firstName"
                  placeholder="First Name"
                  className={inputClass}
                  autoComplete="given-name"
                />
                <input
                  name="lastName"
                  placeholder="Last Name"
                  className={inputClass}
                  autoComplete="family-name"
                />
              </div>

              <input
                name="cardNumber"
                placeholder="16 Digit card number"
                inputMode="numeric"
                className={inputClass}
                autoComplete="cc-number"
              />

              <div className="grid grid-cols-3 gap-3">
                <input
                  name="mm"
                  placeholder="MM"
                  inputMode="numeric"
                  className={inputClass}
                  autoComplete="cc-exp-month"
                />
                <input
                  name="yy"
                  placeholder="YY"
                  inputMode="numeric"
                  className={inputClass}
                  autoComplete="cc-exp-year"
                />
                <input
                  name="cvv"
                  placeholder="CVV/CVC"
                  inputMode="numeric"
                  className={inputClass}
                  autoComplete="cc-csc"
                />
              </div>

              <input
                name="address"
                placeholder="Address"
                className={inputClass}
                autoComplete="street-address"
              />
              <input
                name="state"
                placeholder="State"
                className={inputClass}
                autoComplete="address-level1"
              />

              <div className="grid grid-cols-2 gap-3">
                <input
                  name="city"
                  placeholder="City"
                  className={inputClass}
                  autoComplete="address-level2"
                />
                <input
                  name="zip"
                  placeholder="Zip Code"
                  className={inputClass}
                  autoComplete="postal-code"
                />
              </div>

              <div className="pt-1">
                <button
                  type="submit"
                  className="rounded-md bg-[#3b7ddd] px-4 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
                >
                  Submit Payment ${amount}
                </button>
              </div>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
  */
}
