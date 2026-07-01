import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata: Metadata = {
  metadataBase: new URL("https://agentforgeos.ai"),
  title: {
    default: "AgentForge — Operational Decision Intelligence",
    template: "%s · AgentForge",
  },
  description:
    "The governed decision-intelligence layer for high-stakes enterprise operations.",
  openGraph: {
    type: "website",
    siteName: "AgentForge",
    url: "/",
    title: "AgentForge — Operational Decision Intelligence",
    description:
      "The governed decision-intelligence layer for high-stakes enterprise operations.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AgentForge — Operational Decision Intelligence",
    description:
      "The governed decision-intelligence layer for high-stakes enterprise operations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <TooltipProvider delay={150}>{children}</TooltipProvider>
      </body>
    </html>
  );
}
