import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Text from '../components/Text'
import WhatsAppPopup from '../Animation/WhatsAppPopup'

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures it runs once when the component mounts

  return (
   <div className="relative min-h-screen">
   
       <div className="fixed w-full z-10">
               <Navbar />
             </div>
             <img 
     src="img/cont.png" 
     alt="Gym Image" 
     className="w-full h-[150px] sm:h-[400px] md:h-[500px] object-cover"
   />

   <div className='mt-10'>
   <Text title="CONTACT -US" />
   </div>
   <div className="flex flex-col md:flex-row h-full mt-7">
    
        {/* Left Column: Full Screen Map */}
        <div className="md:w-2/3 w-full h-[60vh]">
        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d889.9138135351782!2d72.85824469752686!3d21.160998929731637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04faf0b6e24f3%3A0x3bf91c3973af91bf!2sICICI%20BANK%20ATM!5e1!3m2!1sen!2sin!4v1739443106605!5m2!1sen!2sin"
  className="w-full h-full rounded-xl border-0"
  allowFullScreen=""
  loading="lazy"
/>

        </div>

        {/* Right Column: Form */}
        <div className="md:w-1/3 w-full  p-6">
          <div className="bg-black text-white p-8 rounded-2xl shadow-lg max-w-xl mx-auto">
      <h4 className="text-sm font-semibold tracking-wide uppercase text-gray-400">
        welcome to gym city
      </h4>
      <h2 className="text-4xl font-bold mt-2">
        Ready to Transform? <br /> Let's Connect! <span className='text-green-600'>Gym City</span>
      </h2>
      <p className="text-gray-400 mt-4 text-justify">
        Achieve your fitness goals with us! Whether you have questions about memberships, training programs, or facilities, we're here to help.
      </p>
      <div className="mt-6 space-y-4">
        <div className="flex items-center space-x-3">
          <span className="text-green-400 text-xl">📍</span>
          <p className="text-gray-300">1st Floor, Near Lal Building, Navagam Udhana Surat. 394210</p>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-green-400 text-xl">📞</span>
          <p className="text-gray-300 font-semibold">+91 74051 44232</p>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-green-400 text-xl">📧</span>
          <p className="text-gray-300">info@example.com</p>
        </div>
      </div>
    </div>
        </div>
      </div>
      <WhatsAppPopup/>
   </div>
  )
}

export default Contact