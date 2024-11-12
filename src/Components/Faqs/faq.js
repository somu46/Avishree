import React from 'react';
import './faq.css';
import Expand from "../expand/expand"



const Faq = () => {
  const faqs = [
    {
      question: 'What Is Paradise Car Rental Service?',
      answer: 'Paradise car rental service provides the best journey to your destination.',
    },
    {
      question: 'Is Paradise Available In My City?',
      answer: 'Yes, Paradise is available in multiple cities across the country. Check our website for your location.',
    },
    {
      question: 'What Type Of Vehicles/Cars Does Paradise Offer?',
      answer: 'We offer a wide range of vehicles, including SUVs, sedans, and hatchbacks.',
    },
    {
      question: 'How Much Does It Cost To Rent A Car At Paradise?',
      answer: 'The cost varies based on the car type and duration. Please visit our pricing page for more details.',
    },
    {
      question: 'What Are The Advantages Of Availing Cars On Rent At Paradise?',
      answer: 'We offer competitive pricing, well-maintained vehicles, and excellent customer service.',
    },
  ];

  return (
    <div className='faqs'>
      <div className="faq-left">
        <h1>FAQ's</h1>
        <h3>Frequently Asked Questions.</h3>
        <button>View All</button>
      </div>
      <div className="faq-right">
        {faqs.map((faq, index) => (
          <Expand key={index}  question={`Q.  ${faq.question}`}>
            <p className='text-left m-1 pt-3'>A: {faq.answer}</p>
          </Expand>
        ))}
      </div>
    </div>
  );
};

export default Faq;
