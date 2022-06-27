import React from "react";
import styles from "../styles/Section.module.scss";

interface Props {
  id?: string;
  heading: string;
  paragraph?: string;
  children?: any;
}

function Section({ id, heading, paragraph, children }: Props) {
  return (
    <div id={id} className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{heading}</h2>
        <div className={styles.paragraph}>{paragraph}</div>
        {children}
      </div>
    </div>
  );
}

export default Section;
