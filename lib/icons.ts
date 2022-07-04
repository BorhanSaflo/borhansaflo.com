import { IconType } from "react-icons";
import {
  FaArrowCircleDown,
  FaHtml5,
  FaJava,
  FaReact,
  FaEnvelope,
  FaPaperPlane,
  FaGithub,
  FaLinkedinIn,
  FaAngleDown,
  FaVuejs,
  FaWordpress,
  FaGitAlt,
} from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import {
  SiJavascript,
  SiTypescript,
  SiBootstrap,
  SiSass,
  SiPython,
  SiC,
  SiCplusplus,
  SiPhp,
  SiMysql,
  SiNodedotjs,
  SiNextdotjs,
  SiNuxtdotjs,
  SiVisualstudiocode,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiWindows,
  SiLinux,
  SiMacos,
} from "react-icons/si";
import { TiChevronRight } from "react-icons/ti";
import { VscDebugBreakpointData } from "react-icons/vsc";
import { GrStatusUnknown } from "react-icons/gr";

const icons = new Map<string, IconType>([
  ["arrowCircleDown", FaArrowCircleDown],
  ["empty", VscDebugBreakpointData],
  ["email", FaEnvelope],
  ["send", FaPaperPlane],
  ["github", FaGithub],
  ["git", FaGitAlt],
  ["loadMore", FaAngleDown],
  ["linkedin", FaLinkedinIn],
  ["arrowRight", TiChevronRight],
  ["html", FaHtml5],
  ["css", IoLogoCss3],
  ["js", SiJavascript],
  ["ts", SiTypescript],
  ["react", FaReact],
  ["java", FaJava],
  ["vue", FaVuejs],
  ["sass", SiSass],
  ["python", SiPython],
  ["c", SiC],
  ["c++", SiCplusplus],
  ["php", SiPhp],
  ["mysql", SiMysql],
  ["nodeJs", SiNodedotjs],
  ["nextJs", SiNextdotjs],
  ["nuxtJs", SiNuxtdotjs],
  ["VSCode", SiVisualstudiocode],
  ["photoshop", SiAdobephotoshop],
  ["illustrator", SiAdobeillustrator],
  ["afterEffects", SiAdobeaftereffects],
  ["premierePro", SiAdobepremierepro],
  ["wordPress", FaWordpress],
  ["bootstrap", SiBootstrap],
  ["windows", SiWindows],
  ["linux", SiLinux],
  ["macos", SiMacos],
]);

export const getIcon = (name: string) => {
  return icons.get(name) || GrStatusUnknown;
};
