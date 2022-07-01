import React from "react";
import styles from "../../styles/Skills.module.scss";
import SkillGroup from "./SkillGroup";
import { GrStatusUnknown } from "react-icons/gr";

function SkillsGrid() {
  const skillGroups = [];

  for (let i = 1; i <= 3; i++) {
    skillGroups.push({
      id: "SkillGroup-" + i,
      groupName: `Group ${i}`,
      skills: [
        {
          id: "Skill-1",
          skillName: `Skill 1`,
          experience: 1,
          Icon: GrStatusUnknown,
        },
        {
          id: "Skill-2",
          skillName: "Skill 2",
          experience: 2,
          Icon: GrStatusUnknown,
        },
        {
          id: "Skill-3",
          skillName: "Skill 3",
          experience: 3,
          Icon: GrStatusUnknown,
        },
        {
          id: "Skill-4",
          skillName: "Skill 4",
          experience: 4,
          Icon: GrStatusUnknown,
        },
      ],
    });
  }

  return (
    <div className={styles.container}>
      {skillGroups.map((skillGroup) => {
        return (
          <SkillGroup
            key={skillGroup.id}
            groupName={skillGroup.groupName}
            skills={skillGroup.skills}
          />
        );
      })}
    </div>
  );
}

export default SkillsGrid;
