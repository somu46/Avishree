import React from 'react';
import './Home.css'

function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Tell us about your event',
      description: 'A consultation with our team to determine your requirements, preferences, budget, and any dietary restrictions.'
    },
    {
      number: '02',
      title: 'Menu Customization',
      description: 'We design a customized menu or help you select from packages based on your event theme and preferences.'
    },
    {
      number: '03',
      title: 'Food Preparation',
      description: 'Our chefs use fresh, locally-sourced ingredients to craft dishes that meet high presentation and taste standards.'
    },
    {
      number: '04',
      title: 'Event Setup and Execution',
      description: 'Our team handles the complete setup and decoration to ensure a seamless and beautifully arranged event.'
    },
    {
      number: '05',
      title: 'Post-Event Cleanup and Feedback',
      description: 'We handle post-event cleanup and welcome your feedback to continue improving our services.'
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-center text-4xl font-bold text-teal-800 mb-12">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="step-number">{step.number}</div>
            <h3 className="text-xl font-semibold text-teal-900 mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowItWorks;
