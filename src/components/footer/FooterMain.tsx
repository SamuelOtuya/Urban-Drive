
"use client";

import { Footer } from "flowbite-react";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

export function FooterMain() {
  return (
          <Footer className="bg-slate-950 text-white py-5">
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
      

      <div className="gap-4 col-span-2"><div className="border-t border-white md:col-span-2"></div>
    {/* <p className="flex justify-center mt-4 md:mt-0 col-span-2">&copy; {new Date().getFullYear()} UrbanDrive. All rights reserved.</p> */}
    <div className="md:col-span-2 flex flex-col md:flex-row justify-center items-center mt-4 text-sm ">
          <p className="text-center">
            Copyright © {new Date().getFullYear()}{" "}
            <a
              href="https://urbandrive.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-600 font-medium text-orange-500"
            >
              Urban Drive
            </a>
            . Designed by{" "}
            <a
              href="https://greenbear.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 font-medium text-green-700"
            >
              GreenBear Technologies
            </a>
            . All rights reserved.
          </p>
        </div>
</div>  
    

        </div>
        
    </Footer>
  
  
  );
}
