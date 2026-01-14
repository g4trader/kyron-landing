import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "kyron — AI Copilot for ICU Decision Support",
  description:
    "kyron is an AI copilot for ICU physicians, built from postdoctoral research in applied AI for hospital critical care.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}