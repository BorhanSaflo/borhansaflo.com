"use client";
import React, { useState } from "react";
import styles from "@/app/styles/Projects.module.scss";
import Button from "../Button";
import ProjectComponent from "./Project";
import { Project } from "@/types/Project";

const INITIAL_VISIBLE_PROJECTS = 6;
const PROJECTS_INCREMENT = 3;

interface Props {
  projects: Project[];
}

function ProjectsGrid({ projects }: Props) {
  const [visibleProjectsLength, setVisibleProjectsLength] = useState(INITIAL_VISIBLE_PROJECTS);

  const loadMoreProjects = () => {
    setVisibleProjectsLength((prev) => {
      const next = prev + PROJECTS_INCREMENT;
      return next >= projects.length ? projects.length : next;
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {projects.slice(0, visibleProjectsLength).map((project) => {
          return <ProjectComponent key={project._id} project={project} />;
        })}
      </div>
      {projects.length > visibleProjectsLength && (
        <Button
          text={`Load more (${projects.length - visibleProjectsLength})`}
          type="secondary"
          icon="loadMore"
          onClick={loadMoreProjects}
        />
      )}
    </div>
  );
}

export default ProjectsGrid;
