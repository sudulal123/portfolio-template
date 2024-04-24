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
        className="h-1/2 lg:h-full lg:w-1/2 relative">
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
          <div className="flex gap-4 w-full justify-center">
              <Link href="/about">
                <motion.button  
                  className="p-4 rounded-lg ring-1 ring-black bg-gradient-to-b from-slate-400 to-stone-500 text-white"
                  
                  whileHover={{ 
                    scale: [1.1, 1],    
                }}
                transition={{
                    type: "spring", stiffness: 400, damping: 10 
                }}
                >
                  Let's dive in
                </motion.button>
              </Link>
          </div>
        </div>
    </div>
  </motion.div>
  )
};

export default Homepage;