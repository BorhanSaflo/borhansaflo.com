import React, { SVGProps } from "react";
import styles from "../styles/Landing.module.scss";

interface Props {
  Icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  text: string;
  link?: string;
  onClick?: () => void;
}

function Button({ Icon, text, link, onClick }: Props) {
  return (
    <a href={link} className={styles.button} onClick={onClick}>
      {text}
      {Icon && <Icon />}
    </a>
  );
}

export default Button;
