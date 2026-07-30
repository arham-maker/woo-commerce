import { Mail, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";

export function TopBar() {
  return (
    <div className="bg-topbar text-white md:block hidden">
      <div className="mx-auto flex max-w-[1320px] items-center justify-end gap-6 px-4 py-2.5 text-sm sm:px-6 lg:px-8">
        <a
          href={SITE.phoneHref}
          className="inline-flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <Phone className="size-3.5" />
          {SITE.phone}
        </a>
        <a
          href={SITE.emailHref}
          className="inline-flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <Mail className="size-3.5" />
          {SITE.email}
        </a>
      </div>
    </div>
  );
}
