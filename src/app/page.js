import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Founders from '../components/Founders';
import Principal from '@/components/Principal';


const page = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Founders/>
      <Principal/>
    </div>
  )
}

export default page