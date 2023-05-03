"use client";
import Image from "next/image";
import React, { useState } from "react";
import { getIcon } from "@/lib/icons";
import styles from "@/app/styles/ProjectModal.module.scss";
import projectStyles from "@/app/styles/Projects.module.scss";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import { Project } from "@/types/Project";
import { motion, AnimatePresence } from "framer-motion";
import Backdrop from "./Backdrop";

interface Props {
  project: Project;
  handleClose: () => void;
}

function ProjectModal({ project, handleClose }: Props) {
  const StatusIcon = getIcon(project.status);
  const GitHubIcon = getIcon("github");
  const LinkIcon = getIcon("link");
  const CloseIcon = getIcon("close");
  const RightArrow = getIcon("arrowRight");
  const LeftArrow = getIcon("arrowLeft");

  const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
  };
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, project.images.length, page);

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <Backdrop onClick={handleClose}>
      <RemoveScrollBar />
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className={styles.modal}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}>
        <div className={styles.header}>
          <div className={styles.titleContainer}>
            <span className={styles.title}>{project.title}</span>
            <div className={styles.titleTags}>
              <div className={styles.titleTag}>
                <StatusIcon />
                {project.status}
              </div>
              {project.link && project.link != "" && (
                <a
                  className={styles.titleTag}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer">
                  <LinkIcon />
                  {"Link"}
                </a>
              )}
              {project.github && project.github != "" && (
                <a
                  className={styles.titleTag}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer">
                  <GitHubIcon />
                  {"Github"}
                </a>
              )}
            </div>
          </div>
          <div className={styles.closeButton} onClick={handleClose}>
            <CloseIcon />
          </div>
        </div>
        <div className={styles.bodyContainer}>
          <div className={styles.body}>
            <div
              className={`${styles.imageContainer} ${
                project.images &&
                project.images.length > 1 &&
                styles.imageContainerMultiple
              }`}>
              <AnimatePresence initial={false} custom={direction}>
                <motion.span
                  key={page}
                  custom={direction}
                  initial={{
                    x: direction > 0 ? 800 : -800,
                    opacity: 0,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                  }}
                  exit={{
                    x: direction < 0 ? 800 : -800,
                    opacity: 0,
                  }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  drag={project.images?.length > 1 && "x"}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  dragMomentum={false}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1);
                    }
                  }}>
                  <Image
                    src={project.images[imageIndex]}
                    alt={project.title}
                    placeholder="blur"
                    blurDataURL={`${project.images[imageIndex]}?h=225`}
                    fill
                    quality={100}
                    loading="eager"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {project.images && project.images.length > 1 && (
                    <Image
                      src={
                        project.images[(imageIndex + 1) % project.images.length]
                      }
                      alt={project.title}
                      fill
                      quality={100}
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ visibility: "hidden" }}
                    />
                  )}
                </motion.span>
              </AnimatePresence>
              {project.images && project.images.length > 1 && (
                <>
                  <LeftArrow
                    style={{ left: 5 }}
                    className={styles.arrow}
                    onClick={() => paginate(-1)}
                  />
                  <RightArrow
                    style={{ right: 5 }}
                    className={styles.arrow}
                    onClick={() => paginate(1)}
                  />
                </>
              )}
            </div>
            {project.images && project.images.length > 1 && (
              <div className={styles.imagePagination}>
                {project.images.map((image, index) => (
                  <span
                    key={index}
                    className={`${styles.imagePaginationItem} ${
                      imageIndex == index && styles.activeImagePaginationItem
                    }`}
                    onClick={() => {
                      if (index != imageIndex) {
                        setPage([index, index > imageIndex ? 1 : -1]);
                      }
                    }}
                  />
                ))}
              </div>
            )}
            <div className={projectStyles.projectTags}>
              {project.tags?.length > 0 && (
                <>
                  {project.tags.map((tag) => (
                    <span key={tag._id} className={styles.projectTag}>
                      {tag.name}
                    </span>
                  ))}
                </>
              )}
            </div>
            <div className={styles.description}>
              <p>{project.description}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
}

export default ProjectModal;
