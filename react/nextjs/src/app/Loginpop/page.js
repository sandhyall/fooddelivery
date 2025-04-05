'use client'
import { Button } from '@heroui/react'
import React, { useState } from 'react'

const Login = ({ setshowlogin }) => {
  const [curstate, setcurstate] = useState("Sign Up")
  
  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-orange-600">{curstate}</h1>
          <img 
            onClick={() => setshowlogin(false)} 
            src='/cross_icon.png' 
            alt='cross' 
            className="w-6 h-6 cursor-pointer"
          />
        </div>
        
        <div className="space-y-4 mb-6">
          {curstate === "Login" ? <></> : 
            <input 
              type='text' 
              placeholder='Your name' 
              required 
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          }
          <input 
            type='email' 
            placeholder='Your email' 
            required 
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input 
            type='password' 
            placeholder='Password' 
            required 
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        
        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded transition-colors">
          {curstate === "Sign Up" ? "Create account" : "Login"}
        </Button>
        
        <div className="flex items-start mt-4 mb-4">
          <input 
            type='checkbox' 
            required 
            className="mt-1 mr-2"
          />
          <p className="text-sm text-gray-600">By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        
        {curstate === "Login" ? 
          <p className="text-center text-gray-600">
            Create a new account? 
            <span 
              onClick={() => setcurstate("Sign Up")} 
              className="text-orange-500 cursor-pointer ml-1 hover:underline"
            >
              Click here
            </span>
          </p> 
          :
          <p className="text-center text-gray-600">
            Already have an account 
            <span 
              onClick={() => setcurstate("Login")} 
              className="text-orange-500 cursor-pointer ml-1 hover:underline"
            >
              Login here
            </span>
          </p>
        }
      </div>
    </div>
  )
}

export default Login