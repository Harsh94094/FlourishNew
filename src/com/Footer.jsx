import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 md:px-40">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <img src="https://teamflourish.co/wp-content/uploads/2023/09/logo.png" alt="Flourish" className="h-8 mb-4"/>
            <p className="text-gray-400 mb-4">Your journey to digital excellence starts here. Contact us today and let’s embark on this exciting adventure together.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-blue-500 font-semibold mb-4">Useful Links</h3>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Blogs</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Our Clients</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-blue-500 font-semibold mb-4">Services</h3>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Web Development</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">App Development</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">UI/UX Development</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Graphic Design</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Digital Marketing</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-blue-500 font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400"><i className="fas fa-envelope"></i> info@teamflourish.co</p>
            <p className="text-gray-400 mt-2"><i className="fas fa-phone-alt"></i> +91-9499619901</p>
            <div className="mt-4 flex">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="px-4 py-2 w-full text-black rounded-l-lg focus:outline-none"
              />
              <button className="bg-blue-500 text-white px-4 rounded-r-lg">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>  
      </div>
    </footer>
  );
};

export default Footer;
