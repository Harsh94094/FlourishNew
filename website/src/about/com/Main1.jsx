import React from 'react';

const AboutUs = () => {
  return (
  <>
      <div className="bg-blue-100 py-10 flex items-center justify-center">
      <div className="container mx-10 text-center">
        <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-center px-4">
          <div className="flex flex-col items-center lg:items-start lg:w-1/4 lg:mr-10 mb-10 lg:mb-0">
            <h2 className="text-4xl font-bold mb-8 text-center lg:text-left">About Us</h2>
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
    <div className="flex flex-col lg:flex-row justify-center items-center w-full lg:w-[80%] min-h-screen mx-auto p-4">
  <div className="text-left p-6 w-full lg:w-1/2">
    <h3 className="text-3xl font-bold mb-4">WHAT SETS US APART?</h3>
    <p className="mb-4">
      What sets us apart is our commitment to staying ahead of the curve. It’s our overall approach that integrates cutting-edge technology, data-driven insights, and exceptional creativity. We transform businesses into digital success stories, driving engagement, conversions, and brand loyalty.
    </p>
    <ul className="space-y-4">
      <li>
        <span role="img" aria-label="target" className="mr-2">🎯</span>
        <span className="font-bold">Strategic Brilliance:</span> We don’t just market, we strategize. Our team creates customized, impactful strategies that not only engage but also convert.
      </li>
      <li>
        <span role="img" aria-label="handshake" className="mr-2">🤝</span>
        <span className="font-bold">Client-Centric Approach:</span> Your success is our priority. We don’t just have clients, we have partners. We listen, understand, and deliver results that exceed expectations.
      </li>
      <li>
        <span role="img" aria-label="sparkles" className="mr-2">✨</span>
        <span className="font-bold">Creative Spirit:</span> Innovation is our plus point. From thinking out of the box to delivering outcomes according to that thinking, we infuse creativity into everything we do.
      </li>
    </ul>
  </div>
  <div className="flex justify-center items-center mt-10 lg:mt-0 w-full lg:w-1/2">
    <img src="https://teamflourish.co/wp-content/uploads/2023/09/who-img.png" alt="Growth Chart" className="max-w-xs md:max-w-md" />
  </div>
</div>



  </>
  );
};

export default AboutUs;
