'use client';
import React from 'react';
// import { menu_list } from '../../../../public/assets';
import { menu_list } from '../../../../public/assets';

const Exploremenu = ({ category, setCategory }) => {
  // Handle category selection/deselection
  const handleCategoryClick = (itemName) => {
    setCategory((prev) => (prev === itemName ? "All" : itemName));
  };

  return (
    <div className="flex flex-col border-t border-red-700 max-w-7xl mx-auto py-3">
      <div className="text-center  mb-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
          Discover Our Culinary Selection
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our artisanal menu featuring carefully crafted dishes from around the world
        </p>
      </div>

      {/* Horizontal Scrollable Menu */}
      <div className="flex overflow-x-auto pb-4 gap-5 scrollbar-hide">
        {menu_list.map((item) => {
          const isActive = category === item.menu_name;

          return (
            <div
              key={item.menu_name}
              onClick={() => handleCategoryClick(item.menu_name)}
              className={`flex flex-col items-center flex-shrink-0 w-32 transition-all duration-200 cursor-pointer
                ${isActive ? 'scale-105 text-red-500' : 'opacity-90 hover:opacity-100'}`}
            >
              {/* Image */}
              <img
                src={item.menu_image}
                alt={item.menu_name}
                className="w-24 h-24 rounded-full object-cover shadow-sm transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
              {/* Category Name */}
              <p className="text-sm font-medium text-gray-800 mt-2 text-center px-1">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Exploremenu;
