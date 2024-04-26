"use client";
import styles from "@/styles/about.module.css";
import Job from "./Job";

export default function WorkingExperience() {

  return (
    <div className={styles.workexp}>
      <h2 className={styles.slogan}>Working Experience</h2>
      <div className={styles.jobWrapper}>
        <Job
            companyName="Hong Kong Housing Society"
            jobTitle="IT Intern (Application Development)"
            jobDescription={[
                "Migrating in-house system to HTML5 based on ReactJS, Bootstrap & Redux", 
                "Perform system integration testing on system web applications",
                "Create and maintain web services with Java Spring Boot" 
            ]}
            logoSrc="/hkhs.png"
        />
      </div>
    </div>
  );
}
