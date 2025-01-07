
"use client";

import { Footer } from "flowbite-react";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

export function FooterMain() {
  return (
          <Footer className="bg-slate-950 text-white py-8">
       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              {/* <MapPin size={20} /> */}
              <FaLocationPin/>
              <span>KIAMBU ROAD - BYPASS JUNCTION</span>
            </div>
            <div className="flex items-center gap-2">
              {/* <Mail size={20} /> */}
              <IoMail/>
              <span>info@urbandrive.co.ke</span>
            </div>
            <div className="flex items-center gap-2">
              {/* <Phone size={20} /> */}
              <FaPhoneAlt/>
              <span>+254 770070300</span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-orange-500"><FaFacebook/></a>
            <a href="#" className="hover:text-orange-500"><FaTwitter/></a>
            <a href="#" className="hover:text-orange-500"><FaInstagram/></a>
          </div>
        </div>
      

        
    <div className="border-t border-white md:col-span-2"></div>
    <Footer.Copyright href="#" by="Flowbite™" year={2022}>
          <span className="mx-2">|</span>
          <a
            href="/privacy-policy"
            className="text-white hover:text-blue-600"
          >
            Privacy Policy
          </a>
          <span className="mx-2">|</span>
          <a
            href="/terms-of-service"
            className="text-white hover:text-blue-600"
          >
            Terms of Service
          </a>
          <span className="mx-2">|</span>
          <a
            href="/contact"
            className="text-white hover:text-blue-600"
          >
            Contact Us
          </a>
          <span className="mx-2">|</span>
          <a
            href="/about-us"
            className="text-white hover:text-blue-600"
          >
            About Us
          </a>
        </Footer.Copyright>
        </div>
    </Footer>
  
  
  );
}
