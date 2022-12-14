import React from "react";
import Heading from "./ui-elements/heading.component";
import TechnologyCard from "./ui-elements/technology-card.component";
const Technologies = () => {
  const technologies = [
    {
      iconType: "html",
      color: "text-orange-500",
      shadowColor: "shadow-orange-500",
      text: "Html5",
    },
    {
      iconType: "css",
      color: "text-blue-600",
      shadowColor: "shadow-blue-600",
      text: "CSS3",
    },
    {
      iconType: "javascript",
      color: "text-yellow-500",
      shadowColor: "shadow-yellow-500",
      text: "JavaScript",
    },
    {
      iconType: "nodejs",
      color: "text-green-600",
      shadowColor: "shadow-green-600",
      text: "NodeJs",
    },
    {
      iconType: "reactjs",
      color: "text-sky-400",
      shadowColor: "shadow-sky-400",
      text: "ReactJs",
    },
    {
      iconType: "redux",
      color: "text-purple-700",
      shadowColor: "shadow-purple-700",
      text: "Redux",
    },
    {
      iconType: "mongodb",
      color: "text-green-700",
      shadowColor: "shadow-green-700",
      text: "MongoDb",
    },
    {
      iconType: "mysql",
      color: "text-slate-700",
      shadowColor: "shadow-slate-700",
      text: "MySql",
    },
  ];
  return (
    <section className="py-10 border-b-[1px] relative space-y-8 px-8">
      <Heading text={`Working wiht Technologies`} />
      <div className="my-container m-auto grid grid-cols-2 md:grid-cols-4 items-center gap-10">
        {technologies.map(({ iconType, color, text, shadowColor }) => (
          <TechnologyCard
            key={text}
            iconType={iconType}
            color={color}
            shadowColor={shadowColor}
            children={text}
          />
        ))}
      </div>
    </section>
  );
};

export default Technologies;
