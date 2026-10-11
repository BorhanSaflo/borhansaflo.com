"use client";
import { useState } from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { Section } from "@/types/Section";
import { Social } from "@/types/Social";
import { fullWidthClassName } from "react-remove-scroll-bar";
import useScrollSpy from "../../hooks/useScrollSpy";
import clsx from "clsx";
import { buttonProps } from "@/lib/a11y";

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
    <div
      className={clsx(
        "group/header flex items-center justify-center fixed top-0 left-0 right-0 z-99 h-(--header-height) bg-header backdrop-blur-[10px] transition-all",
        (isScrolled || isMobileMenuOpen) && "active"
      )}>
      <div
        className={clsx(
          "flex flex-nowrap items-center justify-between grow max-w-site h-full px-[20px]",
          fullWidthClassName
        )}>
        <div className="flex items-center justify-start h-full md:basis-0 md:grow">
          <div
            className={clsx(
              "select-none flex items-end h-[38px] px-[10px] rounded-base text-primary text-[2rem] font-semibold transition-all cursor-pointer hover:bg-dark-secondary after:content-['orhan'] after:w-auto after:overflow-hidden after:inline-block after:align-bottom after:transition-[max-width] after:ease-in-out",
              isScrolled ? "after:max-w-[7rem]" : "after:max-w-0"
            )}
            {...buttonProps(
              () => window.scrollTo({ top: 0, behavior: "smooth" }),
              "Scroll to top"
            )}>
            {"B"}
          </div>
        </div>
        {isMobile ? (
          <MobileMenu
            menuData={menuData}
            isOpen={isMobileMenuOpen}
            socials={socials}
            currentSection={currentSectionID}
            toggleMobileMenu={toggleMobileMenu}
          />
        ) : (
          <DesktopMenu menuData={menuData} socials={socials} />
        )}
      </div>
    </div>
  );
}

export default Header;
