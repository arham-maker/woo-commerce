import type { Metadata } from "next";
import { OrderPaymentView } from "@/components/crm/order-payment-view";

export const metadata: Metadata = {
  title: "Order Process | Woo Commerce Launchpad",
  description: "Complete your WooCommerce Web order with secure payment.",
};

export default function CrmBriefPaymentPage() {
  return <OrderPaymentView />;
}
