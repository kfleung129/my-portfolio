'use client';
import styles from "@/styles/about.module.css";
import WorkingExperience from "@/components/about/WorkingExperience";
import Skill from "@/components/about/Skill";

export default function Home() {
  return (
    <div className={styles.main}> 
      <WorkingExperience />
      <Skill />
    </div>
  );
}