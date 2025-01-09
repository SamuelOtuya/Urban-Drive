"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter, FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { IoMail } from "react-icons/io5";

type Tab = {
  name: string;
  link: string;
};

export function DesktopHeader() {
  const [activeTab, setActiveTab] = useState("Home");

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
      <div className="bg-orange-500 text-white p-2">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-4">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaWhatsapp />
            <FaPhoneAlt />
            <span>(+254) 770070300</span>
            <IoMail />
            <span>info@urbandrive.co.ke</span>
          </div>
          <div className="flex gap-4">
            <button className="bg-white text-orange-500 px-4 py-1 rounded">Register</button>
            <button className="bg-white text-orange-500 px-4 py-1 rounded">Login</button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div>
        <nav className="bg-[#e2d9ce] p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div>
              <img src={logo} alt="Urban Drive Logo" className="h-8 w-25" />
            </div>
            <div className="flex gap-4">
              {tabs.map((tab) => (
                <Link key={tab.name} to={tab.link}>
                  <button
                    className={`px-4 py-2 rounded ${
                      activeTab === tab.name
                        ? "bg-orange-500 text-white"
                        : "hover:text-orange-500"
                    }`}
                    onClick={() => setActiveTab(tab.name)}
                  >
                    {tab.name}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
