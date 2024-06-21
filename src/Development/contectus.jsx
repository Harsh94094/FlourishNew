import React from 'react';

const ContactSection = () => {
  return (
    <div className="bg-black text-white flex items-center justify-center py-12 mb-12">
      <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-10">
        <div className="relative">
          <div className="relative z-10">
            <img src="https://teamflourish.co/wp-content/uploads/2023/09/service-cta-img.svg" alt="Phone" className="w-40 mx-auto md:mx-0" />
          </div>
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-4xl mb-4">Ready to Get Started?</h2>
          <p className="mb-8">
            Your app journey starts here. Contact us today to discuss your project,<br />
            objectives, and how Flourish Creations Pvt. Ltd. can be your trusted partner<br />
            in mobile app development success.
          </p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
