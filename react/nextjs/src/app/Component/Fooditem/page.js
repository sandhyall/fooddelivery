import React from 'react';

const FoodItem = ({ id, name, price, description, food_image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={food_image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <p className="text-xl font-semibold">{name}</p>
        <img src="/rating_starts.png" alt="Rating" className="w-16 h-4 mt-2" />
        <p className="text-gray-600 text-sm mt-2">{description}</p>
        <p className="text-lg font-semibold mt-2">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
