import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './com/index';
import AboutUs from './about/index';
import Profile from './profile/index';
import Blog1 from './Blog/index';
import Career from "./Career/index"
import ContactUs from "./ContactUs/ContectUs"
import Footer from "./com/Footer"
import Header from "./Header"
import Servies from "./Services/Index"
function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Header />

 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Blog1" element={<Blog1 />} />
          <Route path="/Career" element={<Career />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/Servies/Web-Development" element={<Servies />} />
        </Routes> 
       <Footer />
      </BrowserRouter>
      </div>

  );
}



export default App