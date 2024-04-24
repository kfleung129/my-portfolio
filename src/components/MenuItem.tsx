"use client";
import Link from 'next/link';
import styles from "@/styles/menu.module.css";
import { IconType } from "react-icons";
import { AiFillHome } from "react-icons/ai";
import { IoPersonSharp } from "react-icons/io5";
import { BsFillChatRightTextFill } from "react-icons/bs";
import { BsStack } from "react-icons/bs";

type Props = {
  name: string,
  href: string,
  handler: (value: boolean) => void,
};

const iconMapper: any = {
  Home: AiFillHome,
  About: IoPersonSharp,
  Project: BsStack,
  Contact: BsFillChatRightTextFill,
}

export default function MenuItem(props: Props) {
  const { name, href, handler } = props;
  const Icon: IconType = iconMapper[name];

  return (
    <Link href={href} className={styles.menuItem} onClick={() => handler(false)}>
      <Icon />
      <span>{name}</span>
    </Link>
  );
}
