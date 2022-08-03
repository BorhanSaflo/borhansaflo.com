import React, { useState, } from "react";
import styles from "../../styles/Header.module.scss";
import SocialButton from "./SocialButton";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import { Section, Social } from "../../typings";
import { getIcon } from "../../lib/icons";
import { fullWidthClassName } from "react-remove-scroll-bar";

interface Props {
  sections: Section[];
  socials: Social[];
  currentElement: number;
  isScrolled: boolean;
  isMobile: boolean;
}

function Header({
  sections,
  socials,
  currentElement,
  isScrolled,
  isMobile,
}: Props) {
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

  const CloseButton = getIcon("close");
  const OpenButton = getIcon("open");

  return (
    <div
      className={
        isScrolled || isMobileMenuActive
          ? `${styles.wrapper} ${styles.active}`
          : styles.wrapper
      }>
      <div className={`${styles.container} ${fullWidthClassName}`}>
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
            <div className={styles.socialsContainer}>
              {socials?.map((social: Social) => {
                return <SocialButton key={social.id} social={social} />;
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
