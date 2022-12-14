import React from "react";
import Heading from "./ui-elements/heading.component";
import ProgressBar from "./ui-elements/progress-bar.component";

const Skills = () => {
  const skills = [
    {
      id: 1,
      name: "Html5",
      percentage: 90,
    },
    {
      id: 2,
      name: "CSS3",
      percentage: 80,
    },
    {
      id: 3,
      name: "JavaScript",
      percentage: 80,
    },
    {
      id: 4,
      name: "ReactJs",
      percentage: 70,
    },
    {
      id: 5,
      name: "NodeJs",
      percentage: 70,
    },
  ];
  return (
    <section
      name="Skills"
      className="flex flex-col justify-center items-center py-10 bg-slate-100 border-b-[1px]"
    >
      <div className="my-container m-auto px-10 md:px-0 space-y-8">
        <Heading text={`Technical Skills`} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skills.map(({ id, name, percentage }) => (
            <ProgressBar key={id} name={name} percentage={percentage} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
