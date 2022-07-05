import Image from "next/image";
import React from "react";
import { getIcon } from "../../lib/icons";
import { urlFor } from "../../sanity";
import styles from "../../styles/Projects.module.scss";
import { Project } from "../../typings";
import Button from "../Button";

function Project({ project }: { project: Project }) {
  const truncateDescription = (description: string) => {
    if (description.length > 100) {
      return `${description.substring(0, 100)}...`;
    } else {
      return description;
    }
  };

  const StatusIcon = getIcon("checkmark");

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
          layout="fill"
          width={300}
          height={200}
          objectFit="cover"
        />
        <div className={styles.status}>
          <StatusIcon />
          <span>Complete</span>
        </div>
        <div className={styles.button}>
          <Button text="View Project" type="secondary" />
        </div>
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
                  {tag.name}
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
