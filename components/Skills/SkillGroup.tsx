import React from "react";
import styles from "../../styles/Skills.module.scss";
import Skill from "./Skill";

interface Props {
  groupName?: string;
  skills: {
    id: string;
    skillName: string;
    experience: number;
  }[];
}

function SkillGroup({ groupName, skills }: Props) {
  return (
    <div className={styles.skillGroup}>
      <h3 className={styles.skillGroupTitle}>{groupName}</h3>
      {skills.map((skill) => {
        return <Skill key={skill.id} {...skill} />;
      })}
    </div>
  );
}

export default SkillGroup;
