import React from 'react'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='w-full py-16 px-6 border-t border-neutral-200 dark:border-white/5 transition-colors duration-500'>
        <div className='max-w-[1240px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8'>
            <div>
                <p className='text-sm text-neutral-400 dark:text-neutral-500'>Vamsee Cheruvu</p>
            </div>

            <div className='flex items-center gap-5'>
                <a href='https://www.linkedin.com/in/vamseecheruvu/' target='_blank' rel='noreferrer'
                   className='text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300'>
                    <FaLinkedinIn size={16} />
                </a>
                <a href='https://github.com/vamseec21' target='_blank' rel='noreferrer'
                   className='text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300'>
                    <FaGithub size={16} />
                </a>
                <a href='mailto:vmcheruvu@gmail.com'
                   className='text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300'>
                    <AiOutlineMail size={16} />
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer
