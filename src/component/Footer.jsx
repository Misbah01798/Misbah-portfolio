import React from "react";
import logo from '../assets/Misbah.png'
const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-evenly">
        <span><div className="w-16 rounded-full">
            <img src={logo} className="w-16 rounded-full"/>
          </div></span>
        <p className="text-gray-300">umisbah900@gmail.com</p>
        <p className="text-gray-300">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
