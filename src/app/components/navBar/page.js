"use client"
import React, { useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-5 text-white text-xl">
      <h1 className="inline">© code by Abhay</h1>
      {/* Hamburger Icon */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline float-right"
      >
        • Menu {/* <Bars3Icon className="h-6 w-6" aria-hidden="true" /> */}
      </button>

      {/* Sidebar Menu */}
      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
        <div
          className={`fixed inset-0 transition-opacity duration-500 ${
            !open ? "opacity-0" : "bg-black bg-opacity-50"
          }`}
        />

        <div className="fixed inset-0 flex">
          <Dialog.Panel
            className={`relative grid place-items-center justify-start bg-black 
              ${!open ? "translate-x-full" : "translate-x-0"}
              w-full sm:max-w-xl sm:overflow-hidden  text-white
              h-full sm:h-auto text-5xl sm:text-7xl lg:text-6xl`}
          >
            {/* Close Icon */}
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-600 focus:outline-none"
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Navigation Links */}
            <nav className="mt-8 space-y-4 px-6 sm:space-y-6 sm:px-10 lg:px-10">
              <h6 className="text-sm pb-4">NAVIGATION</h6>
              <hr className="w-screen pb-6" />
              <a href="#" className="block sm:text-white">
                Home
              </a>
              <a href="#" className="block sm:text-white">
                About
              </a>
              <a href="#" className="block sm:text-white">
                Services
              </a>
              <a href="#" className="block sm:text-white">
                Contact
              </a>
            </nav>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default NavBar;
