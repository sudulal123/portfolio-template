"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      animate={{ y: "0%" }}
      initial={{ y: "-200vh" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
        {/*PHOTO*/}
        <motion.div
          animate={{ x: -60 }}
          transition={{ ease: "easeOut", duration: 10 }}
          className="h-1/2 lg:h-full lg:w-1/2 relative rounded-lg drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]"
        >
          <Image src="/guy.png" alt="" fill className="object-contain" />
        </motion.div>

        {/*TEXT AREA*/}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/*TITLE*/}
          <h1 className="text-4xl md:text-6xl font-bold">
            <TypeAnimation
              sequence={[
                "Hallo",
                1000,
                "नमस्ते",
                1000,
                "Hello",
                1000,
                "你好",
                1000,
                "Ciao",
                1000,
                "こんにちは",
                1000,
                "Hola",
                1000,
                "Bonjour",
                1000,
              ]}
              repeat={Infinity}
            />
          </h1>

          {/*DESCRIPTION*/}
          <p className="md:text-xl animate-pulse">Welcome to my Portfolio</p>

          {/*GITHUB & LINKEDIN*/}
          <div className="lg:flex xl:w-1/3 xl:justify-center gap-2 rounded-lg overflow-hidden drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]">
            <Link href="https://github.com/" target="_blank">
              <Image src="/github.png" alt="" width={24} height={24} />
            </Link>
            <Link href="https://linkedin.com/" target="_blank">
              <Image src="/linkedin.png" alt="" width={24} height={24} />
            </Link>
          </div>

          {/*SOCIAL MEDIA*/}
          {/*           <div className="hidden lg:flex xl:w-1/3 xl:justify-center gap-8 rounded-lg overflow-hidden drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]">
            <Link href="https://github.com/" target="_blank">
              <Image src="/github.png" alt="" width={24} height={24} />
            </Link>
            <Link href="https://linkedin.com/" target="_blank">
              <Image src="/linkedin.png" alt="" width={24} height={24} />
            </Link>
            <Link href="https://instagram.com/" target="_blank">
              <Image src="/instagram.png" alt="" width={24} height={24} />
            </Link>
          </div> */}

          {/*TECH STACKS*/}
          <div className="lg:flex xl:w-full xl:justify-center gap-2 rounded-lg overflow-hidden drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]">
            Tech Stack |
            <Link
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              target="_blank"
            >
              <Image src="/html.png" alt="" width={24} height={24} />
            </Link>
            <Link
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              target="_blank"
            >
              <Image src="/css.png" alt="" width={24} height={24} />
            </Link>
            <Link
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
            >
              <Image src="/javascript.png" alt="" width={24} height={24} />
            </Link>
            <Link href="https://www.typescriptlang.org/docs/" target="_blank">
              <Image src="/typescript.png" alt="" width={24} height={24} />
            </Link>
            <Link
              href="https://legacy.reactjs.org/docs/getting-started.html"
              target="_blank"
            >
              <Image src="/react.png" alt="" width={24} height={24} />
            </Link>
            <Link href="https://nextjs.org/docs" target="_blank">
              <Image src="/nextJS.png" alt="" width={24} height={24} />
            </Link>
            <Link
              href="https://tailwindcss.com/docs/installation"
              target="_blank"
            >
              <Image src="/tailwindCSS.png" alt="" width={24} height={24} />
            </Link>
            <Link href="https://sass-lang.com/documentation/" target="_blank">
              <Image src="/sass.png" alt="" width={24} height={24} />
            </Link>
          </div>

          {/*Home Scroll SVG*/}
          <Link href="/about" scroll={false}>
            <div className="flex gap-4 w-full justify-center rounded-lg drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]">
              <motion.svg
                fill="none"
                width={50}
                height={50}
                strokeWidth="1"
                stroke="#000000"
                viewBox="0 0 24 24"
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: "10px" }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
              >
                <path d="M12 6V14" />
                <path d="M15 11L12 14L9 11" />
                <path d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z" />
              </motion.svg>
              <motion.div
                className="content-center"
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: "10px" }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
              >
                Click here!
              </motion.div>
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
