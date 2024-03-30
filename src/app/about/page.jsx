"use client"

import {motion} from "framer-motion";

const AboutPage = () => {
    return (
        <motion.div 
            className="h-full" 
            initial={{y:"-200vh"}} 
            animate={{y:"0%"}} 
            transition={{duration:1}}
        >
            {/*AREA*/}
            <div className="">
                
                {/*TEXT AREA*/}
                <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
                    
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
                    <div className="">TIMELINE</div>
                </div>
                
                {/*SVG AREA*/}
                <div className="hidden">

                </div>
            </div>
        </motion.div>
    )
}

export default AboutPage;