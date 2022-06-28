import Link from "next/link";
import React from "react";
import styles from "../../styles/Header.module.scss";

interface menuProps {
  name: string;
  href: string;
}

interface Props {
  menuData: menuProps[];
}

function DesktopMenu({ menuData }: Props) {
  const menuItems = menuData.map((menuItem: menuProps) => (
    <Link key={menuItem.name} href={menuItem.href}>
      {menuItem.name}
    </Link>
  ));

  return <div className={styles.menuContainer}>{menuItems}</div>;
}

export default DesktopMenu;
