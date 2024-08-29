import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Particles from '@/hooks/particles'
import Image from 'next/image'
import AboutMe from './about_me/page'
import Contact from './contact/page'
import Projects from './projetos/page'

export default function Home() {
  return (
    <>
      <div className='relative overflow-hidden bg-gradient-to-b  bg-[#171023]'>
        <Header />
        <main className='pb-14 pl-4 lg:pl-16 flex flex-col lg:flex-row lg:items-center pt-[70px] lg:pt-0 z-40 relative mt-10'>
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
                  className='md:text-xl flex cursor-pointer items-center gap-x-2 rounded-lg bg-[#413A4F] px-5 py-1.5 text-sm font-semibold text-white transition hover:opacity-75 md:px-4 md:py-2'
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
                  className='md:text-xl flex cursor-pointer items-center gap-x-2 rounded-lg bg-indigo-500 px-5 py-1.5 text-sm font-semibold text-white transition hover:opacity-75 md:px-6 md:py-2.5'
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
          <div className='lg:w-1/2 lg:p-10 flex justify-center items-center order-first lg:order-last mt-4'>
            <Image
              src={`/Linha.svg`} 
              width={700} 
              height={700}
              alt='MID'
              className='rounded-lg'
            />
          </div>
        </main>
        <AboutMe />
        <Projects />
        <Contact />
        <Footer />
        <Particles
          className="absolute inset-0 z-0 animate-fade-in" 
          quantity={200}
        />
      </div>
    </>
  )
}
