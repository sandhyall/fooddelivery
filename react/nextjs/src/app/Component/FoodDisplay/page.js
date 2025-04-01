'use client';
import React, { useContext } from 'react';
import { StoreContext } from '../Context/page'; // Make sure this path is correct
import FoodItem from '../Fooditem/page'; // Ensure this path is correct

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  if (!food_list) {
    return <div>Loading...</div>; // Add a loading state if context is not yet available
  }

  // Filter food list by the selected category
  const filteredFood = category === "All" ? food_list : food_list.filter(item => item.category === category);

  return (
    <div className="p-4 border-t border-red-700">
      <h2 className="text-3xl font-bold text-center mb-8">Top Dishes Near You</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFood.map((item) => (
          <FoodItem
            key={item._id}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            food_image={item.food_image}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
