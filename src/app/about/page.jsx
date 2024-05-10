"use client";

import {useRef} from "react";
import Link from "next/link";
import Image from "next/image";
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
                        
                        {/* BIO IMAGE */}
                        <Image
                        src="/profile.jpg"
                        alt=""
                        width={150}
                        height={150}
                        className="w-28 h-28 rounded-full object-cover drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]"
                        />

                        {/*BIO TITLE*/}
                        <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
                        
                        {/*BIO DESCRIPTION*/}
                        <p className="text-lg">
                            My name is <b>Sushil</b>, frontend developer adept at crafting intuitive user interfaces with a keen eye for design and functionality.   
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
                            className="flex flex-wrap gap-6 rounded-lg drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]"
                            animate={isSkillRefInView ? {x:0} : {}} 
                        >
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-slate-100 hover:text-black">
                                Java
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-slate-100 hover:text-black">
                                JavaScript
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-slate-100 hover:text-black">
                                TypeScript
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-slate-100 hover:text-black">
                                React
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-slate-100 hover:text-black">
                                Next.js
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-slate-100 hover:text-black">
                                HTML5
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-slate-100 hover:text-black">
                                CSS
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-slate-100 hover:text-black">
                                Tailwind CSS
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
                                <div className="w-1/3 flex flex-wrap">
                                    {/*JOB TITLE*/}
                                    <div className="bg-slate-100 p-3 font-semibold rounded-b-lg rounded-s-lg drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]">
                                        Software Developer - Apprenticeship
                                        {/*JOB COMPANY*/}
                                        <div className="p-1 rounded text-xs text-amber-500 font-semibold w-fixed">
                                        4K Analytics GmbH, Leipzig
                                        </div>
                                    </div>
                                    {/*JOB DESCRIPTION*/}
                                    <div className="p-3 text-xs italic">
                                        - Software testing and quality assurance.<br/>
                                        - Analysis of functional and technical requirements.<br/>
                                        - Development in Java, JavaScript, TypeScript, HTML5 and CSS.
                                    </div>
                                    {/*JOB PERIOD*/}
                                    <div className="p3 text-orange-600 text-xs font-semibold"> 
                                        November.2020 - January.2024
                                    </div>

                                </div>
                                
                                {/*CENTER*/}
                                <div className="w-1/6 flex flex-wrap justify-center">
                                    {/*LINE*/}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/*CIRCLE*/}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-green-400 bg-gray-700 -left-2"></div>
                                    </div>
                                </div>
                                
                                {/*RIGHT*/}
                                <div className="w-1/3 flex flex-wrap"></div>
                            </div>
                            {/*TIMELINE LIST ITEM*/}
                            <div className="flex justify-between h-48">
                                
                                {/*LEFT*/}
                                <div className="w-1/3 flex flex-wrap"></div>
                                
                                {/*CENTER*/}
                                <div className="w-1/6 flex flex-wrap justify-center">
                                    {/*LINE*/}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/*CIRCLE*/}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-green-400 bg-gray-700 -left-2"></div>
                                    </div>
                                </div>
                                
                                {/*RIGHT*/}
                                <div className="w-1/3 flex flex-wrap">
                                    {/*DEGREE TITLE*/}
                                    <div className="bg-slate-100 p-3 font-semibold rounded-b-lg rounded-s-lg drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]">
                                        Global Business and Economics - B.Sc.
                                        {/*UNI NAME*/}
                                        <div className="p-1 rounded text-xs text-amber-500 font-semibold w-fixed">
                                        Fachhochschule Aachen, Aachen
                                        </div>
                                    </div>
                                    {/*JOB DESCRIPTION*/}
                                    <div className="p-3 text-xs italic">
                                        Specialisation: International Business
                                    </div>
                                    {/*JOB PERIOD*/}
                                    <div className="p3 text-orange-600 text-xs font-semibold"> 
                                        September.2017 - August.2020
                                    </div>
                                </div>
                            </div>
                            {/*TIMELINE LIST ITEM*/}
                            <div className="flex flex-wrap justify-between h-48">
                             
                                {/*LEFT*/}
                                <div className="w-1/3 flex flex-wrap">
                                    {/*JOB TITLE*/}
                                    <div className="bg-slate-100 p-3 font-semibold rounded-b-lg rounded-s-lg drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]">
                                        Studienkolleg
                                        <div className="p-1 rounded text-xs text-amber-500 font-semibold w-fixed">
                                            Fachhochschule Kiel, Kiel
                                        </div>
                                    </div>
                                    {/*JOB DESCRIPTION*/}
                                    <div className="p-3 text-xs italic">
                                        Subjects: Maths, Economic, Informatics, English & German
                                    </div>
                                    {/*JOB PERIOD*/}
                                    <div className="p3 text-orange-600 text-xs font-semibold"> 
                                        August.2014 - July.2015
                                    </div>
                                    {/*JOB COMPANY*/}
                                </div>
                                
                                {/*CENTER*/}
                                <div className="w-1/6 flex flex-wrap justify-center">
                                    {/*LINE*/}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/*CIRCLE*/}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-green-400 bg-gray-700 -left-2"></div>
                                    </div>
                                </div>
                                
                                {/*RIGHT*/}
                                <div className="w-1/3 flex flex-wrap"></div>
                            </div>
                        </motion.div>

                             {/*Home Scroll SVG*/}
                            <Link href="/projects" scroll={false}>
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
                                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                    >
                                    <path d="M12 6V14"/>
                                    <path d="M15 11L12 14L9 11"/>
                                    <path d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"/>
                                </motion.svg>
                                <motion.div
                                    className="content-center"
                                    initial={{ opacity: 0.2, y: 0 }}
                                    animate={{ opacity: 1, y: "10px" }}
                                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                >
                                    Click for more!
                                </motion.div>
                            </div>
                            </Link>
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