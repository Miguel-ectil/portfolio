import React from "react";
import Image from 'next/image'

export const NavLinks = () => (
  <nav>
    <ul className='hidden md:flex md:space-x-4'>
      <li>Home</li>
      <li>About</li>
      <li>Projects</li>
      <li>Contact</li>
      <li>PT</li>
      <Image
        src={`/Vector.svg`} 
        width={24} // Ajuste o tamanho conforme necessário
        height={24} // Ajuste o tamanho conforme necessário
        alt='MID'
        className='rounded-lg' // Adicione uma classe para arredondar a imagem, se necessário
      />
    </ul>
  </nav>
);
