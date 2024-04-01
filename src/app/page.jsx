"use client";

import Image from "next/image";
import {motion} from "framer-motion";

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
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/guy.png" alt="" fill className="object-contain"/>
        </div>
        
        {/*TEXT AREA*/}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          
          {/*TITLE*/}
          <h1 className="text-4xl md:text-6xl font-bold">Welcome to my Portfolio</h1>
          
          {/*DESCRIPTION*/}
          <p className="md:text-xl">Here you will find diverse collection of projects. Thank you very much for visiting.</p>
          
          {/*BUTTONS*/}
          <div className="flex gap-4 w-full">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View My Work</button>
            <button className="p-4 rounded-lg ring-1 ring-black">Contact</button>
          </div>
        </div>
    </div>
  </motion.div>
  )
};

export default Homepage;