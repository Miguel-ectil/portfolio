'use client'
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/navbar";
import { Card } from "@/components/cards";
import Particles from "@/components/particles";
import { Github, Mail, Linkedin } from "lucide-react";

export default function Login() {
  const ref = useRef<any>(null);
  const [isInView, setIsInView] = useState(false);
  const currentDate = new Date()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [setIsInView]);

  return (
    <div className="container grid items-center justify-center min-h-screen px-3 mx-auto">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <div
        ref={ref}
        className="grid mt-28 md:mt-20 lg-mt-16 sm:mt-16"
        style={{
          transform: isInView ? "none" : "translateX(100%)",
          opacity: isInView ? 1 : 0,
          transition:
        "transform 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s, opacity 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        >
        <motion.div
          className="overflow-hidden relative border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/400 border-zinc-600 px-10 py-3 mb-20 mt-4"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="text-4xl items-center relative flex flex-col duration-700">
            <strong>Log in</strong>
          </div>
          <div className="mt-6 mb-4">
            <label className="block text-gray-200 text-sm font-bold mb-2">
                Username
            </label>
            <input className="shadow bg-gray-700 leading-tight appearance-none border rounded lg:w-80 xl:w-96 py-2 px-3 text-white focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-200 text-sm font-bold mb-2" >
                Password
            </label>
            <input className="shadow appearance-none border bg-gray-700  border-red-400 rounded lg:w-80 xl:w-96 py-2 px-3 text-gray-200 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
            <p className="text-red-500 text-xs italic">Please enter password.</p>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 w-52 lg:w-80 xl:w-96 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Sign In
          </button>
          <div className="text-center text-gray-500 text-xs mt-8">
            <p>&copy;Current Date: {currentDate.toDateString()}</p> 
          </div>
        </motion.div>
      </div>
    </div>
  )
}