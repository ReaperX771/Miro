import React, { useEffect, useRef, useState } from 'react'
import rox from '../assets/images/rox.png'
import jane from '../assets/images/jane.png'
import lau from '../assets/images/lau.png'

function Loved() {
  const card1Ref = useRef(null)
  const card2Ref = useRef(null)
  const card3Ref = useRef(null)
  const ctaRef = useRef(null)

  const [visibleCard1, setVisibleCard1] = useState(false)
  const [visibleCard2, setVisibleCard2] = useState(false)
  const [visibleCard3, setVisibleCard3] = useState(false)
  const [visibleCTA, setVisibleCTA] = useState(false)

  useEffect(() => {
    const observer = (ref, setVisible) =>
      new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
        threshold: 0.2,
      })

    const obs1 = observer(card1Ref, setVisibleCard1)
    const obs2 = observer(card2Ref, setVisibleCard2)
    const obs3 = observer(card3Ref, setVisibleCard3)
    const obsCTA = observer(ctaRef, setVisibleCTA)

    if (card1Ref.current) obs1.observe(card1Ref.current)
    if (card2Ref.current) obs2.observe(card2Ref.current)
    if (card3Ref.current) obs3.observe(card3Ref.current)
    if (ctaRef.current) obsCTA.observe(ctaRef.current)

    return () => {
      if (card1Ref.current) obs1.unobserve(card1Ref.current)
      if (card2Ref.current) obs2.unobserve(card2Ref.current)
      if (card3Ref.current) obs3.unobserve(card3Ref.current)
      if (ctaRef.current) obsCTA.unobserve(ctaRef.current)
    }
  }, [])

  return (
    <section id='signup' className='overflow-x-hidden'>
      <div>

        <div className='flex flex-col justify-center items-center gap-7 py-7 mt-20'>
          <h1 className='text-4xl sm:text-5xl text-[#050038] font-bold text-center'>
            Loved by the world's best teams
          </h1>
          <p className='text-lg text-[#4262FF] border px-5 py-2 rounded-full cursor-pointer'>
            See all customer stories →
          </p>
        </div>

        {/* Testimonials */}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 w-[90%] mx-auto mt-15'>

          {/* VMware */}
          <div
            ref={card1Ref}
            className={`transition-all duration-700 ease-out 
              ${visibleCard1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            <div className='flex flex-col gap-7'>
              <h1 className='text-4xl text-[#050038] font-black tracking-wide'>
                vm<span className='font-normal'>ware</span>
              </h1>
              <p className='text-[#05003899] text-lg leading-relaxed'>
                “When the pandemic hit, those of us who thrive on in-person collaboration were worried that our
                creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration,
                whiteboarding, and retrospectives while remote.”
              </p>
              <div className='flex gap-5 items-center'>
                <img src={rox} alt='Roxanne Mustafa' />
                <div>
                  <p className='text-[#05003899] text-sm'>Roxanne Mustafa</p>
                  <p className='text-[#05003899] text-sm'>Design Team Lead at VMware</p>
                </div>
              </div>
            </div>
          </div>

          {/* DocuSign */}
          <div
            ref={card2Ref}
            className={`transition-all duration-700 ease-out delay-150
              ${visibleCard2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            <div className='flex flex-col gap-7'>
              <h1 className='text-4xl text-[#050038] font-bold'>DocuSign</h1>
              <p className='text-[#05003899] text-lg leading-relaxed'>
                “Miro helps solve one of the major gaps in product design: how to manage tasks across product
                designers whose projects are in different tools.”
              </p>
              <div className='flex gap-5 items-center xl:mt-14 lg:mt-15 md:mt-15'>
                <img src={jane} alt='Jane Ashley' />
                <div>
                  <p className='text-[#05003899] text-sm'>Jane Ashley</p>
                  <p className='text-[#05003899] text-sm'>Head of Design at DocuSign</p>
                </div>
              </div>
            </div>
          </div>

          {/* frog */}
          <div
            ref={card3Ref}
            className={`md:col-span-2 xl:col-span-1 flex justify-center transition-all duration-700 ease-out delay-300
              ${visibleCard3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            <div className='flex flex-col gap-7 w-full md:w-[50%] lg:w-[50%] xl:w-[80%]'>
              <h1 className='text-4xl text-[#050038] font-bold'>frog</h1>
              <p className='text-[#05003899] text-lg leading-relaxed'>
                “As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that’s
                at the core of what we do and will continue to extend into the future.”
              </p>
              <div className='flex gap-5 items-center xl:mt-6'>
                <img src={lau} alt='Laura Smith' />
                <div>
                  <p className='text-[#05003899] text-sm'>Laura Smith</p>
                  <p className='text-[#05003899] text-sm'>Head of Design at DocuSign</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Box */}
        <div
          ref={ctaRef}
          className={`bg-[#050038] h-90 mt-30 rounded-lg w-[95%] md:w-[70%] mx-auto transition-all duration-700 ease-out delay-200
            ${visibleCTA ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <div className='text-center justify-center flex flex-col gap-2 items-center pt-20'>
            <h1 className='text-white font-bold text-3xl md:text-4xl lg:text-5xl'>Join 45M+ users today</h1>
            <p className='text-white/50 text-lg'>Start for free — upgrade anytime.</p>
            <p className='text-white/50 text-lg border-b w-90 text-center'>
              Joining as an organization? Contact Sales
            </p>
            <button className='text-white text-lg px-4 rounded-full py-2 text-center bg-[#4262FF] mt-10'>
              Sign up free →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Loved
