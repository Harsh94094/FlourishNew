import React from 'react';

const Above = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-6xl mx-auto p-6">
        <div className="brij rounded-3xl shadow-lg p-8 md:flex md:items-center relative bg-white">
          <div className="absolute top-0 left-3 transform -translate-y-1/2 ml-4 md:left-8 lg:left-12 xl:left-16">
            <img
              src="https://teamflourish.co/wp-content/uploads/2023/09/about-icon.png"
              alt="New Illustration"
              className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-cover"
            />
          </div>
          <div className="md:w-1/2 md:pr-8">
            <div className="text-left">
              <h2 className="text-3xl font-bold mb-4">
                At a Glance <span className="text-blue-500">Flourish</span>
              </h2>
              <p className="mb-4">
                Whether you are a start-up aiming to make a mark or an established
                brand seeking a digital facelift, the best branding and marketing
                agency in Ahmedabad is with you.
              </p>
              <p className="mb-4">
                Flourish Creations Pvt. Ltd. is the place where all your digital
                queries are solved with creative solutions under one roof. Let’s
                Come together, innovate and transform your digital presence.
              </p>
              <p className="mb-4">
                We are not just the best branding and marketing agency in Ahmedabad,
                we are your partner in growth, your storytellers and your digital
                architects. In the fast-paced world of online business, we stand as
                the backbone to guiding your brand towards unparalleled success.
              </p>
              <a href="#" className="text-blue-500 font-semibold">
                LEARN MORE →
              </a>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
            <img
              src="https://teamflourish.co/wp-content/uploads/2023/11/9.png"
              alt="Illustration"
              className="w-full h-auto md:w-auto"
            />
          </div>
        </div>
      </div>
      <button className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full p-4 shadow-lg flex items-center">
        <svg
          className="w-6 h-6 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16h6M21 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z"
          />
        </svg>
        How can I help you?
      </button>
    </div>
  );
};

export default Above;
