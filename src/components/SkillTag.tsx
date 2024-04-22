"use client";
import styles from "@/styles/about.module.css";

type Props = {
  children: string
}

export default function SkillTag(props: Props) {
  const { children } = props;

  return (
    <div className={styles.skillTag}>
      <span className={styles.hashTag}>#&nbsp;</span>
      <span>{children}</span>
    </div>
  );
}