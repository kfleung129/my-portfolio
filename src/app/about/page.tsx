'use client';
import styles from "@/styles/about.module.css";
import WorkingExperience from "@/components/WorkingExperience";
import Skill from "@/components/Skill";

export default function Home() {
  return (
    <div className={styles.main}> 
      <WorkingExperience />
      <Skill />
    </div>
  );
}