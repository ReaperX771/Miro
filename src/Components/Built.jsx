import React, { useEffect, useRef, useState } from 'react'
import arrowrb from '../assets/images/arrowrb.png'
import brainstorm from '../assets/images/brainstorm.png'
import mark from '../assets/images/mark.png'
import gd from '../assets/images/gd.png'
import figma from '../assets/images/figma.png'
import n from '../assets/images/N.png'
import crazy from '../assets/images/crazy.png'

function Built() {
  const sectionRef1 = useRef(null)
  const sectionRef2 = useRef(null)
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => setVisible1(entry.isIntersecting),
      { threshold: 0.2 }
    )
    const observer2 = new IntersectionObserver(
      ([entry]) => setVisible2(entry.isIntersecting),
      { threshold: 0.2 }
    )

    if (sectionRef1.current) observer1.observe(sectionRef1.current)
    if (sectionRef2.current) observer2.observe(sectionRef2.current)

    return () => {
      if (sectionRef1.current) observer1.unobserve(sectionRef1.current)
      if (sectionRef2.current) observer2.unobserve(sectionRef2.current)
    }
  }, [])

  return (
    <section id='resources' className='overflow-x-hidden'>
      <div className='w-[77%] m-auto py-20'>

        <div className='text-sm text-[#050038]' ref={sectionRef1}>
          <h1 className={`text-3xl lg:text-5xl text-[#050038] font-bold transition-all duration-700 ease-out
            ${visible1 ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            Built for the way you work
          </h1>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:flex gap-5 lg:gap-2 justify-center items-center text-center mt-5'>
            <p className={`border text-sm text-[#050038] border-[#F2F2F2] py-3 px-5 rounded-4xl 
              hover:border-none hover:bg-[#F1F3FD] duration-700 transition-all ease-out
              ${visible1 ? 'opacity-100 -translate-x-0 delay-[0ms]' : 'opacity-0 -translate-x-12'}`}>
              Brainstorming
            </p>
            <p className={`border text-sm text-[#050038] border-[#F2F2F2] py-3 px-5 rounded-4xl 
              hover:border-none hover:bg-[#F1F3FD] duration-700 transition-all ease-out
              ${visible1 ? 'opacity-100 -translate-x-0 delay-[100ms]' : 'opacity-0 -translate-x-12'}`}>
              Diagramming
            </p>
            <p className={`border text-sm text-[#050038] border-[#F2F2F2] py-3 px-5 rounded-4xl 
              hover:border-none hover:bg-[#F1F3FD] duration-700 transition-all ease-out
              ${visible1 ? 'opacity-100 -translate-x-0 delay-[200ms]' : 'opacity-0 -translate-x-12'}`}>
              Meetings & Workshops
            </p>
            <p className={`border text-sm text-[#050038] border-[#F2F2F2] py-3 px-5 rounded-4xl 
              hover:border-none hover:bg-[#F1F3FD] duration-700 transition-all ease-out
              ${visible1 ? 'opacity-100 -translate-x-0 delay-[300ms]' : 'opacity-0 -translate-x-12'}`}>
              Scrum Events
            </p>
            <p className={`border text-sm text-[#050038] border-[#F2F2F2] py-3 px-5 rounded-4xl 
              hover:border-none hover:bg-[#F1F3FD] duration-700 transition-all ease-out
              ${visible1 ? 'opacity-100 -translate-x-0 delay-[400ms]' : 'opacity-0 -translate-x-12'}`}>
              Mapping
            </p>
            <p className={`border text-sm text-[#050038] border-[#F2F2F2] py-3 px-5 rounded-4xl 
              hover:border-none hover:bg-[#F1F3FD] duration-700 transition-all ease-out
              ${visible1 ? 'opacity-100 -translate-x-0 delay-[500ms]' : 'opacity-0 -translate-x-12'}`}>
              Research & Design
            </p>
            <p className={`border col-span-2 md:col-span-3 lg:col-span-2 text-sm text-[#050038] border-[#F2F2F2] py-3 px-5 rounded-4xl 
              hover:border-none hover:bg-[#F1F3FD] duration-700 transition-all ease-out
              ${visible1 ? 'opacity-100 -translate-x-0 delay-[600ms]' : 'opacity-0 -translate-x-12'}`}>
              Strategic Planning
            </p>
          </div>

          <div className={`flex flex-col-reverse gap-5 lg:gap-0 lg:flex-row mt-10 xl:ml-7
            transition-all duration-700 ease-out delay-[300ms]
            ${visible1 ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className='flex flex-col gap-7'>
              <p className='text-sm text-[#050038]'>Brainstorming</p>
              <p className='text-sm text-[#050038]'>
                Unleash creative ideas and build on
                <br className='hidden sm:block' /> them with the help of sticky notes,
                <br className='hidden sm:block' /> images, mind maps, videos, drawing
                <br className='hidden sm:block' /> capabilities — the list goes on.
              </p>
              <div className='flex gap-5 items-center'>
                <p className='text-[#4262FF] border-b'>Learn more</p>
                <img className='h-4' src={arrowrb} />
              </div>
            </div>
            <div>
              <img className='lg:w-150 xl:w-183 h-auto lg:ml-12' src={brainstorm} />
            </div>
          </div>
        </div>

        <div className='mt-30 lg:mt-50' ref={sectionRef2}>
          <h1 className={`text-3xl lg:text-5xl text-[#050038] font-bold transition-all duration-700 ease-out
            ${visible2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            Built for all kinds of teams
          </h1>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:flex gap-5 lg:gap-2 justify-center items-center lg:justify-start lg:ml-2 text-center mt-5'>
            <p className={`border text-sm text-[#050038] border-[#F2F2F2] py-3 px-5 rounded-4xl 
              hover:border-none hover:bg-[#F1F3FD] duration-700 transition-all ease-out
              ${visible2 ? 'opacity-100 translate-x-0 delay-[0ms]' : 'opacity-0 translate-x-12'}`}>
              UX & Design
            </p>
            <p className={`border text-sm text-[#050038] border-[#F2F2F2] py-3 px-5 rounded-4xl 
              hover:border-none hover:bg-[#F1F3FD] duration-700 transition-all ease-out
              ${visible2 ? 'opacity-100 translate-x-0 delay-[100ms]' : 'opacity-0 translate-x-12'}`}>
              Marketing
            </p>
            <p className={`border text-sm text-[#050038] border-[#F2F2F2] py-3 px-5 rounded-4xl 
              hover:border-none hover:bg-[#F1F3FD] duration-700 transition-all ease-out
              ${visible2 ? 'opacity-100 translate-x-0 delay-[200ms]' : 'opacity-0 translate-x-12'}`}>
              Product Management
            </p>
            <p className={`border text-sm text-[#050038] border-[#F2F2F2] py-3 px-5 rounded-4xl 
              hover:border-none hover:bg-[#F1F3FD] duration-700 transition-all ease-out
              ${visible2 ? 'opacity-100 translate-x-0 delay-[300ms]' : 'opacity-0 translate-x-12'}`}>
              Engineering
            </p>
            <p className={`border text-sm text-[#050038] border-[#F2F2F2] py-3 px-5 rounded-4xl 
              hover:border-none hover:bg-[#F1F3FD] duration-700 transition-all ease-out
              ${visible2 ? 'opacity-100 translate-x-0 delay-[400ms]' : 'opacity-0 translate-x-12'}`}>
              Consultants
            </p>
            <p className={`border text-sm text-[#050038] border-[#F2F2F2] py-3 px-5 rounded-4xl 
              hover:border-none hover:bg-[#F1F3FD] duration-700 transition-all ease-out
              ${visible2 ? 'opacity-100 translate-x-0 delay-[500ms]' : 'opacity-0 translate-x-12'}`}>
              Agile Coaches
            </p>
            <p className={`border col-span-2 md:col-span-3 lg:col-span-2 text-sm text-[#050038] border-[#F2F2F2] py-3 px-5 rounded-4xl 
              hover:border-none hover:bg-[#F1F3FD] duration-700 transition-all ease-out
              ${visible2 ? 'opacity-100 translate-x-0 delay-[600ms]' : 'opacity-0 translate-x-12'}`}>
              Sales
            </p>
          </div>

          <div className={`flex flex-col-reverse lg:flex-row mt-10 justify-center lg:justify-start lg:ml-2 
            transition-all duration-700 ease-out delay-[300ms]
            ${visible2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className='flex flex-col mt-5'>
              <div className='flex gap-5'>
                <img src={mark} />
                <h1 className='text-lg text-[#05003899]'>Build low-fi wireframes</h1>
              </div>
              <div className='flex gap-5'>
                <img className='w-7 h-7' src={mark} />
                <h1 className='text-lg text-[#05003899]'>
                  Involve stakeholders in the<br className='hidden sm:block' /> design process
                </h1>
              </div>
              <div className='flex gap-5'>
                <img className='w-7 h-7' src={mark} />
                <h1 className='text-lg text-[#05003899]'>
                  Run engaging design<br className='hidden sm:block' /> workshops
                </h1>
              </div>
              <div className='flex gap-5 items-center mt-5 lg:mt-7'>
                <p className='text-[#4262FF] border-b'>Learn more</p>
                <img className='h-4' src={arrowrb} />
              </div>
              <div className='flex flex-col gap-5 mt-10 lg:mt-17'>
                <h1 className='text-lg text-[#05003899]'>Integrate your favorite tools</h1>
                <div className='flex gap-9.5 items-center'>
                  <img className='w-7 h-7' src={gd} />
                  <h1 className='text-[#FF61F6] bg-[#470137] w-6 h-6 text-center rounded-sm font-bold'>Xd</h1>
                  <img className='w-7 h-7' src={figma} />
                  <img className='w-7 h-7' src={n} />
                </div>
              </div>
            </div>
            <div>
              <img className='lg:w-130 xl:w-183 h-auto lg:ml-9' src={crazy} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Built
