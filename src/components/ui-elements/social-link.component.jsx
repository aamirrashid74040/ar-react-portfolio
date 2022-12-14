import React from "react";
import Icon from "./icon.component";

const SocialLink = ({ iconType, link, color }) => {
  return (
    <a
      className="text-slate-200 text-3xl hover:-translate-y-1 duration-100"
      href={link}
      rel="noreferrer"
      target="_blank"
    >
      <Icon color={color} iconType={iconType} size={30} />
    </a>
  );
};

export default SocialLink;
