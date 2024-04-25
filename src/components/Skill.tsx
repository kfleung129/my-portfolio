"use client";
import SkillTag from "@/components/SkillTag";
import Level from "@/components/Level";
import styles from "@/styles/about.module.css";

export default function Skill() {

  return (
    <div className={styles.skill}>
      <h2 className={styles.slogan}>Skill</h2>
      <div className={styles.skillWrapper}>
        <div className={styles.tagWrapper}>
          <SkillTag>JavaScript</SkillTag>
          <SkillTag>C++</SkillTag>
          <SkillTag>Python</SkillTag>
          <SkillTag>Java</SkillTag>
          <SkillTag>HTML5</SkillTag>
          <SkillTag>CSS3</SkillTag>
          <SkillTag>Node.js</SkillTag>
          <SkillTag>React.js</SkillTag>
          <SkillTag>Next.js</SkillTag>
          <SkillTag>React Native</SkillTag>
          <SkillTag>Tensorflow</SkillTag>
          <SkillTag>Docker</SkillTag>
          <SkillTag>Linux</SkillTag>
          <SkillTag>SpringBoot</SkillTag>
          <SkillTag>Git</SkillTag>
          <SkillTag>SQL</SkillTag>
        </div>
        <div className={styles.level}>
          <Level value={100}>JavaScript</Level>
          <Level value={100}>React.js</Level>
          <Level value={90}>Python</Level>
          <Level value={80}>Next.js</Level>
          <Level value={80}>React Native</Level>
          <Level value={80}>HTML5</Level>
          <Level value={80}>CSS3</Level>
          <Level value={70}>Node.js</Level>
          <Level value={60}>Java</Level>
          <Level value={60}>Git</Level>
          <Level value={60}>SQL</Level>
          <Level value={50}>C++</Level>
          <Level value={50}>Tensorflow</Level>
          <Level value={50}>Docker</Level>
          <Level value={50}>Linux</Level>
          <Level value={50}>SpringBoot</Level>
        </div>
      </div>
    </div>
  );
}
