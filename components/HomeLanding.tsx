import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Home.module.scss";
import { FaArrowCircleDown } from "react-icons/fa";
import { TiChevronRight } from "react-icons/ti";
import SVGShape from "./SVGShape";
import Button from "./Button";
import Typed from "typed.js";
import Image from "next/image";

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

  const text1 = useRef() as React.MutableRefObject<HTMLSpanElement>;
  const text2 = useRef() as React.MutableRefObject<HTMLSpanElement>;

  useEffect(() => {
    const typed1 = new Typed(text1.current, {
      strings: ["I am a&nbsp;"],
      startDelay: 2000,
      typeSpeed: 90,
      showCursor: false,
    });
    const typed2 = new Typed(text2.current, {
      strings: [
        "Full Stack Web Developer",
        "Graphics Designer",
        "Software Engineer",
        "Computer Science Student",
      ],
      startDelay: 3000,
      typeSpeed: 100,
      backSpeed: 40,
      backDelay: 3000,
      loop: true,
    });

    return () => {
      typed1.destroy();
      typed2.destroy();
    };
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={`${styles.containerItem} ${styles.headingContainer}`}>
            <h1 className={styles.heading}>{"Hi, I'm Borhan Saflo 👋"}</h1>
            <h2 className={styles.subHeading}>
              {"A "}
              <span className={styles.keyWord}>Web Developer</span>
              {", "}
              <span className={styles.keyWord}>Designer</span>
              {", & Aspiring "}
              <span className={styles.keyWord}>Software Engineer</span>
              {" Based in Canada."}
            </h2>
            <Button text="Learn More" Icon={TiChevronRight} />
          </div>
          <div className={`${styles.containerItem} ${styles.laptopContainer}`}>
            <div className={styles.laptop}>
              <div className={styles.laptopDisplay}>
                <div className={styles.laptopScreen}>
                  <Image
                    className={styles.laptopBackground}
                    priority
                    src="/images/laptopBackground.png"
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className={styles.typingText}>
                    <span ref={text1}></span>
                    <span ref={text2}></span>
                  </div>
                </div>
              </div>
              <div className={styles.laptopBase}>
                <div className={styles.laptopIndent}></div>
              </div>
              <div className={styles.laptopBottom}></div>
            </div>
          </div>
        </div>
        <a
          href="#about"
          className={`${styles.scrollDownArrow} ${
            scrollPos !== 0 ? `${styles.hidden}` : ""
          }`}>
          <FaArrowCircleDown />
        </a>
      </div>
      <SVGShape />
    </>
  );
}

export default HomeLanding;
