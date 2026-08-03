"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { ASSETS, SITE } from "@/lib/constants";

export function LpHeader() {
  return (
    <header className="relative z-40 w-full bg-white">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-4 px-4 py-[18px] sm:px-6 lg:px-8">
        <Link href="/lp" className="shrink-0">
          <Image
            src={ASSETS.lp.logo}
            alt="WooCommerce Web"
            width={265}
            height={57}
            className="h-11 w-auto sm:h-[57px]"
            priority
          />
        </Link>

        <ul className="flex flex-wrap items-center justify-end gap-4 sm:gap-8">
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
