"use client";
import Image from "next/image";
import { useState } from "react";
import { projectTag } from "@/lib/styles";
import ProjectModal from "./Modal/Modal";
import type { Project as ProjectType } from "@/types/Project";
import { AnimatePresence } from "framer-motion";
import { buttonProps } from "@/lib/a11y";

interface Props {
  project: ProjectType;
}

function Project({ project }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);

  return (
    <>
      <AnimatePresence>
        {isModalOpen && <ProjectModal project={project} handleClose={closeModal} />}
      </AnimatePresence>
      <div
        className="group rounded-base border border-border shadow-card bg-light-primary flex flex-col w-full animate-fade-in transition-all cursor-pointer hover:border-border-muted"
        {...buttonProps(openModal)}>
        <div className="flex items-center justify-center relative w-full h-60 rounded-t-base overflow-hidden md:h-56 lg:h-[11.5rem]">
          <Image
            className="rounded-t-base transition-all object-cover brightness-95 group-hover:brightness-75 group-hover:blur-[0.2px] group-hover:scale-[1.05]"
            src={project.previewImage ? project.previewImage : "/images/projects/placeholder.png"}
            alt={project.title}
            placeholder="blur"
            blurDataURL={`${project.previewImage}?h=225`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between gap-4 p-4 rounded-b-base text-dark-primary group-hover:bg-light-secondary">
          <div className="flex flex-col gap-2">
            <h3 className="lg:text-[1.1rem]">{project.title}</h3>
            <div className="text-muted-text line-clamp-3 overflow-hidden lg:text-[0.9rem]">
              <p>{project.description}</p>
            </div>
          </div>
          <div className="flex flex-row flex-wrap gap-[5px] w-full transition-all duration-300 ease-in-out">
            {(() => {
              const maxTags = 3;
              const tagsToShow = project.tags.slice(0, maxTags);
              const remainingCount = project.tags.length - maxTags;

              return (
                <>
                  {tagsToShow.map((tag) => (
                    <span key={tag._id} className={projectTag}>
                      {tag.name}
                    </span>
                  ))}
                  {remainingCount > 0 && <span className={projectTag}>+{remainingCount}</span>}
                </>
              );
            })()}
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
