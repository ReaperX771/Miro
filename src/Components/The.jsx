import React, { useEffect, useRef, useState } from 'react';
import thew from '../assets/images/thew.png';

function useInView(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      options
    );
    const current = ref.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, [ref, options]);

  return [ref, inView];
}

function The() {
  const [imageRef, imageInView] = useInView({ threshold: 0.3 });
  const [textRef, textInView] = useInView({ threshold: 0.3 });

  return (
    <section>
      <div className='w-[77%] m-auto py-20 overflow-x-hidden'>
        <div className='flex flex-col md:relative w-full'>

          {/* Image Slide-in from Right */}
          <div
            ref={imageRef}
            className={`transition-all duration-[1000ms] ease-out transform ${
              imageInView
                ? 'translate-x-0 opacity-100'
                : 'translate-x-20 opacity-0'
            }`}
          >
            <img className='w-full h-auto object-cover' src={thew} alt='The Ways We Work' />
          </div>

          {/* Text Slide-in from Left */}
          <div
            ref={textRef}
            className={`md:absolute inset-0 flex xl:translate-x-70 text-center flex-col justify-center items-center px-6 sm:px-12 md:px-20 lg:px-32 transition-all duration-[1000ms] ease-out transform ${
              textInView
                ? 'translate-x-0 opacity-100'
                : '-translate-x-20 opacity-0'
            }`}
          >
            <h1 className='text-xl sm:text-3xl md:text-4xl font-bold text-[#050038] max-w-lg'>
              The Ways
              <br className='hidden sm:block' />
              We Work
            </h1>

            <p className='mt-2 text-[#050038] font-medium max-w-md'>
              How has our relationship with work changed?
            </p>

            <button className='bg-[#4262FF] text-white border border-[#4262FF] py-2 px-5 rounded-3xl text-[17px] mt-4'>
              View the report →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default The;
