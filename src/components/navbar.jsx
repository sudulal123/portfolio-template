"use client"

import Link from "next/link";
import Image from "next/image";
import {useState} from "react";
import NavLink from "./navLink";
import {motion} from "framer-motion";

const links = [
    {url: "/", title: "Home"},
    {url: "/about", title: "About"},
    {url: "/portfolio", title: "Portfolio"},
    {url: "/contact", title: "Contact"},
];

const Navbar = () => {
    const [open, setOpen] = useState(false)

    {/*Hamburger Menu*/}
    const topLine= {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: 45,
            backgroundColor: "rgb(255,255,255)"
        }
    }
    const middleLine= {
        closed: {
            opacity: 1,
        },
        opened: {
            opacity: 0,
        }
    }
    const bottomLine= {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: -45,
            backgroundColor: "rgb(255,255,255)"
        }
    }

    {/*MENU LISTS*/}
    const listMenu= {
        closed: {
            x: "100vw",
        },
        opened: {
            x: 0,
            transition: {
                when: "beforeChildren",
               staggerChildren: 0.2, 
            }
        }
    }

    const listMenuMotion= {
        closed: {
            x: -10,
            opacity: 0,
        },
        opened: {
            x: 0,
            opacity: 1,
        } 
    }

    return (
        <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'> 
            
            {/*LINKS*/}
            <div className="hidden md:flex gap-4 w-1/3">
                {links.map((link)=>(
                    <NavLink link={link} key={link.title}/>
                ))}
            </div>     
            
            {/*NAME*/}
            <div className='md:hidden lg:flex xl:w-1/3 xl:justify-center'>
                <Link href="/" className="text-sm bg-black rounded-md p-1 font-bold flex items-center justify-center">
                    <span className="text-white mr-1">Sushil</span>
                    <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">Dulal</span>
                </Link>
            </div>        
            
            {/*SOCIAL MEDIA*/}
            <div className="hidden md:flex gap-4 w-1/3">
               <Link href="https://github.com/sdulal123">
               <Image src="/github.png" alt="" width={24} height={24}/>
               </Link>
               <Link href="https://linkedin.com/in/sushildulal123/">
               <Image src="/linkedin.png" alt="" width={24} height={24}/>
               </Link>
               <Link href="https://instagram.com/sdstudio420/">
               <Image src="/instagram.png" alt="" width={24} height={24}/>
               </Link> 
            </div>        
            
            {/*RESPONSIVE MENU*/}
            <div className="md:hidden">           
                
                {/*MENU BUTTON*/}
                <button className="w-10 h-8 flex flex-col justify-between z-50 relative" 
                        onClick={(()=>setOpen(!open))}>
                    <motion.div 
                        variants={topLine} 
                        animate={open ? "opened" : "closed"} 
                        className='w-10 h-1 bg-black rounded origin-left'>
                    </motion.div>                 
                    <motion.div 
                        variants={middleLine} 
                        animate={open ? "opened" : "closed"} 
                        className='w-10 h-1 bg-black rounded'>
                    </motion.div>                 
                    <motion.div 
                        variants={bottomLine} 
                        animate={open ? "opened" : "closed"} 
                        className='w-10 h-1 bg-black rounded origin-left'>
                    </motion.div>
                </button>
                
                {/*MENU LISTS*/}
                {open && (
                <motion.div 
                    variants= {listMenu} 
                    initial="closed" 
                    animate="opened" 
                    className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40">
                    {links.map(link=>(
                        <motion.div 
                            variants={listMenuMotion} 
                            className="" key={link.title}>
                                <Link href={link.url}>
                                    {link.title}
                                </Link>
                        </motion.div>
                    ))}
                </motion.div>
                )}
            </div>
        </div>
    );
};

export default Navbar;