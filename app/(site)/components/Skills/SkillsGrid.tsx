import React from "react";
import styles from "@/app/styles/Skills.module.scss";
import SkillGroupComponent from "./SkillGroup";
import { SkillGroup } from "@/types/SkillGroup";

interface Props {
  skills: SkillGroup[];
}

function SkillsGrid({ skills }: Props) {
  return (
    <div className={styles.container}>
      {skills.map((skillGroup) => {
        return <SkillGroupComponent key={skillGroup._id} skillGroup={skillGroup} />;
      })}
    </div>
  );
}

export default SkillsGrid;
