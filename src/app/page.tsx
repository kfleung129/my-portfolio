'use client';
import Header from "@/components/home/Header";
import styles from "@/styles/home.module.css";

export default function Home(): any {
  return (
    <div className={styles.main}>
      <Header />
    </div>
  );
}