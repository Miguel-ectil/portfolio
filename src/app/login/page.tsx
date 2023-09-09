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
      {/* <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      /> */}
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
          
        </motion.div>
      </div>
    </div>
  )
}