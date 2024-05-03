"use client";
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
                {/* <img className={styles.logo} src="/devdog.png" /> */}
                <h1 className={styles.slogan}>Hello I am Jason !</h1>
            </div>
            <div className={styles.description}>
                <p>A student who willing to learn new technologies and highly passionate to solve programming problems.</p>
                <p>A collaborative team player that always seeking for a chance to learn more from different IT areas that includes</p>
                <p>Software Development, Information Security, Artificial Intelligence, and FinTech.</p>
            </div>
        </div>
    </div>
  );
}
