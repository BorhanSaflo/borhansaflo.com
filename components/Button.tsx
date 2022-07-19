import React from "react";
import { getIcon } from "../lib/icons";
interface Props {
  text: string;
  type: string;
  icon?: string;
  className?: string;
  link?: string;
  external?: boolean;
  onClick?: () => void;
}

function Button({
  icon,
  className,
  text,
  link,
  type,
  external,
  onClick,
}: Props) {
  const Icon = icon ? getIcon(icon) : null;
  return (
    <a
      href={link}
      className={className ? `${type}Button ${className}` : `${type}Button`}
      onClick={onClick}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}>
      {text}
      {Icon && <Icon className={"buttonIcon"} />}
    </a>
  );
}

export default Button;
