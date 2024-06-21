import React from 'react';

const PortfolioForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 md:p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between">
        <div className="w-full md:w-2/3 p-4 md:p-8">
          <div className="w-full p-8 space-y-8 bg-white rounded-lg shadow-md">
            <h2 className="text-center text-3xl font-bold text-blue-600">Portfolio</h2>
            <p className="text-center text-gray-600">
              Building Brands, Creating Stories, and Using Creativity. Download our Portfolio and Witness our Challenges Throughout this Year.
            </p>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                <input
                  type="text"
                  name="mobile"
                  placeholder="Mobile Number"
                  className="w-full sm:w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full sm:w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  className="w-full sm:w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  className="w-full sm:w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <textarea
                  name="message"
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
          <img
            src="https://teamflourish.co/wp-content/uploads/2023/09/portfolio-img.png"
            alt="Portfolio Icon"
            className="w-48 h-48 md:w-64 md:h-64"
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioForm;
