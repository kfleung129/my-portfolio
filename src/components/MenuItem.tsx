"use client";
import Link from 'next/link';
import styles from "@/styles/menu.module.css";
import { getIcon } from "@/utils/icon";
import { IconType } from "react-icons";

type Props = {
  name: string,
  href: string,
  handler: (value: boolean) => void,
};

export default function MenuItem(props: Props) {
  const { name, href, handler } = props;
  const Icon: IconType = getIcon(name);

  return (
    <Link href={href} className={styles.menuItem} onClick={() => handler(false)}>
      <Icon />
      <span>{name}</span>
    </Link>
  );
}
