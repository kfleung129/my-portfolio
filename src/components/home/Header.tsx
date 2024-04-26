"use client";
import Image from "next/image";
import styles from "@/styles/home.module.css";

export default function Header() {

  return (
    <div className={styles.header}>
        <div className={styles.profile}>
            <img
                src="/profile.png"
                alt="profile"
            />
        </div>
        <div className={styles.introduction}>
            <div className={styles.sloganWrapper}>
                <img className={styles.logo} src="/devdog.png" />
                <h1 className={styles.slogan}>Hello I am Jason !</h1>
            </div>
            <div className={styles.description}>
                <p>A student who willing to learn new thing and passionate to solve</p>
                <p>programming problems. A good team player that always seeking</p>
                <p>for a chance to know more about software development and web development.</p>
            </div>
        </div>
    </div>
  );
}
