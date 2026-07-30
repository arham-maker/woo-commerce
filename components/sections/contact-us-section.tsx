"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { ASSETS } from "@/lib/constants";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

const CONTACT_EMAIL = "info@woocommerceweb.com";

const requestTypeOptions = [
  {
    value: "0",
    label: "Custom Woocommerce Design and Development",
    disabled: true,
  },
  {
    value: "Woocommerce Theme Development",
    label: "Woocommerce Theme Development",
  },
  {
    value: "Woocommerce Plugin Development",
    label: "Woocommerce Plugin Development",
  },
  {
    value: "Woocommerce Maintenance Services",
    label: "Woocommerce Maintenance Services",
  },
] as const;

const tellUsMoreOptions = [
  { value: "New Store Setup", label: "New Store Setup", disabled: true },
  {
    value: "Redesigning Existing Store",
    label: "Redesigning Existing Store",
  },
  {
    value: "Custom Feature Development",
    label: "Custom Feature Development",
  },
  { value: "Fixing Bugs & Issues", label: "Fixing Bugs & Issues" },
] as const;

const socialItems: { id: string; label: string; icon: ReactNode }[] = [
  {
    id: "email",
    label: CONTACT_EMAIL,
    icon: (
      <svg viewBox="0 0 512 512" className="size-5 fill-current" aria-hidden>
        <path d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm0 48v40.8c-22.4 18.3-58.2 46.7-134.6 106.5-16.8 13.2-50.2 45.1-73.4 44.7-23.2.4-56.6-31.5-73.4-44.7C106.2 199.5 70.4 171.1 48 152.8V112h416zM48 400V214.4c22.9 18.3 55.4 43.9 104.9 82.6 21.9 17.2 60.1 55.2 103.1 55 42.9.2 81.1-37.8 103.1-55 49.5-38.7 82-64.3 104.9-82.6V400H48z" />
      </svg>
    ),
  },
  {
    id: "twitter",
    label: "Twitter",
    icon: (
      <svg viewBox="0 0 512 512" className="size-[18px] fill-current" aria-hidden>
        <path d="M459.4 151.7c.3 4.5.3 9.1.3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.2-13.3 66.3-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
      </svg>
    ),
  },
  {
    id: "facebook",
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 320 512" className="size-[18px] fill-current" aria-hidden>
        <path d="M80 299.3V512h116V299.3h86.5l18-97.8H196v-34.6c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4.4 37 1.2V7.9C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
      </svg>
    ),
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 448 512" className="size-[18px] fill-current" aria-hidden>
        <path d="M100.3 448H7.4V148.9h92.9zm-46.4-340.7C24.1 107.3 0 83.2 0 53.6A53.6 53.6 0 0 1 53.6 0a53.6 53.6 0 0 1 53.6 53.6c0 29.6-24.1 53.7-53.3 53.7zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
      </svg>
    ),
  },
  {
    id: "instagram",
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 448 512" className="size-[18px] fill-current" aria-hidden>
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
      </svg>
    ),
  },
];

const fieldControlClass =
  "w-full rounded-none border border-[#dfdfdf] bg-white px-[30px] py-5 text-base text-black transition-[border-color] duration-[400ms] ease-in-out outline-none hover:border-[#6c6cff] focus:border-brand active:border-brand max-[1399px]:px-[15px] max-[1399px]:py-[15px]";

function ContactField({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="pb-[50px] max-[1399px]:pb-5">
      <label className="mb-0 flex gap-1.5 pb-2.5 text-2xl font-semibold leading-[1.45] text-black max-[1399px]:gap-1.5 max-[1399px]:pb-[5px] max-[1399px]:text-base max-[1399px]:leading-[1.2]">
        {label}
        {required ? <span className="text-[#f96363]">*</span> : null}
      </label>
      {children}
    </div>
  );
}

export function ContactUsSection() {
  const router = useRouter();

  return (
    <section className="relative -mt-[140px] pb-[130px] max-[1199px]:pb-10">
      <Container>
        <div className="grid gap-5 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:grid-cols-[minmax(0,8fr)_minmax(0,4fr)] lg:gap-6">
          <div className="rounded-[10px] bg-white px-10 pb-[75px] pt-[60px] shadow-[0_24px_80px_0_rgba(0,0,0,0.15)] max-[1399px]:rounded-[5px] max-[1399px]:px-5 max-[1399px]:pb-[35px] max-[1399px]:pt-[30px]">
            <div className="pb-[60px] max-[1399px]:pb-[30px]">
              <h2 className="pb-[23px] text-[42px] font-semibold leading-[0.7] text-black max-[1399px]:pb-2.5 max-[1399px]:text-[30px]">
                Send us a message
              </h2>
              <p className="text-lg font-normal leading-[1.66] text-black max-[1399px]:text-sm max-[1399px]:leading-[1.4]">
                Say goodbye to slow-loading pages with our lightning-fast web
                hosting solutions.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                router.push("/thank-you");
              }}
              noValidate
            >
              <ContactField label="Please choose a request type below">
                <select
                  name="requestType"
                  defaultValue="0"
                  className={cn(fieldControlClass, "appearance-auto")}
                >
                  {requestTypeOptions.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      disabled={"disabled" in option && option.disabled}
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
              </ContactField>

              <ContactField label="Tell us more">
                <select
                  name="tellUsMore"
                  defaultValue="New Store Setup"
                  className={cn(fieldControlClass, "appearance-auto")}
                >
                  {tellUsMoreOptions.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      disabled={"disabled" in option && option.disabled}
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
              </ContactField>

              <ContactField label="Your email address" required>
                <input
                  type="email"
                  name="email"
                  placeholder="Type your email address"
                  className={fieldControlClass}
                  autoComplete="email"
                />
              </ContactField>

              <ContactField label="Description" required>
                <textarea
                  name="details"
                  placeholder="Type your subject"
                  rows={4}
                  className={cn(fieldControlClass, "h-[130px] resize-none")}
                />
              </ContactField>

              <div>
                <button
                  type="submit"
                  className="inline-flex w-[256px] items-center justify-center rounded-[41px] bg-[#ff6c6c] px-[51px] pt-5 pb-4 text-2xl font-bold whitespace-nowrap text-white transition-colors duration-[400ms] ease-in-out hover:bg-[#6c6cff] max-[1399px]:w-[200px] max-[1399px]:justify-center max-[1399px]:px-5 max-[1399px]:pt-3 max-[1399px]:pb-2.5 max-[1399px]:text-lg"
                >
                  Started Now
                </button>
              </div>
            </form>
          </div>

          <div>
            <div className="mt-5 rounded-[10px] bg-white px-5 py-[55px] shadow-[0_4px_76.8px_0_rgba(0,0,0,0.15)] max-[1399px]:rounded-[5px] max-[1399px]:px-[15px] max-[1399px]:py-5 md:mt-0 max-[767px]:mt-5">
              <ul className="flex flex-col gap-[5px]">
                {socialItems.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      className="flex w-full cursor-pointer items-center gap-2.5 rounded-[5px] p-2.5 text-left text-[17px] font-normal leading-[1.2] text-black transition-colors hover:bg-[rgba(127,84,179,0.196)] hover:text-brand max-[1399px]:text-sm"
                    >
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                        {item.icon}
                      </span>
                      <span className="break-all">{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>

              <h3 className="pt-[65px] pb-10 text-xl font-normal leading-[1.2] text-black max-[1399px]:pt-[25px] max-[1399px]:pb-2.5 max-[1399px]:text-lg">
                Already with Bandname
              </h3>
              <p className="text-lg font-normal leading-[1.66] text-[#999] max-[1399px]:text-xs max-[1399px]:leading-[1.6]">
                By submitting this form: You agree to the processing of the
                submitted personal data in accordance with Our{" "}
                <Link
                  href="/privacy-policy"
                  className="cursor-pointer font-bold hover:underline"
                >
                  Privacy Policy
                </Link>
                , including the transfer of data to the United States.
              </p>
            </div>

            <div className="pt-[65px] max-[1399px]:pt-[25px]">
              <Image
                src={ASSETS.contactMap}
                alt="Map"
                width={415}
                height={265}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
