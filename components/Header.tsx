import React, { useState, useEffect } from "react";
import styles from "../styles/Header.module.scss";

function Header() {
  const [isActive, setIsActive] = useState(false);
  const changeBackground = () => {
    if (window.scrollY > 0) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  });

  return (
    <div
      className={
        isActive ? `${styles.wrapper} ${styles.active}` : styles.wrapper
      }>
      <div className={styles.logo}>Borhan Saflo</div>
      <div className={styles.menu}>Menu</div>
      <div className={styles.buttons}>Buttons</div>
    </div>
  );
}

export default Header;
