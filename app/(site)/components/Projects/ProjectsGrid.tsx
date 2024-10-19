"use client";
import React, { useEffect, useState } from "react";
import styles from "@/app/styles/Projects.module.scss";
import Button from "../Button";
import ProjectComponent from "./Project";
import { Project } from "@/types/Project";

interface Props {
  projects: Project[];
  windowWidth: number;
}

function ProjectsGrid({ projects, windowWidth }: Props) {
  const [projectsLength, setProjectsLength] = useState(0);
  const [visibleProjectsLength, setVisibleProjectsLength] = useState(6);

  const loadMoreProjects = () => {
    if (projectsLength + 3 > visibleProjectsLength) {
      setVisibleProjectsLength(visibleProjectsLength + 3);
    } else setVisibleProjectsLength(projectsLength);
  };

  useEffect(() => {
    setProjectsLength(projects.length);
  }, [projects.length]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {projects.slice(0, visibleProjectsLength).map((project) => {
          return <ProjectComponent key={project._id} project={project} windowWidth={windowWidth} />;
        })}
      </div>
      {projectsLength > visibleProjectsLength && (
        <Button
          text={`Load more (${projectsLength - visibleProjectsLength})`}
          type={"secondary"}
          icon={"loadMore"}
          onClick={loadMoreProjects}
        />
      )}
    </div>
  );
}

export default ProjectsGrid;
