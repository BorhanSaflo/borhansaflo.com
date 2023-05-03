import React from "react";
import styles from "@/app/styles/Header.module.scss";
import { motion } from "framer-motion";

interface menuProps {
  name: string;
  href: string;
  id: string;
}

interface Props {
  menuData: menuProps[];
  activeElement: string;
}

function DesktopMenu({ menuData, activeElement }: Props) {
  return (
    <div className={styles.menuContainer}>
      {menuData.map((menuItem: menuProps) => (
        <a key={menuItem.name} href={menuItem.href}>
          {menuItem.name}
          {menuItem.id === activeElement && (
            <motion.span
              className={styles.underline}
              layoutId={styles.underline}
            />
          )}
        </a>
      ))}
    </div>
  );
}

export default DesktopMenu;
