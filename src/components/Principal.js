import React from 'react'
import Image from 'next/image';
import Primg from '/public/principal.jpeg';

const Principal = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image className="object-cover object-center rounded" alt="hero" src={Primg} width="720" height="600"/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Principal Dr. Raj Mohan
        <br className="hidden lg:inline-block"/>
      </h1>
      <p className="mb-8 leading-relaxed">Education is crucial in the modern world, serving as the foundation for personal and professional success. While academic excellence is one aspect, proficiency in various fields—such as literature, sports, arts, or adventure—is equally important. Identifying and nurturing one's interests and talents are essential for achieving greatness.
      <br/><br/>The Pre-University Course is a critical stage where students transition from adolescence to adulthood. This period is marked by self-discovery and decision-making, particularly regarding career paths in science, commerce, or arts. The guidance of parents and teachers is vital during this phase to ensure students make informed choices and remain on the right path.
      <br/><br/>At Shamili PU College, we are committed to nurturing the potential in every student, preparing them not only for academic success but for a fulfilling and ethical life.
      </p>
      
    </div>
  </div>
</section>
  );
}

export default Principal