"use client";
import React, { useState } from "react";
import styles from "@/app/styles/Projects.module.scss";
import Button from "../Button";
import ProjectComponent from "./Project";
import { Project } from "@/types/Project";

const PROJECTS_INCREMENT = 4;

interface Props {
  projects: Project[];
  windowWidth: number;
}

function ProjectsGrid({ projects, windowWidth }: Props) {
  const [visibleProjectsLength, setVisibleProjectsLength] = useState(6);

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
          return <ProjectComponent key={project._id} project={project} windowWidth={windowWidth} />;
        })}
      </div>
      {projects.length > visibleProjectsLength && (
        <Button
          text={`Load more (${projects.length - visibleProjectsLength})`}
          type={"secondary"}
          icon={"loadMore"}
          onClick={loadMoreProjects}
        />
      )}
    </div>
  );
}

export default ProjectsGrid;
