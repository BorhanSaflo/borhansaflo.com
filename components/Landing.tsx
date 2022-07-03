import React, { useState, useEffect, useRef, forwardRef } from "react";
import styles from "../styles/Landing.module.scss";
import SVGShape from "./SVGShape";
import Button from "./Button";
import Typed from "typed.js";
import Image from "next/image";
import { SectionBody } from "../typings";
import { getIcon } from "../lib/icons";

const Landing = forwardRef<HTMLDivElement, { section: SectionBody }>(
  ({ section }: { section: SectionBody }, ref) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      if (typeof window !== "undefined") {
        window.addEventListener("scroll", () => {
          if (window.scrollY > 0) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        });
      }
      return () => {
        if (typeof window !== "undefined") {
          window.removeEventListener("scroll", () => {});
        }
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

    const ArrowIcon = getIcon("arrowCircleDown")!;

    return (
      <div ref={ref} id={section.id}>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div
              className={`${styles.containerItem} ${styles.headingContainer}`}>
              <h1 className={styles.heading}>{section.heading}</h1>
              <h2 className={styles.subHeading}>{section.subHeading}</h2>
              {section.button && (
                <Button
                  text={section.buttonText}
                  link={section.buttonLink}
                  Icon={getIcon(section.buttonIcon)}
                />
              )}
            </div>
            <div
              className={`${styles.containerItem} ${styles.laptopContainer}`}>
              <div className={styles.laptop}>
                <div className={styles.laptopDisplay}>
                  <div className={styles.laptopScreen}>
                    <Image
                      className={styles.laptopBackground}
                      priority
                      alt="Laptop Background"
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
            className={styles.scrollDownArrow}
            style={isScrolled ? { opacity: "0" } : {}}>
            <ArrowIcon />
          </a>
        </div>
        <SVGShape />
      </div>
    );
  }
);
Landing.displayName = "Landing";

export default Landing;
