import { span } from 'framer-motion/client'
import React from 'react'

const Bento = () => {
    return (
        <div className='min-h-screen px-4 py-12 text-zinc-50'>
            <div className='mx-auto grid w-full grid-flow-dense grid-cols-12 gap-6'>

                <div className='col-span-7 p-4 h-96 row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.2] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4'>

                <div className='justify-end group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-5 lg:p-10'>
                    <p className='font-sans text-lg lg:text-3xl max-w-96 font-bold z-10'>
                        I prioritize client collaboration, fostering open communication
                    </p>
                </div>

                </div>

                <div className='col-span-5 h-96'>
                    <div className="flex flex-col w-full h-full gap-6">
                        <div className="flex-1 rounded-3xl border border-white/[0.2]">
                            <div className='justify-start group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-5 lg:p-10'>
                                <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10">
                                    I'm very flexible with time zone communications
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 rounded-3xl border border-white/[0.2]">
                        <div className="justify-center group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-5 lg:p-10"><div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">We constantly improve</div><div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10">Our tech stack</div>
                        
                        <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2"><div className="flex flex-col gap-3 md:gap-3 lg:gap-8"><span className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50  lg:opacity-100 rounded-lg text-center bg-[#10132E]">ReactJS</span><span className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50  lg:opacity-100 rounded-lg text-center bg-[#10132E]">Express</span><span className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50  lg:opacity-100 rounded-lg text-center bg-[#10132E]">Typescript</span><span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span></div><div className="flex flex-col gap-3 md:gap-3 lg:gap-8"><span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span><span className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50  lg:opacity-100 rounded-lg text-center bg-[#10132E]">VueJS</span><span className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50  lg:opacity-100 rounded-lg text-center bg-[#10132E]">NuxtJS</span><span className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50  lg:opacity-100 rounded-lg text-center bg-[#10132E]">GraphQL</span>
                        </div>
                        
                        </div></div>
                        </div>
                    </div>
                </div>

                <div className='col-span-5 bg-blue-300  p-4 h-80'>sf</div>
                
                <div className='col-span-7 bg-red-300 p-4 h-80'>ds</div>
            </div>
        </div>
    )
}

export default Bento
