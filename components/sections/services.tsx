"use client";

import Image from "next/image";
import { ASSETS } from "@/lib/constants";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in";
import { GetStartedDialog } from "@/components/get-started-dialog";
import { LiveChatLink } from "@/components/layout/header";
import {
  Container,
  SectionLead,
  SectionTitle,
} from "@/components/layout/container";

const services = [
  {
    title: "Custom WooCommerce Development",
    description:
      "We offer bespoke WooCommerce development services to help businesses reach their e-commerce objectives. Our expert developers build intuitive, secure stores that captivate customers and boost sales.",
    icon: ASSETS.services[0],
  },
  {
    title: "WooCommerce Theme Development",
    description:
      "Our skilled developers craft visually captivating and fully functional WooCommerce themes that elevate your brand. A professionally designed theme enhances your store's appeal and resonates with users.",
    icon: ASSETS.services[1],
  },
  {
    title: "WooCommerce Plugin Development",
    description:
      "We develop custom plugins that help businesses unlock their full potential. By boosting efficiency and streamlining processes, our solutions give you a competitive advantage.",
    icon: ASSETS.services[2],
  },
  {
    title: "WooCommerce Maintenance Services",
    description:
      "We keep your WooCommerce store running smoothly with regular updates, security checks, and performance enhancements so you can focus on growing your business.",
    icon: ASSETS.services[3],
  },
  {
    title: "WooCommerce Integration Services",
    description:
      "We streamline your WooCommerce store by integrating it with payment gateways, CRM systems, and other essential tools to enhance functionality and improve operations.",
    icon: ASSETS.services[4],
  },
  {
    title: "WooCommerce Migration Services",
    description:
      "We handle seamless migrations to WooCommerce, ensuring your data transfers smoothly and your store transitions with minimal downtime.",
    icon: ASSETS.services[5],
  },
];

export function Services() {
  return (
    <section id="services" className="bg-white py-8 sm:py-16 md:py-24">
      <Container>
        <div className="mb-8 grid items-start gap-6 sm:mb-12 sm:gap-8 lg:grid-cols-2 lg:gap-12">
          <FadeIn direction="left" className="space-y-5 sm:space-y-6">
            <SectionTitle>Tailored Solutions by WooCommerce Launchpad</SectionTitle>
            <div className="flex flex-wrap items-center gap-3 sm:gap-5">
              <GetStartedDialog />
              <LiveChatLink />
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.1}>
            <SectionLead>
              At WooCommerce Launchpad, we provide customized eCommerce solutions
              to fit your unique business needs. Our expert team uses the latest
              technology to optimize your WooCommerce setup and help your business
              thrive online.
            </SectionLead>
          </FadeIn>
        </div>

        <Stagger className="grid gap-6 pt-2 sm:gap-8 sm:grid-cols-2 lg:gap-x-8 lg:gap-y-10 lg:pt-20 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <article className="group origin-center transition-all duration-300 ease-out hover:-translate-y-3 hover:scale-[1.03]">
                <div className="mb-3 flex items-start gap-2 sm:mb-5">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-soft transition-colors group-hover:bg-brand/15 sm:size-14">
                    <Image
                      src={service.icon}
                      alt=""
                      width={40}
                      height={40}
                      className="size-7 object-contain transition-transform duration-300 group-hover:scale-110 sm:size-10"
                    />
                  </div>
                  <h3 className="text-sm font-semibold leading-snug sm:text-[25px]">
                    {service.title}
                  </h3>
                </div>
                <p className="text-xs leading-relaxed text-muted sm:text-lg">
                  {service.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
