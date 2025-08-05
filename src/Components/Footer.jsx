import React from 'react'
import twitter from '../assets/images/twitter.png'
import face from '../assets/images/face.png'
import linkedin from '../assets/images/linkedin.png'
import insta from '../assets/images/instagram.png'
import yout from '../assets/images/youtube.png'
import apps from '../assets/images/apps.png'
import goog from '../assets/images/goog.png'
import gof from '../assets/images/gof.png'
import lang2 from '../assets/images/lang2.png'

function Footer() {
  return (
    <section id='pricing' className='overflow-x-hidden'>
      <div className='bg-[#050038] mt-20'>

        <div className='grid gap-10 grid-cols-2 py-20 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-[90%] mx-auto'>

          <div className='text-white'>
            <h1 className='text-lg font-bold'>Product</h1>
            <div className='text-[16px] space-y-1'>
              <p>Online whiteboard</p>
              <p>Apps & Integrations</p>
              <p>Templates</p>
              <p>Miroverse</p>
              <p>Miro Developer Platform</p>
              <p>Miro for Devices</p>
              <p>Security & Compliance</p>
              <p>Accessibility</p>
              <p>Changelog</p>
              <div className='flex gap-2'>
                <a className='border-b' href='#'>View demo</a>
                <span>→</span>
              </div>
            </div>
          </div>

          <div className='text-white'>
            <h1 className='text-lg font-bold'>Solutions</h1>
            <div className='text-[16px] space-y-1'>
              <p>Meetings and Workshops</p>
              <p>Brainstorming & Ideation</p>
              <p>Agile Workflows</p>
              <p>Diagramming</p>
              <p>Research & Design</p>
              <p>Strategy & Planning</p>
              <p>Mind Map</p>
              <p>Concept MapConcept Map</p>
              <p>Online Sticky Notes</p>
              <p>Flowchart</p>
              <p>Wireframing</p>
            </div>
          </div>

          <div className='text-white'>
            <h1 className='text-lg font-bold'>Resources</h1>
            <div className='text-[16px] space-y-1'>
              <p>Miro Academy</p>
              <p>Help Center</p>
              <p>Blog</p>
              <p>Status</p>
              <p>Miro Community</p>
              <p>Miro Professional Network</p>
              <p>Miro Experts Directory</p>
              <p>Miro Events</p>
            </div>
          </div>

          <div className='text-white'>
            <h1 className='text-lg font-bold'>Company</h1>
            <div className='text-[16px] space-y-1'>
              <p>About us</p>
              <p>Careers 🚀</p>
              <p>Miro in the News</p>
              <p>Customer Stories</p>
            </div>
          </div>

          <div className='text-white '>
            <h1 className='text-lg font-bold'>Plans and Pricing</h1>
            <div className='text-[16px] space-y-1'>
              <p>Pricing</p>
              <p>Business</p>
              <p>Enterprise</p>
              <p>Consultants</p>
              <p>Education</p>
              <p>Startups</p>
              <p>NPOs</p>
              <div className='flex gap-2'>
                <a className='border-b' href='#'>Contact sales</a>
                <span>→</span>
              </div>
            </div>
          </div>

        </div>

        <div className='border-t border-[#9B99AF]'>
          <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-5 w-[90%] mx-auto py-6'>
            <div className='flex flex-wrap items-center gap-5'>
              <a href='#'>
              <img src={twitter} alt='Twitter' />
              </a>

              <a href='#'>
              <img src={face} alt='Facebook' />
              </a>

              <a href='#'>
              <img src={linkedin} alt='LinkedIn' />
              </a>

              <a href='#'>
              <img src={insta} alt='Instagram' />
              </a>

              <a href='#'>
              <img src={yout} alt='YouTube' />
              </a>
              <div className='flex items-center gap-2'>
                <img src={lang2} alt='Language' />
                <p className='text-white'>EN</p>
              </div>
              <p className='text-white'>© 2022 Miro</p>
              <p className='text-white'>Terms of Service</p>
              <p className='text-white'>Privacy Policy</p>
              <p className='text-white'>Manage Cookies</p>
            </div>

            <div className='flex items-center gap-3'>
              <img src={apps} alt='App Store' />
              <img src={goog} alt='Google Play' />
              <img src={gof} alt='GoF' />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Footer