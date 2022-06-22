import React from "react";
import styles from "../../styles/Header.module.scss";

function DesktopMenu() {
  return (
    <div className={styles.menuContainer}>
      <a className={styles.menuItem}>Home</a>
      <a className={styles.menuItem}>About</a>
      <a className={styles.menuItem}>Projects</a>
      <a className={styles.menuItem}>Contact</a>

    </div>
  );
}

export default DesktopMenu;
