import React, { forwardRef } from "react";
import styles from "../styles/Section.module.scss";
import { SectionBody } from "../typings";

// interface Props {
//   id?: string;
//   className?: string;
//   heading: string;
//   paragraph?: string;
//   children?: any;
// }

const Section = forwardRef<
  HTMLDivElement,
  { section: SectionBody; children: React.ReactNode }
>(
  (
    { section, children }: { section: SectionBody; children: React.ReactNode },
    ref
  ) => {
    return (
      <div id={section.id} ref={ref} className={styles.wrapper}>
        <div className={styles.container}>
          <h2 className={styles.heading}>{section.heading}</h2>
          <div className={styles.paragraph}>{section.paragraph}</div>
          {children}
        </div>
      </div>
    );
  }
);
Section.displayName = "Section";

export default Section;
