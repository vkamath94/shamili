'use client';
import React from 'react';

const ContactPage = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10">Contact</h1>

        <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Address</h2>
              <p className="text-gray-700">
                Shamili PU College,Kidiyoor, Udupi,
                <br />
                Karnataka, India
                <br />
                PIN: 576103
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Office Timings</h2>
              <p className="text-gray-700">
                Monday to Friday: 9.00 a.m. to 4.00 p.m.
                <br />
                Saturday: 9.00 a.m to 1.00 p.m
                <br />
                College remains closed on Sunday
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact</h2>
              <p className="text-gray-700">
            
                E-mails: 
                <a href="mailto:su270.puc@gmail.com" className="text-blue-500 underline"> su270.puc@gmail.com</a>
                <span> | </span>
                <a href="mailto:shamilipuclg@example.com" className="text-blue-500 underline">shamilipuclg@gmail.com</a>
                <br />

                Cell: 9945843120
                
              </p>
            </div>

           
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Where is Shamili PU College Located</h2>
          <div className="flex justify-center items-center">
            <div className="w-full max-w-4xl px-4">
              <div style={{ width: '100%', paddingBottom: '56.25%', position: 'relative' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.1868974438844!2d74.71569887600137!3d13.338647287011515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcbb9031edd52f%3A0xa474c53d33affaf8!2sShamili%20P%20U%20College!5e0!3m2!1sen!2sin!4v1723661613782!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
