import { redirect } from "next/navigation";

/** Merchant/payment flow removed — redirect old links to thank-you. */
export default function PaymentPage() {
  redirect("/thank-you");
}
