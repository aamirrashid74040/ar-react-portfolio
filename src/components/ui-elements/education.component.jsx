import React, { Fragment } from "react";

const Education = () => {
  return (
    <Fragment>
      <h3 className="text-slate-500 text-xl uppercase">Education_</h3>
      <div className="timeline mt-5">
        <div className="timeline-card relative border-l-[3px] pb-5">
          <div className="dot w-5 h-5 bg-slate-500 rounded-full absolute top-0 -left-2.5 border-[3px] border-white"></div>
          <div className="pl-10 space-y-2">
            <span className="text-indigo-700 font-medium block text-lg">
              Virtual University
            </span>
            <h3 className="text-slate-400 text-sm font-medium tracking-widest">
              2022 - Present
            </h3>
            <h3 className="text-slate-500 font-semibold text-xl">
              Masters in Computer Science
            </h3>
          </div>
        </div>
        <div className="timeline-card relative border-l-[3px] pb-5">
          <div className="dot w-5 h-5 bg-slate-500 rounded-full absolute top-0 -left-2.5 border-[3px] border-white"></div>
          <div className="pl-10 space-y-2">
            <span className="text-indigo-700 font-medium block text-lg">
              Comsats University, Islamabad
            </span>
            <h3 className="text-slate-400 text-sm font-medium tracking-widest">
              2015 - 2017
            </h3>
            <h3 className="text-slate-500 font-semibold text-xl">
              Bechulars in Computer Science
            </h3>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Education;
