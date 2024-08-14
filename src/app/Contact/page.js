import React from 'react'

const Page = () => {
  return (
    <div className="flex justify-center items-center py-10">
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
  )
}

export default Page
