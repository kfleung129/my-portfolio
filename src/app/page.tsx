'use client';
import Header from "@/components/Header";
import HomeBackground from "@/components/HomeBackground";
import styles from "@/styles/home.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <Header />
    </div>
  );
}