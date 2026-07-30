import { Container } from "@/components/layout/container";

export function ContactUsBanner() {
  return (
    <section className="bg-brand px-0 py-[110px] pb-[240px] max-[1399px]:py-[50px] max-[1399px]:pb-[200px] max-[767px]:py-10 max-[767px]:pb-[170px]">
      <Container>
        <h1 className="pb-[15px] text-center text-[60px] font-bold leading-none text-white max-[1399px]:text-[40px] max-[767px]:pb-2.5 max-[767px]:text-[28px]">
          We look forward to hearing from you and assisting you with all your
          WooCommerce website development needs!
        </h1>
      </Container>
    </section>
  );
}
