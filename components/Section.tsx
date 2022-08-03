import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React, { forwardRef } from "react";
import { urlFor } from "../sanity";
import styles from "../styles/Section.module.scss";
import { Section } from "../typings";
import Button from "./Button";

const Section = forwardRef<
  HTMLDivElement,
  { section: Section; children: React.ReactNode }
>(
  (
    { section, children }: { section: Section; children: React.ReactNode },
    ref
  ) => {
    const keyStr =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    const triplet = (e1: number, e2: number, e3: number) =>
      keyStr.charAt(e1 >> 2) +
      keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
      keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
      keyStr.charAt(e3 & 63);

    const rgbDataURL = (r: number, g: number, b: number) =>
      `data:image/gif;base64,R0lGODlhAQABAPAA${
        triplet(0, r, g) + triplet(b, 255, 255)
      }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

    return (
      <div id={section.id} ref={ref} className={styles.wrapper}>
        <div className={styles.container} data-aos="fade-up">
          <h2 className={styles.heading}>{section.heading}</h2>

          <div className={styles.subSectionsContainer}>
            {section.subSections?.map((subSection) => {
              return (
                <div className={styles.subSection} key={subSection.name}>
                  <div
                    className={`${styles.textContainer} ${
                      subSection.switchOrder ? " orderSecond" : "orderFirst"
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
                      className={`${styles.imageContainer} ${
                        subSection.switchOrder ? "orderFirst" : "orderSecond"
                      }`}>
                      <div className={styles.image}>
                        <Image
                          src={urlFor(subSection.image).url()}
                          layout="responsive"
                          width="1400"
                          height="900"
                          placeholder="blur"
                          blurDataURL={rgbDataURL(253, 251, 250)}
                          alt={subSection.imageAlt}
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {children}
        </div>
      </div>
    );
  }
);
Section.displayName = "Section";

export default Section;
