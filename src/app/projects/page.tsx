'use client'
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/navbar";
import { Card } from "@/components/cards";
import Link from "next/link";
import { Github, Mail, Linkedin } from "lucide-react"; 

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
];

function SocialIcons() {
  return (
    <div className="grid w-full grid-cols-1 gap-x-8 mx-auto mb-2 sm:grid-cols-3 lg:gap-16">
      {socials.map((s) => (
        <Card key={s.label}>
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
  );
}

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
      { threshold: 0 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [setIsInView]);

  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container grid items-center  justify-center min-h-screen px-3 mx-auto">
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-600 mt-28 md:mt-20 border border-zinc-400">
        <img className="w-40 h-60 md:w-56 md:h-auto rounded-lg md:rounded-l-xl mx-auto" src="my-foto.jpeg" alt="" width="384" height="512" />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
            Well, my name is Miguel. I'm a Front-End developer and I have a great passion for programming. <br />
            I'm currently focused on Next.js and React.js, which are my specialty. I have more than 2 years of experience in this area of ​​programming, having also worked with Vue.js and delved into back-end development, including the Python. 
           programming language. I am constantly learning new things and expanding my knowledge every day.
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-red-500 dark:text-red-700">
              Miguel Ectil 
            </div>
            <div className="text-slate-600 dark:text-slate-400">
              Desenvolvedor Júnior
            </div>
          </figcaption>
        </div>
      </figure>
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
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-x-4"> {/* grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 */}
            <motion.div
              className="overflow-hidden relative border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/400 border-zinc-600 p-4 mb-4 mt-4 "
              // whileHover={{ scale: 1.1 }}
              // transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <h1 className="text-4xl mb-2" color="red"><strong>Miguel Ectil</strong></h1>
              <div className="flex flex-col md:flex-row items-center gap-x-40 gap-y-4 justify-between"> 
                <img 
                  className="rounded-lg" 
                  src="my-foto.jpeg" 
                  width={"24%"}
                  max-width={"100px"}
                >
                </img>
                <div>
                  <h1 className="text-4xl mb-2"><strong>Miguel Ectil - Desenvolvedor</strong></h1>
                  <p className="mt-6 text-2xl">
                    Olá! Sou um desenvolvedor front-end júnior apaixonado pela criação de experiências digitais incríveis. Meu nome é [Seu Nome], e estou animado em compartilhar minha paixão pela programação web e minha experiência em diversas tecnologias modernas. 
                  </p>
                </div>
              </div>

            </motion.div>
            <div className="grid grid-cols-1"> {/* grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 */}
              {/* <motion.div
                className="overflow-hidden relative border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/400 border-zinc-600 p-4  mt-4"
                // whileHover={{ scale: 1.1 }}
                // transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <h1 className="text-4xl mb-2"><strong>Miguel Ectil - Desenvolvedor</strong></h1>
                <p>
                  Olá! Sou um desenvolvedor front-end júnior apaixonado pela criação de experiências digitais incríveis. Meu nome é [Seu Nome], e estou animado em compartilhar minha paixão pela programação web e minha experiência em diversas tecnologias modernas. 
                </p>
              </motion.div> */}
              {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-x-4">
              <motion.div
                className="overflow-hidden relative border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/400 border-zinc-600 p-4 mb-4 mt-4"
                // whileHover={{ scale: 1.1 }}
                // transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <h1 className="text-4xl mb-2"><strong>Miguel Ectil</strong></h1>
                <p>
                  Olá! Sou um desenvolvedor front-end júnior apaixonado pela criação de experiências digitais incríveis.
                </p>
              </motion.div>
              <motion.div
                className="overflow-hidden relative border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/400 border-zinc-600 p-4 mb-4 mt-4"
                // whileHover={{ scale: 1.1 }}
                // transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <h1 className="text-4xl mb-2"><strong>Miguel Ectil</strong></h1>
                <p>
                  Olá! Sou um desenvolvedor front-end júnior apaixonado pela criação de experiências .
                </p>
              </motion.div>
              </div> */}
            </div>
            {/*<motion.div
              className="overflow-hidden relative border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/400 border-zinc-600 p-4 mb-20 "
              // whileHover={{ scale: 1.1 }}
              // transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <h1 className="text-4xl mb-2">Miguel Ectil</h1>
              <p>
                Olá! Sou um desenvolvedor front-end júnior apaixonado pela criação de experiências digitais incríveis. Meu nome é [Seu Nome], e estou animado em compartilhar minha paixão pela programação web e minha experiência em diversas tecnologias modernas. Com um foco especial em React, Next.js, TypeScript, JavaScript e muito mais, estou comprometido em contribuir para projetos de desenvolvimento web de alto nível.
              </p>
            </motion.div> */}
          </div>
          <SocialIcons />
        </div>
      </div>
    </div>
  );
}
