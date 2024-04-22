"use client";
import styles from "@/styles/menu.module.css";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useState, useEffect } from "react";
import { IconType } from "react-icons";

const iconMapper: any = {
  "dark": MdDarkMode,
  "light": MdLightMode
}

export default function ThemeButton() {
  const [theme, setTheme] = useState(window.localStorage.getItem("data-theme") ?? "dark");
  const Icon: IconType = iconMapper[theme];
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("data-theme", theme);

  }, [theme]);

  const changeDataTheme = () => {
    let newTheme = (theme === "dark") ? "light" : "dark";
    setTheme(newTheme);
  }

  return (
    <Icon
      className={styles.themeButton}
      onClick={changeDataTheme}
    />
  );
}
