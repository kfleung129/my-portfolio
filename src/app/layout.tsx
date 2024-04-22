import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Menu from "@/components/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jason's space",
  description: "Personal portfolio of Jason Leung",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" type="image/png" sizes="32x32" href="/devdog.png" />
      <body className={inter.className}>
        <Menu />
        {children}
      </body>
    </html>
  );
}
