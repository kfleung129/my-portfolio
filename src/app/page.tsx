'use client';
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import styles from "@/styles/home.module.css";

export default function Home(): any {
  return (
    <div className={styles.main}>
      <Header />
      <Footer />
    </div>
  );
}