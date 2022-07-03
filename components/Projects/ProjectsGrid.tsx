import React, { useEffect, useState } from "react";
import { getIcon } from "../../lib/icons";
import styles from "../../styles/Projects.module.scss";
import { Project } from "../../typings";
import Button from "../Button";
import ProjectComponent from "./Project";

interface Props {
  projects: Project[];
}

function ProjectsGrid({ projects }: Props) {
  const [projectsLength, setProjectsLength] = useState(0);
  const [visibleProjectsLength, setVisibleProjectsLength] = useState(3);

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
          return <ProjectComponent key={project._id} project={project} />;
        })}
      </div>
      {projectsLength > visibleProjectsLength && (
        <Button
          text={`Load more (${projectsLength - visibleProjectsLength})`}
          type={"secondary"}
          Icon={getIcon("loadMore")}
          onClick={loadMoreProjects}
        />
      )}
    </div>
  );
}

export default ProjectsGrid;
