"use client";
import { Github, Mail, Linkedin, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "@/components/navbar";
import { Card } from "@/components/cards";
import { useEffect, useRef, useState } from "react";

const socials = [
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
	icon: <Mail size={20} />,
	href: "mailto:ectilmiguelmiguelectil@gmail.com",
	label: "Email",
	handle: "ectilmiguel @gmail.com",
  },
  {
	icon: <Instagram  size={20} />,
	href: "https://instagram.com/miguelctil",
	label: "Instagram",
	handle: "Miguelectil",
  },
  {
    icon: <Twitter size={20} />,
    href: "https://twitter.com/chronark_",
    label: "Twitter",
    handle: "@chronark_",
  },

  {
	icon: <Github size={20} />,
	href: "https://github.com/chronark",
	label: "Github",
	handle: "chronark",
  },
];

export default function Example() {
  const ref = useRef<any>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
	const observer = new IntersectionObserver(
	(entries) => {
	  entries.forEach((entry) => {
	    if (entry.isIntersecting) {
		  setIsInView(true);
        }
	  });
	},
	{ threshold: 0 } // Alterado para 0 para detectar imediatamente
	);
	observer.observe(ref.current);
	return () => observer.disconnect();
  }, [setIsInView]);

  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
	  <Navigation />
	  <div 
	    className="container flex items-center justify-center min-h-screen px-4 mx-auto"
		ref={ref}
		style={{
		  transform: isInView ? "none" : "translateX(100%)",
		  opacity: isInView ? 1 : 0,
		  transition:
              "transform 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s, opacity 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
		}}
	  >
	    <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-20 sm:grid-cols-3 lg:gap-16">
		  {socials.map((s) => (
			<Card>
			  <Link
				href={s.href}
				target="_blank"
				className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
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
	  </div>
    </div>
  );
}
