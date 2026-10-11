import DynamicIcon from "@/lib/icons";
import { Social } from "@/types/Social";

function SocialButton({ social }: { social: Social }) {
  if (!social) return null;
  return (
    <a
      href={social.id === "email" ? `mailto:${social.link}` : social.link}
      target="_blank"
      rel="noreferrer"
      title={social.name}
      className="flex items-center justify-center w-[55px] h-[55px] m-[10px] rounded-base text-primary text-[35px] transition-all hover:bg-dark-secondary md:w-[35px] md:h-[35px] md:m-0 md:text-[20px]">
      <DynamicIcon name={social.icon} />
    </a>
  );
}

export default SocialButton;
