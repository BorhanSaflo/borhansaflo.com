"use client";
import React from "react";
import DynamicIcon from "@/lib/icons";
import styles from "@/app/styles/Skills.module.scss";
import type { Skill } from "@/types/Skill";

function darkenColor(color: string, amount: number = 0.3): string {
  // Remove # if present
  const hex = color.replace("#", "");

  // Parse the hex color
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  // Darken each component
  const darkenedR = Math.max(0, Math.floor(r * (1 - amount)));
  const darkenedG = Math.max(0, Math.floor(g * (1 - amount)));
  const darkenedB = Math.max(0, Math.floor(b * (1 - amount)));

  // Convert back to hex
  return `#${darkenedR.toString(16).padStart(2, "0")}${darkenedG.toString(16).padStart(2, "0")}${darkenedB.toString(16).padStart(2, "0")}`;
}

function Skill({ skill }: { skill: Skill }) {
  return (
    <div
      className={styles.skillTag}
      style={{
        backgroundColor: skill.color ? `#${skill.color}35` : undefined,
        color: skill.color ? darkenColor(`#${skill.color}`, 0.3) : undefined,
        borderColor: skill.color ? darkenColor(`#${skill.color}`, 0.3) : undefined,
      }}>
      <DynamicIcon name={skill.icon} className={styles.skillIcon} />
      <span className={styles.skillName}>{skill.name}</span>
    </div>
  );
}

export default Skill;
