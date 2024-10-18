"use client";
import React from "react";
import styles from "@/app/styles/Hero.module.scss";
import SVGShape from "./SVGShape";
import Button from "./Button";
import { PortableText } from "@portabletext/react";
import Laptop from "./Laptop";
import { SectionBody } from "@/types/Section";
import { motion, Variants } from "framer-motion";

interface HeroProps {
  section: SectionBody;
}

const animationVariants: Variants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  whileInView: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

function Hero ({ section }: HeroProps) {
  return (
    <div className={styles.bg} id={section.id}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <motion.div
            className={`${styles.containerItem} ${styles.headingContainer}`}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            variants={animationVariants}>
            <div className={styles.subHeading}>
              <span>
                <PortableText value={section.subSections[0].content} />
              </span>
            </div>
            <h1 className={styles.heading}>{section.heading}</h1>
            <div className={styles.subHeading}>
              <PortableText value={section.subSections[1].content} />
            </div>
            <div className={styles.buttonsContainer}>
              {section.subSections[1].buttons?.map((button) => (
                <Button
                  key={button.text}
                  icon={button.icon}
                  text={button.text}
                  link={button.link}
                  type={button.type}
                />
              ))}
            </div>
          </motion.div>
          <div className={`${styles.containerItem} ${styles.laptopContainer}`}>
            <Laptop />
          </div>
        </div>
      </div>
      <SVGShape />
    </div>
  );
};

export default Hero;
