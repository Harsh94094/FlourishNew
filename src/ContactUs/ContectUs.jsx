import React from 'react';

const OfficeCard = ({ title, address, email, phone, isComingSoon }) => {
  return (
    <div className="bg-white border border-blue-200 rounded-lg shadow-md mb-12 hover:bg-[#60AEE3] transition-colors duration-300 w-full md:w-1/3 lg:w-1/4 m-2 md:ml-8 flex flex-col justify-between h-64">
      <div className="bg-[#60AEE3] text-white py-2 rounded-t-lg px-4">
        <h2 className="text-xl font-bold text-center">{title}</h2>
      </div>
      <div className="p-4 text-center flex-grow">
        {isComingSoon ? (
          <p className="text-2xl font-semibold text-black">COMING SOON</p>
        ) : (
          <>
            <p className="text-gray-700">{address}</p>
            <p className="text-gray-700">{email}</p>
            <p className="text-gray-700">{phone}</p>
          </>
        )}
      </div>
    </div>
  );
};



const AboutUs = () => {
  return (
    <>
      <div className="bg-blue-100 py-10 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-center">
            <div className="flex flex-col items-center lg:items-start lg:w-1/4 lg:mr-10 mb-10 lg:mb-0">
              <h2 className="text-4xl font-bold mb-8 text-center lg:text-left">Contact Us</h2>
            </div>
            <div className="flex justify-center lg:w-1/2">
              <img 
                src="https://teamflourish.co/wp-content/uploads/2023/09/ib-img-1.png" 
                alt="Teamwork" 
                className="max-w-full lg:max-w-md" 
              />
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 md:p-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between">
          <div className="w-full md:w-2/3 p-4 md:p-8">
            <div className="w-full p-8 space-y-8 bg-white rounded-lg shadow-md">
              <h2 className="text-3xl font-extrabold text-gray-900 text-center">
                See something you like? <span className="text-blue-600">Get in touch</span>
              </h2>
              <p className="text-center text-gray-600">
                Enter your details below and what you have on your mind. We’ll get back to you soon.
              </p>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                  <div className="w-full sm:w-1/2">
                    <label htmlFor="mobile" className="sr-only">Mobile Number</label>
                    <input
                      type="text"
                      name="mobile"
                      id="mobile"
                      placeholder="Mobile Number"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div className="w-full sm:w-1/2">
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                  <div className="w-full sm:w-1/2">
                    <label htmlFor="company" className="sr-only">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      placeholder="Company Name"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div className="w-full sm:w-1/2">
                    <label htmlFor="city" className="sr-only">City</label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      placeholder="City"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <svg
                    width="100%"
                    height="auto"
                    viewBox="0 0 570 100"
                    xmlns="http://www.w3.org/2000/svg"
                    className="cursor-pointer max-w-sm"
                  >
                    <path d="M0 15L570 15" stroke="#5DA8DB" strokeWidth="2" />
                    <path d="M0 85L570 85" stroke="#5DA8DB" strokeWidth="2" />
                    <path d="M558.896 0V100" stroke="#5DA8DB" strokeWidth="2" />
                    <path d="M11.104 0V100" stroke="#5DA8DB" strokeWidth="2" />
                    <rect x="12" y="16" width="546.312" height="68" fill="#5DA8DB" />
                    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="30px">
                      Download Portfolio
                    </text>
                  </svg>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex flex-col items-center mt-8 md:mt-0">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9960127544755!2d72.5417314750037!3d23.02391861627855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa43da99557fa49cf%3A0xa31f06eacb32b24c!2sFlourish%20Creations%20Pvt.%20Ltd.%20%7C%20Branding%20%26%20Advertising%20Agency!5e0!3m2!1sen!2sin!4v1693294051915!5m2!1sen!2sin" 
              width="100%" 
              height="600" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center mt-10">
      <OfficeCard
        title="India Corporate Office"
        address="408, Tapas Elegance, Nr. Nehrunagar Circle, Ambawadi, Ahmedabad-380015"
        email="info@teamflourish.com"
        phone="+91-9499619901"
      />
      <OfficeCard
        title="Canada Branch Office"
        address="101, Bank Side Drive, Kitchener, Ontario, Canada"
        email="info@teamflourish.com"
        phone="+1 902-412-8339"
      />
      <OfficeCard
        title="UK Branch Office"
        isComingSoon
      />
    </div>
    </>
  );
};

export default AboutUs;
