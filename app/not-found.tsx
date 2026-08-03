import Link from "next/link";
import { TopBar } from "@/components/layout/top-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center">
        <p className="text-lg font-bold tracking-wide text-brand uppercase">
          404
        </p>
        <h1 className="mt-3 text-3xl font-bold text-[#333] md:text-5xl">
          Page Not Found
        </h1>
        <p className="mt-4 max-w-md text-base text-muted">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Back to Home</Link>
        </Button>
      </main>
      <Footer />
    </>
  );
}