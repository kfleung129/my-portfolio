"use client";
import LevelBar from "@/components/LevelBar"
import styles from "@/styles/about.module.css";

type Props = {
  value: number,
  children: string
}

export default function Level(props: Props) {
  const { value, children } = props;

  return (
    <div className={styles.levelWrapper}>
      <h3 className={styles.skillName}>{children}</h3>
      <LevelBar value={value} />
    </div>
  );
}