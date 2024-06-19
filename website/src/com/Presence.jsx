import React from 'react';

const OfficeCard = ({ title, address, email, phone, isComingSoon }) => {
  return (
    <div className="bg-white border border-blue-200 rounded-lg shadow-md hover:bg-[#60AEE3] transition-colors duration-300 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 m-2 flex flex-col justify-between h-64">
      <div className="bg-[#60AEE3] text-white py-2 rounded-t-lg px-4">
        <h2 className="text-xl font-bold text-center">{title}</h2>
      </div>
      <div className="p-4 text-center flex-grow">
        {isComingSoon ? (
          <p className="text-2xl font-semibold text-black">COMING SOON</p>
        ) : (
          <>
            <p className="text-gray-700">{address}</p>
            <p className="text-gray-700">{email}</p>
            <p className="text-gray-700">{phone}</p>
          </>
        )}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <>
      <div className="text-center mt-10">
        <h2 className="text-3xl font-semibold mb-4 md:mb-6">Our <span className="text-blue-600">Presence</span></h2>
        <div className="flex justify-center">
          <svg width="260" height="14" viewBox="0 0 349 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M132.785 0.113137C104.315 0.55678 61.5538 2.49729 38.365 4.43796C18.9645 6.04594 3.15109 8.46697 0.941367 10.1673C-0.694533 11.4056 -0.120457 13.1429 2.06058 13.6419C4.35663 14.1779 15.8648 14.104 29.4682 13.4755C44.2769 12.7916 59.5736 12.1263 68.786 11.7751C76.9078 11.4609 110.687 11.4795 116.111 11.7936C118.435 11.9229 120.617 12.1631 121.564 12.385C124.204 12.9949 124.319 12.9949 124.692 12.4589C125.409 11.4424 124.835 10.463 123.4 10.2781C122.941 10.2226 121.736 10.0193 120.674 9.81601C116.197 8.94733 104.373 8.57776 86.2924 8.72559C70.8522 8.87342 56.5313 9.3355 30.903 10.5369C18.8781 11.0913 7.94379 11.4056 7.94379 11.2022C7.94379 10.888 16.4099 9.70522 24.0441 8.94749C38.0778 7.57985 60.205 6.43395 91.602 5.43588C149.746 3.60616 197.129 4.49328 289.053 9.1322C325.271 10.9804 333.479 11.5718 344.126 13.1243C347.513 13.6233 347.886 13.6419 348.345 13.3831C348.977 12.9949 349.177 12.2927 348.833 11.4979C348.489 10.7031 348.03 10.5737 342.232 9.59427C334.283 8.2635 329.662 7.74612 317.178 6.74804C282.366 3.95728 234.869 1.48078 197.933 0.538176C178.962 0.0576579 149.258 -0.145641 132.785 0.113137Z" fill="#5DA8DB"/>
          </svg>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center mt-10">
        <OfficeCard
          title="India Corporate Office"
          address="408, Tapas Elegance, Nr. Nehrunagar Circle, Ambawadi, Ahmedabad-380015"
          email="info@teamflourish.com"
          phone="+91-9499619901"
        />
        <OfficeCard
          title="Canada Branch Office"
          address="101, Bank Side Drive, Kitchener, Ontario, Canada"
          email="info@teamflourish.com"
          phone="+1 902-412-8339"
        />
        <OfficeCard
          title="UK Branch Office"
          isComingSoon
        />
      </div>
    </>
  );
};

export default App;
