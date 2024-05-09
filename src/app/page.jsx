"use client";

import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

const Homepage = () => {
  return (
    <motion.div 
      className="h-full" 
      initial={{y:"-200vh"}} 
      animate={{y:"0%"}} 
      transition={{duration:1}}
      >    
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
        
        {/*PHOTO*/}
        <motion.div 
        animate={{ x: -60 }}
        transition={{ ease: "easeOut", duration: 2 }}
        className="h-1/2 lg:h-full lg:w-1/2 relative rounded-lg drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]">
          <Image src="/guy.png" alt="" fill className="object-contain"/>
        </motion.div>
        
        {/*TEXT AREA*/}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          
          {/*TITLE*/}
          <h1 className="text-4xl md:text-6xl font-bold">
            <TypeAnimation
              sequence={[
                'Hallo', 1000, 'नमस्ते', 1000, 'Hello', 1000, '你好', 1000, 'Ciao', 1000, 'こんにちは', 1000, 'Hola', 1000, 'Bonjour', 1000]}
              repeat={Infinity}
            />
          </h1>

          {/*DESCRIPTION*/}
          <p className="md:text-xl">
            <TypeAnimation
              sequence={[
                "Welcome to my Portfolio", 20000]}
                speed={{ type: 'keyStrokeDelayInMs', value: 100 }}
                deletionSpeed={{ type: 'keyStrokeDelayInMs', value: 100 }}
              />
            </p>
          
          {/*BUTTONS*/}
          <div className="flex gap-4 w-full justify-center rounded-lg drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]">
              <motion.svg
                  initial={{ opacity: 0.2, y: 0 }}
                  animate={{ opacity: 1, y: "10px" }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  viewBox="0 0 24 24"
                  fill="none"
                  width={50}
                  height={50}
                  strokeWidth="1"
                  stroke="#000000"
                >
                <path d="M12 6V14"/>
                <path d="M15 11L12 14L9 11"/>
                <path d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"/>
              </motion.svg>
              <motion.div
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: "10px" }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                Scroll down
              </motion.div>
          </div>
        </div>
    </div>
  </motion.div>
  )
};

export default Homepage;