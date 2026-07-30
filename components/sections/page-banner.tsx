import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";

type PageBannerProps = {
  title: ReactNode;
  description?: ReactNode;
  className?: string;
};

export function PageBanner({ title, description, className }: PageBannerProps) {
  return (
    <section
      className={cn("bg-[#303A42] py-[100px] md:py-[170px]", className)}
    >
      <Container>
        <h1
          className={cn(
            "text-center text-[32px] font-bold leading-[1.05] text-white md:text-[48px] lg:text-[60px] lg:leading-[60px]",
            description && "pb-[20px] md:pb-[30px]",
          )}
        >
          {title}
        </h1>
        {description ? (
          <p className="mx-auto max-w-3xl text-center text-base font-normal leading-[1.5] text-white md:text-xl md:leading-[30px]">
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
