import React from 'react'
import {PaymentInfo} from "./assets/people shaking hands.png"

const About = () => {
  return (
    <section className='min-h-screen bg-white px-6 py-10 text-gray-800'>
      <div className='max-w-6xl mx-auto space-y-16'>
        
        {/*header */}
        <div className='text-center'>
       <h1 className='text-3xl md:text-4xl font-bold mb-6 text-indigo-600'>About Credit Pay</h1>
        <p className='text-lg md:text-xl leading-relaxed mb-8'>At <span className='font-semibold text-amber-600s'>Credit pay </span>
        we empower individuals and business by making credit accessible, secure and stress-free through modern technology
        </p>
      </div>
      {/*mission*/}
      <div className='max-w-4xl mx-auto text-center mb-5'>
        <h2 className='text-2xl font-semibold mb-3 text-indigo-600'>Our Mission</h2>
        <p className='text-gray-700 text-lg leading-relaxed'>Our mission is to bridge the gap between financial needs and opportunitiesby offering fast, transparent and reliable credit services.
          We use modern technology to simplify lending and give people control over their finances. 
        </p>
      </div>
      
      {/*vision*/}
      <div className='max-w-4xl mx-auto text-center mb-4'>
      <h2 className='text-2xl font-semibold mb-3 text-indigo-600 '>Our Vision</h2>
      <p className='text-gray-700 text-lg leading-relaxed'>To become Africa's most trusted digital credit platform,
        enabling financial freedom for millions through innovation, simplicity and inclusive acess.
      </p>
      </div>
      
      {/*why choose us */}
      <div className='max-w-4xl mx-auto text-center'>
      <h2 className='text-2xl font-semibold mb-3 text-indigo-600 '>Why Choose Credit Pay</h2>
       <ul className='list-disc list-inside list-decimal text-gray-700 text-lg space-y-2'>
        <li>
          Instant loan approvals and disbursement
        </li>
        <li>
          flexible repayment options
        </li>
        <li>
          No hidden charges or fine print
        </li>
        <li>
          24/7 customer support
        </li>
        <li>
          Secure and reliable platform 
        </li>
       </ul>
      </div>

      {/* call to action */}
      <div className='text-center bg-indigo-600 text-white rounded-s-xl p-10 mt-10 shadow-lg'>
      <h2 className='text-3xk font-bold mb-4'>Ready to experience modern lending</h2>
      <p className='text-lg mb-6'>
       Join thousands who trust credit pay for fast, flexible and secure credit.
      </p>
      <a href='/Loan Request' className='bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full hover:bg-indigo-100 transition'>
        Get Started Now
      </a>
      </div>
      </div>
      </section>
  );
};

export default About;