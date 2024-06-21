import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  const ServiceSubMenu = ({ title, items }) => (
    <div className="relative group">
      <li  className="block px-4 py-2 hover:bg-gray-200">
        {title}
      </li>
      <div className="absolute left-full top-0 hidden group-hover:block bg-white text-black mt-0 py-2 w-48 shadow-lg">
        {items.map((item, index) => (
          <Link key={index} to={`/Services/${title.toLowerCase().replace(' ', '-')}/${item.toLowerCase().replace(' ', '-')}`} className="block px-4 py-2 hover:bg-gray-200">
            {item}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <header className={`sticky top-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-white text-black shadow-lg' : 'bg-black text-white'}`}>
      <div className="container mx-auto flex justify-between items-center py-4 px-4 lg:px-0">
        <div className="lg:hidden text-lg font-bold">
          <Link to="/" className={`${scrolled ? 'text-black' : 'text-blue-500'}`}>Flourish</Link>
        </div>
        <div className="hidden lg:flex space-x-6 items-center justify-center w-full">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/AboutUs" className="hover:text-blue-500">About Us</Link>
          <div className="relative">
            <Link to="/Service">
            <button onClick={toggleServices} className="hover:text-blue-500">Services</button>
            </Link>
            {servicesOpen && (
              <div className={`absolute ${scrolled ? 'bg-white text-black' : 'bg-black text-white'} mt-2 py-2 w-48 shadow-lg`}>
                <ServiceSubMenu title="Development" items={['Web-Development', 'App-Development', 'Ui/Ux-Development']} />
                <ServiceSubMenu title="Digital Marketing" items={['SEO', 'Feacbook Ad', 'Google Ad',"Content Writing","Email Marketing","Influencer Marketing"]} />
                <ServiceSubMenu title="Graphic Design" items={['Logo Design', 'Pakaging Design', 'Brochure Design',"Stationary Design","Motion Design"]} />
                <Link to="/Services/film-production" className="block px-4 py-2 hover:bg-gray-200">Film Production</Link>
                <Link to="/Services/video-advertisement" className="block px-4 py-2 hover:bg-gray-200">Video Advertisement</Link>
              </div>
            )}
          </div>
          <Link to="/case-study" className="hover:text-blue-500">Case Study</Link>
          <div className="text-lg font-bold">
            <Link to="/" className={`${scrolled ? 'text-black' : 'text-blue-500'}`}>Flourish</Link>
          </div>
          <Link to="/Profile" className="hover:text-blue-500">Portfolio</Link>
          <Link to="/Blog1" className="hover:text-blue-500">Blogs</Link>
          <Link to="/Career" className="hover:text-blue-500">Career</Link>
          <Link to="/ContactUs" className="hover:text-blue-500">Contact Us</Link>
        </div>
        <div className="lg:hidden">
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
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
          <div className="relative">
            <button onClick={toggleServices} className="w-full text-left py-2 hover:text-blue-500">Services</button>
            {servicesOpen && (
              <div className={`${scrolled ? 'bg-white text-black' : 'bg-black text-white'} mt-2 py-2 w-full shadow-lg`}>
                 <ServiceSubMenu title="Development" items={['Web-Development', 'App-Development', 'Ui/Ux-Development']} />
                <ServiceSubMenu title="Digital Marketing" items={['SEO', 'Feacbook Ad', 'Google Ad',"Content Writing","Email Marketing","Influencer Marketing"]} />
                <ServiceSubMenu title="Graphic Design" items={['Logo Design', 'Pakaging Design', 'Brochure Design',"Stationary Design","Motion Design"]} />
                <Link to="/Services/film-production" className="block px-4 py-2 hover:bg-gray-200">Film Production</Link>
                <Link to="/Services/video-advertisement" className="block px-4 py-2 hover:bg-gray-200">Video Advertisement</Link>
              </div>
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;