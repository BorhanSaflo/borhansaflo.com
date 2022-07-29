import Image from "next/image";
import React from "react";
import { getIcon } from "../../lib/icons";
import { urlFor } from "../../sanity";
import styles from "../../styles/Projects.module.scss";
import { Project } from "../../typings";

interface Props {
  project: Project;
  closeModal: () => void;
}

function ProjectModal({ project, closeModal }: Props) {
  const StatusIcon = getIcon(project.status);
  const CloseIcon = getIcon("close");

  return (
    <div className={styles.modal}>
      <div className={styles.modalBackground} onClick={() => closeModal()} />
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <div className={styles.modalHeaderTitleContainer}>
            <div className={styles.modalStatus}>
              <StatusIcon />
              <span>{project.status}</span>
            </div>
            <span className={styles.modalTitle}>{project.title}</span>
          </div>
          <div className={styles.modalClose}>
            <CloseIcon onClick={() => closeModal()} />
          </div>
        </div>
        <div className={styles.modalBodyContainer}>
          <div className={styles.modalBody}>
            <div className={styles.modalImageContainer}>
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
            <div className={styles.projectTags}>
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
            <div className={styles.modalDescription}>
              <p>{project.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
