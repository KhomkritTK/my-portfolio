import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Khomkrit TK — Backend Engineer",
  description:
    "Portfolio of Khomkrit TK, a Backend Engineer from Thailand specializing in Golang, Microservices, RESTful APIs, PostgreSQL, and scalable government e-service platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#03070f] text-slate-100">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
