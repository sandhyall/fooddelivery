'use client';
import React, { useContext } from 'react';
import { StoreContext } from '../Context/page';

const FoodItem = ({ id, name, price, description, food_image }) => {
  const { cartitem, addTocart, removeFromcart } = useContext(StoreContext);
  //   const [itemCount, setItemCount] = useState(0);

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="relative">
        {/* Image */}
        <img
          src={food_image}
          alt={name}
          className="w-full h-56 object-cover transition-transform transform hover:scale-105 duration-300 ease-in-out"
        />

        {/* Add/Remove Button */}
        {!cartitem[id] ? (
          <img
            onClick={() => addTocart(id)}
            src='/add_icon_white.png'
            alt='icon'
            className="absolute bottom-2 right-2 flex hover:text-red-700 w-9 h-10 cursor-pointer"
          />
        ) : (
          <div className="absolute top-4 right-4 flex items-center space-x-2">
            <img
              onClick={() => removeFromcart(id)}
              src='/remove_icon_red.png'
              alt='remove icon'
              className="w-6 h-6 cursor-pointer"
            />
            <p className="text-white">{cartitem[id]}</p>
            <img
              onClick={() => addTocart(id)}
              src='/add_icon_green.png'
              alt='add icon'
              className="w-6 h-6 cursor-pointer"
            />
          </div>
        )}

        {/* Rating */}
        <img
          src="/rating_starts.png"
          alt="Rating"
          className="top-2 left-2 w-16 h-4"
        />
      </div>

      <div className="p-4">
        <p className="text-xl font-semibold">{name}</p>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
        <p className="text-lg font-semibold mt-2">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
