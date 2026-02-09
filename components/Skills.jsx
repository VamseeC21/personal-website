import React, { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi'
import Reveal from './Reveal'

const skillCategories = [
  {
    title: 'Languages',
    skills: ['C/C++', 'Python', 'TypeScript', 'JavaScript', 'Java', 'Golang', 'Ruby', 'Swift/SwiftUI', 'SQL', 'HTML/CSS', 'kdb+/q'],
    defaultOpen: true,
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React', 'Next.js', 'Node.js', 'Flask', 'Django', 'Rails', 'NumPy', 'pandas', 'TailwindCSS', 'Storybook.js', 'discord.js'],
    defaultOpen: true,
  },
  {
    title: 'Tools & Infrastructure',
    skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'MongoDB', 'PostgreSQL', 'Aurora DB', 'Terraform', 'Jira', 'Agile'],
    defaultOpen: false,
  },
]

const SkillCategory = ({ category, index }) => {
  const [isOpen, setIsOpen] = useState(category.defaultOpen)

  return (
    <Reveal delay={index * 100}>
      <div className='border border-neutral-200 dark:border-white/5 rounded-xl overflow-hidden transition-colors duration-500'>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='flex items-center justify-between p-5 cursor-pointer select-none
            hover:bg-neutral-100 dark:hover:bg-white/[0.03] transition-colors duration-300'
        >
          <div className='flex items-center gap-3'>
            <h3 className='text-base font-normal text-neutral-900 dark:text-white'>{category.title}</h3>
            <span className='text-xs text-neutral-400'>{category.skills.length}</span>
          </div>
          <HiChevronDown
            size={16}
            className={`text-neutral-400 transition-transform duration-500 ease-out ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </div>
        <div
          className={`transition-all duration-500 ease-out overflow-hidden ${
            isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className='px-5 pb-5 border-t border-neutral-100 dark:border-white/5 pt-4'>
            <div className='flex flex-wrap gap-2'>
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className='text-xs px-3 py-1.5 rounded-full border
                    border-neutral-200 dark:border-white/10
                    text-neutral-600 dark:text-neutral-400
                    hover:border-neutral-400 dark:hover:border-white/25
                    hover:text-neutral-900 dark:hover:text-white
                    transition-all duration-300 cursor-default'
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

const Skills = () => {
  return (
    <div id='skills' className='w-full py-24 px-6'>
        <div className='max-w-[1240px] mx-auto'>
            <Reveal>
              <p className='section-heading'>Skills</p>
              <div className='divider mb-10' />
              <h2 className='mb-12 font-light'>Technologies I work with</h2>
            </Reveal>

            <div className='space-y-4 max-w-[700px]'>
                {skillCategories.map((category, index) => (
                    <SkillCategory key={index} category={category} index={index} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Skills
