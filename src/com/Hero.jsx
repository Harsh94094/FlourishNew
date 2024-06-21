import React from 'react';
import ReactRotatingText from 'react-rotating-text';

const Hero = () => {
  const rotatingWords = ['Quality', 'Innovation', 'Excellence'];

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black ">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold">
            We Believe in <span className="text-blue-400"><ReactRotatingText items={rotatingWords} /></span>
          </h1>
          <p className="text-2xl mt-4 md:text-3xl">To Deliver Your Expectations</p>
        </div>
      </div>
      <div className="text-center mb-8">
        <div className="w-full flex justify-center p-4">
          <img
            className="w-full max-w-screen-xl h-auto"
            src="https://teamflourish.co/wp-content/uploads/2023/10/journey-map-2.svg"
            alt="Journey Map"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
