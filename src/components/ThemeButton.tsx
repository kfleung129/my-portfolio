import styles from "@/styles/menu.module.css";
import { getIcon } from "@/utils/icon";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IconType } from "react-icons";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const Icon: IconType = getIcon(theme ?? '');

  useEffect(() => {
    setMounted(true);
  }, []);

  if(!mounted) return null;

  return (
    <Icon
      className={styles.themeButton}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    />
  );
}
