"use client";

import Image from "next/image";
import { ASSETS } from "@/lib/constants";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in";
import { GetStartedDialog } from "@/components/get-started-dialog";
import { LiveChatLink } from "@/components/layout/header";
import { Container } from "@/components/layout/container";

const services = [
  {
    title: (
      <>
        Custom <b className="font-bold">WooCommerce</b> Development
      </>
    ),
    key: "custom-dev",
    description:
      "We offer bespoke WooCommerce development services to help businesses reach their e-commerce objectives. Our expert developers build intuitive, secure stores that captivate customers and boost sales.",
    icon: ASSETS.lp.serviceIcons[0],
  },
  {
    title: (
      <>
        WooCommerce <b className="font-bold">theme</b> Development
      </>
    ),
    key: "theme",
    description:
      "Our skilled developers craft visually captivating and fully functional WooCommerce themes that elevate your brand. A professionally designed theme not only enhances your store’s appeal but also resonates with your users..",
    icon: ASSETS.lp.serviceIcons[1],
  },
  {
    title: (
      <>
        WooCommerce <b className="font-bold">plugin</b> Development
      </>
    ),
    key: "plugin",
    description:
      "We develop custom plugins that help businesses unlock their full potential. By boosting efficiency and streamlining processes, our solutions give you a competitive advantage in the dynamic e-commerce landscape.",
    icon: ASSETS.lp.serviceIcons[2],
  },
  {
    title: (
      <>
        WooCommerce <b className="font-bold">maintenance</b> Services
      </>
    ),
    key: "maintenance",
    description:
      "We keep your WooCommerce store running smoothly with regular updates, security checks, and performance enhancements. Our team ensures your site remains secure and efficient, so you can focus on growing your business.",
    icon: ASSETS.lp.serviceIcons[3],
  },
  {
    title: (
      <>
        WooCommerce <b className="font-bold">Integration</b> Services
      </>
    ),
    key: "integration",
    description:
      "We streamline your WooCommerce store by integrating it with payment gateways, CRM systems, and other essential tools. Our seamless integrations enhance functionality and improve your e-commerce operations.",
    icon: ASSETS.lp.serviceIcons[4],
  },
  {
    title: (
      <>
        WooCommerce <b className="font-bold">Migration</b> Services
      </>
    ),
    key: "migration",
    description:
      "We handle seamless migrations to WooCommerce, ensuring your data transfers smoothly and your store transitions with minimal downtime. Trust us to set up your new e-commerce platform efficiently and securely.",
    icon: ASSETS.lp.serviceIcons[5],
  },
];

export function LpServices() {
  return (
    <section id="services" className="bg-[#1E1E1E] py-14 md:py-20">
      <Container>
        <div className="mb-10 grid items-center gap-8 lg:mb-14 lg:grid-cols-2 lg:gap-12">
          <FadeIn direction="left" className="space-y-6">
            <h2 className="text-[28px] font-medium leading-[1.15] tracking-tight text-white md:text-[40px] lg:text-[44px]">
              Tailored Solutions by
              <br className="hidden sm:block" /> WooCommerce Launchpad
            </h2>
            <div className="flex flex-wrap items-center gap-5">
              <GetStartedDialog size="lg" />
              <LiveChatLink variant="dark" />
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.1}>
            <p className="text-base leading-relaxed text-white/80 md:text-lg">
              At WooCommerce Launchpad, we provide customized eCommerce solutions
              to fit your unique business needs. Our expert team uses the latest
              technology to optimize your WooCommerce setup and help your business
              thrive online.
            </p>
          </FadeIn>
        </div>

        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service) => (
            <StaggerItem key={service.key}>
              <article className="group flex h-full flex-col gap-[30px] bg-white px-[30px] py-[65px] transition-colors duration-[400ms] ease-in-out hover:bg-brand">
                <div className="flex items-center gap-[15px]">
                  <div className="grid size-[75px] shrink-0 place-items-center rounded-full bg-[#F2F2F2] p-2">
                    <Image
                      src={service.icon}
                      alt=""
                      width={48}
                      height={48}
                      className="size-12 object-contain"
                      unoptimized
                    />
                  </div>
                  <h3 className="text-xl font-medium leading-7 text-[#333] transition-colors duration-[400ms] group-hover:text-white md:text-2xl">
                    {service.title}
                  </h3>
                </div>
                <p className="text-base leading-relaxed text-[#666] transition-colors duration-[400ms] group-hover:text-white">
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
