'use client'
import Link from "next/link";
import React from "react";
import Particles from "@/components/particles";
import Icons from "@/components/icons";
import { motion } from "framer-motion";

const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
	{ name: "Login", href: "/login" },
];

export default function Home() {
  return (
	<>
	  <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
	    <nav className="my-16 animate-fade-in">
		  <ul className="flex items-center justify-center gap-4">
			{navigation.map((item) => (
			  <Link
				key={item.href}
				href={item.href}
				className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
			  >
				{item.name}
			  </Link>
			))}
		  </ul>
		</nav>
		<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
		<Particles
		  className="absolute inset-0 -z-10 animate-fade-in"
		  quantity={100}
		/>
		<motion.div
		  className="box"
		  initial={{ opacity: 0, scale: 0.5 }}
		  animate={{ opacity: 1, scale: 1 }}
		  transition={{
			duration: 0.3,
			ease: [0, 0.71, 0.2, 1.01],
			scale: {
			  type: "spring",
			  damping: 5,
			  stiffness: 100,
			  restDelta: 0.001
			}
		  }}
		>
		  <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl  bg-clip-text ">
		    MIGUEL {/* ECTIL */}
		  </h1>
       </motion.div>
		<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
		<div className="my-16 text-center animate-fade-in">
		  <h2 className="text-sm text-zinc-500 ">
			Hi, my name is Miguel, I'm building serverless and open source
			solutions at{" "}
			<Link
			  target="_blank"
			  href="https://upstash.com"
			  className="underline duration-500 hover:text-zinc-300"
			>
			  Upstash
			</Link>

			<br />
			  and working on{" "}
			<Link
			  target="_blank"
			  href="https://unkey.dev"
			  className="underline duration-500 hover:text-zinc-300"
			>
			  unkey.dev
			</Link>{" "}
			  at night.
		  </h2>
		</div>
		<Icons />
	  </div>
	</>
  );
}
