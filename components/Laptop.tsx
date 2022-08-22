import React from "react";
import styles from "../styles/Laptop.module.scss";

function Laptop() {
  const linesOfCode = 12;
  return (
    <a className={styles.laptop} href="#projects" aria-label="Projects">
      <div className={styles.display}>
        <div className={styles.toolbar}>
          {[...Array(3)].map((_, i) => (
            <div key={i} />
          ))}
        </div>
        <ul className={styles.screen}>
          {[...Array(linesOfCode)].map((_, i) => (
            <li key={i} />
          ))}
        </ul>
      </div>
      <div className={styles.base}>
        <div className={styles.indent}></div>
      </div>
      <div className={styles.bottom}></div>
    </a>
  );
}

export default Laptop;
