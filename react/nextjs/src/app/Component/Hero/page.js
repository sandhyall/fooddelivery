'use client'
import { Button } from '@heroui/react'
import React from 'react'

const Hero = () => {
  return (
    <section className="relative  ">
      {/* Background Image with Overlay */}
      <div className="absolute  bg-black/60 z-0">
        <img 
          src="/header_img.png" 
          alt="Delicious food selection"
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto space-y-5 animate-fadeIn animate-slideUp">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Savor Your Favorite <span className="text-blue-400">Food</span> Delivered
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Explore our artisanal menu featuring meticulously crafted dishes, designed to take your taste buds on an unforgettable journey.
          </p>

          <Button 
           
            className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Explore Menu
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero