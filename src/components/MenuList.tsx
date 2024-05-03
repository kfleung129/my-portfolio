"use client";
import styles from "@/styles/menu.module.css";
import { TiThMenu } from "react-icons/ti";

type Props = {
  value: boolean,
  handler: (value: boolean) => void,
};

export default function MenuList(props: Props) {
  const { value, handler } = props;
  const styleClassName = `${styles.menuList}`;

  return (
    <div className={styleClassName} onClick={() => handler(!value)}>
      <TiThMenu />
    </div>
  );
}
