import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-scroll';
import navLogo from '../images/nerv_logo.png';


export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="bg-transparent px-2 sm:px-4 py-2.5 fixed w-full z-10 top-0 left-0 shadow-sm">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className="flex justify-center items-center text-xl font-bold leading-relaxed mr-4 py-2 whitespace-nowrap uppercase text-black"
            href="#home"
          >
            <img src={navLogo} alt="logo" className="w-10 mr-5" />
            <span className="hidden md:block font-notoserifjp font-medium">エヴァンゲリオン</span>
          </a>
          <button
            className="text-black cursor-pointer text-2xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <AiOutlineMenu />
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto font-monserrat">
            <li className="nav-item">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={0} 
                duration={500}
                className="cursor-pointer px-3 py-2 flex items-center text-xs uppercase font-normal leading-snug text-black hover:opacity-75"
              >
                <span className="lg:ml-5">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="characters"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="cursor-pointer px-3 py-2 flex items-center text-xs uppercase font-normal leading-snug text-black hover:opacity-75"
              >
                <span className="lg:ml-5">Characters</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="staff"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="cursor-pointer px-3 py-2 flex items-center text-xs uppercase font-normal leading-snug text-black hover:opacity-75"
              >
                <span className="lg:ml-5">Staff</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="media"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="cursor-pointer px-3 py-2 flex items-center text-xs uppercase font-normal leading-snug text-black hover:opacity-75"
              >
                <span className="lg:ml-5">Media</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
