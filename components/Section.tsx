import { PortableText } from "@portabletext/react";
import React, { forwardRef } from "react";
import styles from "../styles/Section.module.scss";
import { Section } from "../typings";

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
          <div className={styles.paragraph}>
            <PortableText value={section.content} />
          </div>

          {children}
        </div>
      </div>
    );
  }
);
Section.displayName = "Section";

export default Section;
