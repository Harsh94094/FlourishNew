import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-white text-black shadow-lg' : 'bg-black text-white'}`}>
      <div className="container mx-auto flex justify-between items-center py-4 px-4 lg:px-0">
        <div className="lg:hidden text-lg font-bold">
          <Link to="/" className={`${scrolled ? 'text-black' : 'text-blue-500'}`}>Flourish</Link>
        </div>
        <div className="hidden lg:flex space-x-6 items-center justify-center w-full">
          <Link to="/" className={`${scrolled ? 'hover:text-blue-500' : 'hover:text-blue-500'}`}>Home</Link>
          <Link to="/AboutUs" className={`${scrolled ? 'hover:text-blue-500' : 'hover:text-blue-500'}`}>About Us</Link>
          <div className="relative group">
            <button className={`${scrolled ? 'hover:text-blue-500' : 'hover:text-blue-500'}`}>Services</button>
            <div className={`absolute hidden group-hover:block ${scrolled ? 'bg-white text-black' : 'bg-black text-white'} mt-2 py-2 w-48 shadow-lg`}>
              <Link to="/web-development" className="block px-4 py-2 hover:bg-gray-200">Development</Link>
              <Link to="/digital-marketing" className="block px-4 py-2 hover:bg-gray-200">Digital Marketing</Link>
              <Link to="/graphic-design" className="block px-4 py-2 hover:bg-gray-200">Graphic Design</Link>
              <Link to="/film-production" className="block px-4 py-2 hover:bg-gray-200">Film Production</Link>
              <Link to="/video-advertisement" className="block px-4 py-2 hover:bg-gray-200">Video Advertisement</Link>
            </div>
          </div>
          <Link to="/case-study" className={`${scrolled ? 'hover:text-blue-500' : 'hover:text-blue-500'}`}>Case Study</Link>
          <div className="text-lg font-bold">
            <Link to="/" className={`${scrolled ? 'text-black' : 'text-blue-500'}`}>Flourish</Link>
          </div>
          <Link to="/Profile" className={`${scrolled ? 'hover:text-blue-500' : 'hover:text-blue-500'}`}>Portfolio</Link>
          <Link to="/Blog1" className={`${scrolled ? 'hover:text-blue-500' : 'hover:text-blue-500'}`}>Blogs</Link>
          <Link to="/Career" className={`${scrolled ? 'hover:text-blue-500' : 'hover:text-blue-500'}`}>Career</Link>
          <Link to="/ContactUs" className={`${scrolled ? 'hover:text-blue-500' : 'hover:text-blue-500'}`}>Contact Us</Link>
        </div>
        <div className="lg:hidden">
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className={`${scrolled ? 'bg-white text-black' : 'bg-black text-white'} lg:hidden px-4 py-2 shadow-lg`}>
          <Link to="/" className="block py-2 hover:text-blue-500">Home</Link>
          <Link to="/AboutUs" className="block py-2 hover:text-blue-500">About Us</Link>
          <Link to="/case-study" className="block py-2 hover:text-blue-500">Case Study</Link>
          <Link to="/Profile" className="block py-2 hover:text-blue-500">Portfolio</Link>
          <Link to="/Blog1" className="block py-2 hover:text-blue-500">Blogs</Link>
          <Link to="/Career" className="block py-2 hover:text-blue-500">Career</Link>
          <Link to="/ContactUs" className="block py-2 hover:text-blue-500">Contact Us</Link>
          <div className="relative group">
            <button className="w-full text-left py-2 hover:text-blue-500">Services</button>
            <div className={`absolute ${scrolled ? 'bg-white text-black' : 'bg-black text-white'} mt-2 py-2 w-48 shadow-lg`}>
              <Link to="/web-development" className="block px-4 py-2 hover:bg-gray-200">Development</Link>
              <Link to="/digital-marketing" className="block px-4 py-2 hover:bg-gray-200">Digital Marketing</Link>
              <Link to="/graphic-design" className="block px-4 py-2 hover:bg-gray-200">Graphic Design</Link>
              <Link to="/film-production" className="block px-4 py-2 hover:bg-gray-200">Film Production</Link>
              <Link to="/video-advertisement" className="block px-4 py-2 hover:bg-gray-200">Video Advertisement</Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
