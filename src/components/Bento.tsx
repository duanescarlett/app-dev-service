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
                            <div className='justify-start group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-5 lg:p-10'>
                                <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10">
                                    I'm very flexible with time zone communications
                                </div>
                            </div>
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
