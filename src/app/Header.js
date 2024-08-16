"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '/public/logo.png';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


export const Header = () => {
    const [MenuOpen, setMenuOpen] = useState(false);
    const [AboutDropDown, setAboutDropDown] = useState(false);
    const dropdownRef = useRef(null);

    const handleNav = () => {
        setMenuOpen(!MenuOpen);
    };

    const toggleAbout = () => {
        setAboutDropDown(!AboutDropDown);
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
        <nav className="static w-full h-20 shadow-xl bg-white z-10">
            <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>
                <div>
                    <Link href="/">
                        <Image 
                            src={Logo}
                            alt="Logo"
                            width={90}
                            height={40}
                            className='cursor-pointer'
                        />
                    </Link>
                </div>
                <div className='hidden sm:flex'>
                    <ul className='hidden sm:flex'>
                        <div className='relative' ref={dropdownRef}>
                            <li 
                                onClick={toggleAbout} 
                                className='ml-10 uppercase hover:border-b-2 hover:border-slate-500 text-xl cursor-pointer'
                            >
                                About
                            </li>
                            {AboutDropDown && (
                                <ul className='absolute top-12 left-0 bg-white shadow-lg rounded-md'>
                                    <Link href="/About/Vision">
                                        <li className='px-10 py-2 hover:bg-slate-100'>Vision</li>
                                    </Link>
                                    <Link href="/About/Message">
                                        <li className='px-10 py-2 hover:bg-slate-100'>Principal's Message</li>
                                    </Link>
                                </ul>
                            )}
                        </div>
                        <Link href="/Courses">
                            <li className='ml-10 uppercase hover:border-b-2 hover:border-slate-500 text-xl'>Courses</li>
                        </Link>
                        <Link href="/Facilities">
                            <li className='ml-10 uppercase hover:border-b-2 hover:border-slate-500 text-xl'>Facilities</li>
                        </Link>
                        <Link href="/Faculty">
                            <li className='ml-10 uppercase hover:border-b-2 hover:border-slate-500 text-xl'>Faculty</li>
                        </Link>
                        <Link href="/Results">
                            <li className='ml-10 uppercase hover:border-b-2 hover:border-slate-500 text-xl'>Results</li>
                        </Link>
                        <Link href="/Event">
                            <li className='ml-10 uppercase hover:border-b-2 hover:border-slate-500 text-xl'>Events</li>
                        </Link>
                        <Link href="/Contact">
                            <li className='ml-10 uppercase hover:border-b-2 hover:border-slate-500 text-xl'>Contact</li>
                        </Link>
                    </ul>
                </div>
                <div onClick={handleNav} className='sm:hidden cursor-pointer'>
                    <AiOutlineMenu size={25}/>
                </div>
            </div>
            <div className={
                MenuOpen ? "fixed left-0 top-0 w-[65%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 z-10"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }>
                <div className='flex w-full items-center justify-end'>
                    <div onClick={handleNav} className='cursor-pointer'>
                        <AiOutlineClose size={25}/>
                    </div>
                </div>
                <div className='flex-col py-4'>
                    <ul>
                        <Link href="/">
                            <li onClick={() => setMenuOpen(false)} className='py-4 cursor-pointer border-b border-slate-300'>Home</li>
                        </Link>
                        <li className='py-4 cursor-pointer border-b border-slate-300'>
                            <div onClick={toggleAbout} className='flex justify-between items-center'>
                                <span>About</span>
                                <span>{AboutDropDown ? '-' : '+'}</span>
                            </div>
                            {AboutDropDown && (
                                <ul className='pl-4'>
                                    <Link href="/About/Vision">
                                        <li onClick={() => setMenuOpen(false)} className='py-5 border-b border-slate-300'>Vision</li>
                                    </Link>
                                    <Link href="/About/Message">
                                        <li onClick={() => setMenuOpen(false)} className='py-5 border-b border-slate-300'>Principal's Message</li>
                                    </Link>
                                </ul>
                            )}
                        </li>
                        <Link href="/Courses">
                            <li onClick={() => setMenuOpen(false)} className='py-4 cursor-pointer border-b border-slate-300'>Courses</li>
                        </Link>
                        <Link href="/Facilities">
                            <li onClick={() => setMenuOpen(false)} className='py-4 cursor-pointer border-b border-slate-300'>Facilities</li>
                        </Link>
                        <Link href="/Faculty">
                            <li onClick={() => setMenuOpen(false)} className='py-4 cursor-pointer border-b border-slate-300'>Faculty</li>
                        </Link>
                        <Link href="/Results">
                            <li onClick={() => setMenuOpen(false)} className='py-4 cursor-pointer border-b border-slate-300'>Results</li>
                        </Link>
                        <Link href="/Events">
                            <li onClick={() => setMenuOpen(false)} className='py-4 cursor-pointer border-b border-slate-300'>Events</li>
                        </Link>
                        <Link href="/Contact">
                            <li onClick={() => setMenuOpen(false)} className='py-4 cursor-pointer border-b border-slate-300'>Contact</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
