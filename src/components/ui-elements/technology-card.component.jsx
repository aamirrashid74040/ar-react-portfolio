import React from "react";
import Icon from "./icon.component";

const TechnologyCard = ({ iconType, color, children, shadowColor }) => {
  return (
    <div
      className={`card flex flex-col items-center p-5 bg-slate-100 rounded-md space-y-5 hover:-translate-y-1 duration-200 cursor-pointer shadow-md ${shadowColor}`}
    >
      <Icon iconType={iconType} color={color} size={100} />
      {/* <FaHtml5 className="text-orange-500" size={100} /> */}
      <h2 className="font-semibold text-slate-600 text-xl">{children}</h2>
    </div>
  );
};

export default TechnologyCard;
