import React, { useEffect, useRef, useState } from 'react'
import star from '../assets/images/star.png'
import hstar from '../assets/images/hstar.png'
import g2 from '../assets/images/g2.png'
import getapp from '../assets/images/getapp.png'
import capterra from '../assets/images/capterra.png'
import matt from '../assets/images/matt.png'

function useInView(options) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
      },
      options
    )

    const current = ref.current
    if (current) observer.observe(current)

    return () => {
      if (current) observer.unobserve(current)
    }
  }, [ref, options])

  return [ref, inView]
}

function Hero() {
  const [leftRef, leftInView] = useInView({ threshold: 0.3 })
  const [rightRef, rightInView] = useInView({ threshold: 0.3 })

  return (
    <section id='login'>
      <div className='w-[95%] m-auto py-20'>
        <div className='flex flex-col-reverse lg:flex-row justify-center gap-10'>

          {/* Left side */}
          <div
            ref={leftRef}
            className={`flex flex-col gap-7 transform transition-all duration-1000 ease-out ${
              leftInView ? 'translate-x-0 opacity-100' : '-translate-x-17 opacity-0'
            }`}
          >
            <div className='flex flex-col gap-5 text-center lg:text-start'>
              <h1 className='text-[#050038] text-4xl xl:text-6xl font-bold'>
                Take ideas from <br className='hidden sm:block' /> better to best
              </h1>
              <h1 className='text-[#050038B8] text-lg'>
                Miro is your team's visual platform to connect,
                <br className='hidden sm:block' />
                collaborate, and create — together.
              </h1>
            </div>

            <div className='flex flex-col gap-2 justify-center items-center lg:items-start lg:justify-start'>
              <label>
                <input
                  type='email'
                  placeholder='Enter your Email'
                  required
                  className='px-5 w-80 lg:w-100 h-10 border border-[#9B99AF] rounded-4xl focus:outline-[#4262FF]'
                />
              </label>
              <button className='bg-[#4262FF] w-80 lg:w-100 h-10 rounded-full justify-center text-xl text-white'>
                Sign up free →
              </button>
              <p className='text-[#05003866]'>Collaborate with your team within minutes</p>
            </div>

            <div className='flex justify-center items-center sm:items-start lg:justify-start gap-5 sm:gap-7 mt-10'>
              <div className='flex flex-col'>
                <div className='flex gap-1'>
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={hstar} />
                </div>
                <p className='text-[#050038] text-[11px]'>Based on 5149+ reviews:</p>
              </div>

              <div className='flex'>
                <img src={g2} />
                <img src={getapp} />
                <img src={capterra} />
              </div>
            </div>
          </div>

          {/* Right side */}
          <div
            ref={rightRef}
            className={`flex justify-center items-center transform transition-all duration-1000 ease-out ${
              rightInView ? 'translate-x-0 opacity-100' : 'translate-x-17 opacity-0'
            }`}
          >
            <img src={matt} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
