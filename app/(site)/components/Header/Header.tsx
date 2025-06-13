"use client";
import React, { useState } from "react";
import styles from "@/app/styles/Header.module.scss";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { Section } from "@/types/Section";
import { Social } from "@/types/Social";
import { fullWidthClassName } from "react-remove-scroll-bar";
import useScrollSpy from "../../hooks/useScrollSpy";
import clsx from "clsx";

interface Props {
  sections: Section[];
  socials: Social[];
}

function Header({ sections, socials }: Props) {
  const ids = sections.map((section) => section.id);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currentSectionID, isMobile, isScrolled } = useScrollSpy(ids, 64);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const menuData = sections.map((section: Section) => {
    return {
      name: section.name,
      href: `${section.id !== "hero" ? "#" + section.id : "/#"}`,
      id: section.id,
    };
  });

  return (
    <div className={clsx(styles.wrapper, (isScrolled || isMobileMenuOpen) && styles.active)}>
      <div className={clsx(styles.container, fullWidthClassName)}>
        <div className={styles.logoContainer}>
          <div
            className={clsx(styles.logo, isScrolled && styles.logoActive)}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}>
            {"B"}
          </div>
        </div>
        {isMobile ? (
          <MobileMenu
            menuData={menuData}
            isOpen={isMobileMenuOpen}
            socials={socials}
            toggleMobileMenu={toggleMobileMenu}
            currentSection={currentSectionID}
          />
        ) : (
          <DesktopMenu menuData={menuData} socials={socials} currentSection={currentSectionID} />
        )}
      </div>
    </div>
  );
}

export default Header;
