"use client";

import Image from "next/image";
import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/layout/container";
import { LiveChatConsultantCta } from "@/components/live-chat-consultant-cta";

type ServicePackageCtaProps = {
  title: string;
  lead: string;
  image: string;
  imageAlt: string;
};

export function ServicePackageCta({
  title,
  lead,
  image,
  imageAlt,
}: ServicePackageCtaProps) {
  return (
    <section className="bg-white py-5">
      <Container>
        <FadeIn>
          <div className="relative overflow-hidden rounded-[10px] bg-[rgba(217,217,217,0.5)] p-[25px] transition-[box-shadow] duration-300 hover:shadow-[0_0_20px_1px_rgba(0,0,0,0.1)] xl:rounded-[15px] xl:p-[50px]">
            <div className="relative z-[1] w-[45%]">
              <h2 className="mb-[15px] text-[22px] font-bold leading-none text-[#333] xl:mb-[30px] xl:text-[30px]">
                {title}
              </h2>
              <p className="mb-5 text-sm leading-[1.33] text-[#333] xl:mb-[30px] xl:text-lg">
                {lead}
              </p>
              <LiveChatConsultantCta compact stacked className="items-start" />
            </div>

            <div className="pointer-events-none absolute top-0 right-0 bottom-0 my-auto hidden h-fit w-fit lg:block">
              <Image
                src={image}
                alt={imageAlt}
                width={604}
                height={421}
                className="h-auto w-[200px] max-w-none object-contain xl:w-auto"
                sizes="(max-width: 1400px) 200px, 40vw"
              />
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
