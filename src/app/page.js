import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Founders from '../components/Founders';
import Head from 'next/head';

const page = () => {
  return (
    <div>
      <Head>
        <title>Shamili Pu College</title>
      </Head>
      <Header/>
      <Hero/>
      <Founders/>
    </div>
  )
}

export default page