"use client";

import { Link, useLocation } from "react-router-dom";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter, FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { IoMail } from "react-icons/io5";

type Tab = {
  name: string;
  link: string;
};

export function DesktopHeader() {
  const location = useLocation(); // Get the current route

  const tabs: Tab[] = [
    { name: "Home", link: "/" },
    { name: "Find A Car", link: "/find-car" },
    { name: "About Us", link: "/about" },
    { name: "Contact Us", link: "/contact" },
    { name: "Blog", link: "/blog" },
    { name: "Faqs", link: "/faqs" },
  ];

  return (
    <div>
      {/* Top Header */}
      <div className="bg-[#e86e25] text-white p-3">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-4">
            <a href="https://www.facebook.com/urbandriveautosltd/" target="_blank">
              <FaFacebook className=""/>
            </a>
            <a href="https://x.com/UrbanDriveAutos?t=FqAaqFH3g5-vusYu4zKAuw" target="_blank">
              <FaTwitter className=""/>
            </a>
            <a href="https://www.instagram.com/urbandriveautos/" target="_blank">
              <FaInstagram className=""/>
            </a>
            <a href="https://api.whatsapp.com/send?phone=254770070300" target="_blank">
              <FaWhatsapp className="" />
            </a>
            <FaPhoneAlt className="" />
            <span className="text-sm">(+254) 770070300</span>
            <IoMail className="text-lg"/>
            <span className="text-sm">info@urbandrive.co.ke</span>
          </div>
          <div className="flex gap-4">
            <button className="bg-white text-orange-500 px-4 py-1 rounded">Register</button>
            <button className="bg-white text-orange-500 px-4 py-1 rounded">Login</button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-[#e2d9ce] p-6">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <img src={logo} alt="Urban Drive Logo" className="h-8 w-25" />
          </div>
          <div className="flex gap-4">
            {tabs.map((tab) => (
              <Link key={tab.name} to={tab.link}>
                <button
                  className={`px-4 py-2 rounded ${
                    location.pathname === tab.link
                      ? "bg-[#e86e25] text-white"
                      : "hover:text-[#e86e25]"
                  }`}
                >
                  {tab.name}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
