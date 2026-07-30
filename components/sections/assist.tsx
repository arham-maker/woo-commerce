"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ASSETS } from "@/lib/constants";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { GetStartedDialog } from "@/components/get-started-dialog";
import { LiveChatLink } from "@/components/layout/header";
import {
  Container,
  SectionLead,
  SectionTitle,
} from "@/components/layout/container";

const cards = [
  {
    title: "Sell online",
    description:
      "The first step to selling online with WooCommerce is to find a host for your store.",
    image: ASSETS.assist[0],
    bg: "#f7f6f6",
  },
  {
    title: "Build stores for others",
    description:
      "Build powerful ecommerce solutions with WooCommerce, our truly open, WordPress-based platform.",
    image: ASSETS.assist[1],
    bg: "#f6f5ff",
  },
  {
    title: "Power up your store",
    description:
      "Already sell on Woo? Explore hundreds of extensions and themes to improve your business.",
    image: ASSETS.assist[2],
    bg: "#ffdcf8",
  },
];

export function Assist() {
  return (
    <section id="assist" className="bg-white py-16 md:py-24">
      <Container>
        <FadeIn className="mx-auto mb-4 max-w-4xl text-center">
          <SectionTitle>How WooCommerce Launchpad Can Assist You</SectionTitle>
        </FadeIn>
        <FadeIn delay={0.1} className="mx-auto mb-12 max-w-3xl text-center">
          <SectionLead>
            WooCommerce Launchpad provides tailored e-commerce solutions to boost
            your online store&apos;s performance. From custom development to
            seamless integrations and ongoing support, we help you achieve your
            business goals efficiently and effectively.
          </SectionLead>
        </FadeIn>

        <Stagger className="grid gap-5 md:grid-cols-3">
          {cards.map((card) => (
            <StaggerItem key={card.title}>
              <article
                className="group flex h-full flex-col overflow-hidden rounded-[15px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ backgroundColor: card.bg }}
              >
                <div className="flex flex-1 flex-col items-center px-7 pt-12 pb-6 text-center">
                  <h3 className="mb-3 text-2xl font-semibold">{card.title}</h3>
                  <p className="mb-6 text-base leading-relaxed text-muted">
                    {card.description}
                  </p>
                  <GetStartedDialog>
                    <Button className="gap-2">
                      Get Started
                      <ArrowRight className="size-4" />
                    </Button>
                  </GetStartedDialog>
                </div>
                <div className="mt-auto overflow-hidden px-4 pb-0">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={335}
                    height={175}
                    className="mx-auto h-auto w-full max-w-[280px] object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn delay={0.2} className="mt-10 flex justify-center gap-5">
          <GetStartedDialog />
          <LiveChatLink />
        </FadeIn>
      </Container>
    </section>
  );
}
