"use client";

import { SITE } from "@/lib/constants";
import { FAQS } from "@/lib/faqs";
import { openLiveChat } from "@/lib/zendesk";
import { FadeIn } from "@/components/motion/fade-in";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqItem = {
  q: string;
  a: string;
};

export function Faq({
  items = FAQS as unknown as FaqItem[],
  phoneDisplay = SITE.phone,
}: {
  items?: readonly FaqItem[];
  phoneDisplay?: string;
}) {
  return (
    <section id="faqs" className="bg-white pb-16 pt-16 md:pb-[90px] md:pt-[145px]">
      <div className="mx-auto max-w-[1320px] px-3">
        <div className="grid gap-10 pb-10 md:grid-cols-12 md:gap-8 md:pb-[90px] lg:gap-12">
          <FadeIn direction="left" className="md:col-span-5 lg:col-span-4">
            <h2 className="mb-4 text-[28px] font-bold leading-[1.1] text-[#333] md:mb-6 md:text-[42px] lg:text-[54px]">
              Frequently Asked Questions
            </h2>
            <p className="text-base leading-snug text-[#333] md:text-[22px] lg:text-2xl">
              Still have questions? Call{" "}
              <a
                href={SITE.phoneHref}
                className="font-medium text-brand hover:underline"
              >
                {phoneDisplay}
              </a>{" "}
              or{" "}
              <button
                type="button"
                onClick={() => {
                  void openLiveChat();
                }}
                className="open-livechat font-medium text-brand hover:underline"
              >
                LIVE CHAT
              </button>{" "}
              with us for real-time support.
            </p>
          </FadeIn>

          <FadeIn delay={0.15} direction="right" className="md:col-span-7 lg:col-span-8">
            <Accordion type="single" collapsible className="w-full">
              {items.map((faq, i) => (
                <AccordionItem key={faq.q} value={`item-${i}`}>
                  <AccordionTrigger>
                    {i + 1}. {faq.q}
                  </AccordionTrigger>
                  <AccordionContent>{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
