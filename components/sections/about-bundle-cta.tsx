"use client";

import Image from "next/image";
import { ASSETS } from "@/lib/constants";
import { Stagger, StaggerItem } from "@/components/motion/fade-in";
import { Container } from "@/components/layout/container";
import { LiveChatConsultantCta } from "@/components/live-chat-consultant-cta";
import { GetStartedDialog } from "@/components/get-started-dialog";
import { Button } from "@/components/ui/button";

export function AboutBundleCta() {
  return (
    <section className="bg-white py-5">
      <Container>
        <Stagger className="grid gap-5 md:grid-cols-2 md:gap-6">
          <StaggerItem index={0}>
            <article className="relative h-full overflow-hidden rounded-[15px] bg-[#E9E1E1] p-6 transition-shadow duration-[400ms] hover:shadow-[0_0_20px_1px_rgba(0,0,0,0.1)] sm:p-10 xl:p-[50px]">
              <div className="relative z-[1] w-[58%] sm:w-[55%] xl:w-[45%]">
                <h3 className="mb-4 text-[22px] font-bold leading-none text-[#333] xl:mb-[30px] xl:text-[30px]">
                  Save 100s, get our bundle package today.
                </h3>
                <p className="mb-5 text-sm leading-[1.33] text-[#333] xl:mb-[30px] xl:text-lg">
                  Logo, website and stationery get everything designed in a
                  pocket-friendly package.
                </p>
                <GetStartedDialog>
                  <Button className="h-auto rounded-full bg-[#FF6C6C] px-6 py-3.5 text-sm font-bold text-white shadow-none hover:bg-brand hover:shadow-none sm:px-[45px] sm:pt-5 sm:pb-[18px] sm:text-lg">
                    View All Bundles Packages
                  </Button>
                </GetStartedDialog>
              </div>
              <div className="pointer-events-none absolute top-0 right-0 bottom-0 my-auto hidden h-fit w-fit sm:block">
                <Image
                  src={ASSETS.aboutBundle}
                  alt="Bundle package"
                  width={351}
                  height={389}
                  className="h-auto w-[160px] max-w-none object-contain xl:w-[220px]"
                />
              </div>
            </article>
          </StaggerItem>

          <StaggerItem index={1}>
            <article className="relative h-full overflow-hidden rounded-[15px] bg-[rgba(217,217,217,0.5)] p-6 transition-shadow duration-[400ms] hover:shadow-[0_0_20px_1px_rgba(0,0,0,0.1)] sm:p-10 xl:p-[50px]">
              <div className="relative z-[1] w-[58%] sm:w-[55%] xl:w-[45%]">
                <h3 className="mb-4 text-[22px] font-bold leading-none text-[#333] xl:mb-[30px] xl:text-[30px]">
                  Looking for a custom logo design package?
                </h3>
                <p className="mb-5 text-sm leading-[1.33] text-[#333] xl:mb-[30px] xl:text-lg">
                  Looking for a custom logo design package?
                </p>
                <LiveChatConsultantCta compact stacked className="items-start" />
              </div>
              <div className="pointer-events-none absolute top-0 right-0 bottom-0 my-auto hidden h-fit w-fit sm:block">
                <Image
                  src={ASSETS.aboutConsultant}
                  alt="Custom logo design consultant"
                  width={297}
                  height={389}
                  className="h-auto w-[140px] max-w-none object-contain xl:w-[200px]"
                />
              </div>
            </article>
          </StaggerItem>
        </Stagger>
      </Container>
    </section>
  );
}
