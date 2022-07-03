import React from "react";
import { getIcon } from "../../lib/icons";
import styles from "../../styles/Header.module.scss";
import { Social } from "../../typings";

function SocialButton({ social }: { social: Social }) {
  if (social) {
    const SocialIcon = getIcon(social.icon);
    return (
      <a
        href={social.id === "email" ? `mailto:${social.link}` : social.link}
        target="_blank"
        rel="noreferrer"
        className={styles.socialButton}>
        <SocialIcon />
      </a>
    );
  }
  return null;
}

export default SocialButton;
