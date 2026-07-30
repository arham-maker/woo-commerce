"use client";

import type { LucideIcon } from "lucide-react";
import { Shield, FileKey2, Hexagon, CircleArrowRight } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in";
import { Container } from "@/components/layout/container";
import { GetStartedDialog } from "@/components/get-started-dialog";

const uniqueFeatures: {
  title: string;
  body: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Enterprise-Level Firewall DDoS Protection",
    body: "Detect and block DDoS attacks (or any malicious event) immediately thanks to our free Cloudflare integration with IP-based and firewall protection.",
    icon: Shield,
  },
  {
    title: "Simplified SSL Management With Free Wildcard SSL Support",
    body: "Easily secure your root domains with an unlimited number of subdomains thanks to Kinsta’s Cloudflare integration.",
    icon: FileKey2,
  },
  {
    title: "HTTP/3 Out-of-the-Box Support",
    body: "HTTP/3 improves performance, security, and reliability. Get full HTTP/3 support so you don’t have to waste time tweaking your server settings.",
    icon: Hexagon,
  },
];

// Live site renders each feature twice (A A B B C C).
const features = uniqueFeatures.flatMap((item) => [item, item]);

export function DomainHostingFeatures() {
  return (
    <section className="bg-white py-12 md:pt-[95px] md:pb-[50px]">
      <Container>
        <FadeIn className="mx-auto mb-10 max-w-4xl px-5 text-center md:mb-14">
          <h2 className="mb-5 text-[28px] font-medium leading-[1.15] tracking-tight text-[#333] md:mb-6 md:text-[40px] lg:text-[44px]">
            Dependable Domain and Hosting Solutions
          </h2>
          <p className="text-base leading-relaxed text-[#333] md:text-lg">
            At WooCommerce Launchpad, we provide secure domain registration and
            fast, reliable hosting solutions. Focus on your business while we
            ensure your website performs seamlessly.
          </p>
        </FadeIn>

        <Stagger className="grid gap-[42px] sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={`${item.title}-${i}`} index={i}>
                <article className="flex h-full flex-col items-start justify-start gap-2.5 rounded-[10px] bg-[#F7F6F6] p-[15px] text-left transition-shadow duration-300 hover:shadow-[0_0_20px_2px_rgba(0,0,0,0.1)] xl:gap-5 xl:rounded-[15px] xl:p-[30px]">
                  <div className="flex h-[60px] items-center xl:h-[65px]">
                    <Icon
                      className="size-12 text-[#673DE6] xl:size-14"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <h3 className="mb-[15px] text-base font-bold leading-none text-[#333] md:text-lg xl:mb-[25px] xl:text-2xl">
                      {item.title}
                    </h3>
                    <p className="text-xs leading-[1.33] text-[#333] md:text-sm xl:text-lg">
                      {item.body}
                    </p>
                    <div className="mt-auto">
                      <GetStartedDialog>
                        <button
                          type="button"
                          className="mt-[25px] inline-flex items-center gap-2.5 text-xs font-normal leading-[1.2] text-[#333] transition-colors hover:text-brand md:mt-[60px] md:gap-3 md:text-sm"
                        >
                          Get Started Now
                          <CircleArrowRight className="size-4 shrink-0" />
                        </button>
                      </GetStartedDialog>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
