import React from "react";
import { FaCode, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex items-center justify-between absolute bottom-0 w-full">
      <div className="flex items-center gap-5 py-5 text-3xl">
        <NavLink to="https://github.com/DheerajSharma22" target="_blank">
          <FaGithub className="cursor-pointer" />
        </NavLink>
        <NavLink
          to="https://www.instagram.com/dheerajsharma6468/"
          target="_blank"
        >
          <FaInstagram className="cursor-pointer" />
        </NavLink>
        <NavLink
          to="https://www.linkedin.com/in/dheeraj-sharma-%F0%9F%87%AE%F0%9F%87%B3-b6bb39249/"
          target="_blank"
        >
          <FaLinkedin className="cursor-pointer" />
        </NavLink>
      </div>
      <div className="flex items-center gap-2 py-5 text-2xl cursor-pointer">
        <NavLink to="" target="_blank">
          <FaCode />
          <p>Source code⭐</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
