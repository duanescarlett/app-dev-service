'use client'
import { useState } from "react"
import { span } from 'framer-motion/client'
import CustomButton from './CustomButton'
import { ModalBody, ModalContent, ModalFooter } from "./ui/AnimatedModal"

const Bento = () => {
    const [status, setStatus] = useState("")
    const [open, setOpen] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleChange = (e: any) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        console.log("Form Data Submitted:", formData)
        
        try {
            const res = await fetch('/api/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            const data = await res.json()
            if (data.success) {
                alert('Email sent successfully!')  
                setFormData({ name: "", email: "", message: "" }); // Reset form after successful submission
            } else {
                alert('Error sending email: ' + data.error)
            }
        } catch (error) {
            console.error("Error:", error);
            setStatus("An error occurred. Please try again later.");
        }
        
    }

    return (
        <>
        {/* Modal */}
        <div className='z-100'>
            <ModalBody open={open} setOpen={setOpen}>
                <ModalContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Field */}
                        <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            required
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                        </div>

                        {/* Email Field */}
                        <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your email address"
                            required
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                        />
                        </div>

                        {/* Message Field */}
                        <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Write your message here"
                            required
                            rows={5}
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                        ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div>
                        <button
                            type="submit"
                            className="w-full px-6 py-3 border-2 border-slate-600 text-white bg-blue-700 hover:bg-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                        >
                            Send Message
                        </button>
                        </div>
                    </form>
                </ModalContent>
                <ModalFooter>
                <button
                    className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
                    onClick={() => setOpen(false)}
                >
                    Close
                </button>
                </ModalFooter>
            </ModalBody>
        </div>
            <div className="min-h-screen px-4 py-12 text-zinc-50">
                <div className="mx-auto grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-12">

                    {/* First Large Card */}
                    <div className="coding-bg-image col-span-1 sm:col-span-2 lg:col-span-7 p-4 h-96 row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.2] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none flex flex-col space-y-4">
                        <div className="absolute inset-0 bg-gradient-to-r from-black/100 to-transparent"></div>
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
                            <div className="earth-bg-image flex-1 rounded-3xl border border-white/[0.2]">
                                <div className="justify-start group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-5 lg:p-10">
                                    <div className="font-sans text-lg md:text-xl lg:text-3xl max-w-96 font-bold z-10">
                                        We are very flexible with time zone communications
                                    </div>
                                </div>
                            </div>

                            {/* Card 2 */}
                        
                            <div className="flex-1 rounded-3xl border border-white/[0.2] justify-start group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-5 lg:p-10 overflow-hidden">
                                <div className="font-sans text-lg md:text-xl lg:text-2xl max-w-75 font-bold z-10 pt-7">
                                    <p>Our Tech Stack</p> 
                                    <i className='text-sm'>is always on the cutting edge</i>
                                </div>

                                <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2 z-11">
                                    <div className="flex flex-col gap-3 md:gap-3 lg:gap-8 -mt-4">
                                        <span className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50  lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                                            ReactJS
                                        </span>
                                        <span className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50  lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                                            Express
                                        </span>
                                        <span className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50  lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                                            Typescript
                                        </span>
                                        <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]">

                                        </span>
                                    </div>
                                    
                                    <div className="flex flex-col gap-3 md:gap-3 lg:gap-8 -mt-10">
                                        <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]">
                                            Typescript
                                        </span>
                                        <span className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50  lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                                            Nginx
                                        </span>
                                        <span className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50  lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                                            
                                        </span>
                                        <span className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50  lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                                            GraphQL
                                        </span>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Bottom Left Column */}
                    <div className="col-span-1 sm:col-span-1 lg:col-span-5 h-96">
                        <div className="flex flex-col w-full h-full gap-6">
                            {/* Card 3 */}
                            <div className="wireframe-bg-image flex-1 rounded-3xl border border-white/[0.2]">
                                <div className="justify-start group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-5 lg:p-10">
                                    <div className="font-sans text-lg md:text-xl lg:text-3xl max-w-96 font-bold z-10">
                                        Tech enthusiast with a passion for development
                                    </div>
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div className="multicolor-bg-image flex-1 rounded-3xl border border-white/[0.2]">
                                <div className="pt-10 md:pt-5 sm:pt-5 bg-gradient-to-b from-black/60 to-transparent justify-start group-hover/bento:translate-x-2 transition duration-200 relative flex flex-col items-center">
                                    {/* <!-- Heading --> */}
                                    <div className="font-sans text-lg md:text-xl lg:text-3xl max-w-96 font-bold z-10 text-center">
                                        Let us Develop your Application
                                    </div>

                                    {/* <!-- Button --> */}
                                    {/* <button className="mt-5 px-6 py-3 text-sm md:text-base lg:text-lg font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-200">
                                        Let's Start
                                    </button> */}

                                    <CustomButton text={'Lets Start'} onClick={() => setOpen(true)} />
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Second Large Card */}
                    <div className="sass-bg-image col-span-1 sm:col-span-2 lg:col-span-7 p-4 h-96 row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.2] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none flex flex-col space-y-4">
                        <div className="justify-start group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-5 lg:p-10">
                            <p className="font-sans text-2xl md:text-3xl lg:text-4xl max-w-96 font-bold z-10">
                                We are currently building an amazing SaaS platform
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bento
