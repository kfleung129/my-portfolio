"use client";
import styles from "@/styles/menu.module.css";
import MenuItem from "@/components/MenuItem";

type Props = {
    isOpenMenu: Boolean
    handler: (value: boolean) => void,
}

export default function MenuPopup(props: Props) {
  const { isOpenMenu, handler } = props;
  const styleClassName = `${styles.menuPopup} ${isOpenMenu ? styles.openMenu : ""}`;

  return (
    <div className={styleClassName}>
      <MenuItem name="Home" href="/" handler={handler} />
      <MenuItem name="About" href="/about" handler={handler} />
      <MenuItem name="Project" href="/project" handler={handler} />
    </div>
  );
}
