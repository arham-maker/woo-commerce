import { Container } from "@/components/layout/container";
import type { LegalSection } from "@/lib/privacy-content";

export function LegalContent({ sections }: { sections: LegalSection[] }) {
  return (
    <section className="bg-white py-[85px] max-[991px]:py-10">
      <Container>
        <div className="terms">
          <ul className="list-none p-0 text-lg leading-[28px] text-[#333]">
            {sections.map((section) => (
              <li key={section.title} className="mb-4">
                <h2 className="my-4 text-[28px] font-medium leading-[1.2] text-[#333] max-[991px]:text-2xl">
                  {section.title}
                </h2>
                {section.blocks.map((block, index) => {
                  if (block.type === "p") {
                    return (
                      <p
                        key={`${section.title}-p-${index}`}
                        className="mb-8 text-lg leading-[1.7] text-black max-[991px]:text-base max-[991px]:leading-[26px] [&_a]:text-brand [&_a]:underline"
                        dangerouslySetInnerHTML={{ __html: block.html }}
                      />
                    );
                  }

                  return (
                    <ul
                      key={`${section.title}-ul-${index}`}
                      className="mb-8 list-disc space-y-0 pl-[18px] text-lg leading-[28px] text-[#333] marker:text-[24px] marker:font-medium max-[991px]:text-base max-[991px]:leading-[25px]"
                    >
                      {block.items.map((item) => (
                        <li
                          key={item.slice(0, 48)}
                          className="mb-4 [&_a]:text-brand [&_a]:underline"
                          dangerouslySetInnerHTML={{ __html: item }}
                        />
                      ))}
                    </ul>
                  );
                })}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
