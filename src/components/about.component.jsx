import React from "react";
import { FaDownload } from "react-icons/fa";
import Para from "./ui-elements/para.component";

const About = () => {
  return (
    <section name="About" className="py-10 border-b-[1px]">
      <div className="my-container px-10 md:px-0 m-auto space-y-5">
        <h1 className="text-2xl">
          <span className="text-slate-500 font-bold">Hi,</span> Glad to see you
          here...
        </h1>
        <Para
          text={`I am Aamir Rashid, I love writing code and I passionate to take
          challenges as challenges are the part of life so that I decided to
          jump in coding domain. I code not to earn money or for seeking a job
          instead coding is my passion. I have strong command on Bootstrap5,
          HTML5, CSS, JavaScript, I am currently working as MERN Stack Developer
          and have strong knowledge of NodeJs, React Js, MongoDb and Express Js.
          I am strong coding professional with a Master Degree in Computer
          Science from COMSATS University Islamabad.`}
        />

        <a
          href="../assets/resume/Resume.pdf"
          download
          className="w-[120px] bg-slate-700 px-5 py-1.5 rounded-full text-slate-100 font-semibold hover:bg-slate-800 duration-200 active:bg-slate-700 flex relative"
        >
          <FaDownload className="mt-1.5 mr-2" size={10}></FaDownload> Resume
        </a>
      </div>
    </section>
  );
};

export default About;
