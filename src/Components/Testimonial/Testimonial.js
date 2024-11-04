import React from 'react';
import './Testimonial.css'; 
// import jit from '../../Assets/Jit_Paul.png'
// import shakti from '../../Assets/Shakti.png'
// import rajdip from '../../Assets/rajdip.png'
// import chandu from '../../Assets/chandu.png'
const Testimonial = () => {
  const testimonials = [
    {
      name: 'Shakti Pada Bhowmick',
      role: 'Customer',
      rating: 5,
      review: 'খুব সুন্দর একটা রাইড উপভোগ করলাম আমাদের এই নারায়নপুর থেকে বাগনান অব্দি এর আগেও আমি অন্য গাড়িতে গিয়েছি কিন্তু এত সুন্দর সার্ভিস এত সুন্দর ব্যবহার পাইনি কোথাও আপনাদেরও আমি অনুরোধ করছি এদের মাধ্যমে রাইড নিয়ে আপনারা দেখুন পরখ করে।',
      // imageUrl: shakti
    },
    {
      name: 'Jit Paul',
      role: 'Customer',
      rating: 5,
      review: 'Paradise Car rental provided me with an exceptional rental experience. From the moment I made my reservation online to returning the vehicle.',
      // imageUrl: jit,
    },
    {
      name: 'Rajdeep Sarkar',
      role: 'Customer',
      rating: 5,
      review: 'I’ve rented cars from various companies, but Paradise Car rental truly stands out. Not only did they offer competitive prices.',
      // imageUrl: rajdip,
    },
    {
      name: 'Soumyajit Ray',
      role: 'Customer',
      rating: 5,
      review: 'Pick up and drop was on time. Happy to see this kind of panctuality. I would also recommend others also to take its services for better experience',
      // imageUrl: chandu,
    },
  ];

  return (
    <div className="testimonial-section">
      <h2 className="section-title">Words from Our Satisfied Clients</h2>
      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
          <div className='flex flex-wrap justify-center '> <img src={testimonial.imageUrl} alt={testimonial.name} className="testimonial-image" /></div>
            <h3 className='text-sky-700'>{testimonial.name}</h3>
            <p className="role">{testimonial.role}</p>
            <div className="stars">
              {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
            </div>
            <p className="review">{testimonial.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
