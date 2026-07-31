export type ContactPayload = {
  type: "contact-cta" | "contact-us" | "get-started";
  name?: string;
  email: string;
  phone?: string;
  company?: string;
  details?: string;
  requestType?: string;
  tellUsMore?: string;
  countryCode?: string;
};
