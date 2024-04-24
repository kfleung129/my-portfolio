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
  const [theme, setTheme] = useState("light");
  let Icon: IconType = iconMapper[theme];

  useEffect(() => {
    const userTheme = window.localStorage.getItem("data-theme") ?? theme;
    document.documentElement.setAttribute("data-theme", userTheme);
    window.localStorage.setItem("data-theme", userTheme);
    console.log(theme)
  }, []);

  const changeDataTheme = () => {
    let newTheme = (theme === "dark") ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("data-theme", theme);
    setTheme(newTheme);
  }

  return (
    <Icon
      className={styles.themeButton}
      onClick={changeDataTheme}
    />
  );
}
