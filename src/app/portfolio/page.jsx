"use client";

import Link from "next/link";
import { useRef } from "react";
import Image from "next/image";
import {motion, useScroll, useTransform} from "framer-motion";

const items = [
    {
        id: 1,
        color: "from-red-300 to-blue-300",
        title: "My Portfolio",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
        img: "",
        link: "https://github.com/sdulal123/portfolio",  
    },
    {
        id: 2,
        color: "from-blue-300 to-violet-300",
        title: "Your Portfolio",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
        img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        link: "https://github.com/sdulal123/portfolio",  
    },
    {
        id: 3,
        color: "from-violet-300 to-purple-300",
        title: "My Portfolio",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
        img: "",
        link: "https://github.com/sdulal123/portfolio",  
    },
    {
        id: 4,
        color: "from-purple-300 to-red-300",
        title: "My Portfolio",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
        img: "",
        link: "https://github.com/sdulal123/portfolio",  
    }
]

const PortfolioPage = () => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({target:ref});
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

    return (
        <motion.div 
            className="h-full" 
            initial={{y:"-200vh"}} 
            animate={{y:"0%"}} 
            transition={{duration:1}}
        >
            <div className="h-[600vh] relative" ref={ref}>
                <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
                    My Works
                </div>
                <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
                    <motion.div style={{x}} className="flex">
                        <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300"/>
                        {items.map((item) =>(
                            <div className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`} 
                            key={item.id}>
                                <div className="flex flex-col gap-8 text-white">
                                    <h1>{item.title}</h1>
                                    {/*Image Container*/}
                                    <div className="relative">
                                        <Image src={item.img} alt="" fill/>
                                    </div>
                                    {/*Description*/}
                                    <p>{item.desc}</p>
                                    {/*Link with Button*/}
                                    <Link href={item.link}>
                                        <button>Github</button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
};

export default PortfolioPage;