import Image from "next/image";
import React from "react";
import styles from "../../styles/Projects.module.scss";

interface Props {
  id?: string;
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

function Project({ id, title, description, image, link, tags }: Props) {
  return (
    <div className={styles.projectContainer}>
      <Image className={styles.projectImage} src={image} layout="fill" />

      <div className={styles.projectInfo}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <p className={styles.projectDescription}>{description}</p>
        <div className={styles.projectTags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.projectTag}>
              {tag + " "}
            </span>
          ))}
        </div>
        <a href={link} className={styles.projectLink}>
          View Project
        </a>
      </div>
    </div>
  );
}

export default Project;
