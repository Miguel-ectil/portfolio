import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { InformationCircleIcon, PlayIcon } from '@heroicons/react/24/outline'
import Particles from '@/hooks/particles'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='relative overflow-hidden bg-gradient-to-b  bg-[#171023]'>
      <Particles
        className="absolute inset-0 z-10 animate-fade-in"
        quantity={200}
      />
        <Header />
        <main className='pb-10 pl-4 lg:pl-16 flex flex-col lg:flex-row lg:items-center pt-[70px] lg:pt-0 z-40'>
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
        <Particles
          className="absolute inset-0 z-5 animate-fade-in"
          quantity={200}
        />
        <div className='lg:px-5 xl:px-5 overflow-hidden'>
          <div className='flex lg:rounded-xl xl:rounded-xl bg-[#2C243B] px-4 lg:px-14 xl:px-20 gap-6 lg:gap-6 xl:gap-6  flex-col lg:flex-row'>
            <div className='lg:w-1/2 lg:p-10 flex mt-6'>
              <Image
                src={`/my.png`} 
                width={600} 
                height={600}
                alt='MID'
                className='rounded-lg'
              />
            </div>
            <div className='flex-col space-y-2 py-10 md:space-y-4 lg:h-[38vh] lg:justify-end'>
              <h1 className='text-3xl font-bold'>
                I’m a passionate software developer looking for my first international oppotunity            
              </h1>
              <p className='text-shadow-md text-gray-400 max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl'>
                Beyond coding, I'm a coffee enthusiast, a cat lover, and a self-taught artist who enjoys spending my free time doodling. I am currently seeking opportunities to bring my skills and enthusiasm to a tech company in the United States or Europe and am excited about the prospect of relocating to pursue new challenges.
              </p>
              <div className='flex space-x-3'>
                <button 
                  className='md:text-xl flex cursor-pointer items-center gap-x-2 rounded-lg bg-[#8A42DB] py-1.5 text-sm font-semibold text-white transition hover:opacity-75 px-2 md:px-4 md:py-2.5'
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
              </div>
            </div>
          </div>
        </div>
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
        <div className='lg:px-5 xl:px-5 mt-10'>
          <div className='flex lg:rounded-xl xl:rounded-xl bg-[#2C243B] px-4 lg:px-14 xl:px-20 gap-x-1 lg:gap-x-6 xl:gap-x-1 flex-col lg:flex-row py-4'>
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
                    <Image
                      src={`/logo-github.svg`} 
                      width={30} 
                      height={30}
                      alt='GitHub'
                      className='rounded-lg'
                    />
                  </div>
                  <div className='p-2 rounded-lg bg-[#413A4F]'>
                    <Image
                      src={`/logo-linkedin.svg`} 
                      width={30} 
                      height={30}
                      alt='Linkedin'
                      className='rounded-lg'
                    />
                  </div>
                  <div className='p-2 rounded-lg bg-[#413A4F]'>
                    <Image
                      src={`/logo-instagram.svg`} 
                      width={30} 
                      height={30}
                      alt='Instagram'
                      className='rounded-lg'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='flex-col lg:w-1/2 space-y-2 mt-10 md:space-y-4 lg:h-[38vh] lg:justify-end'>
              <input
                id="bane"
                name="email"
                type="text"
                autoComplete="name"
                required
                className="min-w-0 flex-auto rounded-md bg-[#171023] w-full px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-[#7DFFAF] sm:text-base sm:leading-6"
                placeholder="Name"
              />

              <input
                id="email-address"
                name="email"
                type="email"
                required
                className="min-w-0 flex-auto rounded-md bg-[#171023] w-full px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-[#7DFFAF] sm:text-base sm:leading-6"
                placeholder="Enter your email"
              />
              <textarea
                id="message"
                name="message"
                required
                className="flex-auto rounded-md bg-[#171023] w-full px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-[#7DFFAF] sm:text-base sm:leading-6 h-[160px] border-none"
                placeholder="Your Message"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
