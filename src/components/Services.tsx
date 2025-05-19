'use client'
import { useState } from "react"
import { servicePackages } from '@/data'
import Image from 'next/image'
import { Button } from './ui/MovingBorders'
import Logo from '@/public/Nugentry_Business_Solutions_logo.png'
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

  const services = [
    "AI Automation",
    "Web Development",
    "Digital Marketing",
    "Data Analysis",
    "Business Registration",
    "Company Incorporation",
    "Financial Projections",
    "Scaling and Growth Plans",
    "Appointment Setting",
    "WhatsApp Customer Service for your business",
    "Marketing Strategies & Campaigns",
    "Social Media Management",
  ];

  return (
    <>
    <div className="py-20">
      <h1 className="heading">
        Our <span className="text-gold">Services</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {services.map((service, index) => (
          <a
            key={index}
            href={`#${service.replace(/\s+/g, '-').toLowerCase()}`}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fadeIn flex items-center justify-center"
          >
            <h2 className="text-lg font-semibold text-gray-800 text-center">{service}</h2>
          </a>
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
      </ModalBody>
    </div>
    </>
  )
}

export default Services
