import React from 'react';

const AboutUs = ({name}) => {
    const services = [
        {
          title: "Web Development",
          description: "We are offering Design Excellence, User-friendly and professional web development services at competitive price.",
          imageUrl: "https://teamflourish.co/wp-content/uploads/2023/09/Untitled-125.png"
        },
        {
          title: "Ui/Ux Development",
          description: "Seize the opportunity to deliver exceptional user experiences with our cutting-edge UI/UX services. Don’t wait any longer—elevate your digital marketing and user interface/user experience game today!",
          imageUrl: "https://teamflourish.co/wp-content/uploads/2023/09/Untitled-125.png"
        },
        {
          title: "App Development",
          description: "Looking for an App? Our team is enable with latest technologies tools and development methods. To create high visually appealing and customizable apps. We brings innovation to your finger tips.",
          imageUrl: "https://teamflourish.co/wp-content/uploads/2023/09/Untitled-125.png"
        },
        {
          title: "SEO",
          description: "Want to rank top on Google? Our SEO experts optimize your website for top search results. Increase organic traffic, improve visibility, and stay ahead of the competition with our best SEO solutions.",
          imageUrl: "https://teamflourish.co/wp-content/uploads/2023/09/Untitled-125.png"
        },
        {
          title: "Facebook Ad",
          description: "Ready to stand out your brand on Facebook? Our Facebook Ads experts create strategic campaigns that boost engagement, likes, and conversions. Feel the power of social media advertising to grow your brand.",
          imageUrl: "https://teamflourish.co/wp-content/uploads/2023/09/Untitled-125.png"
        },
        {
          title: "Google Ads",
          description: "Want to dominate your presence on Google? Our Google Ads specialists create ROI-focused campaigns that get you noticed. Drive targeted traffic, increase conversions, and maximize your advertising budget.",
          imageUrl: "https://teamflourish.co/wp-content/uploads/2023/09/Untitled-125.png"
        },
        {
          title: "Email Marketing",
          description: "Witness the potential of email marketing with our expertise. Our strategic campaigns drive engagement, conversions, and ROI. Use the power of personalized emails, automation, and analytics to grow your business.",
          imageUrl: "https://teamflourish.co/wp-content/uploads/2023/09/Untitled-125.png"
        },
        {
          title: "Motion Graphics",
          description: "Want to make your message remarkable? Our motion graphics experts transform ideas into mesmerizing animations and visual narratives. From logo animations to explainer videos, we create a motion that tells your story with flair.",
          imageUrl: "https://teamflourish.co/wp-content/uploads/2023/09/Untitled-125.png"
        },
        {
          title: "Logo Design",
          description: "Ready to make creative impressions? Our logo design experts craft distinctive and memorable logos that represent your brand identity. Elevate your visual branding and leave a mark on your audience.",
          imageUrl: "https://teamflourish.co/wp-content/uploads/2023/09/Untitled-125.png"
        },
        {
          title: "Brochure Design",
          description: "Looking for conceptual brochures? Our designers create visually striking and informative brochures that engage your audience. From concept to print-ready designs, we turn your vision into compelling marketing collateral.",
          imageUrl: "https://teamflourish.co/wp-content/uploads/2023/09/Untitled-125.png"
        },
        {
          title: "Packaging Design",
          description: "We create a product design that stands out on the shelves. Our packaging design experts create eye-catching and memorable designs that leave a lasting impression. Improve your product presentation and enhance brand recognition.",
          imageUrl: "https://teamflourish.co/wp-content/uploads/2023/09/Untitled-125.png"
        },
        {
          title: "Stationery Design",
          description: "Looking for stunning stationery? Our designers craft personalized and unique stationery that reflects your branding style. From business cards to letterheads, we transform your branding into a visual masterpiece.",
          imageUrl: "https://teamflourish.co/wp-content/uploads/2023/09/Untitled-125.png"
        },
      ];
      const ServiceCard = ({ title, description, imageUrl }) => (
        <div className="p-6 border border-gray-200 rounded-3xl shadow-lg transition-shadow duration-300 hover:bg-[#d3e3fa] hover:shadow-lg">
        <div className="flex items-center gap-4 md:gap-8">
          <img src={imageUrl} alt={title} className="object-cover rounded w-16 h-10 md:w-24 md:h-16" />
          <h2 className="text-lg font-semibold ml-4 md:text-3xl">{title}</h2>
        </div>
        <p className="text-gray-700 mt-2">{description}</p>
      </div>
      
      );
  return (
  <>
      <div className="bg-blue-100 py-10 flex items-center justify-center">
      <div className="container mx-10 text-center">
        <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-center px-4">
          <div className="flex flex-col items-center lg:items-start lg:w-1/4 lg:mr-10 mb-10 lg:mb-0">
            <h2 className="text-4xl font-bold mb-8 text-center lg:text-left">Service</h2>
          </div>
          <div className="flex justify-center lg:w-1/2">
            <img 
              src="https://teamflourish.co/wp-content/uploads/2023/09/ib-img-11.png" 
              alt="Teamwork" 
              className="max-w-full lg:max-w-md" 
            />
          </div>
        </div>
      </div>
      
    </div>
    <div className="container mx-auto py-12">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <ServiceCard key={index} title={service.title} description={service.description} imageUrl={service.imageUrl} />
      ))}
    </div>
  </div>
    
  



  </>
  );
};

export default AboutUs;

