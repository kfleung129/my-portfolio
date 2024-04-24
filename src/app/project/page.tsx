'use client';
import styles from "@/styles/project.module.css";
import SlideShow from "@/components/SlideShow";

export default function Home() {
  return (
    <div className={styles.main}> 
      <SlideShow />
    </div>
  );
}