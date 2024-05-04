import type { Metadata } from "next";
import { Suspense } from 'react';
import "@/styles/globals.css";
import Provider from "./provider";
import Menu from "@/components/Menu";
import Background from "@/components/Background";
import Loading from "./loading";

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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
      <Provider>
        <body>
          <Menu/>
          <Background />
          <Suspense fallback={<Loading />}>
          <MainWrapper>
            {children}
          </MainWrapper>
          </Suspense>
        </body>
      </Provider>
    </html>
  );
}
