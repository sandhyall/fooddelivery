'use client';
import React, { useState } from 'react';
import Hero from '../Component/Hero/page';
import Exploremenu from '../Component/Explormenu/page';
import StoreContextProvider from '../Component/Context/page';  // Wrap the provider here
import FoodDisplay from '../Component/FoodDisplay/page';

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <StoreContextProvider>
      <div>
        <Hero />
        <Exploremenu category={category} setCategory={setCategory} />
        <FoodDisplay /> 
      </div>
    </StoreContextProvider>
  );
};

export default Home;
