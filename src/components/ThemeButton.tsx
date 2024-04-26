"use client";
import styles from "@/styles/menu.module.css";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import { IconType } from "react-icons";

const iconMapper: any = {
  "dark": MdDarkMode,
  "light": MdLightMode
}

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  let Icon: IconType = iconMapper[theme];

  useEffect(() => {
    const userTheme = window.localStorage.getItem("data-theme") ?? (theme ?? 'light');
    document.documentElement.setAttribute("data-theme", userTheme);
    window.localStorage.setItem("data-theme", userTheme);

  }, []);

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
