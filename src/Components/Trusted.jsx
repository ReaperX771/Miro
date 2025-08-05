import React, { useEffect, useRef, useState } from 'react'
import walmart from '../assets/images/Walmart.png'
import cisco from '../assets/images/cisco.png'
import volvo from '../assets/images/Volvo.png'
import deloitte from '../assets/images/deloitte.png'
import okta from '../assets/images/okta.png'

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

function Trusted() {
  const [topRef, topInView] = useInView({ threshold: 0.2 })
  const [middleRef, middleInView] = useInView({ threshold: 0.2 })
  const [cardsRef, cardsInView] = useInView({ threshold: 0.2 })
  const [btnRef, btnInView] = useInView({ threshold: 0.2 })

  return (
    <section id='solutions'>
      <div className='w-[90%] m-auto py-20'>

        {/* Trusted Logos */}
        <div
          ref={topRef}
          className={`flex flex-col justify-center items-center gap-7 transform transition-all duration-700 ease-out ${
            topInView ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'
          }`}
        >
          <h1 className='text-[#05003899] text-[18px]'>Trusted by 45M+ users</h1>
          <div className='grid grid-cols-5 gap-2 justify-center items-center'>
            <img className='w-30 h-20 object-contain' src={walmart} />
            <img className='w-40 h-20 object-contain' src={cisco} />
            <img className='w-30 h-12 object-contain' src={volvo} />
            <img className='w-35 h-25 object-contain' src={deloitte} />
            <img className='w-30 h-10 object-contain' src={okta} />
          </div>
        </div>

        {/* Middle Headline */}
        <div
          ref={middleRef}
          className={`flex flex-col justify-center items-center mt-20 transform transition-all duration-700 ease-out ${
            middleInView ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
          }`}
        >
          <div className='flex flex-col justify-center items-center'>
            <h1 className='bg-[#FFD02F] w-60 text-center rounded-lg rotate-10 ml-30 lg:ml-100 py-1 font-bold text-lg'>
              YOUR IDEA STARTS HERE
            </h1>
            <h1 className='font-bold text-3xl md:text-5xl mt-10 lg:mt-3 text-center'>
              Collaborate without<br className='hidden sm:block' /> constraints
            </h1>
          </div>
        </div>

        {/* Feature Cards */}
        <div
          ref={cardsRef}
          className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-17 mt-10 transform transition-all duration-700 ease-out ${
            cardsInView ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'
          }`}
        >
          <div className='flex flex-col gap-5'>
            <h1 className='text-[#050038] font-bold text-2xl'>Free forever</h1>
            <p className='text-[#05003899] text-lg'>
              Our free plan gives you unlimited team
              <br className='hidden sm:block' /> members, 3 boards, and 300+ expert-
              <br className='hidden sm:block' /> made templates. Signing up with your
              <br className='hidden sm:block' /> work email lets you bring in your team
              <br className='hidden sm:block' /> faster. See our
              <br className='hidden sm:block' /> <span className='text-[#4262FF]'>pricing plans</span> for more features.
            </p>
          </div>

          <div className='flex flex-col gap-5'>
            <h1 className='text-[#050038] font-bold text-2xl'>Easy integrations</h1>
            <p className='text-[#05003899] text-lg'>
              Miro has 100+ powerful integrations
              <br className='hidden sm:block' /> with tools you already use like G
              <br className='hidden sm:block' /> Suite, Slack, and Jira, so your
              <br className='hidden sm:block' /> workflow is seamless. View the full
              <br className='hidden sm:block' /> list in our <span className='text-[#4262FF]'>Marketplace .</span>
            </p>
          </div>

          <div className='flex flex-col gap-5'>
            <h1 className='text-[#050038] font-bold text-2xl'>Security first</h1>
            <p className='text-[#05003899] text-lg'>
              We treat your data like you would —
              <br className='hidden sm:block' /> with the utmost care. We follow
              <br className='hidden sm:block' /> industry-leading security standards
              <br className='hidden sm:block' /> and give you tools to protect
              <br className='hidden sm:block' /> intellectual property. Learn more
              <br className='hidden sm:block' /> at our <span className='text-[#4262FF]'>Trust Center .</span>
            </p>
          </div>
        </div>

        {/* Button */}
        <div
          ref={btnRef}
          className={`text-center mt-20 transform transition-all duration-700 ease-out ${
            btnInView ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
          }`}
        >
          <button className='bg-[#4262FF] text-white border border-[#4262FF] py-2 px-5 rounded-3xl text-[17px]'>
            Sign up free →
          </button>
        </div>
      </div>
    </section>
  )
}

export default Trusted
