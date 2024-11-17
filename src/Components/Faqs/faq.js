// import React from 'react';
import './faq.css';
import Expand from "../expand/expand"
// import bgImage from ""


const Faq = () => {
  const faqs = [
    {
      question: 'What is AVISHREE HOSPITALITY PRIVATE LIMITED?',
      answer: 'AVISHREE HOSPITALITY PRIVATE LIMITED having CIN U93290WB2024PTC273108 is 2 months & 15 days old Private company incorporated with MCA on 29th August, 2024. AVISHREE HOSPITALITY PRIVATE LIMITED is listed in the class of Private company and classified as Non-govt company. This company is registered at Registrar of Companies(ROC), RoC-Kolkata with an Authorized Share Capital of ₹15,00,000 and paid-up capital is ₹1,00,000.',
    },
    {
      question: 'What is the CIN of AVISHREE HOSPITALITY PRIVATE LIMITED?',
      answer: 'CIN of AVISHREE HOSPITALITY PRIVATE LIMITED is U93290WB2024PTC273108.',
    },
    {
      question: 'Where is AVISHREE HOSPITALITY PRIVATE LIMITED located?',
      answer: 'Address of AVISHREE HOSPITALITY PRIVATE LIMITED is 4, Block-n, 5/221, Narendra Nagar, Rajarhat Gopalpur, North 24 Parganas, Rajarhat, West Bengal, India, 700136.',
    },
    {
      question: 'Who are the directors of AVISHREE HOSPITALITY PRIVATE LIMITED?',
      answer: 'The company has 3 directors/key management personnel AURODEEP PAUL, SUDESHNA PAUL, SWATI PAUL',
    },
    {
      question: 'What is the contact details of AVISHREE HOSPITALITY PRIVATE LIMITED?',
      answer: 'Email : aurodeeppaul071@gmail.com  Contact Number : 8777584271',
              
    },
  ];

  return (
    <div className='faqs'>
      <div className="faq-left">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h1>FAQ's</h1>
        <h3>Frequently Asked Questions.</h3>
        <button>View All</button>

      </div>
      <div className="faq-right">
        {faqs.map((faq, index) => (
          <Expand key={index}  question={`Q.  ${faq.question}`}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className='text-left m-1 pt-3 font-mono'>A: {faq.answer}</p>
          </Expand>
        ))}
      </div>
    </div>
  );
};

export default Faq;
