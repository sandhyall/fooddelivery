'use client'
import React, { useState } from 'react'
import Exploremenu from '../Component/Explormenu/page'
import FoodDisplay from '../Component/FoodDisplay/page'
import StoreContextProvider from '../Component/Context/page'

const Menu=() =>{
     const [category, setCategory] = useState("All");
  return (
    <div>
        <StoreContextProvider> 
        <Exploremenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category} /> 
        </StoreContextProvider>
  
    </div>
  )
}

export default Menu