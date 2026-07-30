"use client";

import Image from "next/image";
import { ASSETS } from "@/lib/constants";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in";
import { Container } from "@/components/layout/container";

const logoTypes = [
  {
    title: "Iconic Logo Design",
    body: "Iconic logo design creates simple, memorable, and instantly recognizable logos that capture a brand's essence. These logos are timeless, versatile, and effectively convey the brand's message without words.",
    img: ASSETS.logoDesignTypes[0],
  },
  {
    title: "Typographic Logo Design",
    body: "Typographic logo design uses creative typography to build unique brand identities. At WooCommerce Launchpad, we craft logos with innovative fonts and layouts. Our designs ensure clarity, simplicity, and strong visual impact.",
    img: ASSETS.logoDesignTypes[1],
  },
  {
    title: "Illustrative Logo Design",
    body: "Illustrative logo design uses detailed graphics to create memorable and striking logos. At WooCommerce Launchpad, we craft logos that vividly represent your brand's story and values. Our designs blend artistry and creativity for a lasting impression.",
    img: ASSETS.logoDesignTypes[2],
  },
  {
    title: "Animated Logo Design",
    body: "Animated logos use motion to enhance your brand's identity. At WooCommerce Launchpad, we create dynamic and engaging logos that capture attention and boost brand recognition. Our designs blend creativity with animation to leave a lasting impression.",
    img: ASSETS.logoDesignTypes[3],
  },
];

export function LogoDesignTypes() {
  return (
    <section className="bg-white py-16 md:py-[75px] md:pb-[65px]">
      <Container>
        <FadeIn className="mx-auto mb-10 max-w-3xl px-5 text-center md:mb-14">
          <h2 className="mb-5 text-[28px] font-medium leading-[1.15] tracking-tight text-[#333] md:mb-6 md:text-[40px] lg:text-[44px]">
            Appealing Logo Designs for Every Business
          </h2>
          <p className="text-base leading-relaxed text-[#333] md:text-lg">
            Beautiful logo designs that clearly convey your message
          </p>
        </FadeIn>

        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {logoTypes.map((item, i) => (
            <StaggerItem key={item.title} index={i}>
              <article className="flex h-full flex-col">
                <div className="mb-5 overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="h-auto w-full object-contain"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <h3 className="mb-3 text-xl font-bold leading-tight text-[#333] md:text-[30px] md:leading-tight">
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed text-[#333]">
                  {item.body}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
