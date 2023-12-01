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
  const rotateX = useSpring(scrollYProgress, { stiffness: 240, damping: 100 });
  const xInput = [360, 275.5];
  const value = useTransform(rotateX, [1, 0], xInput);

  return (
    <a ref={element} className={styles.laptop} href="#projects" aria-label="Projects">
      <motion.div className={styles.display} style={{ rotateX: value }}>
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
      </motion.div>
      <div className={styles.base}>
        <div className={styles.indent}></div>
      </div>
      <div className={styles.bottom}></div>
    </a>
  );
}

export default Laptop;
