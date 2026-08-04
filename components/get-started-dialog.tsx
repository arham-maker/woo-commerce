"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
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
import type { OrderPackage } from "@/lib/order-package";
import { cn } from "@/lib/utils";
import {
  formDataToObject,
  submitContactForm,
} from "@/lib/submit-contact";

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
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
            className={
              triggerClassName ||
              "h-auto gap-1.5 rounded-full px-5 py-3 text-xs font-semibold sm:h-12 sm:gap-2 sm:px-8 sm:text-base sm:font-bold md:text-[20px]"
            }
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
          "gap-0 border-0 bg-transparent p-0 shadow-none",
          "w-[1050px] max-w-[90%] max-h-[97vh] overflow-y-auto rounded-[25px]",
          "max-[767px]:rounded-[10px]",
        )}
      >
        <div className="flex w-full items-stretch overflow-hidden rounded-[25px] max-[767px]:rounded-[10px]">
          {/* .popupImage — hidden ≤767 */}
          <div className="relative hidden w-1/2 shrink-0 md:block">
            <Image
              src={ASSETS.getStartedPopup}
              alt=""
              width={534}
              height={785}
              className="h-full min-h-full w-full rounded-l-[30px] object-cover"
              sizes="525px"
              priority
            />
          </div>

          {/* .popupCont */}
          <div
            className={cn(
              "relative w-full bg-white md:w-1/2 md:rounded-r-[30px] md:px-[38px]",
              "max-[767px]:rounded-[10px]",
            )}
          >
            <DialogClose
              className={cn(
                "absolute right-[15px] top-[10px] z-10 cursor-pointer text-black",
                "max-[767px]:right-[6px] max-[767px]:top-[5px]",
              )}
            >
              <X
                className="size-[30px] stroke-[1.5] max-[767px]:size-5"
                strokeWidth={1.5}
              />
              <span className="sr-only">Close</span>
            </DialogClose>

            {/* .popup-all-cont */}
            <div
              className={cn(
                "bg-[#F7F7F7] pt-[55px] text-left",
                "max-[1399px]:pt-10",
                "max-[767px]:rounded-[10px] max-[767px]:pt-[30px] max-[767px]:text-center",
              )}
            >
              <DialogTitle
                className={cn(
                  "m-0 px-7 pb-[15px] text-[50px] font-semibold leading-none tracking-[-1px] text-[#333]",
                  "max-[1399px]:text-[42px]",
                  "max-[767px]:px-[25px] max-[767px]:py-[5px] max-[767px]:pb-[5px] max-[767px]:text-[24px]",
                )}
              >
                Build a Successful WooCommerce Store
              </DialogTitle>

              <DialogDescription
                className={cn(
                  "m-0 px-[30px] pb-6 text-2xl font-normal leading-normal text-black",
                  "max-[1399px]:text-xl",
                  "max-[767px]:px-[35px] max-[767px]:pb-[10px] max-[767px]:text-sm max-[767px]:leading-normal",
                )}
              >
                Get an Exclusive Discounts with our package!
              </DialogDescription>

              <form
                className={cn(
                  "px-[35px] py-[50px]",
                  "max-[1399px]:px-[25px] max-[1399px]:py-[30px]",
                  "max-[767px]:p-[15px]",
                )}
                onSubmit={async (e) => {
                  e.preventDefault();
                  setError(null);
                  setSubmitting(true);
                  const fields = formDataToObject(e.currentTarget);
                  const phone = [fields.countrycode, fields.phone]
                    .filter(Boolean)
                    .join(" ");
                  const result = await submitContactForm({
                    type: "get-started",
                    name: fields.name,
                    email: fields.email,
                    phone,
                    countryCode: fields.countrycode,
                    details: [
                      fields.details,
                      orderPackage?.name
                        ? `Package: ${orderPackage.name}`
                        : null,
                    ]
                      .filter(Boolean)
                      .join(" | "),
                  });
                  setSubmitting(false);
                  if (!result.ok) {
                    setError(result.error);
                    toast.error(result.error);
                    return;
                  }
                  toast.success("Submitted successfully! We'll contact you soon.");
                  setOpen(false);
                  router.push("/thank-you");
                }}
              >
                <div className="pb-[15px] max-[767px]:pb-2.5">
                  <input
                    required
                    name="name"
                    placeholder="Your Full Name*"
                    autoComplete="name"
                    className={fieldClass}
                  />
                </div>

                <div className="pb-[15px] max-[767px]:pb-2.5">
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email Address*"
                    autoComplete="email"
                    className={fieldClass}
                  />
                </div>

                <div className="pb-[15px] max-[767px]:pb-2.5">
                  <CountryPhoneField
                    countries={COUNTRIES}
                    selected={selectedCountry}
                    onCountryChange={setCountryAbbr}
                  />
                </div>

                <div className="pb-[15px] max-[767px]:pb-2.5">
                  <textarea
                    required
                    name="details"
                    placeholder="Business Industry"
                    rows={3}
                    className={cn(fieldClass, "h-[100px] resize-none")}
                  />
                </div>

                <div>
                  {error ? (
                    <p className="mb-3 text-sm text-red-600" role="alert">
                      {error}
                    </p>
                  ) : null}
                  <button
                    type="submit"
                    disabled={submitting}
                    className={cn(
                      "inline-block w-full rounded-[6px] bg-[rgb(10,211,10)] p-5 text-center text-[22px] font-bold leading-none text-white",
                      "disabled:cursor-not-allowed disabled:opacity-60",
                      "max-[767px]:p-[15px] max-[767px]:text-base max-[767px]:leading-none",
                    )}
                  >
                    {submitting ? "Sending..." : "Get Started Now!"}
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

const fieldClass = cn(
  "w-full rounded-[5px] border border-[#F7F7F7] bg-white p-[15px] text-base leading-none text-black outline-none",
  "placeholder:text-[#999]",
  "max-[767px]:p-3 max-[767px]:text-sm max-[767px]:leading-none",
);

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
    <div className="relative flex h-[45px] w-full items-center rounded-[5px] border border-[#F7F7F7] bg-white">
      <span
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-[10px] h-[13px] w-[19px] -translate-y-1/2 overflow-hidden"
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
        className="relative h-[18px] w-[56px] cursor-pointer appearance-none bg-transparent py-0 pr-[19px] pl-[19px] text-[10px] leading-normal text-transparent outline-none"
      >
        {countries.map((country) => (
          <option
            key={`${country.abbr}-${country.dial}`}
            value={country.abbr}
            className="text-black"
          >
            {country.name}
          </option>
        ))}
      </select>

      <input
        type="text"
        name="countrycode"
        readOnly
        value={`+${selected.dial}`}
        aria-label="Country dial code"
        className="mx-2.5 w-[70px] shrink-0 rounded-[5px] border-0 bg-[#f9f9f9] p-[5px] text-center text-sm leading-none text-black outline-none"
      />

      <input
        required
        type="tel"
        name="phone"
        placeholder="(000) 000-000"
        autoComplete="tel-national"
        className="h-auto min-w-0 flex-1 border-0 bg-transparent p-0 text-sm leading-none text-black outline-none placeholder:text-[#999] max-[767px]:text-sm"
      />
    </div>
  );
}
