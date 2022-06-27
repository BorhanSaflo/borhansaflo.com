import Link from "next/link";
import React from "react";
import styles from "../../styles/Header.module.scss";

function DesktopMenu() {
  return (
    <div className={styles.menuContainer}>
      <Link href="/" className={styles.menuItem}>
        Home
      </Link>
      <Link href="#about" className={styles.menuItem}>
        About
      </Link>
      <Link href="#projects" className={styles.menuItem}>
        Projects
      </Link>
      <Link href="#skills" className={styles.menuItem}>
        Skills
      </Link>
      <Link href="#contact" className={styles.menuItem}>
        Contact
      </Link>
    </div>
  );
}

export default DesktopMenu;
