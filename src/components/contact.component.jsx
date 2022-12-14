import React from "react";
import Heading from "./ui-elements/heading.component";
import SocialLink from "./ui-elements/social-link.component";
import { MdPhone, MdMail } from "react-icons/md";
import { socailLinks } from "../data/social-links";
const Contact = () => {
  return (
    <section name="Contact" className="bg-slate-900 py-10 px-10">
      <div className="my-container mx-auto ">
        <Heading text={`SEND ME A MESSAGE_`} />
        <div className="w-full grid justify-around items-center md:grid-flow-col">
          {/* detail section */}
          <div className="space-y-5 order-2 md:order-1 md:mt-0 mt-8">
            <h2 className="text-slate-200 text-3xl">
              Getting in touch is easy!
            </h2>
            <h2 className="text-slate-200 text-lg flex gap-5">
              <MdMail className="text-slate-400" size={25} />{" "}
              <span>aamirrashid74040@gmail.com</span>
            </h2>
            <h2 className="text-slate-200 text-lg flex gap-5">
              <MdPhone className="text-slate-400" size={25} />{" "}
              <span>+92 307 3255773</span>
            </h2>
            <div className="flex gap-5">
              {socailLinks.map(({ id, iconType, link }) => (
                <SocialLink
                  color={`text-slate-500`}
                  key={id}
                  iconType={iconType}
                  link={link}
                />
              ))}
            </div>
          </div>

          {/* form section */}
          <div className="order-1 md:order-2 mt-8 ">
            <form
              action="https://getform.io/f/6b925b90-1c48-4c45-9272-0bde54c7a7b7"
              method="POST"
              className="space-y-5 w-[300px] md:w-[400px]"
            >
              <input
                placeholder="Enter your name"
                type="text"
                name="name"
                className="block w-full rounded py-2 px-3 leading-tight mt-2 appearance-none border-2 border-slate-700 bg-slate-700 focus:outline-none focus:border-slate-400 text-slate-300"
                required
              />
              <input
                placeholder="abc@example.com"
                name="email"
                type="email"
                className="block w-full rounded py-2 px-3 leading-tight mt-2 appearance-none border-2 border-slate-700 bg-slate-700 focus:outline-none focus:border-slate-400 text-slate-300"
                required
              />
              <textarea
                name="message"
                id=""
                placeholder="Please leave your message"
                cols="30"
                rows="5"
                className="block w-full rounded py-2 px-3 leading-tight mt-2 appearance-none border-2 border-slate-700 bg-slate-700 focus:outline-none focus:border-slate-400 text-slate-300"
                required
              ></textarea>
              <button
                className="bg-slate-500 hover:bg-slate-600 active:bg-slate-500 transition duraion-100 px-2 py-1 text-lg text-white font-medium rounded mt-5 w-full"
                type="submit"
              >
                Let's Talk
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
