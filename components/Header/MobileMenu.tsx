import React, { useEffect } from "react";
import styles from "../../styles/Header.module.scss";
import { Social } from "../../typings";
import SocialButton from "./SocialButton";

interface Props {
  active: boolean;
  socials: Social[];
}

function MobileMenu({ active, socials }: Props) {
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
        <div className={styles.socialButtonsContainer}>
          {socials?.map((social: Social) => {
            return <SocialButton key={social.id} social={social} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
