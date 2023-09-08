'use client'
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/navbar";
import { Card } from "@/components/cards";
import Link from "next/link";
import { Github, Mail, Linkedin } from "lucide-react"; // Importe os ícones relevantes da Lucide-React


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
    <div className="grid w-full grid-cols-1 gap-8 mx-auto mb-2 sm:grid-cols-3 lg:gap-16">
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
      <div className="container grid items-center justify-center min-h-screen px-3 mx-auto">
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
            className="overflow-hidden relative border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/400 border-zinc-600 p-4 mb-20 mt-4"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <h1 className="text-4xl mb-2">Miguel Ectil</h1>
            <p>
              Olá! Sou um desenvolvedor front-end júnior apaixonado pela criação de experiências digitais incríveis. Meu nome é [Seu Nome], e estou animado em compartilhar minha paixão pela programação web e minha experiência em diversas tecnologias modernas. Com um foco especial em React, Next.js, TypeScript, JavaScript e muito mais, estou comprometido em contribuir para projetos de desenvolvimento web de alto nível.
            </p>
            <h2 className="text-3xl mb-1 mt-1">Experiência Profissional</h2>
            <ul>
              <li>
                <span className="icon">
                  {/* Substitua pelo ícone React */}
                  {/* <ReactIcon size={20} /> */}
                </span>
                <span>React e Next.js: Tenho proficiência em desenvolver aplicativos web escaláveis e de alto desempenho utilizando o React.js e o Next.js. Isso inclui a criação de componentes reutilizáveis, gerenciamento de estado eficiente e otimização de desempenho.</span>
              </li>
              <li>
                <span className="icon">
                  {/* Substitua pelo ícone TypeScript */}
                  {/* <TypeScriptIcon size={20} /> */}
                </span>
                <span>TypeScript e JavaScript: Estou confortável tanto com JavaScript quanto com TypeScript, o que me permite escrever código mais seguro, legível e robusto.</span>
              </li>
              <li>
                <span className="icon">
                  {/* Substitua pelo ícone UI/UX */}
                  {/* <UIUXIcon size={20} /> */}
                </span>
                <span>UI/UX: Sou apaixonado por criar interfaces de usuário elegantes e funcionais. Minha experiência com Material UI, Tailwind CSS e Bootstrap me permite projetar e implementar designs atrativos.</span>
              </li>
              <li>
                <span className="icon">
                  {/* Substitua pelo ícone Vue.js */}
                  {/* <VueIcon size={20} /> */}
                </span>
                <span>Vue.js: Embora minha principal expertise seja em React, também tenho familiaridade com o Vue.js e estou disposto a aprender novas tecnologias rapidamente.</span>
              </li>
              <li>
                <span className="icon">
                  {/* Substitua pelo ícone Git */}
                  <Github  size={20} />
                </span>
                <span>Git e GitHub: Tenho experiência sólida em controle de versão com Git e uso o GitHub para colaborar em projetos de código aberto e em equipes de desenvolvimento.</span>
              </li>
              <li>
                <span className="icon">
                  {/* Substitua pelo ícone Linux */}
                  {/* <LinuxIcon size={20} /> */}
                </span>
                <span>Ambiente Linux: Sou um entusiasta do Linux e estou familiarizado com diversos sistemas operacionais baseados em Linux, o que me ajuda a criar ambientes de desenvolvimento eficientes.</span>
              </li>
            </ul>
            <address>
              <p>Miguel Ectil <strong>São Paulo SP</strong></p>
            </address>
          </motion.div>
          <SocialIcons />
        </div>
      </div>
    </div>
  );
}
