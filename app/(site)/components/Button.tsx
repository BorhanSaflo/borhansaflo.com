"use client";
import DynamicIcon from "@/lib/icons";
import { Button as UIButton, buttonVariants } from "@/components/ui/button";

const variants = ["primary", "secondary", "transparent"] as const;
type Variant = (typeof variants)[number];

interface ButtonProps {
  text: string;
  type: string;
  icon?: string;
  link?: string;
  external?: boolean;
  onClick?: () => void;
}

function Button({ icon, text, link, type, external, onClick }: ButtonProps) {
  const variant = variants.find((v) => v === type) as Variant | undefined;

  return link ? (
    <a
      href={link}
      className={variant ? buttonVariants({ variant }) : undefined}
      onClick={onClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}>
      {icon && <DynamicIcon name={icon} />}
      {text}
    </a>
  ) : (
    <UIButton variant={variant} type="button" onClick={onClick}>
      {text}
      {icon && <DynamicIcon name={icon} />}
    </UIButton>
  );
}

export default Button;
