import React, { useEffect } from "react";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";
import styles from "../../styles/Header.module.scss";
import SocialButton from "./SocialButton";

interface Props {
  active: boolean;
}

function MobileMenu({ active }: Props) {
  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  });
  return (
    <div
      className={
        active
          ? `${styles.mobileMenu} ${styles.mobileMenuActive}`
          : styles.mobileMenu
      }>
      <div className={styles.mobileMenuItemsContainer}>
        <a className={styles.mobileMenuItem}>Home</a>
        <a className={styles.mobileMenuItem}>About</a>
        <a className={styles.mobileMenuItem}>Projects</a>
        <a className={styles.mobileMenuItem}>Contact</a>
      </div>
      <div className={styles.mobileSocialButtonsContainer}>
        <SocialButton Icon={FaGithub} url="https://github.com/" />
        <SocialButton Icon={FaLinkedinIn} url="https://www.linkedin.com" />
        <SocialButton Icon={FaEnvelope} url="mailto:example.com" />
      </div>
    </div>
  );
}

export default MobileMenu;
