import React from 'react';

const GrowingJourney = () => {
  // SVG background encoded as a data URL
  const svgBackground = (
    <svg width="285" height="167" viewBox="0 0 285 167" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 8.97314L285 8.97317" stroke="#5DA8DB" stroke-width="2" />
      <path d="M0 158.525L285 158.525" stroke="#5DA8DB" stroke-width="2" />
      <path d="M278 0V167" stroke="#5DA8DB" stroke-width="2" />
      <path d="M8 0V167" stroke="#5DA8DB" stroke-width="2" />
    </svg>
  );

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-around py-10">
      {/* SVG background applied to the main container */}
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start max-w-full">
        <img
          src="https://teamflourish.co/wp-content/uploads/2023/09/number-img.png"
          alt="Growth Chart"
          className="max-w-full h-auto md:max-w-md"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        
        <div className="md:ml-5 md:flex-1 mt-5 md:mt-0 items-start">
          <h2 className="text-3xl font-semibold mb-4 md:mb-6">Our <span className="text-blue-600">Growing Journey</span></h2>
          
          <div className="flex justify-center md:justify-start my-1 md:my-2 md:mr-12">
            <svg width="260" height="14" viewBox="0 0 349 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M132.785 0.113137C104.315 0.55678 61.5538 2.49729 38.365 4.43796C18.9645 6.04594 3.15109 8.46697 0.941367 10.1673C-0.694533 11.4056 -0.120457 13.1429 2.06058 13.6419C4.35663 14.1779 15.8648 14.104 29.4682 13.4755C44.2769 12.7916 59.5736 12.1263 68.786 11.7751C76.9078 11.4609 110.687 11.4795 116.111 11.7936C118.435 11.9229 120.617 12.1631 121.564 12.385C124.204 12.9949 124.319 12.9949 124.692 12.4589C125.409 11.4424 124.835 10.463 123.4 10.2781C122.941 10.2226 121.736 10.0193 120.674 9.81601C116.197 8.94733 104.373 8.57776 86.2924 8.72559C70.8522 8.87342 56.5313 9.3355 30.903 10.5369C18.8781 11.0913 7.94379 11.4056 7.94379 11.2022C7.94379 10.888 16.4099 9.70522 24.0441 8.94749C38.0778 7.57985 60.205 6.43395 91.602 5.43588C149.746 3.60616 197.129 4.49328 289.053 9.1322C325.271 10.9804 333.479 11.5718 344.126 13.1243C347.513 13.6233 347.886 13.6419 348.345 13.3831C348.977 12.9949 349.177 12.2927 348.833 11.4979C348.489 10.7031 348.03 10.5737 342.232 9.59427C334.283 8.2635 329.662 7.74612 317.178 6.74804C282.366 3.95728 234.869 1.48078 197.933 0.538176C178.962 0.0576579 149.258 -0.145641 132.785 0.113137Z" fill="#5DA8DB"/>
            </svg>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            <div className="text-center bg-white p-3 md:p-4">
            
              <svg width="285" height="167" viewBox="0 0 285 167" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 8.97314L285 8.97317" stroke="#5DA8DB" strokeWidth="2" />
  <path d="M0 158.525L285 158.525" stroke="#5DA8DB" strokeWidth="2" />
  <path d="M278 0V167" stroke="#5DA8DB" strokeWidth="2" />
  <path d="M8 0V167" stroke="#5DA8DB" strokeWidth="2" />
  <text x="50%" y="40%" dominantBaseline="middle" textAnchor="middle" fill="black" fontSize="40px" fontWeight="bold">150 +</text>
  <text x="50%" y="60%" dominantBaseline="middle" textAnchor="middle" fill="black" fontSize="30px" fontWeight="bold"> Projects Done</text>
</svg>

              
            </div>

            <div className="text-center bg-white p-3 md:p-4">
            <svg width="285" height="167" viewBox="0 0 285 167" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 8.97314L285 8.97317" stroke="#5DA8DB" strokeWidth="2" />
  <path d="M0 158.525L285 158.525" stroke="#5DA8DB" strokeWidth="2" />
  <path d="M278 0V167" stroke="#5DA8DB" strokeWidth="2" />
  <path d="M8 0V167" stroke="#5DA8DB" strokeWidth="2" />
  <text x="50%" y="40%" dominantBaseline="middle" textAnchor="middle" fill="black" fontSize="40px" fontWeight="bold">3+</text>
  <text x="50%" y="60%" dominantBaseline="middle" textAnchor="middle" fill="black" fontSize="30px" fontWeight="bold"> Years Experience</text>
</svg>
              
            </div>
            <div className="text-center bg-white p-3 md:p-4">
            <svg width="285" height="167" viewBox="0 0 285 167" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 8.97314L285 8.97317" stroke="#5DA8DB" strokeWidth="2" />
  <path d="M0 158.525L285 158.525" stroke="#5DA8DB" strokeWidth="2" />
  <path d="M278 0V167" stroke="#5DA8DB" strokeWidth="2" />
  <path d="M8 0V167" stroke="#5DA8DB" strokeWidth="2" />
  <text x="50%" y="40%" dominantBaseline="middle" textAnchor="middle" fill="black" fontSize="40px" fontWeight="bold">15+</text>
  <text x="50%" y="60%" dominantBaseline="middle" textAnchor="middle" fill="black" fontSize="30px" fontWeight="bold"> Industries</text>
</svg>
             
            </div>
            <div className="text-center bg-white p-3 md:p-4">
            <svg width="285" height="167" viewBox="0 0 285 167" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 8.97314L285 8.97317" stroke="#5DA8DB" strokeWidth="2" />
  <path d="M0 158.525L285 158.525" stroke="#5DA8DB" strokeWidth="2" />
  <path d="M278 0V167" stroke="#5DA8DB" strokeWidth="2" />
  <path d="M8 0V167" stroke="#5DA8DB" strokeWidth="2" />
  <text x="50%" y="40%" dominantBaseline="middle" textAnchor="middle" fill="black" fontSize="40px" fontWeight="bold">125+</text>
  <text x="50%" y="60%" dominantBaseline="middle" textAnchor="middle" fill="black" fontSize="30px" fontWeight="bold"> Clients</text>
</svg>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowingJourney;