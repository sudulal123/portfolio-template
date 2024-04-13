"use client";

import {motion} from "framer-motion";
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";

const ContactPage = () => {

        const text = "Hello there!";
        const[error, setError] = useState(false);
        const[success, setSuccess] = useState(false);

        const form = useRef();

        const sendEmail = (e) => {
            e.preventDefault();
            setError(false);
            setSuccess(false);

        emailjs
        .sendForm(
            process.env.NEXT_PUBLIC_SERVICE_ID, 
            process.env.NEXT_PUBLIC_TEMPLATE_ID, 
            form.current,
            process.env.NEXT_PUBLIC_PUBLIC_KEY
        )
        .then(
            () => {
            setSuccess(true);
            form.current.reset();
            },
            () => {
            setError(true);
            }
        );
    };

    return (
        <motion.div 
            className="h-full" 
            initial={{y:"-200vh"}} 
            animate={{y:"0%"}} 
            transition={{duration:1}}
        >
            <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
                
                {/*TEXT AREA*/}
                <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
                    🧔
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
                    
                    </div>
                </div>
                {/*FORM AREA*/}
                <form 
                    onSubmit={sendEmail}
                    ref={form}
                    className="h-1/2 lg:h-full lg:w-1/2 bg-gray-300 rounded-xl text-xl flex flex-col gap-8 outline-none justify-center p-24"
                >
                    <span>Dear Sushil,</span>
                    <textarea 
                        rows={6}  
                        required
                        name="user_message"
                        className="bg-transparent border-b-2 border-b-black outline-none resize-none"
                        placeholder="I went to buy some camo pants but couldn’t find any. 🤣"
                        />
                    <span>Email address:</span>
                    <input 
                        type="text"
                        name="user_email"
                        className="bg-transparent border-b-2 border-b-black outline-none"/>
                    <span>Best Regards</span>
                    <motion.button className="bg-slate-400 rounded font-semibold text-gray-600 p-4"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9}}>
                        Send
                    </motion.button>
                        {error && (
                            <span className="text-red-600 font-semibold">
                                Oops! Something went wrong!
                            </span>
                        )}
                        {success && ( 
                            <span className="text-green-600 font-semibold">
                             Your message has been sent successfully!
                            </span>
                        )}
                </form>
            </div>
        </motion.div>
    )
};

export default ContactPage;