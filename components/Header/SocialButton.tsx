import React, { SVGProps } from "react";
import styles from "../../styles/Header.module.scss";

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  url?: string;
}

function SocialButton({ Icon, url }: Props) {
  return (
    <a href={url} target="_blank" className={styles.socialButton}>
      <Icon />
    </a>
  );
}

export default SocialButton;
