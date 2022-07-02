import React from "react";
import { VscDebugBreakpointData } from "react-icons/vsc";
import { skillsIcons } from "../../lib/skillsIcons";
import styles from "../../styles/Skills.module.scss";
import { Skill } from "../../typings";

function Skill({ skill }: { skill: Skill }) {
  const IconComponent = skillsIcons.get(skill.icon)!
    ? skillsIcons?.get(skill.icon)!
    : VscDebugBreakpointData;
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
          <div
            className={styles.experience}
            style={{
              transition: "all 0.25s ease",
              transitionDelay: "1000ms",
              width: `${skill.level * 10}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Skill;
