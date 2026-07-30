"use client";

import type { ReactNode } from "react";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

const defaultSteps = [
  {
    num: "01",
    title: "Creating blueprints",
    description:
      "Following thorough research, our e-commerce experts shortlist designs based on your requirements. The ideas are converted into blueprints/mock-ups which are then used as the first step towards creating an e-commerce website which users can connect to.",
  },
  {
    num: "02",
    title: "Designing the E-store",
    description:
      "After finalizing the basic idea for your e-store, the blueprints are handed over to our talented design team, which ensures that layouts are user-friendly and comply with your demands. If you haven't provided us with the content, dummy text is used to showcase the final look of the layout.",
  },
  {
    num: "03",
    title: "E-store development",
    description:
      "We're open to as many revisions as you want. However, we'll request our clients to make sure all revisions are communicated effectively while we're still in the \"design phase\". Once layouts are finalized by you, our developers start converting them into e-commerce stores by adding products, plug-ins and more.",
  },
  {
    num: "04",
    title: "Payment Methods Integration",
    description:
      "Once your customers decide to buy, they'd want smooth payment methods. Our developers thus integrate secure and smooth payment methods, assisting your customers to make their purchase without any transaction hurdles.",
  },
  {
    num: "05",
    title: "Trial, testing and revisions",
    description:
      "Your satisfaction is our priority, hence you have the authority to request revisions once we've developed the website completely. We'll incorporate your feedback and solve any issues that might have occurred during the testing phase.",
  },
  {
    num: "06",
    title: "The wrap-it-up phase",
    description:
      "As soon as you give us the thumbs up, our design and development team will launch your e-commerce store, handing over your project with all necessary files and details.",
  },
];

export type ProcessStep = {
  num: string;
  title: string;
  description: string;
};

export function Process({
  title = "The way we Develop WooCommerce Websites",
  steps = defaultSteps,
}: {
  title?: ReactNode;
  steps?: ProcessStep[];
}) {
  return (
    <section className="relative bg-white py-14 md:py-[55px]">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-[55px]">
              <h2 className="max-w-sm text-[32px] font-medium leading-[1.2] tracking-tight text-black md:text-[44px]">
                {title}
              </h2>
            </div>
          </div>

          <div className="lg:col-span-8">
            <ul className="flex flex-col bg-white">
              {steps.map((step, i) => (
                <li
                  key={step.num}
                  className={cn(
                    "sticky top-[50px] flex flex-col gap-[30px] bg-white py-[30px]",
                    "max-[991px]:gap-2.5 max-[991px]:pb-[15px]",
                    "max-[767px]:items-start max-[767px]:gap-2.5 max-[767px]:pb-2.5",
                    i < steps.length - 1 && "border-b border-[#D4D4D4]",
                    i === steps.length - 1 && "border-b-0 pb-0",
                  )}
                  style={{ zIndex: i + 1 }}
                >
                  <div className="max-[767px]:w-full">
                    <span className="relative inline-block text-2xl font-normal leading-[1.16] text-[#6C6CFF] max-[991px]:text-lg max-[991px]:leading-none">
                      {step.num}
                      <span
                        aria-hidden
                        className="pointer-events-none absolute -top-2 -right-[5px] -z-10 size-6 rounded-full bg-[linear-gradient(180deg,#FFF_0%,#FFC498_100%)] max-[991px]:-top-1.5 max-[991px]:-right-1 max-[991px]:size-[18px]"
                      />
                    </span>
                    <h3 className="pt-5 text-2xl font-bold leading-[1.16] text-[#333] max-[991px]:pt-2.5 max-[991px]:text-base max-[991px]:leading-[1.2]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-base leading-[1.6] text-[#333] max-[991px]:text-xs max-[991px]:leading-[1.4]">
                    {step.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
