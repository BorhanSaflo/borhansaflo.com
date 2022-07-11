import React, { useState, useEffect } from "react";
import styles from "../../styles/Header.module.scss";
import SocialButton from "./SocialButton";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import { Section, Social } from "../../typings";
import { getIcon } from "../../lib/icons";

interface Props {
  sections: Section[];
  socials: Social[];
  currentElement: number;
}

function Header({ sections, socials, currentElement }: Props) {
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

  const CloseButton = getIcon("close");
  const OpenButton = getIcon("open");

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
              <MobileMenu
                menuData={menuData}
                active={isMobileMenuActive}
                socials={socials}
                currentElement={currentElement}
                toggleMobileMenu={toggleMobileMenu}
              />
              <div
                onClick={toggleMobileMenu}
                className={
                  isMobileMenuActive
                    ? `${styles.mobileMenuButton} ${styles.mobileMenuButtonActive}`
                    : styles.mobileMenuButton
                }>
                {isMobileMenuActive ? <CloseButton /> : <OpenButton />}
              </div>
            </>
          ) : (
            <>
              <DesktopMenu
                menuData={menuData}
                currentElement={currentElement}
              />
              <div className={styles.socialButtonsContainer}>
                {socials?.map((social: Social) => {
                  return <SocialButton key={social.id} social={social} />;
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
