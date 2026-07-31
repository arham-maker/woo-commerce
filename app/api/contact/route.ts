import { NextResponse } from "next/server";
import { sendContactEmails } from "@/lib/mail";
import type { ContactPayload } from "@/lib/contact-types";

const ALLOWED_TYPES = new Set<ContactPayload["type"]>([
  "contact-cta",
  "contact-us",
  "get-started",
]);

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>;
    const type = body.type;
    const email = body.email?.trim() || "";

    if (!type || !ALLOWED_TYPES.has(type)) {
      return NextResponse.json({ error: "Invalid form type." }, { status: 400 });
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
    }

    const payload: ContactPayload = {
      type,
      email,
      name: body.name?.trim() || undefined,
      phone: body.phone?.trim() || undefined,
      company: body.company?.trim() || undefined,
      details: body.details?.trim() || undefined,
      requestType: body.requestType?.trim() || undefined,
      tellUsMore: body.tellUsMore?.trim() || undefined,
      countryCode: body.countryCode?.trim() || undefined,
    };

    await sendContactEmails(payload);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[api/contact]", error);
    const message =
      error instanceof Error ? error.message : "Failed to send email.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
