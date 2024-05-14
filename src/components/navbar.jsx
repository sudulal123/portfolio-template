"use client";

import Link from "next/link";
import Image from "next/image";
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
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl gap-4">
      {/*NAME*/}
      <div className="md:hidden lg:flex xl:w-1/3 justify-center">
        <Link
          href="/"
          className="text-sm bg-white rounded-full border-4 border-color:inherit p-1 font-bold flex items-center justify-center overflow-hidden drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]"
        >
          <span className="text-black mr-1">Name</span>
          <span className="w-12 h-8 rounded-full bg-gray-600 text-white flex items-center justify-center">
            Sur
          </span>
        </Link>
      </div>

      {/*LINKS*/}
      <div className="hidden md:flex gap-2 xl:w-1/3 xl:justify-center rounded-lg overflow-hidden drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      {/*SOCIAL MEDIA*/}
      <div className="hidden lg:flex xl:w-1/3 xl:justify-center gap-8 rounded-lg overflow-hidden drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]">
        <Link href="https://github.com/" target="_blank">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href="https://linkedin.com/" target="_blank">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
        <Link href="https://instagram.com/" target="_blank">
          <Image src="/instagram.png" alt="" width={24} height={24} />
        </Link>
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
