import React from 'react';

const AppDownload = () => {
  return (
    <div className=" py-10 px-4  ">
      <h2 className="text-black text-3xl font-bold mb-6 text-center">
        For Better Experience Download<br />Tomato App
      </h2>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
        <a href="#" className="transform hover:scale-105 transition-transform duration-300">
          <img 
            src='/play_store.png' 
            alt='Download on Play Store' 
            className="h-16 object-contain"
          />
        </a>
        <a href="#" className="transform hover:scale-105 transition-transform duration-300 ">
          <img 
            src='/app_store.png' 
            alt='Download on App Store' 
            className="h-16 object-contain"
          />
        </a>
      </div>
    </div>
  );
};

export default AppDownload;