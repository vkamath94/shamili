import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Founders from '../components/Founders';
import Principal from '@/components/Principal';
import Cirriculum from '@/components/Cirriculum';


const page = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Founders/>
      <Principal/>
      <Cirriculum/>
    </div>
  )
}

export default page