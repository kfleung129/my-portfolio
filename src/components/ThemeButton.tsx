"use client";
import styles from "@/styles/menu.module.css";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import { IconType } from "react-icons";

type IconMapper = {
  dark: IconType,
  light: IconType
}

const iconMapper: IconMapper = {
  dark: MdDarkMode,
  light: MdLightMode
}

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  // prevent null theme value
  let Icon: IconType | undefined = iconMapper[theme as keyof IconMapper];

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
