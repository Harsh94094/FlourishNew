import React from 'react';

const App = () => {
  const clients = [
    { id: 1, name: 'Amul', image: 'https://teamflourish.co/wp-content/uploads/2023/09/02.png' },
    { id: 2, name: 'Anand', image: 'https://teamflourish.co/wp-content/uploads/2023/09/4.gajanan.png' },
    { id: 3, name: 'SR Enterprise', image: 'https://teamflourish.co/wp-content/uploads/2023/09/3.sr_.png' },
    { id: 4, name: 'Rolet Incense', image: 'https://teamflourish.co/wp-content/uploads/2023/09/6.rolet_.png' },
    { id: 5, name: 'EKA Club', image: 'https://teamflourish.co/wp-content/uploads/2023/09/8.eka-club.png' },
    { id: 6, name: 'Sakar Group', image: 'https://teamflourish.co/wp-content/uploads/2023/09/7.sakar_.png' },
    { id: 7, name: 'Party Symbol', image: 'https://teamflourish.co/wp-content/uploads/2023/09/27.bjp_.png' },
    { id: 8, name: 'Akachi', image: 'https://teamflourish.co/wp-content/uploads/2023/09/23.akachi.png' },
  ];

  return (
    <div className="p-6 flex flex-col items-center mt-12 mb-12 py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Our Proud <span className="text-blue-500">Believers</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        {clients.map((client) => (
          <div
            key={client.id}
            className="bg-transparent rounded-lg border border-gray-300 hover:border-blue-500 hover:shadow-lg flex justify-center items-center p-4"
          >
            <img
              src={client.image}
              alt={client.name}
              className="max-w-full max-h-24 bg-white p-2 rounded-lg"
            />
          </div>
        ))}
      </div>
      <a href="#" className="text-blue-500 font-semibold border-b-2 border-blue-500">
        View More
      </a>
    </div>
  );
};

export default App;
