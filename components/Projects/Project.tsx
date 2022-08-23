import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { getIcon } from "../../lib/icons";
import { urlFor } from "../../sanity";
import styles from "../../styles/Projects.module.scss";
import { Project } from "../../typings";
import Button from "../Button";
import ProjectModal from "./ProjectModal";
import useMountTransition from "../../hooks/useMountTransition";

interface Props {
  project: Project;
  windowWidth: number;
}

function Project({ project, windowWidth }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hasModalTransitionedIn = useMountTransition(isModalOpen, 250);
  const [tagsWidth, setTagsWidth] = useState<number[]>([]);
  const containerRef = useRef<any>(null);
  const [tagsShown, setTagsShown] = useState<number>(project.tags.length);
  const [computedWidths, setComputedWidths] = useState<boolean>(false);

  useEffect(() => {
    if (!computedWidths) {
      const tagElements = containerRef.current.children;
      let tempArray = [];
      for (let i = 0; i < tagElements.length; i++) {
        tempArray.push(tagElements[i].offsetWidth);
      }
      setTagsWidth(tempArray);
      setComputedWidths(true);
    }
    let tagsContainerWidth = containerRef.current.offsetWidth;
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

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {(hasModalTransitionedIn || isModalOpen) && (
        <ProjectModal
          isModalOpen={isModalOpen}
          hasTransitionedIn={hasModalTransitionedIn}
          project={project}
          closeModal={closeModal}
        />
      )}
      <div className={styles.project} onClick={() => setIsModalOpen(true)}>
        <div className={styles.projectImageContainer}>
          <Image
            className={styles.projectImage}
            src={
              project.previewImage
                ? urlFor(project.previewImage).url()
                : "/images/projects/placeholder.png"
            }
            alt={project.title}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={`${urlFor(project.previewImage).url()}?h=225`}
          />
          <div className={styles.status}>
            <StatusIcon className={styles.statusIcon} />
            <span>{project.status}</span>
          </div>
          <Button
            type="secondary"
            text="View Project"
            icon="externalLink"
            external={true}
            className={styles.button}
            link={project.link ? project.link : "/"}
          />
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
