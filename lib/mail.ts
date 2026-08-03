import nodemailer from "nodemailer";
import type { ContactPayload } from "@/lib/contact-types";

export type { ContactPayload };

function requiredEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

function parseSecure(port: number): boolean {
  const raw = process.env.SMTP_SECURE?.trim().toLowerCase();
  if (raw === "true" || raw === "1") return true;
  if (raw === "false" || raw === "0") return false;
  return port === 465;
}

export function getMailConfig() {
  const port = Number(process.env.SMTP_PORT || "465");
  const pass =
    process.env.SMTP_PASS?.trim() || process.env.SMTP_PASSWORD?.trim();
  if (!pass) {
    throw new Error("Missing environment variable: SMTP_PASS");
  }

  return {
    host: requiredEnv("SMTP_HOST"),
    port,
    secure: parseSecure(port),
    user: requiredEnv("SMTP_USER"),
    pass,
    fromAddress: requiredEnv("SMTP_FROM_EMAIL"),
    fromName: process.env.SMTP_FROM_NAME?.trim() || "WooCommerce Web",
    adminAddress:
      process.env.SMTP_ADMIN_EMAIL?.trim() ||
      process.env.FORM_RECIPIENT_EMAIL?.trim() ||
      "info@woocommerceweb.com",
  };
}

export function createMailTransporter() {
  const config = getMailConfig();

  return nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.user,
      pass: config.pass,
    },
  });
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formLabel(type: ContactPayload["type"]): string {
  switch (type) {
    case "contact-cta":
      return "Contact Us (homepage/section)";
    case "contact-us":
      return "Contact Us page";
    case "get-started":
      return "Get Started lead";
  }
}

function buildAdminHtml(payload: ContactPayload): string {
  const rows: [string, string | undefined][] = [
    ["Form", formLabel(payload.type)],
    ["Name", payload.name],
    ["Email", payload.email],
    ["Phone", payload.phone],
    ["Country code", payload.countryCode],
    ["Company", payload.company],
    ["Request type", payload.requestType],
    ["Tell us more", payload.tellUsMore],
    ["Details", payload.details],
  ];

  const body = rows
    .filter(([, value]) => value && value.trim())
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #eee;font-weight:600;">${escapeHtml(label)}</td><td style="padding:8px 12px;border:1px solid #eee;">${escapeHtml(value!)}</td></tr>`,
    )
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;color:#222;line-height:1.5;">
      <h2 style="margin:0 0 12px;">New website submission</h2>
      <p style="margin:0 0 16px;">A new form was submitted on WooCommerce Web.</p>
      <table style="border-collapse:collapse;width:100%;max-width:640px;">${body}</table>
    </div>
  `;
}

function buildUserHtml(payload: ContactPayload, fromName: string): string {
  const firstName = payload.name?.trim().split(/\s+/)[0] || "there";
  return `
    <div style="font-family:Arial,sans-serif;color:#222;line-height:1.5;">
      <h2 style="margin:0 0 12px;">Thanks for contacting us!</h2>
      <p style="margin:0 0 12px;">Hi ${escapeHtml(firstName)},</p>
      <p style="margin:0 0 12px;">
        We received your message and our team will get back to you shortly.
      </p>
      <p style="margin:0;">— ${escapeHtml(fromName)}</p>
    </div>
  `;
}

export async function sendContactEmails(payload: ContactPayload) {
  const config = getMailConfig();
  const transporter = createMailTransporter();
  const from = `"${config.fromName}" <${config.fromAddress}>`;
  const subjectPrefix = `[${formLabel(payload.type)}]`;

  await transporter.sendMail({
    from,
    to: config.adminAddress,
    replyTo: payload.email,
    subject: `${subjectPrefix} New lead from ${payload.name || payload.email}`,
    html: buildAdminHtml(payload),
  });

  try {
    await transporter.sendMail({
      from,
      to: payload.email,
      subject: `We received your message — ${config.fromName}`,
      html: buildUserHtml(payload, config.fromName),
    });
  } catch (error) {
    // Admin notification is the source of truth; auto-reply failures should not fail the form.
    console.error("[mail] user confirmation failed", error);
  }
}
