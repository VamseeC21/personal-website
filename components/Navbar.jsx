import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {HiSun, HiMoon} from 'react-icons/hi'
import {useTheme} from '../context/ThemeContext'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const {darkMode, toggleTheme} = useTheme()

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(()=> {
        const handleScroll = () => {
            setScrolled(window.scrollY >= 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    },[])

  return (
    <div className={`fixed w-full h-16 z-[100] transition-all duration-500 ${
      scrolled
        ? 'bg-neutral-50/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md border-b border-neutral-200 dark:border-white/5'
        : 'bg-transparent'
    }`}>
        <div className='flex justify-between items-center w-full h-full max-w-[1240px] mx-auto px-6'>
            <Link href='/#home'>
                <span className='text-lg font-light tracking-[0.2em] cursor-pointer text-neutral-900 dark:text-white hover:opacity-60 transition-all duration-300'>
                    VC
                </span>
            </Link>

            <div className='flex items-center gap-6'>
                <ul className='hidden md:flex items-center gap-8'>
                    <Link href='/'>
                        <li className='text-sm tracking-widest text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300'>
                            Home
                        </li>
                    </Link>
                    <Link href='/#about'>
                        <li className='text-sm tracking-widest text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300'>
                            About
                        </li>
                    </Link>
                    <Link href='/#experience'>
                        <li className='text-sm tracking-widest text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300'>
                            Experience
                        </li>
                    </Link>
                    <Link href='/#skills'>
                        <li className='text-sm tracking-widest text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300'>
                            Skills
                        </li>
                    </Link>
                </ul>

                {/* Theme toggle */}
                <button
                    onClick={toggleTheme}
                    className='relative w-9 h-9 flex items-center justify-center rounded-full
                        bg-transparent border border-neutral-200 dark:border-white/10
                        hover:border-neutral-400 dark:hover:border-white/30
                        text-neutral-600 dark:text-neutral-400
                        hover:text-neutral-900 dark:hover:text-white
                        transition-all duration-300'
                    aria-label='Toggle theme'
                >
                    <div className={`absolute transition-all duration-500 ${darkMode ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`}>
                        <HiSun size={16} />
                    </div>
                    <div className={`absolute transition-all duration-500 ${darkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`}>
                        <HiMoon size={16} />
                    </div>
                </button>

                <div onClick={handleNav} className='md:hidden cursor-pointer p-2'>
                    <AiOutlineMenu size={18} className='text-neutral-500' />
                </div>
            </div>
        </div>

        {/* Mobile overlay */}
        <div
            className={`md:hidden fixed left-0 top-0 w-full h-screen transition-all duration-500 ${
                nav ? 'bg-black/60 dark:bg-black/80 backdrop-blur-sm pointer-events-auto' : 'pointer-events-none'
            }`}
            onClick={handleNav}
        >
            <div
                className={`fixed left-0 top-0 w-[70%] sm:w-[55%] h-screen
                    bg-neutral-50 dark:bg-[#0a0a0a] border-r border-neutral-200 dark:border-white/5
                    p-8 transition-transform duration-500 ease-out
                    ${nav ? 'translate-x-0' : '-translate-x-full'}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <span className='text-lg font-light tracking-[0.2em] text-neutral-900 dark:text-white'>VC</span>
                        <div onClick={handleNav} className='cursor-pointer p-2 text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors'>
                            <AiOutlineClose size={16} />
                        </div>
                    </div>
                    <div className='border-b border-neutral-200 dark:border-white/10 my-6' />
                </div>

                <div className='flex flex-col'>
                    <ul className='space-y-6'>
                        <Link href='/#home'>
                            <li onClick={()=> setNav(false)} className='text-sm tracking-widest text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors'>Home</li>
                        </Link>
                        <Link href='/#about'>
                            <li onClick={()=> setNav(false)} className='text-sm tracking-widest text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors'>About</li>
                        </Link>
                        <Link href='/#experience'>
                            <li onClick={()=> setNav(false)} className='text-sm tracking-widest text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors'>Experience</li>
                        </Link>
                        <Link href='/#skills'>
                            <li onClick={()=> setNav(false)} className='text-sm tracking-widest text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors'>Skills</li>
                        </Link>
                    </ul>

                    <div className='mt-16'>
                        <p className='text-xs uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500 mb-6'>Connect</p>
                        <div className='flex items-center gap-4'>
                            <a href='https://www.linkedin.com/in/vamseecheruvu/' target='_blank' rel='noreferrer'
                               className='border border-neutral-200 dark:border-white/10 rounded-full p-3 text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-400 dark:hover:border-white/30 transition-all duration-300'>
                                <FaLinkedinIn size={14} />
                            </a>
                            <a href='https://github.com/vamseec21' target='_blank' rel='noreferrer'
                               className='border border-neutral-200 dark:border-white/10 rounded-full p-3 text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-400 dark:hover:border-white/30 transition-all duration-300'>
                                <FaGithub size={14} />
                            </a>
                            <a href='mailto:vmcheruvu@gmail.com'
                               className='border border-neutral-200 dark:border-white/10 rounded-full p-3 text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-400 dark:hover:border-white/30 transition-all duration-300'>
                                <AiOutlineMail size={14} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
