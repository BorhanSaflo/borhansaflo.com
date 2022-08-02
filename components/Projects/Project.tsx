import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { getIcon } from "../../lib/icons";
import { urlFor } from "../../sanity";
import styles from "../../styles/Projects.module.scss";
import { Project, Tag } from "../../typings";
import Button from "../Button";
import ProjectModal from "./ProjectModal";
import useMountTransition from "../../hooks/useMountTransition";

interface Props {
  project: Project;
  windowWidth: number;
}

function Project({ project, windowWidth }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hasModalTransitionedIn = useMountTransition(isModalOpen, 300);
  const [tags, setTags] = useState<Tag[]>(project.tags);
  const ref = useRef<any>(null);

  useEffect(() => {
    setTags(project.tags);
    const tagElements = ref.current?.children;
    if (tagElements && tagElements.length > 0) {
      const tagsContainerWidth = ref.current.offsetWidth;
      let totalWidth = 0;
      for (let tagCount = 0; tagCount < tagElements.length; tagCount++) {
        if (
          totalWidth + tagElements[tagCount].offsetWidth + 60 <
          tagsContainerWidth
        ) {
          totalWidth += tagElements[tagCount].offsetWidth;
        } else {
          setTags(
            tags.slice(0, tagCount).concat({
              name: `+${project.tags.length - tagCount}`,
              _id: "counterTag",
              _type: "tag",
            })
          );
          break;
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowWidth]);

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
          <div ref={ref} className={styles.projectTags}>
            {tags.map((tag: Tag) => (
              <span key={tag._id} className={styles.projectTag}>
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
