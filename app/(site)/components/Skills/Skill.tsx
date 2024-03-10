"use client";
import React from "react";
import { getIcon } from "@/lib/icons";
import styles from "@/app/styles/Skills.module.scss";
import type { Skill } from "@/types/Skill";
import { motion } from "framer-motion";

function Skill({ skill }: { skill: Skill }) {
  const IconComponent = getIcon(skill.icon)
    ? getIcon(skill.icon)
    : getIcon("empty");

  return (
    <div className={styles.skill}>
      <div className={styles.skillIconContainer}>
        <IconComponent
          className={styles.skillIcon}
          style={skill.color ? { color: `#${skill.color}` } : {}}
        />
      </div>
      <div className={styles.skillInfo}>
        <h4 className={styles.skillName}>{skill.name}</h4>
        <div className={styles.experienceBar}>
          <motion.div
            className={styles.experience}
            initial={{ width: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            whileInView={{ width: `${skill.level * 10}%` }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Skill;
