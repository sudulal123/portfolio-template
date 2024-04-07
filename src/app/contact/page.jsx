"use client";

import {motion} from "framer-motion";
import { useState } from "react";

const ContactPage = () => {

    const[error, setError] = useState(false)
    const[success, setSuccess] = useState(false)
    const text = "Hello there!"

    return (
        <motion.div 
            className="h-full" 
            initial={{y:"-200vh"}} 
            animate={{y:"0%"}} 
            transition={{duration:1}}
        >
            <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl_px-48">
                
                {/*TEXT AREA*/}
                <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
                    <div>
                        {text.split("").map((letter, index) => (
                        <motion.span 
                        key={index}
                        initial={{opacity:1}}
                        animate={{opacity:0}}
                        transition={{
                            duration: 3,
                            repeate: Infinity,
                            delay: index * 0.1,
                        }}
                        >
                            {letter}
                        </motion.span>
                    ))}
                    🧔
                    </div>
                </div>
                {/*FORM AREA*/}
                <form className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24">
                    <span>Dear Sushil Dulal,</span>
                    <textarea rows={6} className="bg-transparent border-b-2 border-b-black outline-none resize-none"/>
                    <span>My mail address is:</span>
                    <input type="text" className="bg-transparent border-b-2 border-b-black outline-none"/>
                    <span>Regards</span>
                    <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">Send</button>
                    {error && <span className="text-red-600 font-semibold">Something went wrong!</span>}
                    {success && <span className="text-green-600 font-semibold">Your message has been sent successfully!</span>}
                </form>
            </div>
        </motion.div>
    )
};

export default ContactPage;