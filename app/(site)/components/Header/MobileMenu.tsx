import React from "react";
import styles from "@/app/styles/Header.module.scss";
import SocialButton from "./SocialButton";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import { Social } from "@/types/Social";

interface menuProps {
  name: string;
  href: string;
  id: string;
}

interface Props {
  menuData: menuProps[];
  active: boolean;
  socials: Social[];
  activeElement: string;
  toggleMobileMenu: () => void;
}

function MobileMenu({
  menuData,
  active,
  socials,
  activeElement,
  toggleMobileMenu,
}: Props) {
  return (
    <div
      className={
        active
          ? `${styles.mobileMenu} ${styles.mobileMenuActive}`
          : styles.mobileMenu
      }>
      {active && <RemoveScrollBar />}
      <div
        onClick={() => toggleMobileMenu()}
        className={styles.mobileMenuItemsContainer}>
        {menuData.map((menuItem: menuProps) => (
          <a
            key={menuItem.name}
            href={menuItem.href}
            className={
              menuItem.id === activeElement
                ? `${styles.mobileMenuItem} ${styles.mobileActiveMenuItem}`
                : styles.mobileMenuItem
            }>
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
  );
}

export default MobileMenu;
