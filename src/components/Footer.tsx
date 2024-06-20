'use client'
import React from "react";
import { UserProfile } from "./UserProfile";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { useScroll } from "../hooks/useScroll";
import Image from 'next/image'

export default function Footer() {
  const isScrolled = useScroll();

  return (
<footer className="text-white body-font z-50 relative">
  <div className="container px-4 py-8 mt-4 mx-auto flex items-center justify-between flex-col sm:flex-row">
    <p className="text-sm text-gray-400 sm:mb-0">Miguel Ectil 2024. Layout based on Rocketseat’s template.</p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a href="" className="mr-8">
        <p>Github</p>
      </a>
      <a href="" className="mr-8">
        <p>Linkedin</p>
      </a>
      <a href="" className="mr-4">
        <p>Instagram</p>
      </a>
      <a className="ml-3 text-gray-400" href="#">
        <Image
          src={`/ArrowUp.svg`} 
          width={22} 
          height={22}
          alt='setaTop'
          className='rounded-lg'
        />
      </a>
      
    </span>
  </div>
</footer>

  )
}