"use client";
import styles from "@/styles/about.module.css";
import { IconType } from "react-icons";
import { getIcon } from "@/utils/icon";

type Props = {
  children: string,
  showIcon?: boolean
}

export default function SkillTag(props: Props) {
  const { children, showIcon } = props;
  const Icon: IconType = getIcon(children);

  return (
    <div className={styles.skillTag}>
      <span>#{children}</span>
      {showIcon ? <Icon /> : null}
    </div>
  );
}