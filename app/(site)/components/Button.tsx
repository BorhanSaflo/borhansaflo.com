"use client";
import React from "react";
import DynamicIcon from "@/lib/icons";
import clsx from "clsx";

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
  return link ? (
    <a
      href={link}
      className={clsx(className, `${type}Button`)}
      onClick={onClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}>
      {icon && <DynamicIcon name={icon} />}
      {text}
    </a>
  ) : (
    <div className={clsx(className, `${type}Button`)} onClick={onClick}>
      {text}
      {icon && <DynamicIcon name={icon} />}
    </div>
  );
}

export default Button;
