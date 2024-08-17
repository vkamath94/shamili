"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '/public/logo.png';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [aboutDropDown, setAboutDropDown] = useState(false);
    const dropdownRef = useRef(null);

    const handleNav = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleAbout = () => {
        setAboutDropDown(!aboutDropDown);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setAboutDropDown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav  id="header" className="static w-full h-20 shadow-xl bg-slate-100 bg-opacity-20 z-10">
            <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>
                <div className='flex items-center'>
                    <Link href="/">
                        <Image 
                            src={Logo}
                            alt="Logo"
                            width={90}
                            height={40}
                            className='cursor-pointer'
                        />
                    </Link>
                    <span className='ml-4 text-2xl font-semibold text-black'>Shamili PU College</span>
                </div>
                <div className='hidden sm:flex'>
                    <ul className='flex space-x-10'>
                        <div className='relative' ref={dropdownRef}>
                            <li 
                                onClick={toggleAbout} 
                                className='uppercase hover:border-b-2 hover:border-slate-500 text-xl cursor-pointer text-white'
                            >
                                About
                            </li>
                            {aboutDropDown && (
                                <ul className='absolute top-full left-0 mt-2 bg-black bg-opacity-80 shadow-lg rounded-md'>
                                    <li>
                                        <Link href="/About/Vision" className='block px-10 py-2 hover:bg-slate-100'>
                                            Vision
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/About/Message" className='block px-10 py-2 hover:bg-slate-100'>
                                            Principal's Message
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <Link href="/Courses" className='uppercase hover:border-b-2 hover:border-slate-500 text-xl text-black'>
                            Courses
                        </Link>
                        <Link href="/Facilities" className='uppercase hover:border-b-2 hover:border-slate-500 text-xl text-black'>
                            Facilities
                        </Link>
                        <Link href="/Faculty" className='uppercase hover:border-b-2 hover:border-slate-500 text-xl text-black'>
                            Faculty
                        </Link>
                        <Link href="/Results" className='uppercase hover:border-b-2 hover:border-slate-500 text-xl text-black'>
                            Results
                        </Link>
                        <Link href="/Event" className='uppercase hover:border-b-2 hover:border-slate-500 text-xl text-black'>
                            Events
                        </Link>
                        <Link href="/Contact" className='uppercase hover:border-b-2 hover:border-slate-500 text-xl text-black'>
                            Contact
                        </Link>
                    </ul>
                </div>
                <div onClick={handleNav} className='sm:hidden cursor-pointer'>
                    <AiOutlineMenu size={25} color="black"/>
                </div>
            </div>
            <div className={
                menuOpen ? "fixed left-0 top-0 w-[65%] h-screen bg-black bg-opacity-80 p-10 ease-in duration-500 z-10"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }>
                <div className='flex w-full items-center justify-end'>
                    <div onClick={handleNav} className='cursor-pointer'>
                        <AiOutlineClose size={25} color="white"/>
                    </div>
                </div>
                <div className='flex-col py-4'>
                    <ul>
                        <li>
                            <Link href="/" onClick={() => setMenuOpen(false)} className='block py-4 cursor-pointer border-b border-slate-300 text-white'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/About/Vision" onClick={() => setMenuOpen(false)} className='block py-4 cursor-pointer border-b border-slate-300 text-white'>
                                Vision
                            </Link>
                        </li>
                        <li className='py-4'>
                            <Link href="/About/Message" onClick={() => setMenuOpen(false)} className='block py-4 cursor-pointer border-b border-slate-300 text-white'>
                                Principal's Message
                            </Link>
                        </li>
                        <li>
                            <Link href="/Courses" onClick={() => setMenuOpen(false)} className='block py-4 cursor-pointer border-b border-slate-300 text-white'>
                                Courses
                            </Link>
                        </li>
                        <li>
                            <Link href="/Facilities" onClick={() => setMenuOpen(false)} className='block py-4 cursor-pointer border-b border-slate-300 text-white'>
                                Facilities
                            </Link>
                        </li>
                        <li>
                            <Link href="/Faculty" onClick={() => setMenuOpen(false)} className='block py-4 cursor-pointer border-b border-slate-300 text-white'>
                                Faculty
                            </Link>
                        </li>
                        <li>
                            <Link href="/Results" onClick={() => setMenuOpen(false)} className='block py-4 cursor-pointer border-b border-slate-300 text-white'>
                                Results
                            </Link>
                        </li>
                        <li>
                            <Link href="/Event" onClick={() => setMenuOpen(false)} className='block py-4 cursor-pointer border-b border-slate-300 text-white'>
                                Events
                            </Link>
                        </li>
                        <li>
                            <Link href="/Contact" onClick={() => setMenuOpen(false)} className='block py-4 cursor-pointer border-b border-slate-300 text-white'>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
