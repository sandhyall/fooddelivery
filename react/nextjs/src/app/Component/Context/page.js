'use client';
import React, { createContext, useState } from 'react';
import { food_list } from '../../../../public/assets';  // Ensure the food_list is correctly imported

// Create the context
export const StoreContext = createContext(null);

// Create the StoreContextProvider component
const StoreContextProvider = ({ children }) => {
  const [category, setCategory] = useState("All");

  // Adding food_list and setCategory to the context
  const contextValue = {
    category,
    setCategory,
    food_list
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children} {/* Rendering children components */}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
