import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
 // Ensure you import the CSS file

const clients = [
  {
    id: 1,
    name: "Mr. Sumit Suhagiya",
    companyName: "SR Enterprise",
    description: "The best E-commerce website service I received. The website is fully dynamic and I am so happy to see such a wonderful and responsive website for my business. Thank you Team Flourish for your creativity and excellent mind behind this project.",
    img: "https://teamflourish.co/wp-content/uploads/2023/09/3.sr_-1.png"
  },
  {
    id: 2,
    name: "Ms. Vishava Satasiya",
    companyName: "Gajanan Group",
    description: "The best E-commerce website service I received. The website is fully dynamic and I am so happy to see such a wonderful and responsive website for my business. Thank you Team Flourish for your creativity and excellent mind behind this project.",
    img: "https://teamflourish.co/wp-content/uploads/2023/09/4.gajanan-1.png"
  },
];

const Testimonial = () => {
  return (
    <div className="bg-custom bg-gray-100 py-10">
      <h2 className="text-3xl font-semibold text-center mb-6">
        What Our <span className="text-blue-500">Client Says</span>
      </h2>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {clients.map((client) => (
            <SwiperSlide key={client.id}>
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                <img
                  src={client.img}
                  alt={`${client.companyName} Logo`}
                  className="w-24 h-24 md:w-56 md:h-56 object-contain"
                />
                <div className="text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-semibold">{client.name}</h3>
                  <p className="text-sm md:text-xs font-semibold">{client.companyName}</p>
                  <p className="mt-4 text-gray-700">
                    {client.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
