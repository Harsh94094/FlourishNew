import React from 'react';

const DifferenceSection = ({Title1,Title2,Title3,D1,D2,D3}) => {
  return (
    <div className="bg-blue-50 p-8">
      <h2 className="text-2xl font-bold text-center mb-8">
        How We <span className="text-blue-500 underline">Different</span> From Other
      </h2>
      <div className="space-y-8">
        <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-md transform transition-transform hover:scale-105 hover:bg-[#DEF2FF]">
          <h3 className="text-xl font-semibold mb-4">{Title1}</h3>
          <p>
          {D1}
          </p>
        </div>
        <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-md transform transition-transform hover:scale-105 hover:bg-[#DEF2FF]">
          <h3 className="text-xl font-semibold mb-4">{Title2}</h3>
          <p>
        {D2}
          </p>
        </div>
        <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-md transform transition-transform hover:scale-105 hover:bg-[#DEF2FF]">
          <h3 className="text-xl font-semibold mb-4">{Title3}</h3>
          <p>
           {D3}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DifferenceSection;
