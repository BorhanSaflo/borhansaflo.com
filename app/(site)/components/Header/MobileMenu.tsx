import SocialButton from "./SocialButton";
import clsx from "clsx";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import { Social } from "@/types/Social";
import { BsXLg } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

interface menuProps {
  name: string;
  href: string;
  id: string;
}

interface Props {
  menuData: menuProps[];
  isOpen: boolean;
  socials: Social[];
  currentSection: string;
  toggleMobileMenu: () => void;
}

function MobileMenu({ menuData, isOpen, socials, currentSection, toggleMobileMenu }: Props) {
  return (
    <>
      {isOpen && <RemoveScrollBar />}
      <div
        className={clsx(
          "flex fixed top-(--header-height) left-0 flex-col justify-between w-full bg-dark-primary overflow-hidden transition-[opacity,height]",
          isOpen ? "opacity-100 h-[calc(100dvh-var(--header-height))]" : "opacity-0 h-0"
        )}>
        <nav className="flex flex-col gap-[4px] p-[16px]">
          {menuData.map((menuItem: menuProps) => (
            <a
              key={menuItem.name}
              href={menuItem.href}
              onClick={toggleMobileMenu}
              aria-current={menuItem.id === currentSection ? "location" : undefined}
              className={cn(
                buttonVariants({ variant: "nav" }),
                "justify-start py-[14px] px-[16px] text-[1.25rem]",
                menuItem.id === currentSection && "bg-dark-secondary"
              )}>
              {menuItem.name}
            </a>
          ))}
        </nav>
        <div className="flex justify-center w-full py-[16px] border-t border-dark-secondary">
          <div className="flex gap-[10px] items-center justify-end">
            {socials?.map((social: Social) => {
              return <SocialButton key={social.id} social={social} />;
            })}
          </div>
        </div>
      </div>
      <Button
        variant="iconDark"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        onClick={toggleMobileMenu}
        className="p-[4px] -m-[4px] text-[27px]">
        {isOpen ? <BsXLg /> : <FaBars />}
      </Button>
    </>
  );
}

export default MobileMenu;
