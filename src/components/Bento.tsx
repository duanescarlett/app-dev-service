import { span } from 'framer-motion/client'
import React from 'react'

const Bento = () => {
    return (
        <div className="min-h-screen px-4 py-12 text-zinc-50">
            <div className="mx-auto grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-12">

                {/* First Large Card */}
                <div className="col-span-1 sm:col-span-2 lg:col-span-7 p-4 h-96 row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.2] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none flex flex-col space-y-4">
                    <div className="justify-end group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-5 lg:p-10">
                        <p className="font-sans text-lg md:text-xl lg:text-3xl max-w-96 font-bold z-10">
                        We prioritize client collaboration, fostering open communication
                        </p>
                    </div>
                </div>

                {/* Right Column */}
                <div className="col-span-1 sm:col-span-1 lg:col-span-5 h-96">
                    <div className="flex flex-col w-full h-full gap-6">
                        {/* Card 1 */}
                        <div className="flex-1 rounded-3xl border border-white/[0.2]">
                        <div className="justify-start group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-5 lg:p-10">
                            <div className="font-sans text-lg md:text-xl lg:text-3xl max-w-96 font-bold z-10">
                            We are very flexible with time zone communications
                            </div>
                        </div>
                        </div>

                        {/* Card 2 */}
                        <div className="flex-1 rounded-3xl border border-white/[0.2]">
                        <div className="justify-start group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-5 lg:p-10">
                            <div className="font-sans text-lg md:text-xl lg:text-3xl max-w-96 font-bold z-10">
                            Our Tech Stack is always on the cutting edge
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Left Column */}
                <div className="col-span-1 sm:col-span-1 lg:col-span-5 h-96">
                <div className="flex flex-col w-full h-full gap-6">
                    {/* Card 3 */}
                    <div className="flex-1 rounded-3xl border border-white/[0.2]">
                    <div className="justify-start group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-5 lg:p-10">
                        <div className="font-sans text-lg md:text-xl lg:text-3xl max-w-96 font-bold z-10">
                        Tech enthusiast with a passion for development
                        </div>
                    </div>
                    </div>

                    {/* Card 4 */}
                    <div className="flex-1 rounded-3xl border border-white/[0.2]">
                    <div className="justify-start group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-5 lg:p-10">
                        <div className="font-sans text-lg md:text-xl lg:text-3xl max-w-96 font-bold z-10">
                        Let us develop your application
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                {/* Second Large Card */}
                <div className="col-span-1 sm:col-span-2 lg:col-span-7 p-4 h-96 row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.2] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none flex flex-col space-y-4">
                <div className="justify-end group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-5 lg:p-10">
                    <p className="font-sans text-lg md:text-xl lg:text-3xl max-w-96 font-bold z-10">
                    We are currently building an amazing SaaS platform
                    </p>
                </div>
                </div>
            </div>
        </div>

    )
}

export default Bento
