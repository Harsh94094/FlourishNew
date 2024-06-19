import React from 'react';

const BlogCard = ({ date, author, title, description, image }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:bg-[#EBF3FC] hover:border-2 h-full hover:border-[#A6D4F4] transition duration-300 mx-4 my-4 w-full md:w-1/3 lg:w-1/4 m-2 flex flex-col justify-between ">
      <div className="w-full h-80"> {/* Increased the height of the image container */}
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="px-6 pt-4 pb-2 flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0">
        <span className="text-sm bg-[#5DA8D8] p-2 text-white">{date}</span>
        <span className="text-black text-sm ml-0 sm:ml-2 font-bold">{author}</span>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

const BlogSection = () => {
  const blogs = [
    {
      date: "June 12, 2024",
      author: "Flourish Creation",
      title: "How Custom Logo Design Can Elevate Your Brand Identity and Recognition",
      description: "Building a strong brand identity is important for success in a modern competitive enterprise panorama. One of the exceptional techniques to gain this is a custom logo...",
      image: "https://teamflourish.co/wp-content/uploads/2024/06/LOGO-DESIGN.png"
    },
    {
      date: "June 7, 2024",
      author: "Flourish Creation",
      title: "The Future of Branding: Trends You Can’t Ignore",
      description: "In a fast-paced global organization, staying ahead of the curve is really important. Companies that must comply with cutting-edge day tendencies are becoming obsolete...",
      image: "https://teamflourish.co/wp-content/uploads/2024/06/new2_Mesa-de-trabajo-1.png"
    },
    {
      date: "June 1, 2024",
      author: "Flourish Creation",
      title: "Marketing Insights May 2024: Latest Triumphs of Different Brands",
      description: "As part of our monthly blog series on marketing and advertising, we highlight recent impactful campaigns and collaborations to help you stay ahead in the industry...",
      image: "https://teamflourish.co/wp-content/uploads/2024/06/4952918-1.png"
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Explore the horizon of <span className="text-blue-500">Blogs & News</span></h2>
      <p className="text-center text-gray-700 mb-12">
        Explore our various collections of articles and informative blogs. From Small business tips to Branding our blog covers a wide range of topics to keep you informed and entertained our latest posts and discover something new today!
      </p>
      <div className="flex flex-wrap justify-center">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            date={blog.date}
            author={blog.author}
            title={blog.title}
            description={blog.description}
            image={blog.image}
          />
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">View More</button>
      </div>
      
    </div>
  );
};

export default BlogSection;
