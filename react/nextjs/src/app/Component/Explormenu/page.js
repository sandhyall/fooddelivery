'use client'

import React from 'react';
import { menu_list } from '../../../../public/assets';

const Exploremenu = ({ category, setCategory }) => {
  
  const handleCategoryClick = (itemName) => {
    setCategory(prev => prev === itemName ? "All" : itemName);
  };

  return (
    <div className="flex flex-col max-w-7xl mx-auto p-4">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
          Discover Our Culinary Selection
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our artisanal menu featuring carefully crafted dishes from around the world
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8">
        {menu_list.map((item, index) => {
          const isActive = category === item.menu_name;
          
          return (
            <div 
              key={item.menu_name} 
              onClick={() => handleCategoryClick(item.menu_name)}
              className="bg-white overflow-hidden rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 group cursor-pointer"
            >
              <div className="relative">
                <img
                  src={item.menu_image}
                  alt={item.menu_name} 
                  className={`w-full h-48 object-cover transition-all duration-300 ${isActive ? 'opacity-80' : 'opacity-100'}`}
                />
              </div>
              <div className="p-4">
                <p className="text-xl font-semibold text-center text-gray-800">
                  {item.menu_name}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Exploremenu;
