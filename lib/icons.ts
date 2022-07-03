import { IconType } from "react-icons";
import {
  FaArrowCircleDown,
  FaHtml5,
  FaJava,
  FaReact,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript, SiTypescript } from "react-icons/si";
import { TiChevronRight } from "react-icons/ti";
import { VscDebugBreakpointData } from "react-icons/vsc";
import { GrStatusUnknown } from "react-icons/gr";

const icons = new Map<string, IconType>([
  ["arrowCircleDown", FaArrowCircleDown],
  ["empty", VscDebugBreakpointData],
  ["email", FaEnvelope],
  ["github", FaGithub],
  ["linkedin", FaLinkedinIn],
  ["learnMore", TiChevronRight],
  ["html", FaHtml5],
  ["css", IoLogoCss3],
  ["js", SiJavascript],
  ["ts", SiTypescript],
  ["react", FaReact],
  ["java", FaJava],
]);

export const getIcon = (name: string) => {
  return icons.get(name) || GrStatusUnknown;
};