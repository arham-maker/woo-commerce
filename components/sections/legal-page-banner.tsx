import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

type LegalBannerVariant = "main" | "lp";

const bannerStyles: Record<
  LegalBannerVariant,
  { section: string; title: string; lead: string }
> = {
  main: {
    section: "bg-[#EBF1F3] py-[60px] max-[991px]:py-10",
    title:
      "pb-[35px] text-[60px] font-medium leading-none text-black max-[1399px]:pb-[15px] max-[1399px]:text-[42px] max-[991px]:pb-2.5 max-[991px]:text-[32px]",
    lead:
      "pb-0 text-[22px] font-normal leading-[1.5] text-[#333] max-[1399px]:text-[18px] max-[991px]:text-base",
  },
  lp: {
    section:
      "bg-[linear-gradient(97deg,rgb(39,52,44)_7.39%,rgb(156,164,130)_100%)] py-0",
    title:
      "pb-5 text-[50px] font-semibold leading-none text-white max-[1399px]:text-[42px] max-[991px]:pb-2.5 max-[991px]:text-[32px] max-[767px]:text-[28px] max-[767px]:leading-[1.4]",
    lead:
      "pb-2.5 text-lg font-light leading-[1.5] text-white max-[991px]:text-base",
  },
};

export function LegalPageBanner({
  title,
  intro,
  variant = "main",
}: {
  title: string;
  intro: string;
  variant?: LegalBannerVariant;
}) {
  const styles = bannerStyles[variant];

  return (
    <section className={styles.section}>
      <Container>
        <div
          className={cn(
            "mx-auto max-w-[860px] text-center",
            variant === "lp" &&
              "py-20 max-[1399px]:px-5 max-[1399px]:py-[30px] max-[767px]:px-0 max-[767px]:py-5",
          )}
        >
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.lead}>{intro}</p>
        </div>
      </Container>
    </section>
  );
}
