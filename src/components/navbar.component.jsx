import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: "Home" },
    { id: 2, link: "About" },
    { id: 3, link: "Resume" },
    { id: 4, link: "Skills" },
    { id: 5, link: "Contact" },
  ];

  return (
    <nav className="navbar ">
      <div className="navbar-container">
        <div onClick={() => setNav(!nav)} className="hamburger">
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        <ul
          className={`menu-items ${
            nav ? "translate-x-[0]" : "-translate-x-[150%] md:translate-x-0"
          }`}
        >
          {links.map(({ id, link }) => (
            <li key={id}>
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <h1 className="logo">aamir rashid</h1>
      </div>
    </nav>
  );
};

export default Navbar;
