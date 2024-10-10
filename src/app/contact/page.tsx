'use client'
// import axios from 'axios';
import { useState } from 'react';
import Image from 'next/image'
import { Toaster, toast } from "sonner";
// import emailjs from '@emailjs/browser'

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

//   function enviarEmail() {

//     const templateParams = {
//       from_name: name,
//       message: message,
//       email: email    
//     }

//     toast.success("Mensagem enviada com sucesso !");
//     emailjs.send("service_e23n6h9", "template_pe67ijs", templateParams, 'Fd8CvKZwAuHWdj1FJ')
//     .then((res: any) => {
//       console.log("Email enviado", res.status, res.text)
//     })
//     .catch((err: any) => {
//       console.log("ERRO", err)
//     })
// }

  return (
    <>
      <div className='lg:px-5 xl:px-5 mt-10 z-40 relative'>
        <div className='flex lg:rounded-xl xl:rounded-xl bg-[#2c243bc4] px-4 lg:px-14 xl:px-20 gap-x-1 lg:gap-x-6 xl:gap-x-1 flex-col lg:flex-row py-4'>
          <div className='lg:w-1/2 lg:px-10 mt-10'>
            <Image
              src={`/3d_avatar.svg`} 
              width={240} 
              height={200}
              alt='MID'
              className='rounded-lg'
            />
            <div className='flex-col space-y-2 mt-6 md:space-y-4 lg:justify-end'>
              <p className='font-bold text-[#7DFFAF]'>
                Contact
              </p>
              <h1 className='text-3xl font-bold'>
                Enjoyed my work? Let’s work together            
              </h1>
              <p className='text-shadow-md text-gray-400 max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl'>
                I’m always up for a chat. Pop me an email at ectilmiguel@gmail.com or give me a shout on social media. 
              </p>
              <div className='flex space-x-3'>
                <div className='p-2 rounded-lg bg-[#413A4F]'>
                  <a href="https://github.com/Miguel-ectil">
                    <Image
                      src={`/logo-github.svg`} 
                      width={30} 
                      height={30}
                      alt='GitHub'
                      className='rounded-lg'
                    />
                  </a>
                </div>
                <div className='p-2 rounded-lg bg-[#413A4F]'>
                  <a href="http://linkedin.com/in/miguel-ectil">
                    <Image
                      src={`/logo-linkedin.svg`} 
                      width={30} 
                      height={30}
                      alt='Linkedin'
                      className='rounded-lg'
                    />
                  </a>
                </div>
                <div className='p-2 rounded-lg bg-[#413A4F]'>
                  <a href="https://www.instagram.com/ectil_miguel/">
                    <Image
                      src={`/logo-instagram.svg`} 
                      width={30} 
                      height={30}
                      alt='Instagram'
                      className='rounded-lg'
                    />
                  </a>
                </div>
                <div className='p-2 rounded-lg bg-[#413A4F]'>
                  <a href="https://wa.me/11914848679">
                    <Image
                      src={`/logo-whatsapp.svg`} 
                      width={30} 
                      height={30}
                      alt='whatsapp'
                      className='rounded-sm'
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='flex-col lg:w-1/2 space-y-2 mt-10 md:space-y-4 lg:h-[38vh] lg:justify-end'>
            <input
              id="bane"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target?.value)}
              className="min-w-0 flex-auto rounded-md bg-[#171023] w-full px-4 py-3  shadow-sm ring-1 ring-inset ring-white/10 focus:ring-inset sm:text-base sm:leading-6"
              placeholder="Enter your Name"
            />
            <input
              id="email-address"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target?.value)}
              className="min-w-0 flex-auto rounded-md bg-[#171023] w-full px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10  focus:ring-inset sm:text-base sm:leading-6"
              placeholder="Enter your email"
            />
            <textarea
              id="message"
              name="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target?.value)}
              className="flex-auto rounded-md bg-[#171023] w-full px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-inset sm:text-base sm:leading-6 h-[160px] border-none"
              placeholder="Leave your Message"
            />
            <button
              // onClick={enviarEmail} 
              className='md:text-xl flex cursor-pointer items-center gap-x-2 rounded-lg bg-indigo-600 px-5 py-1.5 text-sm font-semibold text-white transition hover:opacity-75 md:px-6 md:py-2.5'
            >
              Send me a message
              {/* <InformationCircleIcon className='h-6'/> */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" viewBox="0 0 24 24" 
                strokeWidth={1.5} stroke="currentColor" 
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}