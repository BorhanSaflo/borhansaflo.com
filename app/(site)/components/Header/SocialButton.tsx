import React from "react";
import DynamicIcon from "@/lib/icons";
import styles from "@/app/styles/Header.module.scss";
import { Social } from "@/types/Social";

function SocialButton({ social }: { social: Social }) {
  if (!social) return null;
  return (
    <a
      href={social.id === "email" ? `mailto:${social.link}` : social.link}
      target="_blank"
      rel="noreferrer"
      title={social.name}
      className={styles.socialButton}>
      <DynamicIcon name={social.icon} />
    </a>
  );
}

export default SocialButton;
