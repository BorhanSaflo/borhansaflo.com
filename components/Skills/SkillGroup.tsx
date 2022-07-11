import React from "react";
import styles from "../../styles/Skills.module.scss";
import Skill from "./Skill";
import { SkillGroup } from "../../typings";

function SkillGroup({ skillGroup }: { skillGroup: SkillGroup }) {
  return (
    <div className={styles.skillGroup}>
      <h3 className={styles.skillGroupTitle}>{skillGroup.name}</h3>
      {skillGroup.skills.map((skill) => {
        return <Skill key={skill._id} skill={skill} />;
      })}
    </div>
  );
}

export default SkillGroup;
