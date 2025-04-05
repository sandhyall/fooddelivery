'use client';
import React, { useState } from 'react';
import Navbar from '../Component/Navbar/page';
import Hero from '../Component/Hero/page';
import Exploremenu from '../Component/Explormenu/page';
import StoreContextProvider from '../Component/Context/page';  // Wrap the provider here
import FoodDisplay from '../Component/FoodDisplay/page';
import AppDownload from '../Component/Appdowload/page';
import Footer from '../Component/Footer/page';
import Header from '../Component/Header/page';
import Cart from '../Cart/page';

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <StoreContextProvider>
      <div>
        
        <Hero />
        <Exploremenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category} /> 
        <AppDownload/>
        <Footer/>
        {/* <Cart/> */}
      </div>
    </StoreContextProvider>
   
  );
};

export default Home;
