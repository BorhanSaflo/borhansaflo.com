import { IconType } from "react-icons";
import { FaHtml5, FaJava, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript, SiTypescript } from "react-icons/si";

export const skillsIcons = new Map<string, IconType>([
  ["html", FaHtml5],
  ["css", IoLogoCss3],
  ["js", SiJavascript],
  ["ts", SiTypescript],
  ["react", FaReact],
  ["java", FaJava],
]);
