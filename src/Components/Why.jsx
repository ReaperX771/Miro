import React, { useEffect, useRef, useState } from 'react'

function Why() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  return (
    <section id='enterprise' className='bg-[#FFD02F] py-20 px-4' ref={sectionRef}>
      <div className='max-w-6xl mx-auto'>

        <div className='text-center mb-16'>
          <h1 className='font-bold text-3xl sm:text-4xl lg:text-5xl text-[#050038]'>
            Why companies large<br className='hidden sm:inline' /> and small trust Miro
          </h1>
          <p className='mt-4 text-[#050038] text-lg font-medium underline cursor-pointer'>
            Contact Sales to request a demo
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 text-center'>

          <div className={`transition-all duration-700 ease-out
            ${isVisible ? 'opacity-100 translate-x-0 delay-[0ms]' : 'opacity-0 translate-x-12'}`}>
            <h2 className='text-3xl lg:text-5xl font-black text-[#050038]'>ISO</h2>
            <p className='mt-2 text-[#050038] text-lg'>
              ISO-27001 enterprise-grade security<br className='hidden sm:block'/> compliant
            </p>
          </div>

          <div className={`transition-all duration-700 ease-out
            ${isVisible ? 'opacity-100 translate-x-0 delay-[100ms]' : 'opacity-0 translate-x-12'}`}>
            <h2 className='text-3xl lg:text-5xl font-black text-[#050038]'>#1</h2>
            <p className='mt-2 text-[#050038] text-lg'>
              Visual Collaboration Platform on G2
            </p>
          </div>

          <div className={`transition-all duration-700 ease-out
            ${isVisible ? 'opacity-100 translate-x-0 delay-[200ms]' : 'opacity-0 translate-x-12'}`}>
            <h2 className='text-3xl lg:text-5xl font-black text-[#050038]'>99%</h2>
            <p className='mt-2 text-[#050038] text-lg'>
              of the Fortune 100 are customers
            </p>
          </div>

          <div className={`transition-all duration-700 ease-out
            ${isVisible ? 'opacity-100 translate-y-0 delay-[300ms]' : 'opacity-0 translate-y-12'}`}>
            <h2 className='text-3xl lg:text-5xl font-black text-[#050038]'>1,000+</h2>
            <p className='mt-2 text-[#050038] text-lg'>
              community- and expert-built templates
            </p>
          </div>

          <div className={`transition-all duration-700 ease-out
            ${isVisible ? 'opacity-100 translate-y-0 delay-[400ms]' : 'opacity-0 translate-y-12'}`}>
            <h2 className='text-3xl lg:text-5xl font-black text-[#050038]'>45M+</h2>
            <p className='mt-2 text-[#050038] text-lg'>
              users around the world
            </p>
          </div>

          <div className={`transition-all duration-700 ease-out
            ${isVisible ? 'opacity-100 translate-y-0 delay-[500ms]' : 'opacity-0 translate-y-12'}`}>
            <h2 className='text-3xl lg:text-5xl font-black text-[#050038]'>100+</h2>
            <p className='mt-2 text-[#050038] text-lg'>
              integrations with technology partners
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Why
