"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight, X } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ASSETS } from "@/lib/constants";
import {
  COUNTRIES,
  DEFAULT_COUNTRY_ABBR,
  type Country,
} from "@/lib/countries";
import {
  DEFAULT_ORDER_PACKAGE,
  saveOrderPackage,
  type OrderPackage,
} from "@/lib/order-package";
import { cn } from "@/lib/utils";

const fieldClass =
  "w-full rounded-[5px] border border-[#F7F7F7] bg-white px-[15px] py-3 text-sm outline-none placeholder:text-[#999] focus:border-[#ddd] md:py-[15px] md:text-base";

type GetStartedDialogProps = {
  triggerClassName?: string;
  triggerLabel?: string;
  size?: "default" | "sm" | "lg";
  children?: React.ReactNode;
  orderPackage?: Partial<OrderPackage>;
};

export function GetStartedDialog({
  triggerClassName,
  triggerLabel = "Get Started",
  size = "default",
  children,
  orderPackage,
}: GetStartedDialogProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [countryAbbr, setCountryAbbr] = useState(DEFAULT_COUNTRY_ABBR);

  const selectedCountry = useMemo(
    () =>
      COUNTRIES.find((c) => c.abbr === countryAbbr) ??
      COUNTRIES.find((c) => c.abbr === DEFAULT_COUNTRY_ABBR)!,
    [countryAbbr],
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children ?? (
          <Button
            size={size}
            className={triggerClassName || "h-auto gap-1.5 rounded-full px-5 py-3 text-xs font-semibold sm:h-12 sm:gap-2 sm:px-8 sm:text-base sm:font-bold md:text-[20px]"}
          >
            {triggerLabel}
            <ArrowRight className="size-4" />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        overlayClassName="bg-[rgba(8,32,50,0.55)] backdrop-blur-[8px]"
        className={cn(
          "gap-0 overflow-hidden border-0 p-0 shadow-2xl",
          "w-[calc(100%-1.5rem)] max-w-[1050px] rounded-[10px] md:rounded-[30px]",
          "max-h-[min(92vh,900px)] overflow-y-auto",
        )}
      >
        <div className="flex items-stretch">
          <div className="relative hidden w-1/2 shrink-0 md:block">
            <Image
              src={ASSETS.getStartedPopup}
              alt=""
              width={534}
              height={785}
              className="h-full min-h-full w-full object-cover md:rounded-l-[30px]"
              sizes="525px"
              priority
            />
          </div>

          <div className="relative flex w-full flex-col bg-white md:w-1/2 md:rounded-r-[30px] md:px-[38px]">
            <DialogClose className="absolute top-2.5 right-[15px] z-10 text-[#333] transition-opacity hover:opacity-70">
              <X className="size-7 stroke-[1.5] md:size-[30px]" />
              <span className="sr-only">Close</span>
            </DialogClose>

            <div className="flex h-full flex-col bg-[#F7F7F7] pt-10 text-center md:rounded-r-[30px] md:pt-[55px] md:text-left">
              <DialogTitle className="px-7 text-[34px] font-semibold leading-none tracking-tight text-[#333] md:px-7 md:text-[42px] lg:px-[28px] lg:text-[50px] lg:tracking-[-1px]">
                Build a Successful WooCommerce Store
              </DialogTitle>
              <DialogDescription className="px-[35px] pb-2.5 pt-2 text-sm font-normal leading-normal text-black md:px-[30px] md:pb-6 md:text-xl lg:text-2xl">
                Get an Exclusive Discounts with our package!
              </DialogDescription>

              <form
                className="mt-auto p-[15px] md:px-[25px] md:py-[30px] lg:px-[35px] lg:py-[50px]"
                onSubmit={(e) => {
                  e.preventDefault();
                  saveOrderPackage({
                    ...DEFAULT_ORDER_PACKAGE,
                    ...orderPackage,
                    features:
                      orderPackage?.features ?? DEFAULT_ORDER_PACKAGE.features,
                  });
                  setOpen(false);
                  router.push("/crm/brief/payment");
                }}
              >
                <div className="space-y-2.5 md:space-y-[15px]">
                  <input
                    required
                    name="name"
                    placeholder="Your Full Name*"
                    autoComplete="name"
                    className={fieldClass}
                  />
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email Address*"
                    autoComplete="email"
                    className={fieldClass}
                  />

                  <CountryPhoneField
                    countries={COUNTRIES}
                    selected={selectedCountry}
                    onCountryChange={setCountryAbbr}
                  />

                  <textarea
                    required
                    name="details"
                    placeholder="Business Industry"
                    rows={3}
                    className={cn(
                      fieldClass,
                      "h-[80px] resize-none md:h-[100px]",
                    )}
                  />
                </div>

                <div className="pt-2.5 md:pt-[15px]">
                  <button
                    type="submit"
                    className="w-full rounded-[6px] bg-[rgb(10,211,10)] px-4 py-[15px] text-center text-base font-bold text-white transition-opacity hover:opacity-90 md:py-5 md:text-[20px] lg:text-[22px]"
                  >
                    Get Started Now!
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function CountryPhoneField({
  countries,
  selected,
  onCountryChange,
}: {
  countries: Country[];
  selected: Country;
  onCountryChange: (abbr: string) => void;
}) {
  return (
    <div className="flex h-11 items-center rounded-[5px] border border-[#F7F7F7] bg-white md:h-[45px]">
      <div className="relative flex h-full w-14 shrink-0 items-center justify-center pl-2">
        <span
          aria-hidden
          className="pointer-events-none absolute left-2.5 top-1/2 size-[19px] h-[13px] -translate-y-1/2 overflow-hidden"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://flagcdn.com/w40/${selected.abbr.toLowerCase()}.png`}
            alt=""
            width={19}
            height={13}
            className="h-[13px] w-[19px] object-cover"
          />
        </span>
        <select
          name="pc"
          aria-label={selected.name}
          value={selected.abbr}
          onChange={(e) => onCountryChange(e.target.value)}
          className="relative z-[1] h-full w-full cursor-pointer appearance-none bg-transparent pl-7 pr-1 text-[10px] text-transparent outline-none"
        >
          {countries.map((country) => (
            <option key={`${country.abbr}-${country.dial}`} value={country.abbr}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      <input
        type="text"
        name="countrycode"
        readOnly
        value={`+${selected.dial}`}
        aria-label="Country dial code"
        className="mx-2.5 w-[70px] shrink-0 rounded-[5px] border-0 bg-[#f9f9f9] py-1 text-center text-sm text-[#333] outline-none md:text-base"
      />

      <input
        required
        type="tel"
        name="phone"
        placeholder="(000) 000-000"
        autoComplete="tel-national"
        className="h-full min-w-0 flex-1 border-0 bg-transparent pr-3 text-sm outline-none placeholder:text-[#999] md:text-base"
      />
    </div>
  );
}
