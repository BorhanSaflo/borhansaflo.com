import React, { forwardRef } from "react";
import styles from "../styles/Section.module.scss";

interface Props {
  id?: string;
  className?: string;
  heading: string;
  paragraph?: string;
  children?: any;
}

const Section = forwardRef<HTMLDivElement, Props>(
  ({ id, className, heading, paragraph, children }: Props, ref) => {
    return (
      <div
        id={id}
        ref={ref}
        className={
          className ? `${styles.wrapper} ${className}` : styles.wrapper
        }>
        <div className={styles.container}>
          <h2 className={styles.heading}>{heading}</h2>
          <div className={styles.paragraph}>{paragraph}</div>
          {children}
        </div>
      </div>
    );
  }
);

export default Section;
