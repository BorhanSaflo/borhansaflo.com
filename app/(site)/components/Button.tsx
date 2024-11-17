"use client";
import React from "react";
import { getIcon } from "@/lib/icons";
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
  const Icon = icon ? getIcon(icon) : null;
  return link ? (
    <a
      href={link}
      className={clsx(className, `${type}Button`)}
      onClick={onClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}>
      {Icon && <Icon />}
      {text}
    </a>
  ) : (
    <div className={clsx(className, `${type}Button`)} onClick={onClick}>
      {text}
      {Icon && <Icon />}
    </div>
  );
}

export default Button;
