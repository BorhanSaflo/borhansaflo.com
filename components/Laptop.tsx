import React from "react";
import styles from "../styles/Laptop.module.scss";

function Laptop() {
  const linesOfCode = 15;
  return (
    <div className={styles.laptop}>
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
    </div>
  );
}

export default Laptop;
