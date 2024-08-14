"use client";
import React, { useEffect, useRef } from 'react';
import 'keen-slider/keen-slider.min.css';
import KeenSlider from 'keen-slider';

const Testimonial = () => {
  const sliderRef = useRef(null);
  const keenSliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      keenSliderRef.current = new KeenSlider(sliderRef.current, {
        loop: true,
        slides: {
          origin: 'center',
          perView: 1.25,
          spacing: 16,
        },
        breakpoints: {
          '(min-width: 1024px)': {
            slides: {
              origin: 'auto',
              perView: 1.5,
              spacing: 32,
            },
          },
        },
      });

      const keenSliderPrevious = document.getElementById('keen-slider-previous');
      const keenSliderNext = document.getElementById('keen-slider-next');

      keenSliderPrevious.addEventListener('click', () => keenSliderRef.current.prev());
      keenSliderNext.addEventListener('click', () => keenSliderRef.current.next());

      return () => {
        keenSliderRef.current.destroy();
      };
    }
  }, []);

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Don't just take our word for it...
            </h2>

            <p className="mt-4 text-gray-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas veritatis illo placeat
              harum porro optio fugit a culpa sunt id!
            </p>

            <div className="hidden lg:mt-8 lg:flex lg:gap-4">
              <button
                aria-label="Previous slide"
                id="keen-slider-previous"
                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              <button
                aria-label="Next slide"
                id="keen-slider-next"
                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
              >
                <svg
                  className="size-5 rtl:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="-mx-6 lg:col-span-2 lg:mx-0">
            <div ref={sliderRef} className="keen-slider">
              <div className="keen-slider__slide">
                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                  <div>
                    <p className="text-2xl font-bold text-rose-600 sm:text-3xl">Sample Testimonial 1</p>
                    <p className="mt-4 leading-relaxed text-gray-700">
                      This is a dummy testimonial text for the first slide. Replace it with actual content as needed.
                    </p>
                  </div>
                  <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                    &mdash; Person One
                  </footer>
                </blockquote>
              </div>

              <div className="keen-slider__slide">
                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                  <div>
                    <p className="text-2xl font-bold text-rose-600 sm:text-3xl">Sample Testimonial 2</p>
                    <p className="mt-4 leading-relaxed text-gray-700">
                      This is a dummy testimonial text for the second slide. Replace it with actual content as needed.
                    </p>
                  </div>
                  <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                    &mdash; Person Two
                  </footer>
                </blockquote>
              </div>

              <div className="keen-slider__slide">
                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                  <div>
                    <p className="text-2xl font-bold text-rose-600 sm:text-3xl">Sample Testimonial 3</p>
                    <p className="mt-4 leading-relaxed text-gray-700">
                      This is a dummy testimonial text for the third slide. Replace it with actual content as needed.
                    </p>
                  </div>
                  <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                    &mdash; Person Three
                  </footer>
                </blockquote>
              </div>

              <div className="keen-slider__slide">
                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                  <div>
                    <p className="text-2xl font-bold text-rose-600 sm:text-3xl">Sample Testimonial 4</p>
                    <p className="mt-4 leading-relaxed text-gray-700">
                      This is a dummy testimonial text for the fourth slide. Replace it with actual content as needed.
                    </p>
                  </div>
                  <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                    &mdash; Person Four
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
