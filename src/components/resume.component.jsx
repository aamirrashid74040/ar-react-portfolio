import React from "react";
import Education from "./ui-elements/education.component";
import Employment from "./ui-elements/employment.component";
import Heading from "./ui-elements/heading.component";
import Para from "./ui-elements/para.component";
const Resume = () => {
  return (
    <section name="Resume" className="border-b-[1px] py-10">
      <div className="my-container px-10 md:px-0 m-auto space-y-10">
        <Heading text="Resume_" />
        <Para
          text={`Passionate to work for an organization that can provide an attractive
          opportunity for carrier growth and help me to enhance my managerial
          skills. Having good knowledge of JavaScript and C++. Challenge lover
          and passionate about writing code and creating valuable applications
          that help people`}
        />
        <Education />
        <Employment />
      </div>
    </section>
  );
};

export default Resume;
