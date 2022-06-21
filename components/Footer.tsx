import React from "react";
import styles from "../styles/Footer.module.scss";

function Footer() {
  return (
    <div className={styles.wrapper}>
      © {new Date().getFullYear()} Borhan Saflo. All Rights Reserved.
    </div>
  );
}

export default Footer;
