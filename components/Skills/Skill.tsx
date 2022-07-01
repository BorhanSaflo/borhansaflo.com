import React, { SVGProps } from "react";
import styles from "../../styles/Skills.module.scss";

interface Props {
  id?: string;
  skillName: string;
  experience: number;
  Icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

function Skill({ id, skillName, experience, Icon }: Props) {
  return (
    <div className={styles.skill}>
      <div className={styles.skillIconContainer}>
        {Icon && <Icon className={styles.skillIcon} />}
      </div>
      <div className={styles.skillInfo}>
        <h4 className={styles.skillName}>{skillName}</h4>
        <div className={styles.experienceBar}>
          <div
            className={styles.experience}
            style={{
              transition: "all 0.25s ease",
              transitionDelay: "1000ms",
              width: `${experience * 20}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Skill;
