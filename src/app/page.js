import React from 'react';
import Header from './Header';
import Hero from '../components/Hero';
import Founders from '../components/Founders';
import Principal from '@/components/Principal';
import Subcard from '@/components/Sci_commerce';
import ResultsDisplay from '@/components/ResDisplay';
import Testimonial from '@/components/Testimonial';


const page = () => {
  return (
    <div>
      <Hero/>
      <Founders/>
      <Principal/>
      <Subcard/>
      <ResultsDisplay 
        image1="/Result1.jpeg" 
        image2="/Result2.jpeg" 
        altText1="Student 1 Result" 
        altText2="Student 2 Result" 
      />
      <Testimonial/>
    </div>
  )
}

export default page