import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Founders from '../components/Founders';
import Principal from '@/components/Principal';
import Subcard from '@/components/Sci_comm';


const page = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Founders/>
      <Principal/>
      <Subcard/>
    </div>
  )
}

export default page