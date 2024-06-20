import Image from 'next/image'

export default function Projects() {
  return (
    <div className='z-40 relative'>
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
      <div className='flex px-4 lg:px-14 xl:px-20 gap-6 lg:gap-6 xl:gap-6 mt-8 flex-col lg:flex-row b'>
        <div className='flex rounded-xl p-4 hover:bg-[#2C243B] border cursor-pointer'>
          <div className='lg:w-1/2 lg:p-10 flex'>
            <Image
              src={`3d_avatar.svg`} 
              width={700} 
              height={700}
              alt='MID'
              className='rounded-lg'
            />
          </div>
        </div>
        <div className='flex rounded-xl p-4 hover:bg-[#2C243B] border cursor-pointer'>
          <div className='lg:w-1/2 lg:p-10 flex '>
            <Image
              src={`3d_avatar.svg`} 
              width={700} 
              height={700}
              alt='MID'
              className='rounded-lg'
            />
          </div>
        </div>
        <div className='flex rounded-xl p-4 hover:bg-[#2C243B] border cursor-pointer'>
          <div className='lg:w-1/2 lg:p-10 flex '>
            <Image
              src={`/3d_avatar.svg`} 
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
    </div>
  )
}
