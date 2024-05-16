"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SkillTag from "./SkillTag";
import styles from "@/styles/slideshow.module.css";

type Project = {
  name: string,
  picUrl: string,
  href: string,
  description: string,
  info?: string,
  techStack?: string[],
}

type Description = {
  name: string,
  description: string,
  href: string,
  info?: string,
  techStack?: string[]
}

const projectDataList: Project[] = [
  {
    name: "FYP",
    picUrl: require('@/assets/fyp.png'),
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
    `,
    techStack: [
      "Next.js",
      "JavaScript",
      "Python",
      "Tensorflow",
      "HTML5",
      "CSS3",
    ]
  },
  {
    name: "My-Wallet",
    picUrl: require('@/assets//my-wallet.gif'),
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
    `,
    techStack: [
      "React Native",
      "React.js",
      "JavaScript",
    ]
  },
  {
    name: "Vue-type-training",
    picUrl: require('@/assets/vue-type-training.png'),
    href: "https://github.com/kfleung129/vue-type-training",
    description: "A Typing training website built by Vue",
    info: `
    Vue-Type-Training is a web application specifically designed to enhance typing skills using the Vue.js framework.
    This platform offers an engaging and interactive typing experience for users of all levels,
    aiming to improve their typing speed and accuracy.
    `,
    techStack: [
      "Vue",
      "JavaScript",
      "HTML5",
      "CSS3",
    ]
  },
  {
    name: "Jeansin",
    picUrl: require('@/assets/jeansin.png'),
    href: "https://github.com/kfleung129/jeansin",
    description: "Online clothes shop",
    info: `
    Welcome to Jeansin, your ultimate online shopping destination for trending sneakers,
    clothing, and accessories. Explore top brands, discover new arrivals,
    and enjoy seamless shopping with multilingual support.
    `,
    techStack: [
      "React.js",
      "Next.js",
      "HTML5",
      "CSS3",
    ]
  },
]

export default function SlideShow() {
  const [slide, setSlide] = useState(0);
  const [projectPicUrlList, setProjectPicUrlList] = useState<string[]>([]);
  const [projectDescriptionList, setProjectDescriptionList] = useState<Description[]>([]);

  useEffect(() => {
    let picUrlList: string[] = [];
    let projectDesList: Description[] = [];
    picUrlList = projectDataList.map(item => item.picUrl) ?? [];
    projectDesList  = projectDataList.map(item => ({ 
      name: item.name, description: item.description,
      href: item.href, info: item.info, techStack: item.techStack
    }));
    setProjectPicUrlList(picUrlList);
    setProjectDescriptionList(projectDesList);
  }, [])

  const moveSlide = (val: number) => {
    let newSlide = Math.max(0, (slide + val)) % projectPicUrlList.length;
    setSlide(newSlide)
  };

  const project = projectDescriptionList[slide];
  const techStack = project?.techStack ?? [];
  const techStackItems = techStack.map(item => (
    <SkillTag key={item} showIcon>{item}</SkillTag>
  ));

  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.slider}>
      <div className={styles.slideshow}>
        <Image
          key={slide}
          src={projectPicUrlList[slide]}
          alt="slide"
          sizes="100vw"
          style={{
              width: '100%',
              height: 'auto',
          }}
          width={500}
          height={300}
        />
      </div>
      <div className={styles.sliderNav}>
        <div className={`${styles.arrow} ${styles.leftArrow}`} onClick={() => moveSlide(-1)}/>
        <div className={`${styles.arrow} ${styles.rightArrow}`} onClick={() => moveSlide(1)}/>
      </div>
      </div>
      <div className={styles.project}>
        <div className={styles.projectMain}>
          {/* <img className={styles.logo} width={40} src="/devdog.png" /> */}
          <Link href={project?.href ?? '/'} target="_blank" className={styles.projectName}>{project?.name}</Link>
          <p className={styles.projectDescription}>{project?.description}</p>
          <p className={styles.projectInfo}>{project?.info}</p>
        </div>
        <div className={styles.techStackWrapper}>
          <p className={styles.techStackHeader}>Language & Framework</p>
          <div className={styles.techStack}>
            {techStackItems}
          </div>
        </div>
      </div>
      
    </div>
  );
}
