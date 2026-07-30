"use client";

import { useEffect, useState } from "react";
import { IoIosChatbubbles } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { ASSETS, NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { DialogTitle } from "@/components/ui/dialog";
import { GetStartedDialog } from "@/components/get-started-dialog";

function NavChevron({
  open,
  className,
}: {
  open?: boolean;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="4"
      viewBox="0 0 8 4"
      fill="none"
      className={cn(
        "shrink-0 transition-transform duration-200",
        open && "rotate-180",
        className,
      )}
      aria-hidden
    >
      <path
        d="M7.32867 0H0.671329C0.484848 0 0.32634 0.0558882 0.195804 0.167665C0.065268 0.279441 0 0.41517 0 0.57485C0 0.734531 0.065268 0.870259 0.195804 0.982036L3.52448 3.83234C3.65501 3.94411 3.81352 4 4 4C4.18648 4 4.34499 3.94411 4.47552 3.83234L7.8042 0.982036C7.93473 0.870259 8 0.734531 8 0.57485C8 0.41517 7.93473 0.279441 7.8042 0.167665C7.67366 0.0558882 7.51515 0 7.32867 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Live-site hamburger → red X when open */
function MenuBarIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-5 w-[30px]" aria-hidden>
      <span
        className={cn(
          "absolute left-0 block h-1 w-full rounded-full transition-all duration-[600ms]",
          open ? "top-3 rotate-45 bg-[#B70404]" : "top-0 bg-brand",
        )}
      />
      <span
        className={cn(
          "absolute top-2 left-0 block h-1 w-full origin-left rounded-full transition-all duration-[600ms]",
          open ? "w-0 opacity-0 bg-[#B70404]" : "bg-brand",
        )}
      />
      <span
        className={cn(
          "absolute left-0 block h-1 w-full rounded-full transition-all duration-[600ms]",
          open ? "top-3 -rotate-45 bg-[#B70404]" : "top-4 bg-brand",
        )}
      />
    </span>
  );
}

export function Header() {
  const pathname = usePathname();
  const [sticky, setSticky] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [activePath, setActivePath] = useState<string | null>(null);

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY >= 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!sheetOpen) setMobileOpen(null);
  }, [sheetOpen]);

  return (
    <header
      className={cn(
        "z-40 w-full bg-white transition-shadow duration-300",
        sticky ? "sticky top-0 shadow-md" : "relative",
      )}
    >
      <div className="relative mx-auto flex max-w-[1320px] items-center justify-between gap-4 px-4 py-2.5 sm:gap-6 sm:px-6 sm:py-[18px] lg:px-8">
        <Link href="/" className="shrink-0">
          <Image
            src={ASSETS.logo}
            alt="WooCommerce Launchpad"
            width={265}
            height={57}
            className="h-8 w-auto max-w-[150px] object-contain sm:h-11 sm:max-w-none md:h-[57px]"
            priority
          />
        </Link>

        <div className="flex items-center gap-3 sm:gap-6 lg:gap-[30px]">
          <nav className="hidden items-center gap-[30px] lg:flex">
            {NAV_LINKS.map((link) =>
              "children" in link && link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(link.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    type="button"
                    className={cn(
                      "inline-flex items-center gap-2.5 text-base font-medium leading-normal text-black transition-colors hover:text-brand",
                      openMenu === link.label && "text-brand",
                    )}
                  >
                    {link.label}
                    <NavChevron open={openMenu === link.label} />
                  </button>

                  <div
                    className={cn(
                      "absolute top-full left-0 z-50 pt-3 transition-all duration-200",
                      openMenu === link.label
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-1 opacity-0 pointer-events-none",
                    )}
                  >
                    <ul className="min-w-[320px] rounded-[5px] bg-white p-[5px] shadow-[0_0_10px_3px_rgba(0,0,0,0.08)]">
                      {link.children.map((child) => {
                        const active = activePath === child.href;
                        return (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              className={cn(
                                "block px-[15px] py-2.5 text-sm font-semibold leading-none text-black transition-colors",
                                "hover:bg-brand hover:text-white",
                                active && "bg-brand text-white",
                              )}
                            >
                              {child.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "text-base font-medium leading-normal transition-colors hover:text-brand",
                    activePath === link.href ? "text-brand" : "text-black",
                  )}
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
            <GetStartedDialog
              triggerClassName="hidden h-auto gap-[13px] rounded-[41px] px-[30px] py-[12px] text-[18px] font-bold leading-none sm:inline-flex"
            />

            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className={cn(
                    "relative z-[60] flex h-10 w-[30px] items-center justify-center lg:hidden",
                    sheetOpen && "fixed top-[18px] right-[15px]",
                  )}
                  aria-label={sheetOpen ? "Close menu" : "Open menu"}
                  aria-expanded={sheetOpen}
                >
                  <MenuBarIcon open={sheetOpen} />
                </button>
              </SheetTrigger>
              <SheetContent
                side="left"
                showCloseButton={false}
                overlayClassName="bg-transparent"
                className="w-[340px] max-w-[calc(100%-50px)] gap-0 border-0 bg-[#333] p-0 pt-5 pb-20 shadow-none"
              >
                <DialogTitle className="sr-only">Navigation menu</DialogTitle>
                <nav className="flex h-full flex-col gap-[15px] overflow-y-auto px-2.5">
                  {NAV_LINKS.map((link) =>
                    "children" in link && link.children ? (
                      <div
                        key={link.label}
                        className="flex flex-wrap items-center justify-between gap-x-2.5"
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setMobileOpen((prev) =>
                              prev === link.label ? null : link.label,
                            )
                          }
                          className="flex w-full items-center justify-between gap-2.5 text-left text-base font-medium leading-normal text-white"
                        >
                          {link.label}
                          <NavChevron
                            open={mobileOpen === link.label}
                            className="text-white [&_path]:fill-white"
                          />
                        </button>
                        {mobileOpen === link.label ? (
                          <ul className="mt-1 w-full">
                            {link.children.map((child) => (
                              <li key={child.label}>
                                <SheetClose asChild>
                                  <Link
                                    href={child.href}
                                    className="block px-1.5 pt-1.5 pb-[3px] text-sm font-normal text-white transition-colors hover:text-brand"
                                  >
                                    {child.label}
                                  </Link>
                                </SheetClose>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    ) : (
                      <SheetClose asChild key={link.label}>
                        <Link
                          href={link.href}
                          className={cn(
                            "text-base font-medium leading-normal text-white transition-colors hover:text-brand",
                            activePath === link.href && "text-brand",
                          )}
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ),
                  )}
                </nav>

                <div className="absolute right-0 bottom-0 left-0 w-full p-2.5">
                  <GetStartedDialog>
                    <button
                      type="button"
                      className="flex h-auto w-full items-center justify-center gap-5 rounded-[3px] bg-brand px-[25px] py-[15px] text-sm font-bold leading-none text-white transition-colors hover:bg-[#2b2b2b]"
                    >
                      Get Started
                      <ArrowRight className="size-4" strokeWidth={2.5} />
                    </button>
                  </GetStartedDialog>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

export function LiveChatLink({
  className,
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  const dark = variant === "dark";
  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center gap-1.5 text-left transition-opacity hover:opacity-80 sm:gap-2",
        dark ? "text-white" : "text-brand",
        className,
      )}
    >
      <span className="flex flex-col leading-tight">
        <span
          className={cn(
            "text-[10px] sm:text-[16px]",
            dark ? "text-white/70" : "text-muted",
          )}
        >
          Click Here To
        </span>
        <span
          className={cn(
            "text-lg font-semibold sm:text-[25px]",
            dark ? "text-white" : "text-black",
          )}
        >
          Live Chat
        </span>
      </span>
      <span className="flex size-8 items-center justify-center rounded-full bg-brand text-white sm:size-10">
        <IoIosChatbubbles className="size-4 sm:size-5" />
      </span>
    </button>
  );
}
