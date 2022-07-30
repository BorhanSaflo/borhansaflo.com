import Image from "next/image";
import React from "react";
import { getIcon } from "../../lib/icons";
import { urlFor } from "../../sanity";
import styles from "../../styles/ProjectModal.module.scss";
import projectStyles from "../../styles/Projects.module.scss";
import { Project } from "../../typings";
import { RemoveScrollBar } from "react-remove-scroll-bar";

interface Props {
  project: Project;
  closeModal: () => void;
}

function ProjectModal({ project, closeModal }: Props) {
  const StatusIcon = getIcon(project.status);
  const GitHubIcon = getIcon("github");
  const CloseIcon = getIcon("close");

  return (
    <div className={styles.wrapper}>
      <RemoveScrollBar />
      <div className={styles.background} onClick={() => closeModal()} />
      <div className={styles.modal}>
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
                  <GitHubIcon />
                  {"Github"}
                </a>
              )}
            </div>
          </div>
          <div className={styles.closeButton}>
            <CloseIcon onClick={() => closeModal()} />
          </div>
        </div>
        <div className={styles.bodyContainer}>
          <div className={styles.body}>
            <div className={styles.imageContainer}>
              <Image
                className={styles.projectImage}
                src={
                  project.previewImage
                    ? urlFor(project.previewImage).url()
                    : "/images/projects/placeholder.png"
                }
                alt={project.title}
                layout="responsive"
                width={600}
                height={400}
                objectFit="cover"
              />
            </div>
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
      </div>
    </div>
  );
}

export default ProjectModal;
