import React from 'react';

const App = ({ Name, Img }) => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-blue-100">
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 mx-8 md:mx-32">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-8">{Name}</h1>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={Img}
              alt="App Development"
              style={{
                width: '600px', // Adjust the width to your desired value
                height: '400px', // Adjust the height to your desired value
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;