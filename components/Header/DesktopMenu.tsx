import Link from "next/link";
import React from "react";
import styles from "../../styles/Header.module.scss";

interface menuProps {
  name: string;
  href: string;
}

interface Props {
  menuData: menuProps[];
  currentElement: number;
}

function DesktopMenu({ menuData, currentElement }: Props) {
  const menuItems = menuData.map((menuItem: menuProps, i) => (
    <Link key={menuItem.name} href={menuItem.href} passHref>
      <a
        className={i === currentElement ? styles.activeMenuItem : ""}
        data-text={menuItem.name}>
        {menuItem.name}
      </a>
    </Link>
  ));

  return <div className={styles.menuContainer}>{menuItems}</div>;
}

export default DesktopMenu;
