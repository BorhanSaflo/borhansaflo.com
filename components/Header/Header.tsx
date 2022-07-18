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
  isScrolled: boolean;
}

function Header({ sections, socials, currentElement, isScrolled }: Props) {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  const updateWindowDimensions = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);
    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  const menuData = sections.map((section: Section) => {
    return {
      name: section.name,
      href: `${section.id !== "landing" ? "#" + section.id : "/"}`,
    };
  });

  const toggleMobileMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };

  const CloseButton = getIcon("close");
  const OpenButton = getIcon("open");

  return typeof isMobile !== "undefined" ? (
    <div
      className={
        isScrolled || isMobileMenuActive
          ? `${styles.wrapper} ${styles.active}`
          : styles.wrapper
      }>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link href="/" passHref>
            <a
              className={
                isScrolled ? `${styles.logo} ${styles.logoActive}` : styles.logo
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
            <DesktopMenu menuData={menuData} currentElement={currentElement} />
            <div className={styles.socialButtonsContainer}>
              {socials?.map((social: Social) => {
                return <SocialButton key={social.id} social={social} />;
              })}
            </div>
          </>
        )}
      </div>
    </div>
  ) : null;
}

export default Header;
