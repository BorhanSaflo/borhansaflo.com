import Link from "next/link";
import React from "react";
import styles from "../../styles/Header.module.scss";
import { Social } from "../../typings";
import SocialButton from "./SocialButton";
import { RemoveScrollBar } from "react-remove-scroll-bar";

interface menuProps {
  name: string;
  href: string;
}

interface Props {
  menuData: menuProps[];
  active: boolean;
  socials: Social[];
  currentElement: number;
  toggleMobileMenu: () => void;
}

function MobileMenu({
  menuData,
  active,
  socials,
  currentElement,
  toggleMobileMenu,
}: Props) {
  const menuItems = menuData.map((menuItem: menuProps, i) => (
    <Link key={menuItem.name} href={menuItem.href} passHref>
      <a
        className={
          i === currentElement
            ? `${styles.mobileMenuItem} ${styles.mobileActiveMenuItem}`
            : styles.mobileMenuItem
        }>
        {menuItem.name}
      </a>
    </Link>
  ));
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
        {menuItems}
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
