"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "@/styles/slideshow.module.css";

type Project = {
  name: string,
  picUrl: string,
  href: string,
  description: string,
  info?: string,
  languages?: string[]
}

const projectDataList: Project[] = [
  {
    name: "FYP",
    picUrl: "/fyp.png",
    href: "https://github.com/kfleung129/fyp",
    description: "A stock recommendaion system",
    info: `
    Objectives:
      Assist users maximizing their returns on investment by identifying opportunities for growth and profitability.
      Assist users mitigating risk by identifying potential downsides and recommending strategies to minimize losses.
      Provides reliable predictions on stock price and recommends approximate stocks according to users' preferences.
      Provides current stock market overview with fast, accurate response.

    Deliverables:
      Models that provides informative stock recommendations and predictions with high accuracy and fast response
    `
  },
  {
    name: "My-Wallet",
    picUrl: "/my-wallet.gif",
    href: "https://github.com/kfleung129/my-wallet",
    description: "A Personal Transaction Recording App",
    info: `
    Features Transaction Recording:
    Users can add new transactions by specifying the transaction type (expense or income), amount, category, and additional notes.

    Categorization and Filtering:
    Transactions can be categorized into different categories (e.g., groceries, transportation, salary) for better organization.
    Users can also filter their transactions based on date, category, or transaction type.

    Expense Analysis:
    The app provides visual representations (graphs and charts) of the user's expenses,
    allowing them to gain insights into their spending habits and identify areas where they can save money.
    `
  },
  {
    name: "Vue-type-training",
    picUrl: "/vue-type-training.png",
    href: "https://github.com/kfleung129/vue-type-training",
    description: "A Typing training website built by Vue"
  },
]

export default function SlideShow() {
  const [slide, setSlide] = useState(1);
  const [projectPicUrlList, setProjectPicUrlList] = useState([]);
  const [projectDescriptionList, setProjectDescriptionList] = useState([]);

  useEffect(() => {
    const picUrlList = projectDataList.map(item => item.picUrl);
    const projectDesList = projectDataList.map(item => ({ name: item.name, description: item.description, href: item.href, info: item.info }));
    setProjectPicUrlList(picUrlList);
    setProjectDescriptionList(projectDesList);
  }, [])

  const moveSlide = (val: number) => {
    let newSlide = Math.max(0, (slide + val)) % 3
    setSlide(newSlide)
  };

  const imgItems = projectPicUrlList.map((url, index) => (
    <img id={`s${index}`} src={url}/>
  ));

  const projectItems = projectDescriptionList.map(project => (
    <>
      <Link href={project.href} target="_blank" className={styles.projectName}>{project.name}</Link>
      <p className={styles.projectDescription}>{project.description}</p>
      <p className={styles.projectInfo}>{project.info}</p>
    </>
  ));

  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.slider}>
        {imgItems}
      </div>
      <div className={styles.sliderNav}>
        <a className={`${styles.arrow} ${styles.leftArrow}`} href={`#s${slide}`} onClick={() => moveSlide(-1)}/>
        <a className={`${styles.arrow} ${styles.rightArrow}`} href={`#s${slide}`} onClick={() => moveSlide(1)}/>
      </div>
      <div className={styles.project}>
        <img className={styles.logo} width={40} src="/devdog.png" />
        {projectItems[slide]}
      </div>
    </div>
  );
}
