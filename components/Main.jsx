import React from 'react'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import {HiArrowDown} from 'react-icons/hi'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen flex items-center justify-center relative'>
        <div className='max-w-[1240px] w-full mx-auto px-6'>
            <div className='animate-fade-in-up'>
                <p className='text-xs uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500 mb-6 transition-colors duration-500'>
                    Software Engineer
                </p>
            </div>

            <div className='animate-fade-in-up-delay opacity-0'>
                <h1 className='font-light leading-tight'>
                    Vamsee Cheruvu
                </h1>
            </div>

            <div className='animate-fade-in-up-delay-2 opacity-0'>
                <p className='mt-6 text-neutral-500 max-w-[500px] leading-relaxed'>
                    Prev. @ Google, JPMorgan Chase. CS + Business at The Ohio State University.
                    Building software that matters.
                </p>
            </div>

            <div className='animate-fade-in-up-delay-3 opacity-0'>
                <div className='flex items-center gap-4 mt-10'>
                    <a href='https://www.linkedin.com/in/vamseecheruvu/' target='_blank' rel='noreferrer'
                       className='border border-neutral-200 dark:border-white/10 rounded-full p-4
                         text-neutral-400 hover:text-neutral-900 dark:hover:text-white
                         hover:border-neutral-400 dark:hover:border-white/40
                         hover:-translate-y-1 transition-all duration-300'>
                        <FaLinkedinIn size={16} />
                    </a>
                    <a href='https://github.com/vamseec21' target='_blank' rel='noreferrer'
                       className='border border-neutral-200 dark:border-white/10 rounded-full p-4
                         text-neutral-400 hover:text-neutral-900 dark:hover:text-white
                         hover:border-neutral-400 dark:hover:border-white/40
                         hover:-translate-y-1 transition-all duration-300'>
                        <FaGithub size={16} />
                    </a>
                    <a href='mailto:vmcheruvu@gmail.com'
                       className='border border-neutral-200 dark:border-white/10 rounded-full p-4
                         text-neutral-400 hover:text-neutral-900 dark:hover:text-white
                         hover:border-neutral-400 dark:hover:border-white/40
                         hover:-translate-y-1 transition-all duration-300'>
                        <AiOutlineMail size={16} />
                    </a>
                </div>
            </div>
        </div>

        <div className='absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce'>
            <a href='/#about'>
                <HiArrowDown size={20} className='text-neutral-400 dark:text-neutral-600' />
            </a>
        </div>
    </div>
  )
}

export default Main
