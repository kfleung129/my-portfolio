"use client";
import styles from "@/styles/menu.module.css";
import { useState } from "react";
import { IconType } from "react-icons";
import { TiThMenu } from "react-icons/ti";

type Props = {
  value: Boolean,
  handler: (value: Boolean) => void,
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
