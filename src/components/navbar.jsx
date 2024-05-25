"use client";

import Link from "next/link";
import NavLink from "./navLink";
import { useState } from "react";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/projects", title: "Projects" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  {/*Hamburger Menu*/}
  const topLine = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const middleLine = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomLine = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  {/*MENU LISTS*/}
  const listMenu = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listMenuMotion = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="flex p-7 gap-12 justify-between items-center bg-gray-300 border-b-2 border-gray-400">
      {/*NAME*/}
      <div className="h-8 md:flex lg:flex xl:w-28 justify-left">
        <Link
          href="/"
          className="h-8 text-sm bg-gray-400 rounded-full border-4 border-color:inherit p-1 font-bold flex items-center justify-center overflow-hidden drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]"
        >
          <span className="text-black mr-1">Name</span>
          <span className="w-12 h-5 rounded-full bg-gray-600 text-white text-xs flex items-center justify-center">
            Sur
          </span>
        </Link>
      </div>

      {/*LINKS*/}
      <div className="hidden lg:flex gap-6 overflow-hidden text-lg font-semibold drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      {/*RESPONSIVE MENU*/}
      <div className="md:hidden">
        {/*MENU BUTTON*/}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={topLine}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={middleLine}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomLine}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>

        {/*MENU LISTS*/}
        {open && (
          <motion.div
            variants={listMenu}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((link) => (
              <motion.div
                variants={listMenuMotion}
                className=""
                key={link.title}
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
