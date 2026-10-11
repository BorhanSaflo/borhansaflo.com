import SocialButton from "./SocialButton";
import clsx from "clsx";
import { buttonProps } from "@/lib/a11y";
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
          isOpen ? "opacity-100 h-[calc(100%-var(--header-height))]" : "opacity-0 h-0"
        )}>
        <div className="flex flex-col items-start">
          {menuData.map((menuItem: menuProps) => (
            <a
              key={menuItem.name}
              href={menuItem.href}
              onClick={toggleMobileMenu}
              className={clsx(
                "w-full py-[15px] px-[40px] border-b border-secondary text-primary text-[1.8em] first:border-t",
                menuItem.id === currentSection &&
                  "group-[.active]/header:pl-[35px] group-[.active]/header:border-l-[5px] group-[.active]/header:border-l-primary group-[.active]/header:font-semibold"
              )}>
              {menuItem.name}
            </a>
          ))}
        </div>
        <div className="flex justify-center w-full mb-[20px]">
          <div className="flex gap-[10px] items-center justify-end md:basis-0 md:grow">
            {socials?.map((social: Social) => {
              return <SocialButton key={social.id} social={social} />;
            })}
          </div>
        </div>
      </div>
      <div
        {...buttonProps(toggleMobileMenu, "Toggle menu")}
        className="text-primary text-[27px] transition-[transform] cursor-pointer">
        {isOpen ? <BsXLg /> : <FaBars />}
      </div>
    </>
  );
}

export default MobileMenu;
