"use client";
import styles from "@/styles/menu.module.css";
import MenuItem from "@/components/MenuItem";
import ThemeButton from "@/components/ThemeButton";

export default function Home() {

  return (
    <div className={styles.menu}>
      <h2 className={styles.heading}>Jason Leung</h2>
      <div className={styles.menuWrapper}>
        <ThemeButton />
        <MenuItem name="Home" href="/home" />
        <MenuItem name="About" href="/about" />
        <MenuItem name="Project" href="/project" />
        <MenuItem name="Contact" href="/contact" />
        <MenuItem name="MenuList" href="/" isMenuList />
      </div>
    </div>
  );
}
