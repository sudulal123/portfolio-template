"use client";

import {useRef} from "react";
import Link from "next/link";
import SideAnimations from "@/components/sideAnimations";
import { motion, useInView, useScroll } from "framer-motion";

const AboutPage = () => {
    
    const containerRef = useRef();

    const { scrollYProgress } = useScroll({ container: containerRef });

    const skillRef = useRef();

    const isSkillRefInView = useInView (skillRef, {margin:"-100px"}, {once: true})

    const timelineRef = useRef();

    const isTimelineRefInView = useInView (timelineRef, {margin:"-100px"}, {once: true})

    return (
        <motion.div 
            className="h-full" 
            initial={{y:"-200vh"}} 
            animate={{y:"0%"}} 
            transition={{duration:1}}
        >
            {/*AREA*/}
            <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
                
                {/*TEXT AREA*/}
                <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
                    
                    {/*BIO AREA*/}
                    <div className="flex flex-col gap-12 justify-center">
                        
                        {/*BIO TITLE*/}
                        <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
                        
                        {/*BIO DESCRIPTION*/}
                        <p className="text-lg">
                            I am <b>Sushil</b>, passionate about crafting intuitive user experiences through clean and efficient code and dedicated to continuous learning and eager to contribute creative solutions to web development projects.
                        </p>
                        
                        {/*BIO QUOTE*/}
                        <span className="italic">
                            'A diamond is just a lump of coal that did well under pressure.' - Unknown
                        </span>
                    
                    {/*BIO SCROLL SVG*/}
                    <motion.svg
                        initial={{ opacity: 0.2, y: 0 }}
                        animate={{ opacity: 1, y: "10px" }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width={50}
                        height={50}
                        strokeWidth="1"
                        stroke="#000000"
                    >
                        <path d="M12 6V14"/>
                        <path d="M15 11L12 14L9 11"/>
                        <path d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"/>
                    </motion.svg>
                    </div>
                
                    {/*SKILLS AREA*/}
                    <div className="flex flex-col gap-12 justify-center" ref={skillRef}>

                        {/*SKILLS TITLE*/}
                        <motion.h1 
                            initial={{x:"-300px"}} 
                            animate={isSkillRefInView ? {x:0} : {}} 
                            transition={{delay:0.2}} 
                            className="font-bold text-2xl"
                        >
                            SKILLS
                        </motion.h1>
                        
                        {/*SKILLS LIST*/}
                        <motion.div 
                            initial={{x:"-300px"}} 
                            className="flex gap-4 flex-wrap"
                            animate={isSkillRefInView ? {x:0} : {}} 
                        >
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Java
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                JavaScript
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                React.js
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Next.js
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Three.js
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
                        </motion.div>
                        
                        {/*SKILLS SCROLL SVG*/}
                        <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: "10px" }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                            strokeWidth="1"
                            stroke="#000000"
                        >
                        <path d="M12 6V14"/>
                        <path d="M15 11L12 14L9 11"/>
                        <path d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"/>
                    </motion.svg>
                    </div>
                    
                    {/*TIMELINE AREA*/}
                    <div className="flex flex-col gap-12 justify-center pb-48" ref={timelineRef}>

                        {/*TIMELINE TITLE*/}
                        <motion.h1 
                            initial={{x:"-300px"}} 
                            animate={isTimelineRefInView ? {x:0} : {}}
                            transition={{ delay: 0.2 }}
                            className="font-bold text-2xl"
                        >
                            TIMELINE
                        </motion.h1>

                        {/*TIMELINE LIST*/}
                        <motion.div 
                            initial={{x:"-300px"}} 
                            animate={isTimelineRefInView ? {x:0} : {}}
                            className="">
                            
                            {/*TIMELINE LIST ITEM*/}
                            <div className="flex justify-between h-48">
                                
                                {/*LEFT*/}
                                <div className="w-1/3">
                                    {/*JOB TITLE*/}
                                    <div className="bg-white p-3 font-semibold text-lg rounded-b-lg rounded-s-lg">
                                        Software Developer - Apprenticeship
                                        {/*JOB COMPANY*/}
                                        <div className="p-1 rounded bg-white text-xs font-semibold w-fixed">
                                        4K Analytics GmbH, Leipzig
                                        </div>
                                    </div>
                                    {/*JOB DESCRIPTION*/}
                                    <div className="p-3 text-xs italic">
                                        - Software testing and quality assurance.<br/>
                                        - Analysis of functional and technical requirements.<br/>
                                        - Development in Java, Angular Framework, TypeScript, HTML5 and CSS.
                                    </div>
                                    {/*JOB PERIOD*/}
                                    <div className="p3 text-red-400 text-xs font-semibold"> 
                                        November.2020 - January.2024
                                    </div>

                                </div>
                                
                                {/*CENTER*/}
                                <div className="w-1/6 flex justify-center">
                                    {/*LINE*/}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/*CIRCLE*/}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-green-400 bg-gray-700 -left-2"></div>
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
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-green-400 bg-gray-700 -left-2"></div>
                                    </div>
                                </div>
                                
                                {/*RIGHT*/}
                                <div className="w-1/3">
                                    {/*DEGREE TITLE*/}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        Global Business and Economics - B.Sc.
                                        {/*UNI NAME*/}
                                        <div className="p-1 rounded bg-white text-xs font-semibold w-fixed">
                                        Fachhochschule Aachen, Aachen
                                        </div>
                                    </div>
                                    {/*JOB DESCRIPTION*/}
                                    <div className="p-3 text-xs italic">
                                        Specialisation: International Business
                                    </div>
                                    {/*JOB PERIOD*/}
                                    <div className="p3 text-red-400 text-xs font-semibold"> 
                                        September.2017 - August.2020
                                    </div>
                                </div>
                            </div>
                            {/*TIMELINE LIST ITEM*/}
                            <div className="flex justify-between h-48">
                             
                                {/*LEFT*/}
                                <div className="w-1/3">
                                    {/*JOB TITLE*/}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        Studienkolleg
                                        <div className="p-1 rounded bg-white text-xs font-semibold w-fixed">
                                            Fachhochschule Kiel, Kiel
                                        </div>
                                    </div>
                                    {/*JOB DESCRIPTION*/}
                                    <div className="p-3 text-xs italic">
                                        Subjects: Maths, Economic, Informatics, English & German
                                    </div>
                                    {/*JOB PERIOD*/}
                                    <div className="p3 text-red-400 text-xs font-semibold"> 
                                        August.2014 - July.2015
                                    </div>
                                    {/*JOB COMPANY*/}
                                </div>
                                
                                {/*CENTER*/}
                                <div className="w-1/6 flex justify-center">
                                    {/*LINE*/}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/*CIRCLE*/}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-green-400 bg-gray-700 -left-2"></div>
                                    </div>
                                </div>
                                
                                {/*RIGHT*/}
                                <div className="w-1/3"></div>
                            </div>
                        </motion.div>

                            {/*BUTTONS*/}
                            <div className="flex gap-4 w-full grid justify-items-end">
                                <Link href="/portfolio">
                                    <motion.button 
                                    className="p-4 rounded-lg ring-1 ring-black bg-gradient-to-b from-slate-400 to-stone-500 text-white"
                                    
                                    whileHover={{ 
                                        scale: [1.1, 1],
                                          
                                    }}
                                    transition={{
                                        type: "spring", stiffness: 400, damping: 10 
                                    }}
                                    >
                                        We're almost there!
                                    </motion.button>
                                </Link>
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