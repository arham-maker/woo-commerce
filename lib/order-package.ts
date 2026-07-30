export type OrderPackage = {
  name: string;
  category: string;
  price: number;
  features: string[];
};

export const DEFAULT_ORDER_PACKAGE: OrderPackage = {
  name: "Launch Store",
  category: "web",
  price: 650,
  features: [
    "Everything in Starter PLUS",
    "30 Products Uploaded",
    "Payment Gateway Integration",
    "SSL & Security Setup",
    "Basic Checkout Setup",
  ],
};

const STORAGE_KEY = "wcl-order-package";

export function saveOrderPackage(pkg: OrderPackage) {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(pkg));
}

export function loadOrderPackage(): OrderPackage {
  if (typeof window === "undefined") return DEFAULT_ORDER_PACKAGE;
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_ORDER_PACKAGE;
    const parsed = JSON.parse(raw) as OrderPackage;
    if (!parsed?.name || !parsed?.price || !Array.isArray(parsed.features)) {
      return DEFAULT_ORDER_PACKAGE;
    }
    return parsed;
  } catch {
    return DEFAULT_ORDER_PACKAGE;
  }
}
