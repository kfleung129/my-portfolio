"use client";
import LevelBar from "./LevelBar"
import styles from "@/styles/about.module.css";
import { getIcon } from "@/utils/icon";
import { IconType } from "react-icons";

type Props = {
  value: number,
  children: string
}

export default function Level(props: Props) {
  const { value, children } = props;
  const Icon: IconType = getIcon(children);

  return (
    <div className={styles.levelWrapper}>
      <Icon />
      <h3 className={styles.skillName}>{children}</h3>
      <LevelBar value={value} />
    </div>
  );
}