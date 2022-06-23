import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/Header.module.scss";
import { FaBars, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

function Header() {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > 0) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const updateWindowDimensions = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);

    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);
    return () => {
      window.removeEventListener("scroll", changeBackground);
      window.removeEventListener("resize", updateWindowDimensions);
    };
  });

  return (
    <div
      className={
        isActive ? `${styles.container} ${styles.active}` : styles.container
      }>
      <div className={styles.logoContainer}>
        <Image className={styles.logo} src="/Logo.png" alt="logo" width="50" height="50" />
      </div>

      {isMobile && <FaBars className={styles.mobileMenuButton} />}

      {!isMobile && (
        <>
          <DesktopMenu />
          <div className={styles.socialButtonsContainer}>
            <FaGithubSquare className={styles.socialButton} />
            <FaLinkedin className={styles.socialButton} />
          </div>
        </>
      )}
    </div>
  );
}

export default Header;
