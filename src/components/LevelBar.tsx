"use client";
import styles from "@/styles/about.module.css";

type Props = {
  value: number
}

export default function LevelBar(props: Props) {
  const { value } = props;
  const barWidth = `${value}%`;

  return (
    <div
        className={styles.levelBar}
        style={{
            width: barWidth
        }}
    />
  );
}