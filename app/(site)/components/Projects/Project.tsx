"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { getIcon } from "@/lib/icons";
import styles from "@/app/styles/Projects.module.scss";
import Button from "../Button";
import ProjectModal from "./Modal/Modal";
import type { Project } from "@/types/Project";
import { AnimatePresence } from "framer-motion";

interface Props {
  project: Project;
  windowWidth: number;
}

function Project({ project, windowWidth }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tagsWidth, setTagsWidth] = useState<number[]>([]);
  const containerRef = useRef<any>(null);
  const [tagsShown, setTagsShown] = useState<number>(project.tags.length);
  const [computedWidths, setComputedWidths] = useState<boolean>(false);

  useEffect(() => {
    if (!computedWidths) {
      const tagElements = containerRef.current.children;
      const tempArray = [];
      for (let i = 0; i < tagElements.length; i++) {
        tempArray.push(tagElements[i].offsetWidth);
      }
      setTagsWidth(tempArray);
      setComputedWidths(true);
    }
    const tagsContainerWidth = containerRef.current.offsetWidth;
    let totalWidth = 0;

    for (let i = 0; i < tagsWidth.length; i++) {
      totalWidth += tagsWidth[i] + 2;
      if (totalWidth + 60 > tagsContainerWidth) {
        setTagsShown(i);
        return;
      }
    }
    setTagsShown(tagsWidth.length);
  }, [windowWidth, tagsShown, computedWidths, tagsWidth]);

  const truncateDescription = (description: string) => {
    return `${description.substring(0, description.lastIndexOf(" ", 180))}...`;
  };

  const StatusIcon = getIcon(project.status);
  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);

  return (
    <>
      <AnimatePresence>
        {isModalOpen && (
          <ProjectModal project={project} handleClose={closeModal} />
        )}
      </AnimatePresence>
      <div className={styles.project} onClick={openModal}>
        <div className={styles.projectImageContainer}>
          <Image
            className={styles.projectImage}
            src={
              project.previewImage
                ? project.previewImage
                : "/images/projects/placeholder.png"
            }
            alt={project.title}
            placeholder="blur"
            blurDataURL={`${project.previewImage}?h=225`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className={styles.status}>
            <StatusIcon className={styles.statusIcon} />
            <span>{project.status}</span>
          </div>
        </div>

        <div className={styles.projectInfoContainer}>
          <div className={styles.projectInfo}>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <div className={styles.projectDescription}>
              <p>
                {project.description.length > 180
                  ? truncateDescription(project.description)
                  : project.description}
              </p>
            </div>
          </div>
          <div ref={containerRef} className={styles.projectTags}>
            {project.tags.slice(0, tagsShown).map((tag) => {
              return (
                <span key={tag._id} className={styles.projectTag}>
                  {tag.name}
                </span>
              );
            })}
            {project.tags.length - tagsShown > 0 && (
              <span className={styles.projectTag}>
                +{project.tags.length - tagsShown}
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
