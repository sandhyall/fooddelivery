
'use client';
import React, { createContext, useState, useEffect } from 'react';
import { food_list } from '../../../../public/assets';  

// Create the context
export const StoreContext = createContext(null);

// Create the StoreContextProvider component
const StoreContextProvider = ({ children }) => {
  const [category, setCategory] = useState("All");
  const [cartitem, setcartitem] = useState({});

  const addTocart = (itemId) => {
    if (!cartitem[itemId]) {//first time visite crete the id value will be number of quantity 
      setcartitem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {//suppose quantity is laready available and quantity is 1 incresed itemid
      setcartitem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromcart = (itemId) => {
    setcartitem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  useEffect(() => {
    console.log(cartitem);
  }, [cartitem]); // Log cartitem changes //for cartitem will be updated

  // Provide context values
  const contextValue = {
    category,
    setCategory,
    food_list,
    cartitem,
    setcartitem,
    addTocart,
    removeFromcart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children} {/* Rendering children components */}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

