import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React, { forwardRef } from "react";
import { getIcon } from "../lib/icons";
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
    return (
      <div id={section.id} ref={ref} className={styles.wrapper}>
        <div className={styles.container}>
          <h2 className={styles.heading}>{section.heading}</h2>

          <div className={styles.subSectionsContainer}>
            {section.subSections?.map((subSection) => {
              return (
                <div className={styles.subSection} key={subSection.name}>
                  <div
                    className={`${styles.paragraph} ${
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
                            Icon={getIcon(button.icon)}
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
                          width="300"
                          height="200"
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
