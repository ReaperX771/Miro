import React, { useEffect, useRef, useState } from 'react'
import arrowrb from '../assets/images/arrowrb.png'
import hybrid from '../assets/images/hybrid.png'
import m3 from '../assets/images/M3.png'

function useInView(options) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
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

function Work() {
  const [leftTopRef, leftTopInView] = useInView({ threshold: 0.2 })
  const [rightTopRef, rightTopInView] = useInView({ threshold: 0.2 })
  const [leftBottomRef, leftBottomInView] = useInView({ threshold: 0.2 })
  const [rightBottomRef, rightBottomInView] = useInView({ threshold: 0.2 })

  return (
    <section id='product' className='overflow-x-hidden'>
      <div className='w-[90%] m-auto py-20'>

        {/* Top row */}
        <div className='flex flex-col-reverse lg:flex-row justify-center items-center gap-17'>
          
          {/* Left text */}
          <div
            ref={leftTopRef}
            className={`flex flex-col gap-7 transform transition-all duration-700 ease-out ${
              leftTopInView ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'
            }`}
          >
            <h1 className='text-3xl md:text-5xl font-bold text-[#050038]'>
              Work together,
              <br className='hidden sm:block' />wherever you work
            </h1>

            <p className='text-sm text-[#05003899] leading-6'>
              In the office, remote, or a mix of the two, with Miro,
              <br className='hidden sm:block' /> your team can connect, collaborate, and co-create in
              <br className='hidden sm:block' /> one space no matter where you are.
            </p>

            <div className='flex gap-5 items-center'>
              <p className='text-[#4262FF] border-b'>Learn more</p>
              <img className='h-4' src={arrowrb} />
            </div>
          </div>

          {/* Right image */}
          <div
            ref={rightTopRef}
            className={`transform transition-all duration-700 ease-out ${
              rightTopInView ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
            }`}
          >
            <img src={hybrid} />
          </div>
        </div>

        {/* Bottom row */}
        <div className='flex flex-col lg:flex-row justify-center mt-10 lg:mt-0 items-center gap-12 md:gap-12 lg:gap-17'>

          {/* Left image */}
          <div
            ref={leftBottomRef}
            className={`transform transition-all duration-700 ease-out ${
              leftBottomInView ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'
            }`}
          >
            <img src={m3} />
          </div>

          {/* Right text */}
          <div
            ref={rightBottomRef}
            className={`flex flex-col gap-7 mt-2 lg:mt-0 transform transition-all duration-700 ease-out ${
              rightBottomInView ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
            }`}
          >
            <h1 className='text-3xl md:text-5xl font-bold text-[#050038]'>
              Connect
              <br className='hidden sm:block' /> your tools,
              <br className='hidden sm:block' /> close your tabs
            </h1>

            <p className='text-sm text-[#05003899] leading-6'>
              Whether you want to edit your Google Docs, resolve
              <br className='hidden sm:block' /> Jira issues, or collaborate over Zoom, Miro has 100+
              <br className='hidden sm:block' /> integrations with tools you already use and love.
            </p>

            <div className='flex gap-5 items-center'>
              <p className='text-[#4262FF] border-b'>Learn more</p>
              <img className='h-4' src={arrowrb} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work
