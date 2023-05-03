import React from "react";
import { getIcon } from "@/lib/icons";
import styles from "@/app/styles/Header.module.scss";
import { Social } from "@/types/Social";

function SocialButton({ social }: { social: Social }) {
  if (social) {
    const SocialIcon = getIcon(social.icon);
    return (
      <a
        href={social.id === "email" ? `mailto:${social.link}` : social.link}
        target="_blank"
        rel="noreferrer"
        title={social.name}
        className={styles.socialButton}>
        <SocialIcon />
      </a>
    );
  }
  return null;
}

export default SocialButton;
