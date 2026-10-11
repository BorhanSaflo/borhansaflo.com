import { buttonBase } from "@/lib/styles";
import { Social } from "@/types/Social";
import SocialButton from "./SocialButton";

interface menuProps {
  name: string;
  href: string;
  id: string;
}

interface Props {
  menuData: menuProps[];
  socials: Social[];
}

function DesktopMenu({ menuData, socials }: Props) {
  return (
    <>
      <div className="flex items-center justify-center gap-[10px] h-full">
        {menuData.map((menuItem: menuProps) => (
          <a
            key={menuItem.name}
            href={menuItem.href}
            className={`${buttonBase} relative text-primary hover:bg-dark-secondary`}>
            {menuItem.name}
          </a>
        ))}
      </div>
      <div className="flex gap-[10px] items-center justify-end md:basis-0 md:grow">
        {socials?.map((social: Social) => {
          return <SocialButton key={social.id} social={social} />;
        })}
      </div>
    </>
  );
}

export default DesktopMenu;
