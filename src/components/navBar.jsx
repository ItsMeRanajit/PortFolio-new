"use client";
import { useState } from "react";
import Link from "next/link";
import { CgMenuCheese } from "react-icons/cg";
import { LuCross } from "react-icons/lu";
import { motion } from "motion/react";

const navLinks = [
  { title: "Home", path: "#home" },
  { title: "About Me", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Skills", path: "#skills" },
];
const NavBar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };

  return (
    <header className="absolute w-full top-0 left-0 z-[9999]">
      <nav className="relative hidden md:block ">
        <ul className="flex items-center lg:text-Newmd text-sm justify-center gap-5 mt-6 mr-2 font-bold lg:mr-10 md:mr-7 sm:mr-4 lg:gap-14 md:gap-9 font-fontLogo opacity-80">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.path} className="group">
                <h1>{link.title}</h1>
                <div className="relative">
                  <div className="absolute w-2/3 h-1 transition-all duration-350 ease-in bg-orange-600 rounded-full group-hover:w-full"></div>
                  <div className=" mt-1 absolute w-1/3 h-1 transition-all duration-300 ease-in bg-orange-800 rounded-full group-hover:w-full"></div>
                </div>
              </Link>
            </li>
          ))}
          <li>
            <Link href="#contact" className="group">
              <h1>Contact Me</h1>
              <div className="relative">
                <div className="absolute w-2/3 h-1 transition-all duration-350 ease-in bg-orange-600 rounded-full group-hover:w-full"></div>
                <div className=" mt-1 absolute w-1/3 h-1 transition-all duration-300 ease-in bg-orange-800 rounded-full group-hover:w-full"></div>
              </div>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="md:hidden w-full text-center text-sm font-fontLogo text-orange-900 mt-4">🛈 For a better experience, please switch to a desktop or laptop.</div>
      <div onClick={toggleNav} className="md:hidden absolute top-5 right-5 rounded z-30">
        {nav ? <LuCross size={25} className=" rotate-45" /> : <CgMenuCheese size={25} />}
      </div>

      <motion.div initial={false} animate={nav ? "open" : "closed"} variants={menuVariants} className="fixed left-0 top-0 w-full z-20 bg-white">
        <ul className="text-4xl font-fontLogo2 my-24 text-center space-y-8">
          {navLinks.map((link, index) => (
            <li key={index} className="flex justify-center">
              <Link href={link.path} onClick={closeNav} className="group">
                {link.title}
                <div className="h-1 transition-all duration-350 ease-in bg-orange-600 rounded-full w-full"></div>
                <div className="w-1/2 h-1 transition-all duration-300 ease-in bg-orange-800 rounded-full"></div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="w-full h-8 bg-gradient-to-b absolute from-white to-transparent"></div>
      </motion.div>
    </header>
  );
};

export default NavBar;
