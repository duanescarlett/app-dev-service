'use client'
import { useState } from "react"
import { servicePackages } from '@/data'
import Image from 'next/image'
import { Button } from './ui/MovingBorders'
import Logo from '@/public/Softblock-Logo.png'
import { ModalBody, ModalContent, ModalFooter } from "./ui/AnimatedModal"

const Services = () => {
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
    <div className="py-20">
      <h1 className="heading">
        Our <span className="text-purple">Services</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-6 p-6">
        {servicePackages.map((card) => (
          <Button
            onClick={() => setOpen(true)}
            key={card.id}
            //   random duration will be fun , I think , may be not
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              // add this border radius to make it more rounded so that the moving border is more realistic
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            // remove bg-white dark:bg-slate-900
            className="text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <Image
                width={150}
                height={150}
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-0 text-center">
                <h1 className="text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
    
    <div className='z-100'>
      <ModalBody open={open} setOpen={setOpen}>
        <ModalContent>
          <form onSubmit={handleSubmit} className="space-y-6">
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
    </>
  )
}

export default Services
