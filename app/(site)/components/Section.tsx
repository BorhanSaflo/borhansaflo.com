"use client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React from "react";
import styles from "@/app/styles/Section.module.scss";
import Button from "./Button";
import { Section } from "@/types/Section";
import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8
    },
  },
};

const Section = ({
  section,
  children,
}: {
  section: Section;
  children: React.ReactNode;
}) => {
  const keyStr =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

  const triplet = (e1: number, e2: number, e3: number) =>
    keyStr.charAt(e1 >> 2) +
    keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
    keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
    keyStr.charAt(e3 & 63);

  const rgbDataURL = (r: number, g: number, b: number) =>
    `data:image/gif;base64,R0lGODlhAQABAPAA${triplet(0, r, g) + triplet(b, 255, 255)
    }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

  return (
    <div id={section.id} className={styles.wrapper}>
      <motion.div
        className={styles.container}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        variants={cardVariants}>
        <h2 className={styles.heading}>{section.heading}</h2>
        <div className={styles.subSectionsContainer}>
          {section.subSections?.map((subSection) => {
            return (
              <div className={styles.subSection} key={subSection.name}>
                <div
                  className={`${styles.textContainer} ${subSection.switchOrder ? " orderSecond" : "orderFirst"
                    }`}>
                  {subSection.heading && (
                    <h3 className={styles.subSectionHeading}>
                      {subSection.heading}
                    </h3>
                  )}
                  <PortableText value={subSection.content} />
                  {subSection.buttons && (
                    <div className={styles.buttonsContainer}>
                      {subSection.buttons?.map((button) => (
                        <Button
                          key={button.text}
                          icon={button.icon}
                          text={button.text}
                          link={button.link}
                          type={button.type}
                        />
                      ))}
                    </div>
                  )}
                </div>
                {subSection.image && (
                  <div
                    className={`${styles.imageContainer} ${subSection.switchOrder ? "orderFirst" : "orderSecond"
                      }`}>
                    <div className={styles.image}>
                      <Image
                        src={subSection.image}
                        width="1400"
                        height="900"
                        placeholder="blur"
                        blurDataURL={rgbDataURL(253, 251, 250)}
                        alt={subSection.imageAlt}
                        sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                        style={{
                          width: "100%",
                          height: "auto",
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {children}
      </motion.div>
    </div>
  );
};

export default Section;
