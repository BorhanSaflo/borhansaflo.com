"use client";
import Image from "next/image";
import React, { useState } from "react";
import DynamicIcon from "@/lib/icons";
import styles from "@/app/styles/Projects.module.scss";
import ProjectModal from "./Modal/Modal";
import type { Project } from "@/types/Project";
import { AnimatePresence } from "framer-motion";

const MAX_DESCRIPTION_LENGTH = 160;
const MOBILE_BREAKPOINT = 768;
const TABLET_BREAKPOINT = 1024;

// Responsive tag limits based on screen size
const getMaxTagsToShow = (windowWidth: number): number => {
  if (windowWidth < MOBILE_BREAKPOINT) return 3; // Mobile
  if (windowWidth < TABLET_BREAKPOINT) return 4; // Tablet
  return 6; // Desktop
};

const truncateDescription = (description: string) => {
  if (description.length <= MAX_DESCRIPTION_LENGTH) return description;

  const truncated = description.substring(0, MAX_DESCRIPTION_LENGTH);
  const lastSpaceIndex = truncated.lastIndexOf(" ");

  // If no space found, truncate at MAX_DESCRIPTION_LENGTH
  const truncateAt = lastSpaceIndex > 0 ? lastSpaceIndex : MAX_DESCRIPTION_LENGTH;

  return `${description.substring(0, truncateAt)}...`;
};

interface Props {
  project: Project;
  windowWidth: number;
}

function Project({ project, windowWidth }: Props) {
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
          <div className={styles.status}>
            <DynamicIcon name={project.status} className={styles.statusIcon} />
            <span>{project.status}</span>
          </div>
        </div>

        <div className={styles.projectInfoContainer}>
          <div className={styles.projectInfo}>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <div className={styles.projectDescription}>
              <p>
                {project.description.length > MAX_DESCRIPTION_LENGTH
                  ? truncateDescription(project.description)
                  : project.description}
              </p>
            </div>
          </div>
          <div className={styles.projectTags}>
            {(() => {
              const maxTags = getMaxTagsToShow(windowWidth);
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
