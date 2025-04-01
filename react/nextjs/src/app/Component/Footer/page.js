import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-600 py-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <div className="footer-logo mb-6 md:mb-0">
            <img src="/logo.png" alt="TastyMeal" />
          </div>

          <div className="footer-description mb-6 md:mb-0 md:w-1/3">
            <h3 className="text-xl font-bold text-white mb-2">TastyMeal</h3>
            <p className="text-gray-300 text-sm">
              Delicious food delivered to your doorstep. Fast, reliable, and always fresh!
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links mb-6 md:mb-0">
            <h4 className="font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-orange-500">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500">Menu</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500">Delivery</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500">About Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4 className="font-semibold text-white mb-3">Contact Us</h4>
            <p className="text-gray-300 mb-1">Email: Tomato@gmail.com</p>
            <p className="text-gray-300 mb-1">Phone: +977 986541326</p>
            <div className="flex space-x-4 mt-3">
              <a href="#" className="text-orange-500 hover:text-orange-600">
                <span className="sr-only">Facebook</span>
                <img src="/facebook_icon.png" alt="facebook" className="w-6 h-6" />
              </a>
              <a href="#" className="text-black hover:text-orange-600">
                <span className="sr-only">Linkedin</span>
                <img src="/linkedin_icon.png" alt="linkedin" className="w-6 h-6" />
              </a>
              <a href="#" className="text-orange-500 hover:text-orange-600">
                <span className="sr-only">Twitter</span>
                <img src="/twitter_icon.png" alt="twitter" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6 border-t border-orange-200">
          <p className="text-white text-sm">
            tomato@gmail.com | Made with ❤️ for CS301 Project
          </p>
        </div>

        <div className="flex space-x-6">
          <a href="#" className="text-sm text-white hover:text-orange-200 transition-colors duration-200">Privacy Policy</a>
          <a href="#" className="text-sm text-white hover:text-orange-200 transition-colors duration-200">Terms of Service</a>
          <a href="#" className="text-sm text-white hover:text-orange-200 transition-colors duration-200">Cookies Settings</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
