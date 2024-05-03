"use client";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export default function Provider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted ?
    <ThemeProvider defaultTheme={'dark'} enableSystem={false}>{children}</ThemeProvider>
    : <>{children}</>
  )
}