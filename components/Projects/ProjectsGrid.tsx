import React, { useEffect, useState } from "react";
import styles from "../../styles/Projects.module.scss";
import Button from "../Button";
import Project from "./Project";

function ProjectsGrid() {
  const [projectsLength, setProjectsLength] = useState(0);
  const [visibleProjectsLength, setVisibleProjectsLength] = useState(3);

  const loadMoreProjects = () => {
    if (projectsLength + 3 > visibleProjectsLength) {
      setVisibleProjectsLength(visibleProjectsLength + 3);
    } else setVisibleProjectsLength(projectsLength);
  };

  const loremText =
    "Lorem ipsum dolor sit amet. A suscipit eveniet non aliquam dolor est voluptatem et vitae veritatis eos tenetur aperiam. Ab quidem possimus consectetur voluptatibus est facilis sint. Eum recusandae optio quo quia fugit ut quidem harum consequuntur blanditiis id dolore quod.";
  const sampleImage = "/images/projects/300x200.png";
  const sampleLink = "/";
  const sampleTags = ["TypeScript", "React", "Next.js"];

  const projects = [];
  for (let i = 1; i <= 5; i++) {
    projects.push({
      id: "Project-" + i,
      image: sampleImage,
      link: sampleLink,
      tags: sampleTags,
      title: "Project " + i,
      description: loremText,
    });
  }

  useEffect(() => {
    setProjectsLength(projects.length);
  }, [projects.length]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {projects.slice(0, visibleProjectsLength).map((project) => {
          return <Project key={project.id} {...project} />;
        })}
      </div>
      {projectsLength > visibleProjectsLength && (
        <Button text="Show More" onClick={() => loadMoreProjects()} />
      )}
    </div>
  );
}

export default ProjectsGrid;
