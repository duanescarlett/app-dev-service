'use client'
import { useState } from "react"
import { ModalBody, ModalContent, ModalFooter } from "../../components/ui/AnimatedModal";
import CustomButton from '../../components/CustomButton';
import Logo from '@/public/Softblock-Logo.png';
import Image from 'next/image';

const page = () => {

    const [open, setOpen] = useState(true)
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
            alert('Message sent successfully!') 
        }
        
    }

    return (
        <>
            {/* <div className='bg-black-100'> */}
            <div className="min-h-screen flex items-center justify-center px-4">
                <form onSubmit={handleSubmit} className="sm:w-1/3 w-4/5">
                    <div className="flex justify-center">
                        <Image 
                            width={100}
                            height={100}
                            src={Logo} alt={"logo"} />
                    </div>
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
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="
                            w-full px-6 py-3 border-2 border-slate-600 text-white bg-blue hover:bg-orange rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default page
