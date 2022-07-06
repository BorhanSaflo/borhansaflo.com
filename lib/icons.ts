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
  FaFigma,
  FaBars,
  FaTimes,
  FaChevronRight,
  FaChevronDown,
} from "react-icons/fa";
import { IoLogoCss3, IoMdConstruct, IoMdPause } from "react-icons/io";
import {
  SiJavascript,
  SiTypescript,
  SiBootstrap,
  SiSass,
  SiPython,
  SiAngular,
  SiJquery,
  SiC,
  SiCplusplus,
  SiCsharp,
  SiPhp,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiExpress,
  SiNodedotjs,
  SiNextdotjs,
  SiNuxtdotjs,
  SiVisualstudiocode,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiBlender,
  SiIntellijidea,
  SiVim,
} from "react-icons/si";
import { VscDebugBreakpointData } from "react-icons/vsc";
import { GrStatusUnknown } from "react-icons/gr";
import {
  BsFillCalendarCheckFill,
  BsFillTerminalFill,
  BsXLg,
} from "react-icons/bs";
import { ImCheckmark } from "react-icons/im";

const icons = new Map<string, IconType>([
  ["development", IoMdConstruct],
  ["pause", IoMdPause],
  ["open", FaBars],
  ["close", BsXLg],
  ["calendar", BsFillCalendarCheckFill],
  ["arrowCircleDown", FaArrowCircleDown],
  ["checkmark", ImCheckmark],
  ["empty", VscDebugBreakpointData],
  ["email", FaEnvelope],
  ["send", FaPaperPlane],
  ["github", FaGithub],
  ["git", FaGitAlt],
  ["loadMore", FaChevronDown],
  ["linkedin", FaLinkedinIn],
  ["arrowRight", FaChevronRight],
  ["html", FaHtml5],
  ["css", IoLogoCss3],
  ["js", SiJavascript],
  ["ts", SiTypescript],
  ["react", FaReact],
  ["angular", SiAngular],
  ["jquery", SiJquery],
  ["java", FaJava],
  ["vue", FaVuejs],
  ["sass", SiSass],
  ["python", SiPython],
  ["c", SiC],
  ["c++", SiCplusplus],
  ["cSharp", SiCsharp],
  ["php", SiPhp],
  ["mysql", SiMysql],
  ["mongodb", SiMongodb],
  ["firebase", SiFirebase],
  ["express", SiExpress],
  ["nodeJs", SiNodedotjs],
  ["nextJs", SiNextdotjs],
  ["nuxtJs", SiNuxtdotjs],
  ["VSCode", SiVisualstudiocode],
  ["intellij", SiIntellijidea],
  ["vim", SiVim],
  ["photoshop", SiAdobephotoshop],
  ["illustrator", SiAdobeillustrator],
  ["afterEffects", SiAdobeaftereffects],
  ["premierePro", SiAdobepremierepro],
  ["figma", FaFigma],
  ["blender", SiBlender],
  ["wordPress", FaWordpress],
  ["bootstrap", SiBootstrap],
  ["terminal", BsFillTerminalFill],
]);

export const getIcon = (name: string) => {
  return icons.get(name) || GrStatusUnknown;
};
