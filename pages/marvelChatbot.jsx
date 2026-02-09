import React from 'react'
import marvelBotPImg from '../public/LogosForPersonalWebsite/marvelProject.jpeg'
import Image from 'next/image'
import Link from 'next/link'
import {HiArrowLeft} from 'react-icons/hi'

const MarvelChatbot = () => {
  return (
    <div className='w-full'>
        <div className='w-full h-[40vh] lg:h-[50vh] relative'>
            <div className='absolute inset-0 bg-black/60 z-10' />
            <Image className='absolute z-1 object-cover' fill src={marvelBotPImg} alt='Marvel ChatBot' />
            <div className='absolute bottom-10 max-w-[1240px] w-full left-1/2 -translate-x-1/2 z-10 px-6'>
                <p className='text-xs uppercase tracking-[0.2em] text-white/50 mb-2'>Flask / GPT-3</p>
                <h1 className='font-light'>Marvel ChatBot</h1>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto px-6 py-16 grid md:grid-cols-5 gap-12'>
            <div className='col-span-4'>
                <h2 className='font-light mb-6'>Overview</h2>
                <p className='text-muted leading-relaxed mb-4'>
                    An AI-powered web application that lets you have conversations with your favorite Marvel
                    superheroes. Enter a chat and Spider-Man will respond back with dialogue that feels authentic
                    to the character.
                </p>
                <p className='text-muted leading-relaxed mb-8'>
                    This was my first full-stack project, combining frontend and backend technologies.
                    Powered by GPT-3 and trained on thousands of lines of movie dialogue data, the chatbot
                    generates contextually appropriate responses in the voice of each superhero.
                </p>
                <div className='flex gap-4'>
                    <a href='https://www.youtube.com/watch?v=yVvaBroNizw' target='_blank' rel='noreferrer'>
                        <button className='px-8 py-3 text-sm'>Demo</button>
                    </a>
                    <a href='https://github.com/VamseeC21/AI_Camp_Marvel_ChatBot' target='_blank' rel='noreferrer'>
                        <button className='px-8 py-3 text-sm'>Code</button>
                    </a>
                </div>
            </div>

            <div className='col-span-4 md:col-span-1'>
                <div className='border border-white/10 rounded-lg p-6'>
                    <p className='text-xs uppercase tracking-[0.2em] text-muted mb-4'>Stack</p>
                    <div className='space-y-3'>
                        <p className='text-sm text-soft'>GPT-3</p>
                        <p className='text-sm text-soft'>HTML & CSS</p>
                        <p className='text-sm text-soft'>JavaScript</p>
                        <p className='text-sm text-soft'>Flask</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto px-6 pb-16'>
            <Link href='/#projects'>
                <p className='inline-flex items-center gap-2 text-muted text-sm hover:text-white transition-colors duration-300 cursor-pointer'>
                    <HiArrowLeft size={14} /> Back to projects
                </p>
            </Link>
        </div>
    </div>
  )
}

export default MarvelChatbot
