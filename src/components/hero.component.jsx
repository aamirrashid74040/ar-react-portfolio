import React from "react";

import profileImage from "../assets/images/aamir-pic.jpeg";
import SocialLink from "./ui-elements/social-link.component";
import { socailLinks } from "../data/social-links";

const Hero = () => {
  return (
    <section
      name="Home"
      className="flex flex-col justify-center items-center bg-slate-100 w-screen py-10 space-y-2 pt-24 shadow-md shadow-slate-300 "
    >
      <img
        src={profileImage}
        alt=""
        className="md:h-48 md:w-48 h-40 w-40 object-cover rounded-full"
      />
      <h1 className="text-slate-500 text-3xl font-bold text-center">
        <span className="text-slate-700">I'm</span> Aamir Rashid
      </h1>
      <h2 className="text-slate-500 font-semibold text-xl animate-bounce">
        Full Stack Developer
      </h2>
      <div className="grid grid-flow-col gap-3">
        {socailLinks.map(({ id, iconType, link }) => (
          <SocialLink
            color={`text-slate-500`}
            key={id}
            iconType={iconType}
            link={link}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
