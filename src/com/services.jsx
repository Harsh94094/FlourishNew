import React, { useState } from 'react';

function App() {
  const [selectedService, setSelectedService] = useState('Web Development');

  const services = [
    { name: 'Web Development', description: 'We are offering Design Excellence, User-friendly and professional web development services at a competitive price.', img:"https://teamflourish.co/wp-content/uploads/2023/09/Web-Development.gif"},
    { name: 'App Development', description: 'Our App Development services are top-notch, providing seamless user experiences and robust performance.', img:"https://teamflourish.co/wp-content/uploads/2023/09/ezgif.com-video-to-gif.gif"},
    { name: 'Graphic Design', description: 'Graphic Design services that bring your ideas to life with creativity and precision.', img:"https://teamflourish.co/wp-content/uploads/2023/09/Graphic-Design.gif" },
    { name: 'Digital Marketing', description: 'Digital Marketing services to enhance your online presence and drive engagement.', img:"https://teamflourish.co/wp-content/uploads/2023/09/Digital-marketing.gif"},
    { name: 'Film Production', description: 'Film Production services to create compelling and impactful visual stories.', img:"https://teamflourish.co/wp-content/uploads/2023/09/ezgif.com-video-to-gif-1.gif" },
  ];

  return (
    <div className="container mx-auto p-6 mb-12 mt-12">
      <h1 className="text-4xl font-bold mt-12  text-center mb-8">Our <span className="text-blue-600">Valuable Services</span></h1>
      <p className="text-center mb-12">
        Being the Best Branding and Advertising agency we pride ourselves on offering invaluable services under one roof tailored to fuel your brand's success in the digital world of digital. Our commitment is to empower businesses, enabling you not just to navigate the complexities of the market but to thrive and lead. Here's a glimpse into our invaluable services:
      </p>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          {services.map((service) => (
            <button
              key={service.name}
              className={`block w-full text-left p-4 mb-2 rounded-lg ${selectedService === service.name ? 'bg-gray-300 text-black' : 'bg-gray-100 text-gray-300'}`}
              onClick={() => setSelectedService(service.name)}
            >
              {service.name}
            </button>
          ))}
        </div>
        <div className="md:w-2/3 md:p-8 bg-gray-100 rounded-lg shadow-lg ml-0 md:ml-12" style={{ backgroundColor: "#F3FCFE" }}>
          {services.map((service) => (
            selectedService === service.name && (
              <div key={service.name} className="flex flex-col items-center">

                <img src={service.img} alt={service.name} className="w-64 h-auto mb-4" />
                <p className="text-center mb-4">{service.description}</p>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
