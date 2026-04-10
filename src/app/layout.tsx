import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Financial AI Briefing",
  description: "기획자를 위한 AI 과외 및 뉴스 큐레이션",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} bg-slate-50 text-slate-900 leading-relaxed`}>{children}</body>
    </html>
  );
}
