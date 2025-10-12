"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "@/app/styles/Projects.module.scss";
import ProjectModal from "./Modal/Modal";
import type { Project } from "@/types/Project";
import { AnimatePresence } from "framer-motion";

interface Props {
  project: Project;
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
      <div className={styles.project} onClick={openModal}>
        <div className={styles.projectImageContainer}>
          <Image
            className={styles.projectImage}
            src={project.previewImage ? project.previewImage : "/images/projects/placeholder.png"}
            alt={project.title}
            placeholder="blur"
            blurDataURL={`${project.previewImage}?h=225`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className={styles.projectInfoContainer}>
          <div className={styles.projectInfo}>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <div className={styles.projectDescription}>
              <p>{project.description}</p>
            </div>
          </div>
          <div className={styles.projectTags}>
            {(() => {
              const maxTags = 3;
              const tagsToShow = project.tags.slice(0, maxTags);
              const remainingCount = project.tags.length - maxTags;

              return (
                <>
                  {tagsToShow.map((tag) => (
                    <span key={tag._id} className={styles.projectTag}>
                      {tag.name}
                    </span>
                  ))}
                  {remainingCount > 0 && (
                    <span className={styles.projectTag}>+{remainingCount}</span>
                  )}
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
