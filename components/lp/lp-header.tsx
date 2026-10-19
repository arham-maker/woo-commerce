"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { ASSETS, SITE } from "@/lib/constants";

export function LpHeader() {
  return (
    <header className="relative z-40 w-full bg-white">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-4 px-4 py-[18px] sm:flex-row sm:px-6 lg:px-8">
        <Link href="/lp" className="shrink-0">
          <Image
            src={ASSETS.lp.logo}
            alt="WooCommerce Web"
            width={440}
            height={94}
            className="h-auto w-[220px] max-w-full sm:w-[260px] md:w-[330px] lg:w-[412px]"
            priority
          />
        </Link>

        <ul className="flex min-w-0 flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:justify-end sm:gap-x-8">
          <li>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 text-xs font-medium text-black transition-opacity hover:opacity-80 sm:text-sm"
            >
              <Phone className="size-3.5 rotate-90 text-brand sm:size-4" />
              {SITE.phone}
            </a>
          </li>
          <li>
            <a
              href={SITE.emailHref}
              className="inline-flex items-center gap-2 text-xs font-medium text-black transition-opacity hover:opacity-80 sm:text-sm"
            >
              <Mail className="size-3.5 shrink-0 text-brand sm:size-4" />
              <span className="max-w-[140px] truncate sm:max-w-none">
                {SITE.email}
              </span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
