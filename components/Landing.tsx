import React, { forwardRef } from "react";
import styles from "../styles/Landing.module.scss";
import SVGShape from "./SVGShape";
import Button from "./Button";
import { SectionBody } from "../typings";
import { getIcon } from "../lib/icons";
import { PortableText } from "@portabletext/react";
import Laptop from "./Laptop";

interface Props {
  section: SectionBody;
  isScrolled: boolean;
}

const Landing = forwardRef<HTMLDivElement, Props>(
  ({ section, isScrolled }: Props, ref) => {
    const ArrowIcon = getIcon("arrowCircleDown")!;

    return (
      <div ref={ref} id={section.id}>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div
              className={`${styles.containerItem} ${styles.headingContainer}`}>
              <div className={styles.subHeading}>
                <span>
                  <PortableText value={section.subSections[1].content} />
                </span>
              </div>
              <h1 className={styles.heading}>{section.heading}</h1>
              <div className={styles.subHeading}>
                <PortableText value={section.subSections[0].content} />
              </div>
              <div className={styles.buttonsContainer}>
                {section.subSections[0].buttons?.map((button) => (
                  <Button
                    key={button.text}
                    icon={button.icon}
                    text={button.text}
                    link={button.link}
                    type={button.type}
                  />
                ))}
              </div>
            </div>
            <div
              className={`${styles.containerItem} ${styles.laptopContainer}`}>
              <Laptop />
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
