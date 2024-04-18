"use client";
import styles from "@/styles/menu.module.css";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useState, useEffect } from "react";
import { IconType } from "react-icons";

const iconMapper: any = {
  "dark": MdDarkMode,
  "light": MdLightMode
}

export default function Home() {
  const [theme, setTheme] = useState(document.documentElement.getAttribute("data-theme") ?? "dark");
  const Icon: IconType = iconMapper[theme];
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const changeDataTheme = () => {
    let newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  }

  return (
    <Icon
      className={styles.themeButton}
      onClick={changeDataTheme}
    />
  );
}
