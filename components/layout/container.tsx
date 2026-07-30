import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1320px] px-3", className)}>
      {children}
    </div>
  );
}

export function SectionTitle({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      className={cn(
        "text-2xl font-medium leading-[1.2] tracking-tight text-black sm:text-[36px] md:text-[44px]",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function SectionLead({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p className={cn("text-sm leading-relaxed text-muted sm:text-base md:text-[20px]", className)}>
      {children}
    </p>
  );
}
