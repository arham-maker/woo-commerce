import type { ContactPayload } from "@/lib/contact-types";

export type { ContactPayload };
export type SubmitContactResult =
  | { ok: true }
  | { ok: false; error: string };

export async function submitContactForm(
  payload: ContactPayload,
): Promise<SubmitContactResult> {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = (await response.json().catch(() => ({}))) as {
      error?: string;
    };

    if (!response.ok) {
      return {
        ok: false,
        error: data.error || "Could not send your message. Please try again.",
      };
    }

    return { ok: true };
  } catch {
    return {
      ok: false,
      error: "Network error. Please check your connection and try again.",
    };
  }
}

export function formDataToObject(form: HTMLFormElement) {
  const data = new FormData(form);
  const result: Record<string, string> = {};
  for (const [key, value] of data.entries()) {
    if (typeof value === "string") {
      result[key] = value.trim();
    }
  }
  return result;
}
