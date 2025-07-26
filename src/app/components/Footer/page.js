"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1a1a1a] text-white py-20 px-8 md:px-20 flex flex-col gap-10">
      {/* Top Section */}
      <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div className="flex items-center gap-4">
          {/* Profile image */}
          <img
            src="/profile.png"
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover bg-gray-800"
          />
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Let’s work <br /> together
          </h1>
        </div>

        <button className="relative group top-32 left-80 sm:left-2 w-40 h-40 rounded-full bg-[#4f5cf7] flex items-center justify-center text-white text-lg font-medium transition-transform hover:scale-105">
          Get in touch
        </button>
      </div>

      {/* Divider */}
      <hr className="border-gray-700 w-full my-4" />

      {/* Contact Info */}
      <div className="flex flex-wrap gap-6">
        <div className="px-6 py-3 border border-gray-600 rounded-full text-md hover:bg-gray-800 transition">
          abhayjsharma440@gmail.com
        </div>
        {/* <div className="px-6 py-3 border border-gray-600 rounded-full text-sm hover:bg-gray-800 transition">
          +91 123 456 7890
        </div> */}
      </div>

      {/* Bottom Bar */}
      <div className="w-full flex flex-col md:flex-row md:justify-between text-gray-400 text-sm mt-10 gap-4">
        <div className="flex gap-8">
          <div>
            <p className="font-medium mb-1">VERSION</p>
            <p>2024 © Edition</p>
          </div>
          <div>
            <p className="font-medium mb-1">LOCAL TIME</p>
            <p>{new Date().toLocaleTimeString()}</p>
          </div>
        </div>

        <div>
          <p className="font-medium mb-1">SOCIALS</p>
          <div className="flex gap-4">
            
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">Twitter</a>
            <a href="#" className="hover:underline">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
