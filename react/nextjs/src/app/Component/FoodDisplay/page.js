'use client';
import React, { useContext } from 'react';
import { StoreContext } from '../Context/page'; // Make sure this path is correct
import FoodItem from '../Fooditem/page'; // Ensure this path is correct

const FoodDisplay = () => {
  // Ensure StoreContext is not null and extract food_list
  const { food_list } = useContext(StoreContext);

  if (!food_list) {
    return <div>Loading...</div>; // Add a loading state if context is not yet available
  }

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-center mb-8">Top Dishes Near You</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {food_list.map((item, index) => {
          return (
            <FoodItem 
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              food_image={item.food_image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
