import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";

export function ThankYouHero() {
  return (
    <section className="flex items-center bg-[#EBF1F3] py-[60px] max-[991px]:py-10">
      <Container>
        <div className="text-center">
          <h1 className="pb-[35px] text-[60px] font-medium leading-none text-black max-[1399px]:pb-[15px] max-[1399px]:text-[42px] max-[991px]:pb-2.5 max-[991px]:text-2xl">
            Thank You
            <br />
            Request Sent Successfully!
          </h1>
          <p className="pb-[45px] text-xl font-normal leading-[1.5] text-[#333] max-[1399px]:pb-[35px] max-[1399px]:text-[17px] max-[991px]:pb-5 max-[991px]:text-sm">
            Thanks! We have received your request. Expect a quick reply. Should
            you have any questions or queries, please feel free to contact our
            experts
          </p>
          <div className="flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-[100px] bg-brand px-[50px] pt-5 pb-[17px] text-lg font-bold leading-[0.8] text-white transition-colors hover:bg-[#2b2b2b] max-[1199px]:gap-2.5 max-[1199px]:px-[30px] max-[1199px]:py-[15px] max-[1199px]:pb-[13px] max-[1199px]:text-base max-[1199px]:font-semibold max-[991px]:gap-[7px] max-[991px]:px-5 max-[991px]:py-3 max-[991px]:pb-2.5 max-[991px]:text-xs"
            >
              Back to Home
              <ArrowRight className="size-[14px] shrink-0" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
