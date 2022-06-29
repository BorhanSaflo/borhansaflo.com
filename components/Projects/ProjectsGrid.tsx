import React from "react";
import styles from "../../styles/Projects.module.scss";
import Project from "./Project";

function ProjectsGrid() {
  return (
    <div className={styles.wrapper}>
        <Project />
        <Project />
        <Project />
    </div>
  );
}

export default ProjectsGrid;
