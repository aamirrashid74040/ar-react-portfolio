import React, { Fragment } from "react";

const Employment = () => {
  return (
    <Fragment>
      <h3 className="text-slate-500 text-xl uppercase">Employement_</h3>
      <div className="timeline mt-5">
        <div className="timeline-card relative border-l-[3px] pb-5">
          <div className="dot w-5 h-5 bg-slate-500 rounded-full absolute top-0 -left-2.5 border-[3px] border-white"></div>
          <div className="pl-10 space-y-1">
            <span className="text-indigo-700 font-medium block text-lg">
              Technercia Solutions Inc.
            </span>
            <h3 className="text-slate-400 text-sm font-medium tracking-widest">
              Jul 2022 - Present
            </h3>
            <h3 className="text-slate-500 font-bold text-xl">
              Junior Frontend Developer
            </h3>
            <p className="text-slate-500 font-medium">
              I am working in Technercia Solns as a junior frontend Developer
              where I am working with Html4, CSS3, JavaScript, TailwindCSS and
              ReactJs.
            </p>
          </div>
        </div>
        <div className="timeline-card relative border-l-[3px] pb-5">
          <div className="dot w-5 h-5 bg-slate-500 rounded-full absolute top-0 -left-2.5 border-[3px] border-white"></div>
          <div className="pl-10 space-y-1">
            <span className="text-indigo-700 font-medium block text-lg">
              Ministry of Defence Services
            </span>
            <h3 className="text-slate-400 text-sm font-medium tracking-widest">
              Jan 2018 - Present
            </h3>
            <h3 className="text-slate-500 font-semibold text-xl">
              Junior IT Assistant
            </h3>
            <p className="text-slate-500 font-medium">
              Working as a junior IT assistant, develop dynamic websites
              (Portals) in HTML, CSS, JavaScript using MERN Stack technology.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Employment;
