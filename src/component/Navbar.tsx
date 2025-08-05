"use client"
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion"


const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menu,setMenu]=useState(false)
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    const [show,setShow]=useState(0)
    return (
        <>
            <motion.nav className="w-full  p-4 flex justify-center items-center fixed top-0 z-1000 text-white"
                initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
                animate={{ backgroundColor: scrolled ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0)" }}
                transition={{ duration: 0.3 }}
            >
                <div className="w-[97%] flex justify-between items-center">

                    <Image src="/logo.svg" alt="logo" width={50} height={50} />
                    <div className="flex gap-4 items-center p-2 ">
                        <div className="flex gap-4 max-md:hidden">
                            <Link href="">Service</Link>
                            <Link href="">Use Cases</Link>
                            <Link href="">Platform</Link>
                            <Link href="">Request a Quote</Link>
                        </div>
                        <div className="p-1 border-1 border-zinc-400">
                            <Image src="/flag.png" height={20} width={30} alt="india flag"></Image>
                        </div>

                        <div className="rounded-full border-1 border-zinc-400 p-1" onClick={()=>setMenu(true)}>
                            <IoMenu className="h-8 w-8" />
                        </div>
                    </div>
                </div>
            </motion.nav>
            <AnimatePresence>
            <motion.div className="max-md:hidden bg-[#1a232a] w-full p-12 pt-16 flex flex-col items-center justify-center h-screen fixed"
            initial={{opacity:0,zIndex:"-100"}}
            animate={{opacity:menu?1:0,zIndex:menu?"2000":"-100"}}
            exit={{opacity:0}}
            transition={{duration:0.3,ease:"linear"}}
            >
                <div className='text-white font-extrabold text-xl absolute right-10 top-10 cursor-pointer '
                onClick={()=>setMenu(false)}
                >X</div>
                <div className="w-full flex justify-around flex-wrap">
              
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
                        <ul className="space-y-1 text-gray-200">
                            
                            <li>Event Management</li>
                            <li>Voting Pads On Hire</li>
                            <li>Video Production</li>
                            <li>Web Portal Creation</li>
                            <li>Medical Transcription</li>
                            <li>Webcast Receiving</li>
                        </ul>
                    </div>
                 
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Use Cases</h3>
                        <ul className="space-y-1 text-gray-200">
                            <li>Online (CMEs)</li>
                            <li>Webinars</li>
                            <li>Virtual Advisory Boards</li>
                            <li>Town Hall Webcasts</li>
                            <li>Live Surgery Events</li>
                            <li>Live CEO Address</li>
                            <li>KOL Webinars</li>
                            <li>Expert Symposiums & ISP</li>
                            <li>Investor Relations</li>
                            <li>AGM</li>
                            <li>Product Launch</li>
                            <li>Training Webcasts</li>
                        </ul>
                    </div>
                 
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
                        <ul className="space-y-1 text-gray-200 mb-4">
                            <li>Clients</li>
                            <li>Testimonials</li>
                            <li>Contact Us</li>
                            <li>Awards & Recognitions</li>
                            <li>Blogs</li>
                        </ul>
                   
                        <div className="flex items-center space-x-2">
                            <div className="border border-gray-600 rounded-md bg-[#162027] flex items-center px-2 py-1">
                                <span className="w-6 h-6 inline-block mr-2">
                                    <img src="https://flagcdn.com/w20/in.png" alt="India flag" className="w-5 h-5 rounded" />
                                </span>
                                <select className="bg-transparent text-white focus:outline-none">
                                    <option value="in">India</option>
                                  
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className="flex space-x-6 mt-20">
                    <a href="#" aria-label="YouTube" className="hover:text-white text-gray-300">
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.5 15.6V8.4L15.8 12 9.5 15.6z" />
                        </svg>
                    </a>
                    <a href="#" aria-label="YouTube" className="hover:text-white text-gray-300">
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.5 15.6V8.4L15.8 12 9.5 15.6z" />
                        </svg>
                    </a>
                    <a href="#" aria-label="LinkedIn" className="hover:text-white text-gray-300">
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67h-3.56V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45zM5.34 7.43a2.06 2.06 0 11.001-4.12A2.06 2.06 0 015.34 7.43zm1.78 13.02H3.56V9h3.56zm15.56-20.45H1.77A1.77 1.77 0 000 1.77v20.45A1.77 1.77 0 001.77 24h20.45A1.78 1.78 0 0024 22.23V1.77A1.76 1.76 0 0022.23 0z" />
                        </svg>
                    </a>
                    <a href="#" aria-label="Twitter" className="hover:text-white text-gray-300">
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.954 4.57a10.002 10.002 0 01-2.825.775 4.925 4.925 0 002.163-2.724c-.951.555-2.005.956-3.127 1.175a4.92 4.92 0 00-8.385 4.482c-4.088-.205-7.713-2.162-10.141-5.144A4.822 4.822 0 002.23 6.575c0 1.7.87 3.202 2.188 4.084a4.904 4.904 0 01-2.225-.614v.06a4.93 4.93 0 003.95 4.827 4.996 4.996 0 01-2.212.084c.627 1.956 2.444 3.377 4.604 3.418A9.867 9.867 0 012 19.045c.36 0 .712-.021 1.06-.062A13.978 13.978 0 0012 22c8.437 0 13.039-7.002 13.039-13.067l-.015-.594A9.431 9.431 0 0024 4.59z" />
                        </svg>
                    </a>
                </div>
            </motion.div>
            </AnimatePresence>

             <AnimatePresence>
                <motion.div className="md:hidden bg-[#1a232a] w-full p-12 pt-16 flex flex-col items-center justify-center h-screen fixed"
                    initial={{ opacity: 0, zIndex: "-100" }}
                    animate={{ opacity: menu ? 1 : 0, zIndex: menu ? "2000" : "-100" }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "linear" }}
                >
                    <div className='text-white font-extrabold text-xl absolute right-10 top-10 cursor-pointer '
                        onClick={() => setMenu(false)}
                    >X</div>
                    <div className="w-full flex justify-around  max-md:flex-col">

                        <div>
                            <h3 className="text-white text-lg font-semibold mb-4 w-full flex justify-between gap-4">
                                <p>Services</p>
                                <p onClick={() => setShow(show === 1 ? 0 : 1)}>{show === 1 ? "-" : "+"}</p>
                            </h3>
                            {show === 1 && <motion.ul className="space-y-1 text-gray-200 flex flex-col max-md:flex-row justify-between"
                            initial={{opacity:0}}
                            animate={{opacity:1}}
                            transition={{duration:0.3}}
                            >
                                <div>
                                    <li>Webcasting</li>
                                    <li>Video Conferencing</li>
                                    <li>3D Virtual Platform</li>
                                    <li>Managed Webinars</li>
                                    <li>Multilingual Webcasts</li>
                                    <li>HYBRID Events</li>
                                </div>
                                <div>
                                    <li>Event Management</li>
                                    <li>Voting Pads On Hire</li>
                                    <li>Video Production</li>
                                    <li>Web Portal Creation</li>
                                    <li>Medical Transcription</li>
                                    <li>Webcast Receiving</li>
                                </div>
                            </motion.ul>}
                        </div>

                        <div>
                            <h3 className="text-white text-lg font-semibold mb-4 w-full flex justify-between gap-4">
                                <p>Use Case</p>
                                <p onClick={() => setShow(show === 2 ? 0 : 2)}>{show === 2 ? "-" : "+"}</p>
                            </h3>
                            {show === 2 && <motion.ul className="space-y-1 text-gray-200 flex flex-col max-md:flex-row justify-between"
                             initial={{opacity:0}}
                            animate={{opacity:1}}
                            transition={{duration:0.3}}
                            >
                                <div>
                                    <li>Online (CMEs)</li>
                                    <li>Webinars</li>
                                    <li>Virtual Advisory Boards</li>
                                    <li>Town Hall Webcasts</li>
                                    <li>Live Surgery Events</li>
                                    <li>Live CEO Address</li>
                                </div>
                                <div>
                                    <li>KOL Webinars</li>
                                    <li>Expert Symposiums & ISP</li>
                                    <li>Investor Relations</li>
                                    <li>AGM</li>
                                    <li>Product Launch</li>
                                    <li>Training Webcasts</li>
                                </div>
                            </motion.ul>}
                        </div>

                        <div>
                            <h3 className="text-white text-lg font-semibold mb-4 w-full flex justify-between justify-between gap-4">
                                <p>Company</p>
                                <p onClick={() => setShow(show === 3 ? 0 : 3)}>{show === 3 ? "-" : "+"}</p>
                            </h3>
                            {show === 3 && <motion.ul className="space-y-1 text-gray-200 mb-4"
                             initial={{opacity:0}}
                            animate={{opacity:1}}
                            transition={{duration:0.3}}
                            >
                                <li>Clients</li>
                                <li>Testimonials</li>
                                <li>Contact Us</li>
                                <li>Awards & Recognitions</li>
                                <li>Blogs</li>
                            </motion.ul>}

                            <div className="flex items-center space-x-2">
                                <div className="border border-gray-600 rounded-md bg-[#162027] flex items-center px-2 py-1">
                                    <span className="w-6 h-6 inline-block mr-2">
                                        <img src="https://flagcdn.com/w20/in.png" alt="India flag" className="w-5 h-5 rounded" />
                                    </span>
                                    <select className="bg-transparent text-white focus:outline-none">
                                        <option value="in">India</option>

                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex space-x-6 mt-20">
                        <a href="#" aria-label="YouTube" className="hover:text-white text-gray-300">
                            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.5 15.6V8.4L15.8 12 9.5 15.6z" />
                            </svg>
                        </a>
                        <a href="#" aria-label="YouTube" className="hover:text-white text-gray-300">
                            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.5 15.6V8.4L15.8 12 9.5 15.6z" />
                            </svg>
                        </a>
                        <a href="#" aria-label="LinkedIn" className="hover:text-white text-gray-300">
                            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67h-3.56V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45zM5.34 7.43a2.06 2.06 0 11.001-4.12A2.06 2.06 0 015.34 7.43zm1.78 13.02H3.56V9h3.56zm15.56-20.45H1.77A1.77 1.77 0 000 1.77v20.45A1.77 1.77 0 001.77 24h20.45A1.78 1.78 0 0024 22.23V1.77A1.76 1.76 0 0022.23 0z" />
                            </svg>
                        </a>
                        <a href="#" aria-label="Twitter" className="hover:text-white text-gray-300">
                            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.954 4.57a10.002 10.002 0 01-2.825.775 4.925 4.925 0 002.163-2.724c-.951.555-2.005.956-3.127 1.175a4.92 4.92 0 00-8.385 4.482c-4.088-.205-7.713-2.162-10.141-5.144A4.822 4.822 0 002.23 6.575c0 1.7.87 3.202 2.188 4.084a4.904 4.904 0 01-2.225-.614v.06a4.93 4.93 0 003.95 4.827 4.996 4.996 0 01-2.212.084c.627 1.956 2.444 3.377 4.604 3.418A9.867 9.867 0 012 19.045c.36 0 .712-.021 1.06-.062A13.978 13.978 0 0012 22c8.437 0 13.039-7.002 13.039-13.067l-.015-.594A9.431 9.431 0 0024 4.59z" />
                            </svg>
                        </a>
                    </div>
                </motion.div>
            </AnimatePresence>
        </>

    )
}

export default Navbar