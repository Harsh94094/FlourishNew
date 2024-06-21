import React from 'react';

const ToolsWeUse = ({T1,T2,T3,DE1,DE2,DE3,I1}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <h1 className="text-3xl font-bold mb-8">Tools <span className="text-blue-500">We Use</span></h1>
      
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        <div className="max-w-sm p-6 bg-gray-100 rounded-lg shadow-md hover:bg-[#DEF2FF] transition-colors duration-300">
          <h2 className="text-xl font-semibold mb-2">{T1}</h2>
          <p>{DE1}</p>
        </div>
        <div className="max-w-sm">
          <img src={I1} alt="Tools" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mt-12">
        <div className="max-w-sm p-6 bg-gray-100 rounded-lg shadow-md hover:bg-[#DEF2FF] transition-colors duration-300">
          <h2 className="text-xl font-semibold mb-2">{T2}</h2>
          <p>{DE2}</p>
        </div>
        <div className="max-w-sm p-6 bg-gray-100 rounded-lg shadow-md hover:bg-[#DEF2FF] transition-colors duration-300">
          <h2 className="text-xl font-semibold mb-2">{T3}</h2>
          <p>{DE3}</p>
        </div>
      </div>
      
    </div>
  );
};

export default ToolsWeUse;
