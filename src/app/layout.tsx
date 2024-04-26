import type { Metadata } from "next";
import { Suspense } from 'react';
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Menu from "@/components/Menu";
import Background from "@/components/Background";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jason's space",
  description: "Personal portfolio of Jason Leung",
};

const MainWrapper = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
  return (
    <div className="main">
      <div className="content">
        {children}
      </div>
    </div>
  )
}

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <link rel="icon" type="image/png" sizes="32x32" href="/devdog.png" />
      <ThemeProvider enableSystem={false}>
        <body className={inter.className}>
          <Menu />
          <Background />
          <Suspense fallback={<Loading />}>
          <MainWrapper>
              {children}
          </MainWrapper>
          </Suspense>
        </body>
      </ThemeProvider>
    </html>
  );
}
