"use client";
import { useState } from "react";
import styles from "@/styles/menu.module.css";
import MenuItem from "@/components/MenuItem";
import MenuList from "@/components/MenuList";
import MenuPopup from "@/components/MenuPopup";
import ThemeButton from "@/components/ThemeButton";

export default function Menu() {
  const [isOpenMenu, setOpenMenu] = useState(false);

  return (
    <div className={styles.menu}>
      <h2 className={styles.heading}>Jason Leung</h2>
      <div className={styles.menuWrapper}>
        <ThemeButton />
        <MenuItem name="Home" href="/" />
        <MenuItem name="About" href="/about" />
        <MenuItem name="Project" href="/project" />
        <MenuItem name="Contact" href="/contact" />
        <MenuList name="MenuList" value={isOpenMenu} handler={setOpenMenu}/>
      </div>
      <MenuPopup isOpenMenu={isOpenMenu} />
    </div>
  );
}
