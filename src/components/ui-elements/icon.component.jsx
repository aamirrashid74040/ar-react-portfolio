import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaCodepen,
  FaFacebook,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiMongodb, SiRedux, SiMysql } from "react-icons/si";
import { MdMail } from "react-icons/md";
const ICON_TYPES = {
  facebook: FaFacebook,
  github: FaGithub,
  linkedin: FaLinkedin,
  codepen: FaCodepen,
  html: FaHtml5,
  css: FaCss3,
  nodejs: FaNodeJs,
  reactjs: FaReact,
  javascript: DiJavascript,
  mongodb: SiMongodb,
  redux: SiRedux,
  mysql: SiMysql,
  mail: MdMail,
};

const getIcon = (iconType) => {
  return ICON_TYPES[iconType];
};

const Icon = ({ iconType, size, color }) => {
  const CustomIcon = getIcon(iconType);
  return <CustomIcon className={`${color && color}`} size={size} />;
};

export default Icon;
