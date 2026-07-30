"use client";

import { MessageCircle, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type LiveChatConsultantCtaProps = {
  className?: string;
  stacked?: boolean;
  /** Matches logo-design.php compact sizes under ~1400px */
  compact?: boolean;
};

export function LiveChatConsultantCta({
  className,
  stacked = false,
  compact = false,
}: LiveChatConsultantCtaProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-5",
        stacked ? "flex-col items-start gap-0" : "flex-col sm:flex-row",
        className,
      )}
    >
      <button
        type="button"
        className={cn(
          "inline-flex items-center whitespace-nowrap rounded-full bg-brand font-bold leading-none text-white transition-colors hover:bg-[#6C6CFF]",
          compact
            ? "gap-[7px] px-5 py-3 text-sm xl:gap-2.5 xl:px-[45px] xl:pt-5 xl:pb-[18px] xl:text-lg"
            : "gap-2.5 px-[45px] pt-5 pb-[18px] text-lg",
        )}
      >
        <MessageCircle
          className={cn(
            "shrink-0 fill-[#FFAA66] text-[#FFAA66]",
            compact ? "size-4 xl:size-5" : "size-5",
          )}
          strokeWidth={0}
        />
        Live Chat With Our Consultant
      </button>

      <a
        href={SITE.phoneHref}
        className={cn(
          "inline-flex flex-wrap items-center gap-[3px] font-bold leading-[1.2] text-black capitalize transition-colors hover:text-brand",
          compact ? "mt-5 text-sm xl:text-xl" : "text-xl",
        )}
      >
        <em className="not-italic font-normal text-[#333]">Or Call Us At</em>
        <Phone
          className={cn(
            "shrink-0 text-brand",
            compact ? "size-3.5 xl:size-4" : "size-4",
          )}
        />
        <span className="font-bold">+1 (888) 894-6005</span>
      </a>
    </div>
  );
}
