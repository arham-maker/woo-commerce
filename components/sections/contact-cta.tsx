"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ASSETS } from "@/lib/constants";
import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

const fieldClass =
  "w-full border-0 border-b border-[#333] bg-transparent pb-[30px] text-xl font-normal leading-[1.2] text-[#333] outline-none placeholder:text-[#333] placeholder:opacity-100 focus:border-brand max-[1399px]:pb-3 max-[1399px]:text-base max-[991px]:pb-[7px] max-[991px]:text-xs";

export function ContactCta() {
  return (
    <section id="contact" className="bg-white pb-[90px] max-[991px]:py-10">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <FadeIn direction="left">
            <h2 className="mb-[38px] text-[40px] font-medium leading-[1.25] tracking-tight text-[#333] max-[1399px]:text-[36px] max-[991px]:mb-5 max-[991px]:pb-0 max-[991px]:text-2xl max-[767px]:text-[22px]">
              Need a technological solution? <br className="hidden sm:block" />
              Contact us!
            </h2>

            <form
              className="w-full"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 max-[1399px]:gap-y-[30px] max-[991px]:gap-y-3">
                <div>
                  <input
                    required
                    name="name"
                    placeholder="Name"
                    className={fieldClass}
                    autoComplete="name"
                  />
                </div>
                <div>
                  <input
                    name="company"
                    placeholder="Company/Business"
                    className={fieldClass}
                    autoComplete="organization"
                  />
                </div>
                <div>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={fieldClass}
                    autoComplete="email"
                  />
                </div>
                <div>
                  <input
                    required
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    className={fieldClass}
                    autoComplete="tel"
                  />
                </div>
                <div className="sm:col-span-2">
                  <input
                    name="details"
                    placeholder="Describe your needs in detail"
                    className={fieldClass}
                  />
                </div>
              </div>

              <div className="mt-[37px] flex flex-col items-start gap-5 sm:flex-row sm:items-center max-[991px]:mt-5 max-[991px]:flex-col max-[991px]:items-end max-[991px]:gap-2.5">
                <p className="max-w-xl text-xs leading-[1.6] text-[#999] max-[991px]:w-full">
                  Please be informed that when you click the Send button
                  Innowise will process your personal data in accordance with
                  our{" "}
                  <em className="not-italic underline">Privacy Policy</em> for
                  the purpose of providing you with appropriate information.
                </p>

                <button
                  type="submit"
                  className={cn(
                    "inline-flex w-[190px] shrink-0 items-center justify-center gap-3.5 rounded-[41px]",
                    "border border-brand bg-brand px-5 py-5 text-lg font-bold text-white",
                    "transition-colors duration-[400ms] ease-in-out",
                    "hover:bg-transparent hover:text-black",
                    "max-[991px]:w-[100px] max-[991px]:gap-2.5 max-[991px]:rounded-[40px] max-[991px]:px-[5px] max-[991px]:pt-2.5 max-[991px]:pb-2 max-[991px]:text-sm",
                  )}
                >
                  Send
                  <ArrowRight className="size-[18px] transition-colors duration-[400ms] max-[991px]:size-3.5" strokeWidth={2.5} />
                </button>
              </div>
            </form>
          </FadeIn>

          <FadeIn direction="right" delay={0.2} className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[560px] overflow-hidden rounded-[28px]">
              <Image
                src={ASSETS.contact}
                alt="Our team collaborating on a project"
                width={607}
                height={784}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
