import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.scss";
import { FaArrowCircleDown } from "react-icons/fa";
import { TiChevronRight } from "react-icons/ti";

import SVGShape from "./SVGShape";
import Button from "./Button";

function HomeLanding() {
  const [scrollPos, setScrollPos] = useState(
    typeof window !== "undefined" ? window.scrollY : 0
  );
  useEffect(() => {
    const updateScrollPosition = () => {
      setScrollPos(window.scrollY);
    };
    window.addEventListener("scroll", updateScrollPosition);
    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  });

  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>{"Hi, I'm Borhan Saflo"}</h1>
        <h2 className={styles.subHeading}>A Web Developer</h2>
        <Button text="Learn More" Icon={TiChevronRight} />
        <FaArrowCircleDown
          className={`${styles.scrollDownArrow} ${
            scrollPos !== 0 ? `${styles.hidden}` : ""
          }`}
        />
      </div>
      <SVGShape />
    </>
  );
}

export default HomeLanding;
