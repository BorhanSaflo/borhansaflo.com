import React from "react";
import styles from "../../styles/Projects.module.scss";
import Project from "./Project";

function ProjectsGrid() {
  const projects = [
    {
      id: "project-1",
      title: "Project 1",
      description: "Project 1 description",
      image: "/images/projects/300x200.png",
      link: "https://www.google.com",
      tags: ["tag1", "tag2", "tag3"],
    },
    {
      id: "project-2",
      title: "Project 2",
      description: "Project 2 description",
      image: "/images/projects/300x200.png",
      link: "https://www.google.com",
      tags: ["tag1", "tag2", "tag3"],
    },
    {
      id: "project-3",
      title: "Project 3",
      description: "Project 3 description",
      image: "/images/projects/300x200.png",
      link: "https://www.google.com",
      tags: ["tag1", "tag2", "tag3"],
    },
    {
      id: "project-4",
      title: "Project 4",
      description: "Project 4 description",
      image: "/images/projects/300x200.png",
      link: "https://www.google.com",
      tags: ["tag1", "tag2", "tag3"],
    },
    {
      id: "project-5",
      title: "Project 5",
      description: "Project 5 description",
      image: "/images/projects/300x200.png",
      link: "https://www.google.com",
      tags: ["tag1", "tag2", "tag3"],
    },
  ];

  return (
    <div className={styles.wrapper}>
      {projects.map((project) => {
        return <Project key={project.id} {...project} />;
      })}
    </div>
  );
}

export default ProjectsGrid;
