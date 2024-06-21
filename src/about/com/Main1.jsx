import React from 'react';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Karm Korat",
      position: "Director",
      imgSrc: "https://teamflourish.co/wp-content/uploads/2024/03/Karm.png" // Replace with the correct image URL
    },
    {
      name: "Jigish Korat",
      position: "Executive Director",
      imgSrc: "https://teamflourish.co/wp-content/uploads/2024/03/Jigish.png" // Replace with the correct image URL
    },
    {
      name: "Utsav Pandya",
      position: "CMO & Head - Digital Marketing",
      imgSrc: "https://teamflourish.co/wp-content/uploads/2024/03/Utsav-1.png" // Replace with the correct image URL
    }
    ,{
      name: "Pratik Chandera",
      position: "Head of HR",
      imgSrc: "https://teamflourish.co/wp-content/uploads/2024/03/Pratik.png" // Replace with the correct image URL
    }
    ,{
      name: "Punit Andharia",
      position: "Head of Designing",
      imgSrc: "https://teamflourish.co/wp-content/uploads/2024/03/Punit.png" // Replace with the correct image URL
    },
    
    {
      name: "Maulik Navadiyar",
      position: "Sr. Graphic Designe",
      imgSrc: "https://teamflourish.co/wp-content/uploads/2024/04/Maulik.png" // Replace with the correct image URL
    },
    {
      name: "Army Baldha",
      position: "Sr. Graphic Designer",
      imgSrc: "https://teamflourish.co/wp-content/uploads/2024/03/Army.png" // Replace with the correct image URL
    }
    ,
    {
      name: "Ajay Gadhavi",
      position: "UI/UX Designer",
      imgSrc: "https://teamflourish.co/wp-content/uploads/2024/03/Ajay.png" // Replace with the correct image URL
    }
    ,
    {
      name: "Satyen Mori",
      position: "Jr. Web Developer",
      imgSrc: "https://teamflourish.co/wp-content/uploads/2024/03/Satyen.png" // Replace with the correct image URL
    }
    ,
    {
      name: "Dhruvi Sonani",
      position: "Jr. Web Developer",
      imgSrc: "https://teamflourish.co/wp-content/uploads/2024/03/Dhruvi.png" // Replace with the correct image URL
    }
    ,
    {
      name: "Vaibhavi Parmar",
      position: "Jr. Digital Marketer",
      imgSrc: "https://teamflourish.co/wp-content/uploads/2024/03/Vaibhavi.png" // Replace with the correct image URL
    }
    ,
    {
      name: "Jigar Rathod",
      position: "Digital Marketing Executive",
      imgSrc: "https://teamflourish.co/wp-content/uploads/2024/05/Jigar.png" // Replace with the correct image URL
    }
    ,
    {
      name: "Rina Bhalani",
      position: "Jr. Web Developer",
      imgSrc: "https://teamflourish.co/wp-content/uploads/2024/06/Rina-Bhalani.png" // Replace with the correct image URL
    }
    
  ];



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
<div className="flex flex-col lg:flex-row justify-around items-start space-y-8 lg:space-y-0 lg:space-x-10 p-10 lg:w-[80%]  mx-auto p-4">
      <div className="bg-[#f8f8f8] p-6 rounded-lg shadow-md w-full lg:w-1/2 hover:bg-[#DEF2FF] transition duration-300 ease-in-out">
        <div className="flex items-center space-x-2">
          <div className="text-xl font-bold text-red-500">
            <img className="w-12   h-12" src="https://teamflourish.co/wp-content/uploads/2023/09/mission-icon.png" alt="Mission Icon" />
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold">Mission</h2>
        </div>
        <p className="mt-4 text-gray-700 text-sm lg:text-base">
          We are believers of trusting the process. We are dedicated to delivering innovative, data-driven, and results-oriented digital marketing solutions tailored to meet the unique needs of our clients. Our mission is to foster growth, enhance online visibility, and drive meaningful engagement for the businesses we partner with. We always focus on creativity, technology, and strategic thinking. We aim to create impactful and memorable digital experiences that resonate with audiences, boost brand loyalty, and ultimately, generate tangible, sustainable results. We are not just a digital marketing agency, we are your trusted partners on the journey to digital excellence, dedicated to shaping a future where businesses thrive in the digital landscape.
        </p>
      </div>
      <div className="bg-[#f8f8f8] p-6 rounded-lg shadow-md w-full lg:w-1/2 hover:bg-[#DEF2FF] transition duration-300 ease-in-out">
        <div className="flex items-center space-x-2">
          <div className="text-xl font-bold text-green-500">
            <img className="w-12 h-12" src="https://teamflourish.co/wp-content/uploads/2023/09/vision-icon.png" alt="Vision Icon" />
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold">Vision</h2>
        </div>
        <p className="mt-4 text-gray-700 text-sm lg:text-base">
          At Flourish, our vision is to revolutionize the digital landscape, one innovation at a time. We imagine a future where every business, regardless of size or industry, can harness the power of the digital scope to not just survive, but grow. We see a world where creativity knows no bounds, where innovative strategies seamlessly merge with cutting-edge technology, propelling businesses toward unparalleled success. Our vision is to be the driving force behind this transformation, empowering businesses to connect with their audiences in meaningful ways. We aspire to redefine the standards of digital marketing, setting new benchmarks for creativity, authenticity, and result-driven processes.
        </p>
      </div>

    </div>
    <div className="flex items-center justify-center min-W-screen ">
  <div className="bg-[#f8f8f8] p-6 rounded-lg shadow-md w-full lg:w-1/2 hover:bg-[#DEF2FF] transition duration-300 ease-in-out">
    <div className="flex items-center space-x-2">
      <h2 className="text-2xl lg:text-3xl font-bold flex flex-1 justify-center items-center">Our Company Value</h2>
    </div>
    <p className="mt-4 text-gray-700 text-sm lg:text-base">
    At Flourish, integrity is our foundation, innovation is our driving force, and excellence is our benchmark. We’re committed to delivering results with transparency and authenticity. Creativity fuels our strategies, and collaboration defines our teamwork. We value adaptability, ensuring we stay ahead in the ever-evolving digital landscape. Client success is not just a goal, it’s our shared victory. Join us in shaping digital futures with trust, creativity, and dedication.
    </p>
  </div>
</div>
<div className="text-center p-8">
  <h1 className="text-3xl font-bold mb-8">
    Our <span className="text-blue-500">Challengers</span>
  </h1>
  <div className="flex flex-wrap justify-center md:justify-around items-center space-y-8 md:space-y-0">
    {teamMembers.map((member, index) => (
      <div key={index} className="flex flex-col items-center basis-full sm:basis-1/2 md:basis-1/3 px-4 mb-16  pt-16">
        <div className="relative">
          <img 
            className="w-40 h-40 md:w-80 md:h-80" 
            src={member.imgSrc} 
            alt={member.name} 
          />
          
        </div>
        <h2 className="text-3xl font-extrabold mt-4">{member.name}</h2>
        <p className="text-gray-500 text-xl mt-2">{member.position}</p>
      </div>
    ))}
  </div>
</div>

<div className="bg-gray-50 py-10">
      <h2 className="text-center text-4xl font-semibold mb-10">Our <samp className="text-blue-500"> Awards</samp></h2>
      <div className="flex flex-wrap justify-center items-center gap-6">
        <img src="https://teamflourish.co/wp-content/uploads/2023/11/Untitled_design__1_-removebg-preview.png" alt="Sortlist Verified Agency" className="w-32 md:w-48" />
        <img src="https://teamflourish.co/wp-content/uploads/2023/09/award1.png" alt="Top Technical SEO Clutch Ahmedabad 2023" className="w-32 md:w-48" />
        <img src="https://teamflourish.co/wp-content/uploads/2023/10/Untitled_design__2_-removebg-preview.png" alt="Top Content Writing Services Clutch Ahmedabad 2023" className="w-32 md:w-48" />
        <img src="https://teamflourish.co/wp-content/uploads/2023/11/Untitled_design-removebg-preview.png" alt="Top Rated Agency Sortlist" className="w-32 md:w-48" />
      </div>
    </div>




  </>
  );
};

export default AboutUs;