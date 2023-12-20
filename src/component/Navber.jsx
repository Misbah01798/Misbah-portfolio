
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/m.png'




const navLinks = <>
  <li><NavLink to='/about'>About</NavLink></li>
  <li><NavLink to='/projects'>Projects</NavLink></li>
  <li><NavLink to='/contact'>Contact</NavLink></li>
</>

const Navbar = () => {

  return (
    <nav className="fixed mx-auto border border-[#192871] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-30">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

              {navLinks}
            </ul>
          </div>
          <Link
            to="/"
            className="text-2xl md:text-5xl text-white font-bold"
          >
            <div className="w-16 rounded-full">
              <img src={logo} className="w-16 rounded-full" />
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-blue-50 text-2xl font-bold px-1">
            {navLinks}
          </ul>
        </div>
        <div className="avatar navber-end">
          <div className="w-24 rounded-full navbar-end">
            <img src='https://i.ibb.co/wpqbNyV/IMG-20201004-221932.jpg' />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;