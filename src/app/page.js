import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Founders from '../components/Founders';
import Principal from '@/components/Principal';
import Curriculum from '@/components/Curriculum';


const page = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Founders/>
      <Principal/>
      <Curriculum/>
      <Curriculum/>
    </div>
  )
}

export default page