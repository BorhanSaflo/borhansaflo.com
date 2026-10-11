"use client";
import { useState } from "react";
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
    <div className="flex flex-col items-center justify-center gap-[60px] w-full">
      <div className="grid grid-cols-1 auto-rows-[1fr] gap-4 justify-items-center w-full py-4 overflow-hidden md:grid-cols-2 lg:grid-cols-3">
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
