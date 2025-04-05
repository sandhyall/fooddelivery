'use client'
import React, { useState } from 'react'
import Home from './Home/page'
import Navbar from './Component/Navbar/page'
import Header from './Component/Header/page'
import Login from './Loginpop/page'
const Fooddalivary=()=> {
  const[showlogin,setshowlogin]=useState(false)
 
  return (

    
    <div>
      {showlogin?<Login setshowlogin={setshowlogin}/>:<></>}
     <Header setshowlogin={setshowlogin}/>
       <Navbar/>
         <Home/>
        
         
     
    </div>
  )
}

export default Fooddalivary