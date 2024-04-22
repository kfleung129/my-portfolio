"use client";
import styles from "@/styles/about.module.css";

type Props = {
    companyName: string,
    jobTitle: string,
    jobDescription: Array<string>,
    logoSrc: string,
}

export default function Job(props: Props) {
  const { companyName, jobTitle, jobDescription, logoSrc } = props;
  const jobDescriptioItems = jobDescription.map((description, index) => (
    <li key={index}>{description}</li>
  ))

  return (
    <div className={styles.job}>
        <img className={styles.jobIcon} src={logoSrc} />
        <div className={styles.jobMain}>
            <h2 className={styles.companyName}>{companyName}</h2>
            <h3 className={styles.jobTitle}>{jobTitle}</h3>
            <ul className={styles.jobDescription}>
                {jobDescriptioItems}
            </ul>
        </div>
    </div>
  );
}