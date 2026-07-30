"use client";

import { Plus } from "lucide-react";
import { SITE } from "@/lib/constants";
import { FAQS } from "@/lib/faqs";
import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/layout/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PHONE_DISPLAY = "+1 (888) 894-6005";

export function FaqPageSection() {
  return (
    <section className="bg-white pb-16 pt-16 md:pb-[90px] md:pt-20">
      <Container className="md:px-[85px]">
        <div className="grid items-center gap-6 pb-[60px] md:grid-cols-2 md:gap-8 md:pb-[122px]">
          <FadeIn direction="left">
            <h2 className="text-[28px] font-bold leading-[1] text-[#333] md:text-[42px] md:leading-[42px]">
              Frequently Asked Questions
            </h2>
          </FadeIn>

          <FadeIn delay={0.1} direction="right">
            <p className="text-base leading-snug text-[#333] md:text-lg">
              Still have questions? Call{" "}
              <a
                href={SITE.phoneHref}
                className="font-medium text-brand hover:underline"
              >
                {PHONE_DISPLAY}
              </a>{" "}
              or{" "}
              <button
                type="button"
                className="font-medium text-brand hover:underline"
              >
                LIVE CHAT
              </button>{" "}
              with us for real-time support.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.15}>
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`item-${i}`}
                className="border-[#BDBDBD] px-0 py-0 first:border-t"
              >
                <AccordionTrigger
                  className="py-[15px] text-[16px] font-bold leading-normal text-[#303A42] hover:text-brand md:text-[18px] [&[data-state=open]>svg]:rotate-45"
                  icon={
                    <Plus
                      className="size-5 shrink-0 text-[#303A42] transition-transform duration-300"
                      strokeWidth={2}
                    />
                  }
                >
                  {i + 1}. {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-[15px] pt-5 text-[16px] leading-8 text-[#303A42]">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </Container>
    </section>
  );
}
