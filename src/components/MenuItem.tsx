"use client";
import Link from 'next/link';
import styles from "@/styles/menu.module.css";
import { IconType } from "react-icons";
import { AiFillHome } from "react-icons/ai";
import { IoPersonSharp } from "react-icons/io5";
import { BsFillChatRightTextFill } from "react-icons/bs";
import { BsStack } from "react-icons/bs";
import { TiThMenu } from "react-icons/ti";

type Props = {
  name: String,
  href?: String,
  isMenuList?: Boolean
};

const iconMapper: any = {
  'Home': AiFillHome,
  'About': IoPersonSharp,
  'Project': BsStack,
  'Contact': BsFillChatRightTextFill,
  'MenuList': TiThMenu
}

export default function Home(props: Props) {
  const { name, href, isMenuList } = props;
  const Icon: IconType = iconMapper[name];

  return (
    <Link href={href} className={`${styles.menuItem} ${isMenuList ? styles.menuList : ""}`}>
      <Icon />
      {isMenuList ?? <span>{name}</span>}
    </Link>
  );
}
