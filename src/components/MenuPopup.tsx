"use client";
import styles from "@/styles/menu.module.css";
import MenuItem from "@/components/MenuItem";

type Props = {
    isOpenMenu: Boolean
}

export default function MenuPopup(props: Props) {
  const { isOpenMenu } = props;
  const styleClassName = `${styles.menuPopup} ${isOpenMenu ? styles.openMenu : ""}`;

  return (
    <div className={styleClassName}>
      <MenuItem name="Home" href="/" />
      <MenuItem name="About" href="/about" />
      <MenuItem name="Project" href="/project" />
      <MenuItem name="Contact" href="/contact" />
    </div>
  );
}
