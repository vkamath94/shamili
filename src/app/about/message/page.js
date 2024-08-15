'use client';
import React from 'react';
import Image from 'next/image';
import Principal from '/public/principal.jpeg';

const Section = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Our Principal's Message 
            <br className="hidden lg:inline-block" />
            
          </h1>
          <p className="mb-8 leading-relaxed">
          Education is crucial in the modern world, serving as the foundation for personal and professional success. While academic excellence is one aspect, proficiency in various fields—such as literature, sports, arts, or adventure—is equally important. 
          Identifying and nurturing one's interests and talents are essential for achieving greatness.
          <br/>
          Shyamili PU College offers a platform for such educational growth. 
          With reasonable fees and concessions for outstanding students, the college provides opportunities for students to explore their interests and showcase their abilities.
          <br/><br/>
          The Pre-University Course is a critical stage where students transition from adolescence to adulthood. 
          This period is marked by self-discovery and decision-making, particularly regarding career paths in science, commerce, or arts. The guidance of parents and teachers is vital during this phase to ensure students make informed choices and remain on the right path.
          <br/><br/>
          In today’s nuclear family structure, where children may be the sole focus of their parents' ambitions, it is crucial to channel their energy constructively. 
          Encouraging reading habits and participation in extracurricular activities can help manage their enthusiasm and foster a well-rounded development.
          <br/>
          
            Parents and teachers share the responsibility of instilling ethics and good values in students. Ensuring a supportive environment and monitoring their social circles are integral to their growth. 
            Additionally, guiding students interested in administrative services from the high school level can help them prepare for future roles in public service.
          <br/><br/>
          At Shyamili PU College, we are committed to nurturing the potential in every student, preparing them not only for academic success but for a fulfilling and ethical life.
          </p>
          
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image 
            className="object-cover object-center rounded"
            alt="Principal"
            src={Principal}
            width={720}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};

export default Section;
