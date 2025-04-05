'use client';
import React from 'react';
import { Button, Link } from '@heroui/react';

const Header = ({setshowlogin}) => {
  return (
    <div className="flex items-center p-6 bg-black relative">
      {/* Logo or other elements can go here */}
      
      {/* Right-side Search and Basket Icons with Sign Up Button */}
      <div className="absolute top-0 right-0 flex justify-end gap-4 items-center p-4">
        {/* Search Icon */}
        <div>
          <img src="./search_icon.png" alt="Search" className="h-6 w-auto" />
        </div>

        {/* Basket Icon */}
        <div>
        <Link href="/Cart"> <img src="./basket_icon.png" alt="Basket" className="h-6 w-auto" /></Link>  
        </div>

        {/* Sign Up Button */}
        <div>
          <Button
            as="a"
            className="text-white border border-gray-500 rounded-full p-2 cursor-pointer transition-all duration-500 ease-in-out hover:bg-blue-600"
            href="#"
            variant="flat"
            onClick={()=>setshowlogin(true)}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
