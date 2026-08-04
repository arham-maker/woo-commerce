import type { ReactNode } from "react";

export type LegalBlock =
  | { type: "p"; content: ReactNode }
  | { type: "ul"; items: ReactNode[] };

export type LegalSection = {
  title: string;
  blocks: LegalBlock[];
};
