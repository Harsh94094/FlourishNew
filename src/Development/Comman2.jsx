import React from 'react';


const AppDevelopment = ({Image,Description,Title}) => {
  return (
    <div className=" flex flex-col md:flex-row items-center p-4 md:p-8">
      <div className="md:w-2/3 md:pr-8">
        <h1 className="text-4xl font-bold mb-4">{Title}</h1>
        <p className="mb-4">
         {Description}
        </p>
        {/* <p className="mb-4">
          At Flourish Creations Pvt. Ltd., we understand the importance of mobile apps in today’s digital landscape. Our app development services are designed to help you bring your vision to life, whether you need a consumer-facing app, a business solution, or anything in between.
        </p>
        <p className="mb-4">
          We believe in the power of strategy. Our app development company doesn’t just code; we craft strategic solutions that align with your brand, cater to your audience, and meet your business goals.
        </p>
        <p className="mb-4">
          Every app is unique, and so are its requirements. As a leading mobile app development company, we tailor our approach to your specific needs. Whether you’re launching on iOS, Android, or both, we create apps that exceed your expectations.
        </p> */}
      </div>
      <div className="md:w-1/3">
        <img src={Image} alt="App Development" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default AppDevelopment;
