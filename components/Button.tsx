import React, { SVGProps } from "react";
import styles from "../styles/Home.module.scss";

interface Props {
  Icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  text: string;
}

function Button({ Icon, text }: Props) {
  return (
    <a className={styles.button}>
      {text}
      {Icon && <Icon />}
    </a>
  );
}

export default Button;
