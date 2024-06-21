import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const FAQItem = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What does the website development process involve?',
      answer: 'Our website development process begins with understanding your business, goals, and target audience. We then proceed to design and develop your website, incorporating your feedback along the way. Finally, we perform thorough testing before launching your website.',
    },
    {
      question: 'How long does it take to build a website?',
      answer: 'The timeline for building a website depends on the complexity and scope of the project. Typically, it can take anywhere from a few weeks to a few months.',
    },
    {
      question: 'What technologies do you use for website development?',
      answer: 'We use a variety of technologies including HTML, CSS, JavaScript, React, Node.js, and more, depending on the specific requirements of the project.',
    },
    {
      question: 'Do you offer website maintenance services?',
      answer: 'Yes, we offer ongoing website maintenance services to ensure your site remains updated, secure, and functional.',
    },
    {
      question: 'Can you help with website hosting?',
      answer: 'Absolutely! We can help you with website hosting setup and recommend reliable hosting providers that suit your needs.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto p-4 my-8">
      <div className="max-w-3xl mx-auto text-center">
        {faqs.map((faq, index) => (
          <div key={index} className="p-4 border rounded-md mb-4 ">
            <div className="flex justify-between items-center ">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <button onClick={() => toggleFAQ(index)} className="focus:outline-none">
                {openIndex === index ? (
                  <span className="text-2xl">−</span>
                ) : (
                  <span className="text-2xl">+</span>
                )}
              </button>
            </div>
            <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${openIndex === index ? 'max-h-screen' : 'max-h-0'}`}>
              <div className="mt-2 text-left">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQItem;
