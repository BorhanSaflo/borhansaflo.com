import Image from "next/image";
import React, { useState } from "react";
import { getIcon } from "../../lib/icons";
import { urlFor } from "../../sanity";
import styles from "../../styles/ProjectModal.module.scss";
import projectStyles from "../../styles/Projects.module.scss";
import { Project } from "../../typings";
import { RemoveScrollBar } from "react-remove-scroll-bar";

interface Props {
  project: Project;
  closeModal: () => void;
  isModalOpen?: boolean;
  hasTransitionedIn?: boolean;
}

function ProjectModal({
  project,
  closeModal,
  isModalOpen,
  hasTransitionedIn,
}: Props) {
  const StatusIcon = getIcon(project.status);
  const GitHubIcon = getIcon("github");
  const CloseIcon = getIcon("close");
  const RightArrow = getIcon("arrowRight");
  const LeftArrow = getIcon("arrowLeft");

  const [imageIndex, setImageIndex] = useState<number>(0);
  const imageCount = project.images ? project.images.length : 1;
  const [image, setImage] = useState<any>(
    project.images
      ? urlFor(project.images[0]).url()
      : "/images/projects/placeholder.png"
  );
  const [isImageSwitching, setIsImageSwitching] = useState<boolean>(false);

  const changeImage = (index: number) => {
    if (!isImageSwitching && project.images && project.images.length > 1) {
      setIsImageSwitching(true);
      setTimeout(() => {
        setImageIndex(index);
        setImage(
          project.images
            ? urlFor(project.images[index]).url()
            : "/images/projects/placeholder.png"
        );
      }, 250);
      setTimeout(() => {
        setIsImageSwitching(false);
      }, 500);
    }
  };

  const handleImageSwitch = (forward: boolean) => {
    if (project.images && project.images.length > 1) {
      if (forward) {
        if (imageIndex + 1 < imageCount) changeImage(imageIndex + 1);
        else changeImage(0);
      } else {
        if (imageIndex - 1 >= 0) changeImage(imageIndex - 1);
        else changeImage(imageCount - 1);
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <RemoveScrollBar />
      <div
        className={`${styles.background} ${hasTransitionedIn && styles.in} ${
          isModalOpen && styles.visible
        }`}
        onClick={() => closeModal()}
      />
      <div
        className={`${styles.modal} ${hasTransitionedIn && styles.in} ${
          isModalOpen && styles.visible
        }`}>
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
          <div className={styles.closeButton} onClick={() => closeModal()}>
            <CloseIcon />
          </div>
        </div>
        <div className={styles.bodyContainer}>
          <div className={styles.body}>
            <div className={styles.imageContainer}>
              <Image
                className={`${styles.projectImage} ${
                  isImageSwitching ? styles.imageSwitchAnimation : ""
                }`}
                src={image}
                alt={project.title}
                layout="responsive"
                width={600}
                height={400}
                objectFit="cover"
                placeholder="blur"
                blurDataURL={`${urlFor(image).url()}?h=225`}
                priority={true}
              />
              {project.images && project.images.length > 1 && (
                <>
                  <div
                    className={`${styles.arrowContainer} ${styles.arrowLeft}`}
                    onClick={() => handleImageSwitch(false)}>
                    <LeftArrow className={styles.arrow} />
                  </div>
                  <div
                    className={`${styles.arrowContainer} ${styles.arrowRight}`}
                    onClick={() => handleImageSwitch(true)}>
                    <RightArrow className={styles.arrow} />
                  </div>
                  <div className={styles.overlay} />
                </>
              )}
            </div>
            {project.images && project.images.length > 1 && (
              <div className={styles.imagePagination}>
                {project.images.map((image, index) => {
                  return (
                    <div
                      key={index}
                      className={`${styles.imagePaginationItem} ${
                        imageIndex == index
                          ? styles.activeImagePaginationItem
                          : ""
                      }`}
                      onClick={() => {
                        if (index != imageIndex) changeImage(index);
                      }}></div>
                  );
                })}
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
      </div>
    </div>
  );
}

export default ProjectModal;
