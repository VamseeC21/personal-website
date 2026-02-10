import React, { useState } from 'react'
import Image from 'next/image'
import { HiChevronDown } from 'react-icons/hi'
import Reveal from './Reveal'

const experiences = [
  {
    company: 'UpAhead',
    logo: '/logos/upahead-logo.jpeg',
    role: 'Software Engineer Intern',
    period: 'Aug 2025 - Sep 2025',
    location: 'Remote',
    tech: 'JavaScript, React, Firebase',
    bullets: [
      'Engineering an academic management platform with AI-powered syllabus processing that automates assignment extraction and calendar sync across 4+ LMS\'s, reducing manual data entry by 80%',
      'Building scalable Firebase auth systems supporting 5,000+ university students with secure user profile management and cross-platform data sync, boosting user engagement by 60% via SMS/push notifications',
    ],
  },
  {
    company: 'Google',
    logo: '/logos/google-logo.webp',
    role: 'Software Engineer Intern',
    period: 'May 2025 - Aug 2025',
    location: 'Mountain View, CA',
    tech: 'C++, Python',
    bullets: [
      'Engineered a Gemini evaluation pipeline showing that 25% of perceived errors were ground truth errors',
      'Built real-time dashboards that aggregated data from 5+ pipelines, designing server-side endpoints',
      'Improved data retrieval speed by 40% and enabling actionable insights for 3 cross-functional teams',
    ],
  },
  {
    company: 'Susquehanna International Group',
    logo: '/logos/sig-logo.jpg',
    role: 'Technology Discovery Day Fellow',
    period: 'Apr 2025',
    location: 'Bala Cynwyd, PA',
    tech: '',
    bullets: [
      '1/40 selected to attend Tech Discovery Day at SIG HQ',
    ],
  },
  {
    company: 'JPMorgan Chase',
    logo: '/logos/jpm-logo.webp',
    role: 'Software Engineer Intern',
    period: 'Jun 2024 - Mar 2025',
    location: 'Columbus, OH',
    tech: 'Python, Flask, React, PostgreSQL, AWS',
    bullets: [
      'Created self-servicing React web application to manage archive system for over 80 billion documents',
      'Constructed RESTful Flask APIs to retrieve and insert bulk data reducing 300 labor hours per quarter',
      'Designed relational database infrastructure with Python ORM and PostgreSQL',
      'Developed user interface with component library integration and deployed to AWS using Terraform',
    ],
  },
  {
    company: 'JPMorgan Chase',
    logo: '/logos/jpm-logo.webp',
    role: 'Software Engineer Intern',
    period: 'Jun 2023 - Aug 2023',
    location: 'Columbus, OH',
    tech: 'Go, Hugo, HTML/CSS',
    bullets: [
      'Overhauled internal site with Hugo and Go, programmed with HTML and CSS',
      'Leveraged Fuse.js to implement a fuzzy-search feature improving information retrieval by 95%, impacting 2,200 users',
    ],
  },
]

const ExperienceCard = ({ exp, index }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Reveal delay={index * 100}>
      <div
        className={`border border-neutral-200 dark:border-white/5 rounded-xl overflow-hidden transition-all duration-500 ${
          isOpen
            ? 'bg-neutral-100 dark:bg-white/[0.03] border-neutral-300 dark:border-white/10'
            : 'hover:border-neutral-300 dark:hover:border-white/15 hover:bg-neutral-50 dark:hover:bg-white/[0.02]'
        }`}
      >
        {/* Header - clickable */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='flex items-center justify-between p-6 cursor-pointer select-none'
        >
          <div className='flex items-center gap-6 flex-1 min-w-0'>
            {/* Company logo */}
            <div className='w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg overflow-hidden bg-white'>
              <Image
                src={exp.logo}
                alt={exp.company}
                width={40}
                height={40}
                className='object-contain'
              />
            </div>

            {/* Company & role */}
            <div className='flex-1 min-w-0'>
              <div className='flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3'>
                <h3 className='text-lg font-normal text-neutral-900 dark:text-white'>
                  {exp.company}
                </h3>
                <span className='hidden sm:block text-neutral-300 dark:text-neutral-600'>|</span>
                <p className='text-sm text-neutral-500'>{exp.role}</p>
              </div>
            </div>
          </div>

          {/* Period & chevron */}
          <div className='flex items-center gap-4 flex-shrink-0 ml-4'>
            <p className='text-xs text-neutral-400 dark:text-neutral-600 hidden sm:block'>{exp.period}</p>
            <HiChevronDown
              size={18}
              className={`text-neutral-400 transition-transform duration-500 ease-out ${
                isOpen ? 'rotate-180' : 'rotate-0'
              }`}
            />
          </div>
        </div>

        {/* Expandable content */}
        <div
          className={`transition-all duration-500 ease-out overflow-hidden ${
            isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className='px-6 pb-6'>
            <div className='border-t border-neutral-200 dark:border-white/5 pt-5'>
              {/* Meta info */}
              <div className='flex flex-wrap gap-x-6 gap-y-2 mb-5'>
                <p className='text-xs text-neutral-400 sm:hidden'>{exp.period}</p>
                <p className='text-xs text-neutral-400'>{exp.location}</p>
                <p className='text-xs text-neutral-400'>{exp.tech}</p>
              </div>

              {/* Bullet points */}
              <ul className='space-y-3'>
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className='flex gap-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed'>
                    <span className='text-neutral-300 dark:text-neutral-600 mt-1.5 flex-shrink-0'>
                      <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                        <circle cx="3" cy="3" r="3" />
                      </svg>
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

const Experience = () => {
  return (
    <div id='experience' className='w-full py-24 px-6 bg-neutral-100 dark:bg-[#111] transition-colors duration-500'>
        <div className='max-w-[1240px] m-auto'>
            <Reveal>
              <p className='section-heading'>Experience</p>
              <div className='divider mb-10' />
              <h2 className='mb-12 font-light'>Where I've worked</h2>
            </Reveal>

            <div className='space-y-4'>
                {experiences.map((exp, index) => (
                    <ExperienceCard key={index} exp={exp} index={index} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Experience
