import React from "react";
import styles from "../../styles/Skills.module.scss";
import SkillGroupComponent from "./SkillGroup";
import { SkillGroup } from "../../typings";

interface Props {
  skills: SkillGroup[];
}

function SkillsGrid({ skills }: Props) {
  return (
    <div className={styles.container}>
      {skills.map((skillGroup) => {
        return (
          <SkillGroupComponent key={skillGroup._id} skillGroup={skillGroup} />
        );
      })}
    </div>
  );
}

export default SkillsGrid;
