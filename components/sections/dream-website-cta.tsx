"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/layout/container";
import { GetStartedDialog } from "@/components/get-started-dialog";
import { Button } from "@/components/ui/button";

type DreamWebsiteCtaProps = {
  title?: string;
  lead?: string;
  buttonLabel?: string;
};

export function DreamWebsiteCta({
  title = "Ready To Build Your Dream WooCommerce Website?",
  lead = "Leverage the excellence of expert WooCommerce website development services for your projects",
  buttonLabel = "Contact Us Today",
}: DreamWebsiteCtaProps) {
  return (
    <section className="bg-white py-14 md:py-[100px]">
      <Container>
        <FadeIn>
          <div className="rounded-[10px] bg-[#2A282C] px-6 py-10 md:rounded-[15px] md:px-[50px] md:py-[45px]">
            <div className="grid items-center gap-8 md:grid-cols-12">
              <div className="md:col-span-7">
                <h2 className="mb-4 text-[28px] font-medium leading-[1.15] tracking-tight text-white md:mb-[15px] md:text-[40px] lg:text-[44px]">
                  {title}
                </h2>
                <p className="text-base leading-relaxed text-white md:text-lg">
                  {lead}
                </p>
              </div>
              <div className="flex justify-center md:col-span-5">
                <GetStartedDialog>
                  <Button className="h-auto rounded-full bg-[#FF6C6C] px-10 py-5 text-lg font-bold text-white shadow-none hover:bg-brand hover:shadow-none md:px-[75px] md:py-[26px] md:text-[22px]">
                    {buttonLabel}
                  </Button>
                </GetStartedDialog>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
