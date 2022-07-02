import React, { useState, useEffect } from "react";
import styles from "../../styles/Header.module.scss";
import { FaBars, FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import SocialButton from "./SocialButton";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import { Section } from "../../typings";

interface Props {
  sections: Section[];
  currentElement: number;
}

function Header({ sections, currentElement }: Props) {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [isHidden, setIsHidden] = useState(true);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  const menuData = sections.map((section: Section) => {
    return {
      name: section.name,
      href: `${section.id !== "landing" ? "#" + section.id : "/"}`,
    };
  });

  const toggleMobileMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };

  useEffect(() => {
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

    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);

    changeBackground();
    window.addEventListener("scroll", changeBackground);
    setIsHidden(false);
    return () => {
      window.removeEventListener("scroll", changeBackground);
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);
  return (
    <div className={isHidden ? "hidden" : ""}>
      <div
        className={
          isActive || isMobileMenuActive
            ? `${styles.wrapper} ${styles.active}`
            : styles.wrapper
        }>
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            <Link href="/" passHref>
              <a
                className={
                  isActive ? `${styles.logo} ${styles.logoActive}` : styles.logo
                }>
                {"B"}
              </a>
            </Link>
          </div>

          {isMobile ? (
            <>
              <MobileMenu active={isMobileMenuActive} />
              <div
                onClick={toggleMobileMenu}
                className={
                  isMobileMenuActive
                    ? `${styles.mobileMenuButton} ${styles.mobileMenuButtonActive}`
                    : styles.mobileMenuButton
                }>
                {isMobileMenuActive ? <CgClose /> : <FaBars />}
              </div>
            </>
          ) : (
            <>
              <DesktopMenu
                menuData={menuData}
                currentElement={currentElement}
              />
              <div className={styles.socialButtonsContainer}>
                <SocialButton Icon={FaGithub} url="https://github.com/" />
                <SocialButton
                  Icon={FaLinkedinIn}
                  url="https://www.linkedin.com"
                />
                <SocialButton Icon={FaEnvelope} url="mailto:example.com" />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
