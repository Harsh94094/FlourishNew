import React, { useState } from 'react';
import Blog from "./Blog"

const BlogCard = ({ date, author, title, description, image }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg hover:bg-[#EBF3FC] hover:border-[#A6D4F4] transition duration-300 mx-4 my-4 w-full md:w-1/3 lg:w-1/4 flex flex-col justify-between relative">
    <div className="absolute inset-0 border-2 border-transparent hover:border-[#A6D4F4] transition duration-300 w-full h-80"></div>
    <div className="relative w-full h-80">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="px-6 pt-4 pb-2 flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0">
      <span className="text-sm bg-[#5DA8D8] p-2 text-white">{date}</span>
      <span className="text-black text-sm ml-0 sm:ml-2 font-bold">{author}</span>
    </div>
    <div className="px-6 py-4 flex-grow">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
  </div>
);
const BlogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      date: 'June 12, 2024',
      author: 'John Doe',
      title: 'How Custom Logo Design Can Elevate Your Brand Identity and Recognition',
      description: 'Building a strong brand identity is important for success in a modern competitive enterprise panorama...',
      image: 'https://teamflourish.co/wp-content/uploads/2024/06/LOGO-DESIGN.png',
      category: 'Branding'
    },
    {
      date: 'June 7, 2024',
      author: 'Jane Smith',
      title: 'The Future of Branding: Trends You Can’t Ignore',
      description: 'In a fast-paced global organisation, staying ahead of the curve is really important...',
      image: 'https://teamflourish.co/wp-content/uploads/2024/06/new2_Mesa-de-trabajo-1.png',
      category: 'Branding'
    },
    {
      date: 'June 1, 2024',
      author: 'Alice Johnson',
      title: 'Marketing Insights May 2024: Latest Triumphs of Different Brands',
      description: 'As part of our monthly blog series on marketing and advertising, we highlight recent impactful campaigns...',
      image: 'https://teamflourish.co/wp-content/uploads/2024/06/4952918-1.png',
      category: 'Marketing Insights'
    },
    {
      date: 'May 02, 2024',
      author: 'By Flourish Creation',
      title: 'How to Choose Right Production House?',
      description: 'In the ever-evolving landscape of advertising, selecting the perfect production house can be the difference between a forgettable campaign and...',
      image: 'https://teamflourish.co/wp-content/uploads/2024/05/shoot.png',
      category: 'Film Production'
    },
    {
      date: 'April 29, 2024',
      author: 'By Flourish Creation',
      title: 'Top AI Tools Every Marketer Should Use In 2024',
      description: 'In today’s digital era, The use of top AI tools is increasing day by day. The utilization of Artificial Intelligence...',
      image: 'https://teamflourish.co/wp-content/uploads/2024/04/ai.png',
      category: 'Digital Marketing'
    },
    {
      date: 'April 09, 2024',
      author: 'By Flourish Creation',
      title: 'What is the keyword research? Importance of keyword research',
      description: 'Hello, you are reading this blog because you want to know about what a keyword is, what keyword research is,...',
      image: 'https://teamflourish.co/wp-content/uploads/2024/04/SEo.png',
      category: 'Search Engine Optimisation'
    },
    {
      date: 'January 17, 2024',
      author: 'By Flourish Creation',
      title: 'What is UI/UX Design? How it Shapes User Experience',
      description: 'In the rapidly changing digital world, the partnership between User Interface (UI) and User Experience (UX) design has become the...',
      image: 'https://teamflourish.co/wp-content/uploads/2024/01/ui_ux_design_01-Converted-01.svg',
      category: 'UI/UX Development'
    },
    {
      date: 'December 05, 2023',
      author: 'By Flourish Creation',
      title: 'On-Page SEO:- The Guidelines for Beginners',
      description: 'On-page SEO is one of the most important parts of Digital Marketing. SEO has two main parts: On-page SEO and...',
      image: 'https://teamflourish.co/wp-content/uploads/2024/01/01-2.png',
      category: 'Search Engine Optimisation'
    },
    {
      date: 'November 03, 2023 ',
      author: 'By Flourish Creation',
      title: 'What is Packaging design and Why your products need a good Packaging design?',
      description: 'What is Packaging Design?   Packaging Design is one of the best creative parts of Graphic designing and Product development...',
      image: 'https://teamflourish.co/wp-content/uploads/2023/12/SEO.png',
      category: 'Product and Package Design'
    },
    {
      date: 'October 18, 2023 ',
      author: 'By Flourish Creation',
      title: 'How to generate more sales and leads with Email Marketing?',
      description: 'In today digital world, Email marketing is still an effective strategy for businesses seeking to create more revenue and leads....',
      image: 'https://teamflourish.co/wp-content/uploads/2023/11/9.png',
      category: 'Digital Marketing'
    },
    {
      date: 'October 11, 2023',
      author: 'By Flourish Creation',
      title: 'How Digital Marketing helps small business?',
      description: 'All business owners who wish to increase their revenue should invest in digital marketing. Whether you own a small business...',
      image: 'https://teamflourish.co/wp-content/uploads/2023/10/11.png',
      category: 'Digital Marketing'
    },
    {
      date: 'September 02, 2023',
      author: 'By Flourish Creation',
      title: 'Why Every Business Needs A Website?',
      description: 'The value of having a strong online presence cannot be ignored in today digital age. Businesses of all sizes must...',
      image: 'https://teamflourish.co/wp-content/uploads/2023/10/Untitled_design__8_-removebg-preview.png',
      category: 'Web Development'
    },
  ];

  const categories = [
    'All',
    'Blog',
    'Branding',
    'Digital Marketing',
    'Film Production',
    'Graphic Design',
    'Marketing Insights',
    'Product and Package Design',
    'Search Engine Optimisation',
    'Social Media',
    'UI/UX Development',
    'Web Development',
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <>
       <Blog name={selectedCategory} />
  
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Explore the horizon of <span className="text-blue-600">Blogs & News</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-gray-500">
          Explore our various collections of articles and informative blogs. From Small business tips to Branding our blog covers a wide range of topics to keep you informed and entertained our latest posts and discover something new today!
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 border rounded-md ${selectedCategory === category ? 'bg-blue-600 text-white' : 'text-blue-600 border-blue-600'} hover:bg-blue-600 hover:text-white`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap justify-center">
          {filteredPosts.map((blog, index) => (
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
      </div>
   
    </section>
    </>
  );
};

export default BlogSection;
