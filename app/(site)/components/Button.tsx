"use client";
import DynamicIcon from "@/lib/icons";
import clsx from "clsx";
import { buttonProps } from "@/lib/a11y";
import { buttonBase } from "@/lib/styles";

const buttonTypes: Record<string, string> = {
  primary: "shadow-card bg-dark-primary text-secondary hover:bg-dark-secondary",
  secondary:
    "bg-white border border-border shadow-card text-dark-primary hover:bg-light-secondary hover:border-border-muted",
  transparent: "text-dark-primary",
};

interface ButtonProps {
  text: string;
  type: string;
  icon?: string;
  className?: string;
  link?: string;
  external?: boolean;
  onClick?: () => void;
}

function Button({ icon, className, text, link, type, external, onClick }: ButtonProps) {
  const classes = clsx(className, buttonTypes[type] && [buttonBase, buttonTypes[type]]);

  return link ? (
    <a
      href={link}
      className={classes}
      onClick={onClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}>
      {icon && <DynamicIcon name={icon} />}
      {text}
    </a>
  ) : (
    <div className={classes} {...(onClick ? buttonProps(onClick) : {})}>
      {text}
      {icon && <DynamicIcon name={icon} />}
    </div>
  );
}

export default Button;
