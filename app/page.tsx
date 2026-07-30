import { TopBar } from "@/components/layout/top-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Clients } from "@/components/sections/clients";
import { Services } from "@/components/sections/services";
import { Pricing } from "@/components/sections/pricing";
import { Assist } from "@/components/sections/assist";
import { CaseStudy } from "@/components/sections/case-study";
import { Portfolio } from "@/components/sections/portfolio";
import { Process } from "@/components/sections/process";
import { Trusted } from "@/components/sections/trusted";
import { Comprehensive } from "@/components/sections/comprehensive";
import { Testimonials } from "@/components/sections/testimonials";
import { ReviewsCta } from "@/components/sections/reviews-cta";
import { Faq } from "@/components/sections/faq";
import { ContactCta } from "@/components/sections/contact-cta";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1">
        <Hero />
        <Clients />
        <Services />
        <Pricing />
        <Assist />
        <CaseStudy />
        <Portfolio />
        <Process />
        <Trusted />
        <Comprehensive />
        <Testimonials />
        <ReviewsCta />
        <Faq />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
