'use client'
import React, { useState } from "react";
import { useScroll } from "../hooks/useScroll";
import Image from 'next/image';

export default function Header() {
  const isScrolled = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300
      ${isScrolled ? 'bg-black shadow-md' : 'bg-gradient-to-t from-transparent to-black'}
      flex items-center justify-between px-4 py-3 lg:px-16 lg:py-4`}
    >
      {/* Logo */}
      <div className="flex items-center space-x-2 md:space-x-8">
        <h1 className="text-3xl font-bold text-white">Ectil</h1>
      </div>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex items-center space-x-8">
        <ul className="flex items-center space-x-10 text-white font-medium">
          <li className="hover:text-[#7DFFAF] transition-colors cursor-pointer">Home</li>
          <li className="hover:text-[#7DFFAF] transition-colors cursor-pointer">About</li>
          <li className="hover:text-[#7DFFAF] transition-colors cursor-pointer">Projects</li>
          <li className="hover:text-[#7DFFAF] transition-colors cursor-pointer">Contact</li>
          <li className="hover:text-[#7DFFAF] transition-colors cursor-pointer">PT</li>
          <Image
            src={`/Vector.svg`}
            width={24}
            height={24}
            alt='MID'
            className='rounded-lg cursor-pointer hover:opacity-80 transition-opacity'
          />
        </ul>
      </nav>
      
      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button className="text-white focus:outline-none" onClick={toggleMenu}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2} 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-14 right-4 bg-black bg-opacity-90 text-white rounded-lg shadow-lg py-2 w-40">
          <ul className="flex flex-col space-y-2 px-4">
            <li className="hover:text-[#7DFFAF] transition-colors cursor-pointer" onClick={toggleMenu}>Home</li>
            <li className="hover:text-[#7DFFAF] transition-colors cursor-pointer" onClick={toggleMenu}>About</li>
            <li className="hover:text-[#7DFFAF] transition-colors cursor-pointer" onClick={toggleMenu}>Projects</li>
            <li className="hover:text-[#7DFFAF] transition-colors cursor-pointer" onClick={toggleMenu}>Contact</li>
            <li className="hover:text-[#7DFFAF] transition-colors cursor-pointer" onClick={toggleMenu}>PT</li>
          </ul>
        </div>
      )}
    </header>
  );
}
