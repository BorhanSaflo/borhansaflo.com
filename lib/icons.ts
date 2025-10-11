import React from "react";
import {
  FaHtml5,
  FaJava,
  FaReact,
  FaVuejs,
  FaDocker,
  FaChevronLeft,
  FaChevronRight,
  FaGitAlt,
  FaGithub,
  FaEnvelope,
  FaLink,
  FaBars,
  FaArrowCircleDown,
  FaPaperPlane,
  FaChevronDown,
  FaLinkedin,
  FaAws,
} from "react-icons/fa";
import { IoLogoCss3, IoMdConstruct, IoMdPause } from "react-icons/io";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiC,
  SiCplusplus,
  SiExpress,
  SiNextdotjs,
  SiNuxtdotjs,
  SiTailwindcss,
  SiGo,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiFastapi,
  SiSvelte,
  SiKubernetes,
  SiGithubactions,
  SiTerraform,
} from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { GrStatusUnknown } from "react-icons/gr";
import { BiLinkExternal } from "react-icons/bi";
import { ImCheckmark } from "react-icons/im";
import { BsXLg, BsFillCalendarCheckFill } from "react-icons/bs";
import { VscDebugBreakpointData } from "react-icons/vsc";

const iconMap = {
  externalLink: BiLinkExternal,
  link: FaLink,
  Completed: ImCheckmark,
  "In Development": IoMdConstruct,
  "On Hold": IoMdPause,
  Cancelled: BsXLg,
  Planned: BsFillCalendarCheckFill,
  open: FaBars,
  close: BsXLg,
  arrowCircleDown: FaArrowCircleDown,
  empty: VscDebugBreakpointData,
  email: FaEnvelope,
  send: FaPaperPlane,
  github: FaGithub,
  git: FaGitAlt,
  loadMore: FaChevronDown,
  linkedin: FaLinkedin,
  arrowRight: FaChevronRight,
  arrowLeft: FaChevronLeft,
  html: FaHtml5,
  css: IoLogoCss3,
  js: SiJavascript,
  ts: SiTypescript,
  react: FaReact,
  java: FaJava,
  vue: FaVuejs,
  python: SiPython,
  c: SiC,
  "c++": SiCplusplus,
  go: SiGo,
  express: SiExpress,
  nextJs: SiNextdotjs,
  nuxtJs: SiNuxtdotjs,
  tailwind: SiTailwindcss,
  docker: FaDocker,
  postgres: SiPostgresql,
  mysql: SiMysql,
  mongodb: SiMongodb,
  redis: DiRedis,
  fastapi: SiFastapi,
  svelte: SiSvelte,
  mongo: SiMongodb,
  kubernetes: SiKubernetes,
  githubActions: SiGithubactions,
  terraform: SiTerraform,
  aws: FaAws,
};

interface DynamicIconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
}

export default function DynamicIcon({ name, ...rest }: DynamicIconProps) {
  const IconComponent = iconMap[name as keyof typeof iconMap];
  const IconToRender = IconComponent || GrStatusUnknown;
  return React.createElement(IconToRender, rest);
}
