import Image from "next/image";
import React from "react";
import styles from "../../styles/Projects.module.scss";

interface Props {
  id?: string;
  title: string;
  description: string;
  image: any;
  link: string;
  tags: string[];
}

function Project({ id, title, description, image, link, tags }: Props) {
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
          src={image}
          layout="fill"
          alt={title}
          objectFit="cover"
        />
      </div>

      <div className={styles.projectInfo}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <div className={styles.projectDescription}>
          <p>{truncateDescription(description)}</p>
        </div>
        <div className={styles.projectTags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.projectTag}>
              {tag + " "}
            </span>
          ))}
        </div>
        {/* <a href={link} className={styles.projectLink}>
          View Project
        </a> */}
      </div>
    </div>
  );
}

export default Project;
