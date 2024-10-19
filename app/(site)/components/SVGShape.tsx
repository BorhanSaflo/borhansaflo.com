import React from "react";
import styles from "@/app/styles/Hero.module.scss";

function SVGShape() {
  return (
    <svg className={styles.SVGShape} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
      <path d="M0,32L80,58.7C160,85,320,139,480,138.7C640,139,800,85,960,80C1120,75,1280,117,1360,138.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
    </svg>
  );
}

export default SVGShape;
