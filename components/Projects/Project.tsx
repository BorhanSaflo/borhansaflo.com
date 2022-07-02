import Image from "next/image";
import React from "react";
import { urlFor } from "../../sanity";
import styles from "../../styles/Projects.module.scss";
import { Project } from "../../typings";

interface Props {
  project: Project;
}

function Project({ project }: Props) {
  const truncateDescription = (description: string) => {
    if (description.length > 100) {
      return `${description.substring(0, 100)}...`;
    } else {
      return description;
    }
  };

  return (
    <div className={styles.project}>
      <div className={styles.projectImageContainer}>
        <Image
          className={styles.projectImage}
          src={
            project.previewImage
              ? urlFor(project.previewImage).url()
              : "/images/projects/placeholder.png"
          }
          alt={project.title}
          layout="responsive"
          width={300}
          height={200}
          objectFit="cover"
        />
      </div>

      <div className={styles.projectInfo}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <div className={styles.projectDescription}>
          <p>{truncateDescription(project.description)}</p>
        </div>
        <div className={styles.projectTags}>
          {project.tags?.length > 0 && (
            <>
              {project.tags.map((tag) => (
                <span key={tag._id} className={styles.projectTag}>
                  {tag.tagName}
                </span>
              ))}
            </>
          )}
        </div>
        {/* <a href={link} className={styles.projectLink}>
          View Project
        </a> */}
      </div>
    </div>
  );
}

export default Project;
