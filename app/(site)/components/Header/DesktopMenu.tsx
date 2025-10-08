import React from "react";
import styles from "@/app/styles/Header.module.scss";
import { Social } from "@/types/Social";
import SocialButton from "./SocialButton";

interface menuProps {
  name: string;
  href: string;
  id: string;
}

interface Props {
  menuData: menuProps[];
  socials: Social[];
}

function DesktopMenu({ menuData, socials }: Props) {
  return (
    <>
      <div className={styles.menuContainer}>
        {menuData.map((menuItem: menuProps) => (
          <a key={menuItem.name} href={menuItem.href}>
            {menuItem.name}
          </a>
        ))}
      </div>
      <div className={styles.socialsContainer}>
        {socials?.map((social: Social) => {
          return <SocialButton key={social.id} social={social} />;
        })}
      </div>
    </>
  );
}

export default DesktopMenu;
