import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { InformationCircleIcon, PlayIcon } from '@heroicons/react/24/outline'
import Particles from '@/hooks/particles'
import Image from 'next/image'
import AboutMe from '@/components/about_me/page'
import Contact from '@/components/contact/page'

export default function Home() {
  return (
    <>
      <div className='relative overflow-hidden bg-gradient-to-b  bg-[#171023]'>
        <Header />
        {/* <Particles
          className="absolute inset-0 z-50 animate-fade-in"
          quantity={200}
        /> */}
        <main className='pb-10 pl-4 lg:pl-16 flex flex-col lg:flex-row lg:items-center pt-[70px] lg:pt-0 z-40 relative'>
          <div className='lg:w-1/2 lg:pr-10'>
            <div className='flex flex-col space-y-3 py-2 md:space-y-4 lg:h-[38vh] lg:justify-end'>
              <h1 className='text-3xl font-bold'>
                Full-stack developer and innovation enthusiast
              </h1>
              <p className='text-shadow-md text-gray-400 max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl'>
                Over 2 years of experience in the tech industry. I specialize in building innovative web and mobile applications using technologies such as React, React Native, and Node.js.
              </p>
              <div className='flex space-x-3'>
                <button 
                  className='md:text-xl flex cursor-pointer items-center gap-x-2 rounded-lg bg-[#413A4F] px-5 py-1.5 text-sm font-semibold text-white transition hover:opacity-75 md:px-4 md:py-2.5'
                >
                  {/* <PlayIcon className='h-6'/>  */}            
                  <Image
                    src={`/ReadCvLogo.svg`} 
                    width={26} 
                    height={26}
                    alt='MID'
                    className='rounded-lg'
                  />
                  My resume
                </button>
                <button 
                  className='md:text-xl flex cursor-pointer items-center gap-x-2 rounded-lg bg-[#8A42DB] px-5 py-1.5 text-sm font-semibold text-white transition hover:opacity-75 md:px-6 md:py-2.5'
                >
                  Get in touch
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
          <div className='lg:w-1/2 lg:p-10 flex justify-center items-center order-first lg:order-last'>
            <Image
              src={`/Linha.svg`} 
              width={700} // Ajuste o tamanho conforme necessário
              height={700} // Ajuste o tamanho conforme necessário
              alt='MID'
              className='rounded-lg' // Adicione uma classe para arredondar a imagem, se necessário
            />
          </div>
        </main>
        <AboutMe />
        <div className='flex justify-center mt-10'>
          <div className='flex-col px-4'>
            <p className='flex justify-center font-bold text-[#7DFFAF]'>
              Projects
            </p>
            <h1 className='xl:text-3xl lg:text-2xl font-bold'>
            Take a look at my highlighted projects            
            </h1>
          </div>
        </div>
        <div className='flex px-4 lg:px-14 xl:px-20 gap-6 lg:gap-6 xl:gap-6 mt-8 flex-col lg:flex-row'>
          <div className='flex rounded-xl p-4 bg-[#2C243B] '>
            <div className='lg:w-1/2 lg:p-10 flex '>
              <Image
                src={`/bro.svg`} 
                width={700} 
                height={700}
                alt='MID'
                className='rounded-lg'
              />
            </div>
          </div>

          <div className='flex rounded-xl p-4 bg-[#2C243B] '>
            <div className='lg:w-1/2 lg:p-10 flex '>
              <Image
                src={`/bro.svg`} 
                width={700} 
                height={700}
                alt='MID'
                className='rounded-lg'
              />
            </div>
          </div>

          <div className='flex rounded-xl p-4 bg-[#2C243B]'>
            <div className='lg:w-1/2 lg:p-10 flex '>
              <Image
                src={`/bro.svg`} 
                width={700} 
                height={700}
                alt='MID'
                className='rounded-lg'
              />
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-6'>
          <button 
            className='md:text-xl flex cursor-pointer items-center gap-x-2 rounded-lg bg-[#413A4F] px-5 py-1.5 text-sm font-semibold text-white transition hover:opacity-75 md:px-4 md:py-2.5'
          >          
            See all
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
        <Contact />
        <Footer />
        <Particles
          className="absolute inset-0 z-0 animate-fade-in" // Altere a classe z-50 para z-0
          quantity={200}
        />
      </div>
    </>
  )
}
