'use client';
import React, { useState } from 'react';
import { Button, Link } from '@heroui/react';

const Navbar = () => {
  // State to manage active link
  const [activeLink, setActiveLink] = useState('Home'); // Set initial active link to Home

  return (
    <div className="flex items-center justify-end p-4 bg-gray-800">
      {/* Logo */}
      <img src="./logo.png" alt="Logo" className="h-8 w-auto mr-4" />

      <nav className="flex-1 flex justify-end items-center">
        {/* Main Navigation Links */}
        <div className="flex gap-8">
          {/* Home Link */}
          <div>
            <Link
              onClick={() => setActiveLink('Home')}
              className={`text-white hover:text-gray-300 ${activeLink === 'Home' ? 'underline font-bold' : ''}`}
              href="/Home"
            >
              Home
            </Link>
          </div>

          {/* Menu Link */}
          <div>
            <Link
              onClick={() => setActiveLink('Menu')}
              className={`text-white hover:text-gray-300 ${activeLink === 'Menu' ? 'underline font-bold' : ''}`}
              href="/Menu"
            >
              Menu
            </Link>
          </div>

          {/* Mobileapp Link */}
          <div>
            <Link
              onClick={() => setActiveLink('Mobileapp')}
              className={`text-white hover:text-gray-300 ${activeLink === 'Mobileapp' ? 'underline font-bold' : ''}`}
              href="/Appdowload"
            >
              Mobileapp
            </Link>
          </div>

          {/* Contact Us Link */}
          <div>
            <Link
              onClick={() => setActiveLink('ContactUs')}
              className={`text-white hover:text-gray-300 ${activeLink === 'ContactUs' ? 'underline font-bold' : ''}`}
              href="/Footer"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
