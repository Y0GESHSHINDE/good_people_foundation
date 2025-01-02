'use client';
import React, { useState } from 'react';
import '../externalLibary/font.css';
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='container mx-auto grid grid-cols-1 sm:h-20 sm:border-b-2 border-[#EAEAEA] sm:grid-cols-3 h-[20px]'>
      {/* Top section */}
      <div className='flex justify-between items-center col-span-1 sm:col-span-1 border-b-2 sm:border-none border-[#EAEAEA]'>
        <div>
          <h1 className='text-[20px] sm:text-[14px] md:text-[16px] lg:text-[20px] dm-sans-bold mt-2 ms-2'>
            <span className='bg-[#A8CE46] p-1 rounded'>Good People</span> Foundation
          </h1>
          <h1 className='text-[12px] sm:text-[9px] md:text-[12px] dm-sans-light ms-3 mt-[2px]'>
            Changing the System | Creating better India
          </h1>
        </div>
        <div onClick={toggleMenu} className="cursor-pointer">
          {isMenuOpen ? (
            <FaTimes className='sm:hidden text-[25px] me-2' />
          ) : (
            <FaBars className='sm:hidden text-[25px] me-2' />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[70%] bg-white shadow-lg z-50 transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out sm:hidden`}
      >
        <div className='p-4 flex flex-col justify-center items-center  '>
          <h1 className='dm-sans-Regular text-[15px] mt-5'>Projects</h1>
          <h1 className='dm-sans-Regular text-[15px] mt-5'>Events</h1>
          <h1 className='dm-sans-Regular text-[15px] mt-5'>Mission</h1>
          <h1 className='text-[12px] mt-5'>Know more about it</h1>
          <h1 className='text-[12px]'>+91 868 998 8686</h1>
          <div className='p-3 bg-[#A8CD46] text-[14px] w-full rounded mt-5 text-center'>
            Be a Good Person
          </div>
        </div>
      </div>

      {/* Desktop menu */}
      <div className='text-center col-span-1 sm:col-span-2 items-center sm:text-left sm:flex justify-end hidden '>
        <div className='items-center flex w-auto  m:flex sm:justify-end'>
          <h1 className='dm-sans-Regular text-[15px] sm:text-[9px] md:text-[15px] mt-5 sm:mt-0 me-10'>Projects</h1>
          <h1 className='dm-sans-Regular text-[15px] sm:text-[9px] md:text-[15px] mt-5 sm:mt-0 me-10'>Events</h1>
          <h1 className='dm-sans-Regular text-[15px] sm:text-[9px] md:text-[15px] mt-5 sm:mt-0 me-10'>Mission</h1>
        </div>
        <div className='sm:flex  me-2  gap-5 bg-white justify-end items-center'>
          <div>
            <h1 className='text-[12px] sm:text-[9px] md:text-[10px] lg:text-[12px] mt-5 sm:mt-0'>Know more about it</h1>
            <h1 className='text-[12px] sm:text-[9px] md:text-[10px] lg:text-[12px]'>+91 868 998 8686</h1>
          </div>
          <div className='p-3 bg-[#A8CD46] text-[14px] sm:text-[9px] md:text-[9px] lg:text-[14px] w-[154px] sm:w-auto rounded-full mx-auto mt- sm:mt-0'>
            Be a Good Person
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
