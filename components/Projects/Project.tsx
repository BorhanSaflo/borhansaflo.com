import Image from "next/image";
import React, { useLayoutEffect, useRef, useState } from "react";
import { getIcon } from "../../lib/icons";
import { urlFor } from "../../sanity";
import styles from "../../styles/Projects.module.scss";
import { Project } from "../../typings";
import Button from "../Button";
import ProjectModal from "./ProjectModal";

function Project({ project }: { project: Project }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tags, setTags] = useState(
    project.tags.map((tag) => (
      <span key={tag._id} className={styles.projectTag}>
        {tag.name}
      </span>
    ))
  );
  let tagsLength = project.tags.length;
  const ref = useRef<any>(null);

  useLayoutEffect(() => {
    const tagElements = ref.current?.children;
    if (tagElements && tagsLength > 0) {
      let tagsContainerWidth = ref.current.offsetWidth;
      let totalWidth = 0;
      let tagCount = 0;
      for (tagCount = 0; tagCount < tagElements.length; tagCount++) {
        if (
          totalWidth + tagElements[tagCount].offsetWidth + 40 <
          tagsContainerWidth
        ) {
          totalWidth += tagElements[tagCount].offsetWidth;
        } else {
          tagsLength++;
          setTags(
            tags.slice(0, tags.length - tagCount).concat(
              <span key="count" className={styles.projectTag}>
                {`+${tags.length - tagCount}`}
              </span>
            )
          );
          break;
        }
      }
    }
  }, []);

  const truncateDescription = (description: string) => {
    return `${description.substring(0, description.lastIndexOf(" ", 180))}...`;
  };

  const StatusIcon = getIcon(project.status);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <ProjectModal project={project} closeModal={closeModal} />
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
          <div ref={ref} className={styles.projectTags}>
            {tags}
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
