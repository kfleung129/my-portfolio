"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "@/styles/slideshow.module.css";
import { describe } from "node:test";

type Project = {
  name: string,
  picUrl: string,
  description: string
}

const projectDataList: Array<Project> = [
  {
    name: "FYP",
    picUrl: "/fyp.png",
    description: "A stock recommendaion system"
  },
  {
    name: "Ocean",
    picUrl: "/bg.png",
    description: "A stock recommendaion system"
  },
  {
    name: "Light",
    picUrl: "/bg.jpg",
    description: "A stock recommendaion system"
  },
]

export default function SlideShow() {
  const [slide, setSlide] = useState(1);
  const [projectPicUrlList, setProjectPicUrlList] = useState([]);
  const [projectDescriptionList, setProjectDescriptionList] = useState([]);
  const hrefRef = useRef('#s0');

  useEffect(() => {
    const picUrlList = projectDataList.map(item => item.picUrl);
    const projectDesList = projectDataList.map(item => ({ name: item.name, description: item.description }));
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
      <h2 className={styles.projectname}>{project.name}</h2>
      <p className={styles.projectname}>{project.description}</p>
    </>
  ));

  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.slider}>
        {imgItems}
      </div>
      <div className={styles.sliderNav}>
        <Link className={`${styles.arrow} ${styles.leftArrow}`} href={`#s${slide}`} onClick={() => moveSlide(-1)}/>
        <Link className={`${styles.arrow} ${styles.rightArrow}`} href={`#s${slide}`} ref={hrefRef} onClick={() => moveSlide(1)}/>
      </div>
      <div className={styles.project}>
        {projectItems[slide]}
      </div>
    </div>
  );
}
