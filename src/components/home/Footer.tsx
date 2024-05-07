"use client";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import styles from "@/styles/home.module.css";

export default function Footer() {

  return (
    <div className={styles.footer}>
      <Link target="_blank" href="https://www.linkedin.com/in/jason-leung-33a88022a/"><FaLinkedin size={25}/></Link>
      <Link target="_blank" href="https://www.github.com/kfleung129/"><FaGithub size={25}/></Link>
      <Link target="_blank" href="mailto:kfjasonleung@gmail.com"><SiGmail size={25}/></Link>
    </div>
  );
}