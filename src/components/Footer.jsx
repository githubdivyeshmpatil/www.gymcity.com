import { Link,  } from "react-router-dom";
import React from 'react';
import { CgGym } from "react-icons/cg";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <div className="relative mt-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-[url('/img/lines.jpg')] bg-cover bg-center "></div>

      {/* Footer Content */}
      <div className="relative z-10 bg-black bg-opacity-70 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <img src="/img/newlogo.png" alt="Company Logo" className="w-24 h-24" />
              <p className="mt-6 text-md sm:text-base font-semibold text-white-700 text-justify">
                Your transformation starts here! Join us to reach your fitness goals with expert trainers and top-notch equipment.
              </p>
              <div className="flex justify-start space-x-6 p-4">
              <a href="/" target="_blank" rel="noopener noreferrer">
  <img src="img/whatsapp.png" alt="Facebook" className="w-10 h-10 hover:opacity-80" />
</a>
<a   href="https://www.instagram.com/gymcity27/profilecard/?igsh=MWpoNmMzMHAzYWdrZg=="
 target="_blank" rel="noopener noreferrer">
  <img src="img/instagram.png" alt="Twitter" className="w-10 h-10 hover:opacity-80" />
</a>
<a href="/" target="_blank" rel="noopener noreferrer">
  <img src="img/facebook.png" alt="Instagram" className="w-10 h-10 hover:opacity-80" />
</a>
<a href="/" target="_blank" rel="noopener noreferrer">
  <img src="img/google.png" alt="WhatsApp" className="w-10 h-10 hover:opacity-80" />
</a>

              </div>
            </div>

            <div class="p-4">
  <h2 class="font-semibold text-md mb-4 font-roboto">Quick Links</h2>
  <ul class="space-y-4">
    <Link to='/' class="flex items-center space-x-4">
    <CgGym  size={20} color='orange'/>

      <p class="font-semibold">Home</p>
    </Link>
    <Link to="/about-us" class="flex items-center space-x-4">
    <CgGym  size={20} color='orange'/>

      <p class="font-semibold">About Us</p>
    </Link>
    <Link to="/services" class="flex items-center space-x-4">
    <CgGym  size={20} color='orange'/>

      <p class="font-semibold">Services</p>
    </Link>
    <Link to="/shop" class="flex items-center space-x-4">
    <CgGym  size={20} color='orange'/>

      <p class="font-semibold">Shop</p>
    </Link>
    <Link to="/contact" class="flex items-center space-x-4">
    <CgGym  size={20} color='orange'/>

      <p class="font-semibold">Contact</p>
    </Link>
  </ul>
</div>


            <div>
              <h2 className="font-semibold text-xl mb-4 font-roboto">Follow Us</h2>
              <div className="grid grid-cols-2 gap-2">
                <img src="img/foo1.jpg" alt="Instagram Photo" className="w-full h-auto" />
                <img src="img/foo2.jpg" alt="Instagram Photo" className="w-full h-auto" />
                <img src="img/foo3.jpg" alt="Instagram Photo" className="w-full h-auto" />
                <img src="img/foo4.jpg" alt="Instagram Photo" className="w-full h-auto" />
              </div>
            </div>

            <div>
              <h2 className="font-semibold text-xl mb-4 font-roboto">Address</h2>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-red-500 text-2xl" />
                  <p className="font-semibold text-md">
                    1st Floor, Near Lal Building, Navagam Udhana Surat. 394210
                  </p>
                </li>
                <li className="flex items-center space-x-3">
                  <FaEnvelope className="text-orange-500 text-2xl" />
                  <p className="font-semibold text-md">malikprabhash786@gmail.com</p>
                </li>
                <li className="flex items-center space-x-3">
                  <FaPhoneAlt className="text-orange-500 text-2xl" />
                  <p className="font-semibold text-md">+91 74051 44232</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 mt-12 border-t border-white-800">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:text-left items-center sm:items-start text-center">
              <p className="mt-4 sm:mt-0 text-sm text-white font-semibold">
                Copyright © 2025 Gymcity | All Rights Reserved Developed by divyeshpatil12
              </p>
              <p className="text-sm text-white font-semibold space-y-2 space-x-5 sm:space-y-0">
                <span className="block sm:inline mb-2 sm:mb-0">Terms & Conditions</span>
                <span className="block sm:inline mb-2 sm:mb-0">Privacy Policy</span>
                <span className="block sm:inline mb-2 sm:mb-0">Contact Us</span>
                <span className="block sm:inline mb-2 sm:mb-0 text-orange-500">9529093349</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
