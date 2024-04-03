"use client";

import {useRef} from "react";
import { motion, useScroll } from "framer-motion";
import SideAnimations from "@/components/sideAnimations";

const AboutPage = () => {
    const containerRef = useRef();

    const {scrollYProgress} = useScroll ({ container:containerRef });

    return (
        <motion.div 
            className="h-full" 
            initial={{y:"-200vh"}} 
            animate={{y:"0%"}} 
            transition={{duration:1}}
        >
            {/*AREA*/}
            <div className="h-full overflow-scroll lg:flex ref={containerRef}">
                
                {/*TEXT AREA*/}
                <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
                    
                    {/*BIO AREA*/}
                    <div className="flex flex-col gap-12 justify-center">
                        <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
                        <p className="text-lg">BBBBBBBBwwwwwwwwwwwwkdksdfsgdfgdfg
                           sdfsdfssdfsdfsdfsdffsddddddsdfsdfs 
                        </p>
                        <span className="italic">
                            lol lol lol lol lol lol 
                        </span>
                    </div>
                    {/*BIO SCROLL SVG*/}
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width={50}
                        height={50}
                    >
                        <path
                            d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                            stroke="#000000" strokeWidth="1"
                        ></path>
                        <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                        <path
                            d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"
                        ></path>
                    </svg>
                
                    {/*SKILLS AREA*/}
                    <div className="flex flex-col gap-12 justify-center">
                        <h1 className="font-bold text-2xl">SKILLS</h1>
                        
                        {/*SKILLS LIST*/}
                        <div className="flex gap-4 flex-wrap">
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Java
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                JavaScript
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                TypeScript
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                React.js
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Next.js
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Angular
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Three.js
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Node.js
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                SCSS
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Tailwind CSS
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Framer Motion
                            </div>
                        </div>
                        
                        {/*SKILLS SCROLL SVG*/}
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                        >
                        <path
                            d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                            stroke="#000000" strokeWidth="1"
                        ></path>
                        <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                        <path
                            d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"
                        ></path>
                    </svg>
                    </div>
                    
                    {/*TIMELINE AREA*/}
                    <div className="flex flex-col gap-12 justify-center pb-48">
                        <h1 className="font-bold text-2xl">TIMELINE</h1>

                        {/*TIMELINE LIST*/}
                        <div className="">
                            {/*TIMELINE LIST ITEM*/}
                            <div className="flex justify-between h-48">
                                
                                {/*LEFT*/}
                                <div className="w-1/3">
                                    {/*JOB TITLE*/}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        Apprenticeship - Software 
                                    </div>
                                    {/*JOB DESCRIPTION*/}
                                    <div className="p-3 text-sm italic">
                                        Beep Boop Beep Boop Beep Boop
                                    </div>
                                    {/*JOB PERIOD*/}
                                    <div className="p3 text-red-400 text-sm font-semibold"> 
                                        2020 - 2024
                                    </div>
                                    {/*JOB COMPANY*/}
                                    <div className="p-1 rounded bg-white text-sm font-semibold w-fixed">
                                        4K Analytics GmbH, Leipzig
                                    </div>
                                </div>
                                
                                {/*CENTER*/}
                                <div className="w-1/6 flex justify-center">
                                    {/*LINE*/}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/*CIRCLE*/}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                
                                {/*RIGHT*/}
                                <div className="w-1/3"></div>
                            </div>
                            {/*TIMELINE LIST ITEM*/}
                            <div className="flex justify-between h-48">
                                
                                {/*LEFT*/}
                                <div className="w-1/3"></div>
                                
                                {/*CENTER*/}
                                <div className="w-1/6 flex justify-center">
                                    {/*LINE*/}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/*CIRCLE*/}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                
                                {/*RIGHT*/}
                                <div className="w-1/3">
                                    {/*JOB TITLE*/}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        Apprenticeship - Software 
                                    </div>
                                    {/*JOB DESCRIPTION*/}
                                    <div className="p-3 text-sm italic">
                                        Beep Boop Beep Boop Beep Boop
                                    </div>
                                    {/*JOB PERIOD*/}
                                    <div className="p3 text-red-400 text-sm font-semibold"> 
                                        2020 - 2024
                                    </div>
                                    {/*JOB COMPANY*/}
                                    <div className="p-1 rounded bg-white text-sm font-semibold w-fixed">
                                        4K Analytics GmbH, Leipzig
                                    </div>
                                </div>
                            </div>
                            {/*TIMELINE LIST ITEM*/}
                            <div className="flex justify-between h-48">
                             
                                {/*LEFT*/}
                                <div className="w-1/3">
                                    {/*JOB TITLE*/}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        Apprenticeship - Software 
                                    </div>
                                    {/*JOB DESCRIPTION*/}
                                    <div className="p-3 text-sm italic">
                                        Beep Boop Beep Boop Beep Boop
                                    </div>
                                    {/*JOB PERIOD*/}
                                    <div className="p3 text-red-400 text-sm font-semibold"> 
                                        2020 - 2024
                                    </div>
                                    {/*JOB COMPANY*/}
                                    <div className="p-1 rounded bg-white text-sm font-semibold w-fixed">
                                        4K Analytics GmbH, Leipzig
                                    </div>
                                </div>
                                
                                {/*CENTER*/}
                                <div className="w-1/6 flex justify-center">
                                    {/*LINE*/}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/*CIRCLE*/}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                
                                {/*RIGHT*/}
                                <div className="w-1/3"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*SVG AREA*/}
                <div className="hidden lg:block w-2/3 sticky top-0 z-30 xl:w-1/2">
                    <SideAnimations scrollYProgress={scrollYProgress}/>
                </div>
            </div>
        </motion.div>
    )
};

export default AboutPage;