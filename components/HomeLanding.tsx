import React from "react";
import styles from "../styles/HomeLanding.module.scss";
import SVGShape from "./SVGShape";

function HomeLanding() {
  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>Hi, I'm Borhan Saflo</h1>
        <h2 className={styles.subHeading}>A Web Developer</h2>
      </div>
      <SVGShape />
    </>
  );
}

export default HomeLanding;
