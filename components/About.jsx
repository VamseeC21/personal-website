import React, { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi'
import Reveal from './Reveal'

const Dropdown = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className='border border-neutral-200 dark:border-white/5 rounded-lg overflow-hidden transition-colors duration-500'>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center justify-between p-4 cursor-pointer select-none
          hover:bg-neutral-100 dark:hover:bg-white/[0.03] transition-colors duration-300'
      >
        <p className='text-sm text-neutral-900 dark:text-white font-medium transition-colors duration-500'>{title}</p>
        <HiChevronDown
          size={16}
          className={`text-neutral-400 transition-transform duration-500 ease-out ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </div>
      <div
        className={`transition-all duration-500 ease-out overflow-hidden ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className='px-4 pb-4 border-t border-neutral-100 dark:border-white/5 pt-3'>
          {children}
        </div>
      </div>
    </div>
  )
}

const About = () => {
  return (
    <div id='about' className='w-full py-24 px-6'>
        <div className='max-w-[1240px] m-auto'>
            <Reveal>
              <p className='section-heading'>About</p>
              <div className='divider mb-10' />
            </Reveal>

            <div className='md:grid grid-cols-5 gap-16'>
                <div className='col-span-3'>
                    <Reveal>
                      <h2 className='mb-8 font-light'>A bit about me</h2>
                    </Reveal>
                    <Reveal delay={100}>
                      <p className='text-neutral-500 leading-relaxed mb-4'>
                          I study CS and Business at Ohio State and like building things that
                          people actually use. I've interned at Google and JPMorgan Chase, and
                          each experience taught me something different about what it means to
                          ship real software.
                      </p>
                    </Reveal>
                    <Reveal delay={200}>
                      <p className='text-neutral-500 leading-relaxed mb-4'>
                          I'm most interested in the overlap between engineering and product—figuring
                          out not just how to build something, but why it should exist in the first
                          place. Lately I've been digging into AI tooling and full-stack systems
                          that make developers' lives easier.
                      </p>
                    </Reveal>
                    <Reveal delay={300}>
                      <p className='text-neutral-500 leading-relaxed'>
                          Originally from the Midwest. Outside of work I'm usually trying a new
                          restaurant, watching movies, or on a court somewhere playing basketball
                          or tennis.
                      </p>
                    </Reveal>
                </div>

                <div className='col-span-2 mt-10 md:mt-0 space-y-4'>
                    <Reveal delay={150}>
                      <div className='border border-neutral-200 dark:border-white/10 rounded-lg p-6 transition-colors duration-500'>
                          <p className='text-xs uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500 mb-5'>Education</p>
                          <div className='space-y-1'>
                              <p className='text-neutral-900 dark:text-white text-sm font-medium transition-colors duration-500'>The Ohio State University</p>
                              <p className='text-neutral-500 text-sm'>BS, Computer Science & Engineering</p>
                              <p className='text-neutral-500 text-sm'>Minor: Business</p>
                              <p className='text-neutral-400 text-xs mt-2'>Expected May 2027</p>
                          </div>
                      </div>
                    </Reveal>

                    <Reveal delay={250}>
                      <Dropdown title='Relevant Coursework'>
                        <div className='flex flex-wrap gap-2'>
                          {[
                            'Data Structures & Algorithms',
                            'Discrete Structures',
                            'Software Components',
                            'Software Dev & Design',
                            'Low-level Programming',
                            'Operating Systems',
                            'Databases',
                            'Web Development',
                          ].map((course, i) => (
                            <span key={i} className='text-xs px-3 py-1.5 rounded-full
                              bg-neutral-100 dark:bg-white/5 text-neutral-600 dark:text-neutral-400
                              transition-colors duration-500'>
                              {course}
                            </span>
                          ))}
                        </div>
                      </Dropdown>
                    </Reveal>

                    <Reveal delay={350}>
                      <Dropdown title='Activities & Awards'>
                        <div className='space-y-3'>
                          <div>
                            <p className='text-sm text-neutral-700 dark:text-neutral-300 transition-colors duration-500'>BUCC</p>
                            <p className='text-xs text-neutral-500'>Recruitment Lead, 2025</p>
                          </div>
                          <div>
                            <p className='text-sm text-neutral-700 dark:text-neutral-300 transition-colors duration-500'>Susquehanna Tech Discovery Day</p>
                            <p className='text-xs text-neutral-500'>1 of 40 selected nationwide, 2025</p>
                          </div>
                          <div>
                            <p className='text-sm text-neutral-700 dark:text-neutral-300 transition-colors duration-500'>Pi Sigma Epsilon</p>
                            <p className='text-xs text-neutral-500'>Business Fraternity, 2024 - Present</p>
                          </div>
                          <div>
                            <p className='text-sm text-neutral-700 dark:text-neutral-300 transition-colors duration-500'>IBE Honors Program</p>
                            <p className='text-xs text-neutral-500'>1 of 32 selected university-wide</p>
                          </div>
                        </div>
                      </Dropdown>
                    </Reveal>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
