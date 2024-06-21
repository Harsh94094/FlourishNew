  import React from 'react';

  const AboutUs = ({name}) => {
   
    return (
    <>
        <div className="bg-blue-100 py-10 flex items-center justify-center">
        <div className="container mx-10 text-center">
          <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-center px-4">
            <div className="flex flex-col items-center lg:items-start lg:w-1/4 lg:mr-10 mb-10 lg:mb-0">
              <h2 className="text-4xl font-bold mb-8 text-center lg:text-left">{name}</h2>
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
    



    </>
    );
  };

  export default AboutUs;

