"use client";

import Image from "next/image";
import { ASSETS } from "@/lib/constants";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in";
import { Container } from "@/components/layout/container";

const testimonials = [
  {
    name: "John D",
    role: "CEO of TechGear",
    title: '"A Game-Changer for Our Online Sales!"',
    body: "“Partnering with WooCommerce Web has transformed our e-commerce business. Our custom-designed WooCommerce site is not only visually stunning but has also boosted our sales by 50% in just three months. The team's expertise and dedication are unmatched.”",
    user: ASSETS.lp.testimonials[0].user,
    dash: ASSETS.lp.testimonials[0].dash,
  },
  {
    name: "Lisa M",
    role: "Owner of FashionFusion",
    title: '"Increased Our Sales by 40%!"',
    body: "“Thanks to WooCommerce Web, our online store now runs smoothly and looks fantastic. The new site is optimized for performance, and our sales have increased by 40% since the launch. Their ongoing support has been invaluable.”",
    user: ASSETS.lp.testimonials[1].user,
    dash: ASSETS.lp.testimonials[1].dash,
  },
  {
    name: "Carlos R",
    role: "Manager at HomeEssentials",
    title: '"Exceptional Results and Support"',
    body: "“WooCommerce Web exceeded our expectations. Our sales have soared by 60% since they redesigned our site. The team provided exceptional support and customized solutions that perfectly fit our needs. Highly recommended!”",
    user: ASSETS.lp.testimonials[2].user,
    dash: ASSETS.lp.testimonials[2].dash,
  },
  {
    name: "Emily S",
    role: "Founder of PetPal",
    title: '"From Zero to Hero!"',
    body: "“As a startup, we needed a reliable partner to help us make our mark. WooCommerce Web delivered beyond our dreams, with a site that’s brought in a 70% increase in sales. Their expertise in WooCommerce is truly impressive.”",
    user: ASSETS.lp.testimonials[3].user,
    dash: ASSETS.lp.testimonials[3].dash,
  },
  {
    name: "David L",
    role: "Director of OutdoorGear",
    title: '"Revamped Our Store, Boosted Our Sales"',
    body: "“Our sales have never been better, thanks to WooCommerce Web. The revamped site is fast, user-friendly, and visually appealing, leading to a 55% sales increase. Their team is professional, responsive, and a pleasure to work with.”",
    user: ASSETS.lp.testimonials[4].user,
    dash: ASSETS.lp.testimonials[4].dash,
  },
  {
    name: "Sophia G",
    role: "Co-owner of GourmetDelights",
    title: '"Outstanding Service and Results"',
    body: "“Working with WooCommerce Web was the best decision we made for our e-commerce business. Our sales jumped by 45% after the redesign. The site's performance is top-notch, and their ongoing support keeps us ahead of the competition.\"",
    user: ASSETS.lp.testimonials[5].user,
    dash: ASSETS.lp.testimonials[5].dash,
  },
];

export function LpTestimonials() {
  return (
    <section id="game-changer" className="bg-[#E7E7E7] py-14 md:py-[90px]">
      <Container>
        <FadeIn className="mx-auto mb-10 max-w-4xl text-center md:mb-14">
          <h2 className="text-[28px] font-medium leading-[1.15] tracking-tight text-[#333] md:text-[40px] lg:text-[44px]">
            The most-trusted ecommerce platform for building success
          </h2>
        </FadeIn>

        <Stagger className="grid gap-[42px] sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <StaggerItem key={item.name} index={i}>
              <article className="flex h-full flex-col justify-between gap-5 rounded-[15px] bg-[#F7F6F6] p-[30px] transition-shadow duration-[400ms] hover:shadow-[0_0_20px_5px_rgba(0,0,0,0.2)]">
                <div className="flex items-center justify-between gap-2.5">
                  <div className="flex items-center gap-2.5">
                    <Image
                      src={item.user}
                      alt=""
                      width={25}
                      height={25}
                      className="size-[25px] shrink-0 rounded-full object-cover"
                    />
                    <div className="flex flex-col leading-normal">
                      <em className="not-italic text-[12.31px] font-normal text-[#3C3C3B]">
                        {item.name}
                      </em>
                      <b className="text-[7.9px] font-normal text-[#9E9D9D]">
                        {item.role}
                      </b>
                    </div>
                  </div>
                  <span className="text-[#9E9D9D]" aria-hidden>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="3"
                      viewBox="0 0 11 3"
                      fill="none"
                    >
                      <path
                        d="M2.73246 1.36278C2.73246 2.11232 2.1192 2.72557 1.36966 2.72557C0.620133 2.72557 0.00686646 2.11232 0.00686646 1.36278C0.00686646 0.613253 0.620133 0 1.36966 0C2.1192 0 2.73246 0.613253 2.73246 1.36278Z"
                        fill="#9E9D9D"
                      />
                      <path
                        d="M6.86646 1.36257C6.86646 2.1121 6.25319 2.72536 5.50366 2.72536C4.75413 2.72536 4.1409 2.1121 4.1409 1.36257C4.1409 0.613039 4.75413 -0.000213623 5.50366 -0.000213623C6.25319 -0.000213623 6.86646 0.613039 6.86646 1.36257Z"
                        fill="#9E9D9D"
                      />
                      <path
                        d="M11.0001 1.36257C11.0001 2.1121 10.3868 2.72536 9.63727 2.72536C8.88774 2.72536 8.27448 2.1121 8.27448 1.36257C8.27448 0.613039 8.88774 -0.000213623 9.63727 -0.000213623C10.3868 -0.000213623 11.0001 0.613039 11.0001 1.36257Z"
                        fill="#9E9D9D"
                      />
                    </svg>
                  </span>
                </div>

                <div className="pb-[30px]">
                  <h3 className="mb-[30px] text-[22px] font-semibold leading-[1.3] text-brand md:text-[26px]">
                    {item.title}
                  </h3>
                  <p className="text-xs leading-[1.33] text-[#3C3C3B] md:text-sm xl:text-lg">
                    {item.body}
                  </p>
                </div>

                <div className="mt-auto overflow-hidden">
                  <Image
                    src={item.dash}
                    alt=""
                    width={400}
                    height={220}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
