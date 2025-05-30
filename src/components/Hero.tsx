import Image from 'next/image'
import { Spotlight } from './ui/Spotlight'
import Logo from '@/public/Nugentry_Business_Solutions_logo.png'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
// import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { lazy } from 'react'

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
        <div>
            <Spotlight
                className='-top-40 -left-10 
                md:-left-32 md:-top-20 h-screen'
                fill='white' />

            <Spotlight
                className='-top-10 -left-full 
                h-[80vh] w-[50vw]'
                fill='white' />

            <Spotlight
                className='top-28 left-80 h-[80vh]
                w-[50vw]'
                fill='blue' />
            
        </div>

        <div className="w-full dark:bg-black-100 
        bg-white dark:bg-grid-white/[0.3] 
        bg-grid-black/[0.2] flex 
        items-center justify-center
        absolute top-0 left-0">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none 
          inset-0 flex items-center 
          justify-center dark:bg-black-100 
          bg-white [mask-image:radial-gradient(ellipse_at_center,
          transparent_20%,black)]" />
        </div>

        <div className='flex justify-center relative my-5 z-10'>
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] 
          flex flex-col items-center justify-center'>
            {/* <h2 className='uppercase tracking-widest
            text-xs text-center text-blue-100 max-w-80'>
              Dynamic Web Magic with Next.js
            </h2> */}

            <div className=''>
              <Image 
                src={Logo}
                width={200}
                height={250} 
                priority={true}
                alt={'nugentry logo'} 
              />
            </div>

            <TextGenerateEffect 
              className='text-center text-[40px]
              md:text-5xl lg:text-6xl' 
              words={'Transforming concepts into Seamless Experiences'}            
            />

            {/* <p className='text-center md:tracking-wider
            mb-4 text-sm md:text-lg lg:text-2xl'>
              Hi, Welcome To Softblock
            </p> */}

            <a href="#about">
              {/* <MagicButton 
                title="Show Our Work"
                icon={<FaLocationArrow />}
                position='right'
              /> */}
            </a>
          </div>
        </div>

    </div>
  )
}

export default Hero

