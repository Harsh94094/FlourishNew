import React from 'react';

const jobs = [
  { title: 'Graphic Designer', experience: '1 to 2 Years' },
  { title: 'Digital Marketer', experience: '1 to 2 Years' },
  { title: 'MERN Stack', experience: '1 to 2 Years' },
  { title: 'Content Writer', experience: '0 to 2 Years' },
  { title: 'SEO Executive', experience: '0 to 2 Years' },
  { title: 'PPC Expert', experience: '1 to 2 Years' },
  { title: 'Frontend Developer', experience: '0 to 2 Years' },
  { title: 'UI/UX Designer', experience: '0 to 2 Years' },
  { title: 'HR Executive', experience: '1 to 5 Years' },
  { title: 'Business Development Executive', experience: '0 to 2 Years' },
  { title: 'Sales Executive', experience: '0 to 2 Years' },
  { title: 'Devops Engineer', experience: '1 to 2 Years' },
];
const images = [
  'https://teamflourish.co/wp-content/uploads/2024/04/PXL_20240413_162647940.MP_-scaled.jpg',
  'https://teamflourish.co/wp-content/uploads/2024/03/16-1.jpg',
  'https://teamflourish.co/wp-content/uploads/2024/03/Mask-group.jpg',
  'https://teamflourish.co/wp-content/uploads/2024/03/image-13.jpg',
  'https://teamflourish.co/wp-content/uploads/2024/03/12.jpg',
  'https://teamflourish.co/wp-content/uploads/2024/03/14.jpg',
  'https://teamflourish.co/wp-content/uploads/2024/03/15-1.jpg',
  'https://teamflourish.co/wp-content/uploads/2024/03/17-2.jpg',
];

const JobOpenings = () => {
  return (
    <>
      <div className="bg-blue-100 py-10 flex items-center justify-center">
        <div className="container mx-10 text-center">
          <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-center px-4">
            <div className="flex flex-col items-center lg:items-start lg:w-1/4 lg:mr-10 mb-10 lg:mb-0">
              <h2 className="text-4xl font-bold mb-8 text-center lg:text-left">Blog</h2>
            </div>
            <div className="flex justify-center lg:w-1/2 ">
              <img
                src="https://teamflourish.co/wp-content/uploads/2023/09/ib-img-1.png"
                alt="Teamwork"
                className="max-w-full lg:max-w-md"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-16 text-center mr-12">
        <h2 className="text-3xl font-bold mb-4">Why Choose <span className="text-blue-500">Flourish?</span></h2>
        <p className="mb-8 text-gray-700">
          Because here, you’re not just another employee—you’re part of a close-knit family where your unique talents are celebrated and nurtured.
          At Flourish, we believe in supporting each other's growth, both professionally and personally. From exciting projects that challenge and
          inspire, to a culture that values your well-being and work-life balance, we’ve created an environment where you can truly flourish.
          Join us, and be part of a community where your voice matters, your ideas are heard, and your success is our shared goal.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative p-4 bg-[#5DA8DB] rounded-lg w-full md:w-72">
            <img src="https://teamflourish.co/wp-content/uploads/2024/03/perk1.svg" alt="Weekly Activity" className="absolute top-0 left-0 w-16 h-16 rounded-full -mt-4 -ml-4 bg-white border-2 border-[#7EB4DE] sm:w-20 sm:h-20" />
            <h3 className="text-xl font-semibold mt-8 ml-8 text-white mb-2 mr-3">Weekly Activity</h3>
          </div>
          <div className="relative p-4 bg-[#5DA8DB] rounded-lg w-full md:w-72">
            <img src="https://teamflourish.co/wp-content/uploads/2024/03/perk1.svg" alt="Weekly Activity" className="absolute top-0 left-0 w-16 h-16 rounded-full -mt-4 -ml-4 bg-white border-2 border-[#7EB4DE] sm:w-20 sm:h-20" />
            <h3 className="text-xl font-semibold mt-8 ml-8 text-white mb-2 mr-3">Weekly Activity</h3>
          </div>
          <div className="relative p-4 bg-[#5DA8DB] rounded-lg w-full md:w-72">
            <img src="https://teamflourish.co/wp-content/uploads/2024/03/perk1.svg" alt="Weekly Activity" className="absolute top-0 left-0 w-16 h-16 rounded-full -mt-4 -ml-4 bg-white border-2 border-[#7EB4DE] sm:w-20 sm:h-20" />
            <h3 className="text-xl font-semibold mt-8 ml-8 text-white mb-2 mr-3">Weekly Activity</h3>
          </div>
          <div className="relative p-4 bg-[#5DA8DB] rounded-lg w-full md:w-72">
            <img src="https://teamflourish.co/wp-content/uploads/2024/03/perk1.svg" alt="Weekly Activity" className="absolute top-0 left-0 w-16 h-16 rounded-full -mt-4 -ml-4 bg-white border-2 border-[#7EB4DE] sm:w-20 sm:h-20" />
            <h3 className="text-xl font-semibold mt-8 ml-8 text-white mb-2 mr-3">Weekly Activity</h3>
          </div>
          <div className="relative p-4 bg-[#5DA8DB] rounded-lg w-full md:w-72">
            <img src="https://teamflourish.co/wp-content/uploads/2024/03/perk1.svg" alt="Weekly Activity" className="absolute top-0 left-0 w-16 h-16 rounded-full -mt-4 -ml-4 bg-white border-2 border-[#7EB4DE] sm:w-20 sm:h-20" />
            <h3 className="text-xl font-semibold mt-8 ml-8 text-white mb-2 mr-3">Weekly Activity</h3>
          </div>
          <div className="relative p-4 bg-[#5DA8DB] rounded-lg w-full md:w-72">
            <img src="https://teamflourish.co/wp-content/uploads/2024/03/perk1.svg" alt="Weekly Activity" className="absolute top-0 left-0 w-16 h-16 rounded-full -mt-4 -ml-4 bg-white border-2 border-[#7EB4DE] sm:w-20 sm:h-20" />
            <h3 className="text-xl font-semibold mt-8 ml-8 text-white mb-2 mr-3">Weekly Activity</h3>
          </div>

        </div>
      </div>
      <div className="bg-blue-50 py-8">
        <h1 className="text-center text-3xl font-bold mb-8">Our Job <span className="text-blue-600 underline">Openings</span></h1>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg text-center">
              <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
              <p className="text-gray-600 mb-4">Experience: {job.experience}</p>
              <button className="relative p-0 bg-transparent border-0 cursor-pointer">
                <svg
                  width="230"
                  height="100"
                  viewBox="0 0 230 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 13L230 13" stroke="#5DA8DB" strokeWidth="2" />
                  <path d="M0 85L230 85" stroke="#5DA8DB" strokeWidth="2" />
                  <path d="M213 0V100" stroke="#5DA8DB" strokeWidth="2" />
                  <path d="M13 0V100" stroke="#5DA8DB" strokeWidth="2" />
                  <rect x="14" y="14" width="198" height="70" fill="white" />
                  <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="black" fontSize="20px">
                    Apply Now
                  </text>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-center text-2xl font-bold mb-4">Activity At<span className="text-blue-500">Flourish</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img src={src} alt={`Activity ${index + 1}`} className="w-full h-auto" />
            </div>
          ))}
        </div>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-blue-50">
        <form className="p-6 rounded-lg w-full max-w-xl">
          <h2 className="text-2xl font-bold mb-4 text-center">Apply <span className="text-blue-500">Here</span></h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
              <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Select Position</label>
            <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
              <option>Select Position</option>
              <option>Web Dev</option>
              <option>App Dev</option>
              <option>MERN Stack</option>
              <option>Digital</option>
              <option>Video Edit</option>
              <option>React</option>
              <option>Java</option>
              <option>Php</option>
            </select>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Experience</label>
            <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
              <option>Experience</option>
              <option>0-1 years</option>
              <option>1-2 years</option>
              <option>2-3 years</option>
              <option>3-4 years</option>
              <option>4-5 years</option>
              <option>6+ years</option>
            </select>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Upload File</label>
            <input type="file" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
            <p className="mt-2 text-sm text-gray-500">Max. file size: 5 MB.</p>
          </div>
          <div className="flex justify-center ml-4 mt-3">
            <svg
              width="100%"
              height="auto"
              viewBox="0 0 570 100"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer max-w-sm"
            >
              <path d="M0 15L570 15" stroke="#5DA8DB" strokeWidth="2" />
              <path d="M0 85L570 85" stroke="#5DA8DB" strokeWidth="2" />
              <path d="M558.896 0V100" stroke="#5DA8DB" strokeWidth="2" />
              <path d="M11.104 0V100" stroke="#5DA8DB" strokeWidth="2" />
              <rect x="12" y="16" width="546.312" height="68" fill="#5DA8DB" />
              <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="30px">
                Download Portfolio
              </text>
            </svg>
          </div>
        </form>
      </div>
    </>
  );
};

export default JobOpenings;
