import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shambhavi & Joseph — 18.19 September 2026",
  description: "Wedding celebration in Udaipur, India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
