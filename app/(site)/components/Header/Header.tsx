"use client";
import React, { useState } from "react";
import styles from "@/app/styles/Header.module.scss";
import SocialButton from "./SocialButton";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { getIcon } from "@/lib/icons";
import { Section } from "@/types/Section";
import { Social } from "@/types/Social";
import { fullWidthClassName } from "react-remove-scroll-bar";
import useScrollSpy from "../../hooks/useScrollSpy";

interface Props {
  sections: Section[];
  socials: Social[];
}

function Header({ sections, socials }: Props) {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const ids = sections.map((section) => section.id);
  const { activeId, isMobile, isScrolled } = useScrollSpy(ids, 64);

  const menuData = sections.map((section: Section) => {
    return {
      name: section.name,
      href: `${section.id !== "landing" ? "#" + section.id : "/#"}`,
      id: section.id,
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
          <a
            href="/#"
            className={
              isScrolled ? `${styles.logo} ${styles.logoActive}` : styles.logo
            }>
            {"B"}
          </a>
        </div>

        {isMobile ? (
          <>
            <MobileMenu
              menuData={menuData}
              active={isMobileMenuActive}
              socials={socials}
              activeElement={activeId}
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
            <DesktopMenu menuData={menuData} activeElement={activeId} />
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
