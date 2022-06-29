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
  return <div className={styles.projectContainer}>{title}</div>;
}

export default Project;
