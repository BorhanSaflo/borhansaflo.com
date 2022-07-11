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

  const statusColor = new Map<string, string[]>([
    ["development", ["#ffc107", "In Development"]],
    ["checkmark", ["#26b745", "Completed"]],
    ["close", ["#ff3a3a", "Incomplete"]],
    ["pause", ["#f2804b", "On Hold"]],
    ["calendar", ["#5a98fc", "Planned"]],
  ]);

  const StatusIcon = getIcon(project.status);

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
          objectFit="cover"
        />
        <div className={styles.status}>
          <StatusIcon
            className={styles.statusIcon}
            style={{ color: statusColor.get(project.status)![0] }}
          />
          <span>{statusColor.get(project.status)![1]}</span>
        </div>
        <a className={styles.button} href={project.link ? project.link : "/"}>
          {"View Project"}
        </a>
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
      </div>
    </div>
  );
}

export default Project;
