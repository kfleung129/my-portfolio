"use client";
import LevelBar from "@/components/LevelBar"
import styles from "@/styles/about.module.css";
import { FaReact, FaPython, FaHtml5, FaCss3Alt, FaNodeJs, FaJava, FaGitAlt, FaDocker, FaLinux } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandNextjs, TbBrandReactNative, TbSql } from "react-icons/tb";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { SiTensorflow, SiSpring } from "react-icons/si";

type Props = {
  value: number,
  children: string
}

const iconMapper: any = {
  "JavaScript": IoLogoJavascript,
  "React.js": FaReact,
  "Python": FaPython,
  "Next.js": TbBrandNextjs,
  "React Native": TbBrandReactNative,
  "HTML5": FaHtml5,
  "CSS3": FaCss3Alt,
  "Node.js": FaNodeJs,
  "Java": FaJava,
  "Git": FaGitAlt,
  "SQL": TbSql,
  "C++": BiLogoCPlusPlus,
  "Tensorflow": SiTensorflow,
  "Docker": FaDocker,
  "Linux": FaLinux,
  "SpringBoot": SiSpring
}

export default function Level(props: Props) {
  const { value, children } = props;
  let Icon = iconMapper[children];

  return (
    <div className={styles.levelWrapper}>
      <Icon />
      <h3 className={styles.skillName}>{children}</h3>
      <LevelBar value={value} />
    </div>
  );
}