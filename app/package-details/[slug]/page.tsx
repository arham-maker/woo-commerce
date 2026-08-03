import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TopBar } from "@/components/layout/top-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PackageDetailsContent } from "@/components/sections/package-details-content";
import { Container } from "@/components/layout/container";
import {
  getAllPackageSlugs,
  getPackageBySlug,
} from "@/lib/packages";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPackageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) {
    return { title: "Package Details | WooCommerce Web" };
  }
  return {
    title: `${pkg.name} | Package Details | WooCommerce Web`,
    description: pkg.tagline,
  };
}

export default async function PackageDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) notFound();

  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1">
        <section className="bg-[#EBF1F3] py-[60px] max-[991px]:py-10">
          <Container>
            <h1 className="text-center text-[42px] font-medium leading-none text-black max-[1399px]:text-[42px] max-[991px]:text-[32px] md:text-[60px]">
              Package Details
            </h1>
          </Container>
        </section>
        <PackageDetailsContent pkg={pkg} />
      </main>
      <Footer />
    </>
  );
}
