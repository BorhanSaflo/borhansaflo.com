import React from "react";
import styles from "@/app/styles/Header.module.scss";
import SocialButton from "./SocialButton";
import clsx from "clsx";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import { Social } from "@/types/Social";
import { getIcon } from "@/lib/icons";

interface menuProps {
  name: string;
  href: string;
  id: string;
}

interface Props {
  menuData: menuProps[];
  isOpen: boolean;
  socials: Social[];
  currentSection: string;
  toggleMobileMenu: () => void;
}

function MobileMenu({ menuData, isOpen, socials, currentSection, toggleMobileMenu }: Props) {
  const CloseButton = getIcon("close");
  const OpenButton = getIcon("open");
  return (
    <>
      {isOpen && <RemoveScrollBar />}
      <div className={clsx(styles.mobileMenu, isOpen && styles.mobileMenuActive)}>
        <div onClick={() => toggleMobileMenu()} className={styles.mobileMenuItemsContainer}>
          {menuData.map((menuItem: menuProps) => (
            <a
              key={menuItem.name}
              href={menuItem.href}
              className={clsx(
                styles.mobileMenuItem,
                menuItem.id === currentSection && styles.mobileActiveMenuItem
              )}>
              {menuItem.name}
            </a>
          ))}
        </div>
        <div className={styles.mobileSocialsContainer}>
          <div className={styles.socialsContainer}>
            {socials?.map((social: Social) => {
              return <SocialButton key={social.id} social={social} />;
            })}
          </div>
        </div>
      </div>
      <div
        onClick={toggleMobileMenu}
        className={clsx(styles.mobileMenuButton, isOpen && styles.mobileMenuButtonActive)}>
        {isOpen ? <CloseButton /> : <OpenButton />}
      </div>
    </>
  );
}

export default MobileMenu;
