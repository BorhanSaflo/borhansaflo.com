"use client";
import React, { useRef } from "react";
import styles from "@/app/styles/Laptop.module.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

function Laptop() {
  const linesOfCode = 12;
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 0', 'end 0.6'],
  });
  const springScrollY = useSpring(scrollYProgress, { stiffness: 350, damping: 150 });
  const rotateX = useTransform(springScrollY, [1, 0], [360, 275.5]);

  return (
    <a ref={element} className={styles.laptop} href="#projects" aria-label="Projects">
      <motion.div className={styles.display} style={{ rotateX }}>
        <div className={styles.toolbar}>
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={`toolbar-item-${i}`} aria-hidden="true" />
          ))}
        </div>
        <ul className={styles.screen}>
          {Array.from({ length: linesOfCode }).map((_, i) => (
            <li key={`code-line-${i}`} aria-hidden="true" />
          ))}
        </ul>
      </motion.div>
      <div className={styles.base}>
        <div className={styles.indent}></div>
      </div>
      <div className={styles.bottom}></div>
    </a>
  );
}

export default Laptop;
