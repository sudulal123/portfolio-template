"use client";

import Link from "next/link";
import { useRef } from "react";
import Image from "next/image";
import {motion, useScroll, useTransform} from "framer-motion";

const items = [
    {
        id: 1,
        color:  "from-slate-600 to-gray-700",
        title:  "Bishop-Blitz",
        desc:   "An online Chess game built with Angular, TypeScript with Stockfish API. It's in work-in-progress stage, however you can still play online.",
        img:    "/bishop_blitz.jpg",
        link:   "https://bishopblitz.netlify.app/",
    },
    {
        id: 2,
        color:  "from-slate-600 to-gray-700",
        title:  "Nike-clone",
        desc:   "Nike landing page clone, built with React and Tailwind CSS",
        img:    "/nike_clone.jpg",
        link:   "https://sushil-clone-nike-landing-page.netlify.app",  
    },
    {
        id: 3,
        color:  "from-slate-400 to-gray-500",
        title:  "Nile",
        desc:   "A single page E-commerce app built with Angular, TypeScript and integrated with Stripe payment",
        img:    "/nile_ecom.jpg",
        link:   "https://nile-rvr.netlify.app/",  
    },
]

const ProjectsPage = () => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({target:ref});
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    return (
        <motion.div 
            className="h-full" 
            initial={{y:"-200vh"}} 
            animate={{y:"0%"}} 
            transition={{duration:1}}
        >
            <div className="h-[600vh] relative" ref={ref}>
                <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
                    My Projects
                </div>
                <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
                    <motion.div style={{x}} className="flex">
                        <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r slate-50 to-gray-100"/>
                        {items.map((item) =>(
                            <div className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`} 
                            key={item.id}>
                                <div className="flex flex-col gap-8 text-white">
                                    <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">{item.title}</h1>
                                    {/*Image Container*/}
                                    <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px] rounded-lg overflow-hidden drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]">
                                        <Image priority src={item.img} alt="" fill />
                                    </div>
                                    {/*Description*/}
                                    <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">{item.desc}</p>
                                    {/*Link with Button*/}
                                    <Link href={item.link} className="flex justify-end" target="_blank">
                                        < button className="p-2 text-sm md:p-4 md:text-md lg:text-lg bg-white text-gray-600 font-semibold rounded-lg overflow-hidden drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]">Visit website</button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
            {/*THANK YOU SECTION*/}
            <div className=" w-screen h-screen flex flex-col gap-16 items-center justify-center text-top">
                <h1 className="text-8xl">
                    Thank you for your visit!
                </h1>
                <div className="relative px-8 flex gap-4 w-full grid justify-center rounded-lg drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]">
                    <Link href="/contact">
                        <svg width="167.707" height="167.707">
                            <path  
                                fill="222221" 
                                d="M154.799,140.863H12.909C5.791,140.863,0,135.072,0,127.954V39.753c0-7.118,5.791-12.909,12.909-12.909h141.89c7.117,0,12.908,5.791,12.908,12.909v88.201C167.707,135.072,161.916,140.863,154.799,140.863z M7.013,133.22c1.449,1.621,3.556,2.644,5.896,2.644h141.89c2.324,0,4.416-1.008,5.864-2.608L97.388,86.822l-12.068,8.809c-0.876,0.64-2.065,0.641-2.943,0.003l-12.133-8.814L7.013,133.22zM101.624,83.729l61.062,44.808c0.015-0.192,0.021-0.387,0.021-0.583V39.753c0-0.199-0.008-0.397-0.022-0.593L101.624,83.729zM5.007,39.427C5.002,39.535,5,39.644,5,39.753v88.201c0,0.178,0.006,0.354,0.018,0.527l60.979-44.747L5.007,39.427z M6.896,34.619l76.945,55.899l76.817-56.07c-1.448-1.599-3.539-2.604-5.86-2.604H12.909C10.505,31.844,8.349,32.922,6.896,34.619z"/>
                            </svg>
                    </Link>
                </div>
            </div>
        </motion.div>
    )
};

export default ProjectsPage;