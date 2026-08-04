import type { Metadata } from "next";
import localFont from "next/font/local";
import { AppToaster } from "@/components/ui/toaster";
import "./globals.css";

const outfit = localFont({
  src: [
    {
      path: "./fonts/outfit-latin-300-normal.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/outfit-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/outfit-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/outfit-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/outfit-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "WooCommerce Web | Achieve E-Commerce Success",
  description:
    "Whatever your success goals are, WooCommerce Web helps you reach them with custom WooCommerce development, themes, plugins, and more.",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-mark.png", type: "image/png", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon-mark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <AppToaster />
      </body>
    </html>
  );
}
