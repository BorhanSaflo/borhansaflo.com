import React, { SVGProps } from "react";
import styles from "../styles/Home.module.scss";

interface Props {
  Icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  text: string;
  onClick?: () => void;
}

function Button({ Icon, text, onClick }: Props) {
  return (
    <a className={styles.button} onClick={onClick}>
      {text}
      {Icon && <Icon />}
    </a>
  );
}

export default Button;
