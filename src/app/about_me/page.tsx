'use client'
import Image from 'next/image'

export default function AboutMe() {

  const handleDownloadAndPrint = () => {
    const url = '/documento/curriculum.docx'; 

    const link = document.createElement('a');
    link.href = url;
    link.download = 'curriculum.docx'; 
    link.target = '_blank'; 

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };

  return (
    <div className='lg:px-5 xl:px-5 overflow-hidden z-40 relative'>
      <div className='flex lg:rounded-xl xl:rounded-xl bg-[#2c243bc4] px-4 lg:px-14 xl:px-20 gap-6 lg:gap-6 xl:gap-6  flex-col lg:flex-row'>
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
            I’m a passionate software developer looking for my first international opportunity            
          </h1>
          <p className='text-shadow-md text-gray-400 max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl'>
            Beyond coding, I'm a coffee enthusiast, a cat lover, and a self-taught artist who enjoys spending my free time doodling. I am currently seeking opportunities to bring my skills and enthusiasm to a tech company in the United States or Europe and am excited about the prospect of relocating to pursue new challenges.
          </p>
          <div className='flex space-x-3'>
            <button 
              className='md:text-xl flex cursor-pointer items-center gap-x-2 rounded-lg bg-indigo-500 py-1.5 text-sm font-semibold text-white transition hover:opacity-75 px-2 md:px-4 md:py-2.5'
              onClick={handleDownloadAndPrint}
            >
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
  );
}
