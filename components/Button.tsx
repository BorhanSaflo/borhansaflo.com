import React, { SVGProps } from "react";
interface Props {
  Icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  text: string;
  link?: string;
  type: string;
  onClick?: () => void;
}

function Button({ Icon, text, link, type, onClick }: Props) {
  return (
    <a href={link} className={type + "Button"} onClick={onClick}>
      {text}
      {Icon && <Icon className={"buttonIcon"} />}
    </a>
  );
}

export default Button;
