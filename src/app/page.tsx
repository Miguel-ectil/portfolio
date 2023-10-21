'use client'
import Link from "next/link";
import React from "react";
import Particles from "@/components/particles";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Card } from "@/components/cards";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "Login", href: "/login" },
];

const socials = [
  {
	icon: <Mail size={20} />,
	href: "mailto:ectilmiguelmiguelectil@gmail.com",
	label: "Email",
	handle: "ectilmiguel@gmail.com",
  },
  {
	icon: <Github size={20} />,
	href: "https://github.com/Miguel-ectil",
	label: "Github",
	handle: "MiguelEctil",
  },
  {
	icon: <Linkedin size={20} />,
	href: "https://www.linkedin.com/in/miguel-ectil-a54063267/",
	label: "Linkedin",
	handle: "MiguelEctil",
  },
  {
	icon: <Linkedin size={20} />,
	href: "https://www.linkedin.com/in/miguel-ectil-a54063267/",
	label: "Linkedin",
	handle: "MiguelEctil",
  },
];

function SocialIcons() {
  return (
	<div className="grid w-full grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-4 mt-20">
	  {socials.map((s) => (
		<Card key={s.label}>
		  <Link
			href={s.href}
			target="_blank"
			className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16"
		  >
			<span
			className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
			aria-hidden="true"
			/>
			<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
			  {s.icon}
			</span>{" "}
			<div className="z-10 flex flex-col items-center">
			  <span className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
				{s.handle}
			  </span>
			  <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
				{s.label}
			  </span>
			</div>
		  </Link>
		</Card>
	  ))}
	</div>
  );
}

export default function Home() {
  return (
    <>
      <div className="py-32 px-14 w-screen min-h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
        <nav className="my-4 animate-fade-in">
          <ul className="flex items-center justify-center gap-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg duration-500 text-zinc-500 hover:text-zinc-300"
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </nav>
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
              restDelta: 0.001,
            },
          }}
        >
<h1 className="flex justify-between z-10 text-4xl cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl bg-clip-text mt-8">
            <strong className="text-zinc-400 hover:text-zinc-300">Your welcome</strong>
          </h1>
        </motion.div>
        <div className="my-5 animate-fade-in">
          <h2 className="text-2xl text-zinc-500">
          My name is Miguel. I'm a Front-End developer and I have a great passion for programming. I'm currently focused on Next.js and React.js, which are my specialty. I have more than 2 years of experience in this area of ​​programming, having also worked with Vue.js and delved into back-end development, including the Python programming language. I am constantly learning new things and expanding my knowledge every day.
		   {/* {" "} */}
            {/* <Link
              target="_blank"
              href="https://upstash.com"
              className="underline duration-500 hover:text-zinc-300"
            >
              Upstash
            </Link>{" "}
            and working on{" "}
            <Link
              target="_blank"
              href="https://unkey.dev"
              className="underline duration-500 hover:text-zinc-300"
            >
              unkey.dev
            </Link>{" "}
            at night. */}
          </h2>
        </div>
        {/* <div className="mt-4">
          <p className="text-sm text-zinc-500">
            You can check out my latest projects{" "}
            <Link
              href="/projects"
              className="underline duration-500 hover:text-zinc-300"
            >
              here
            </Link>
            .
          </p>
        </div> */}
		<SocialIcons />
      </div>
    </>
  );
}
