import React from 'react'
import peerImage from '../public/LogosForPersonalWebsite/PEER.png.webp'
import Image from 'next/image'
import Link from 'next/link'
import {HiArrowLeft} from 'react-icons/hi'

const Peer = () => {
  return (
    <div className='w-full'>
        <div className='w-full h-[40vh] lg:h-[50vh] relative'>
            <div className='absolute inset-0 bg-black/60 z-10' />
            <Image className='absolute z-1 object-cover' fill src={peerImage} alt='PEER' />
            <div className='absolute bottom-10 max-w-[1240px] w-full left-1/2 -translate-x-1/2 z-10 px-6'>
                <p className='text-xs uppercase tracking-[0.2em] text-white/50 mb-2'>Discord.py / GPT-3</p>
                <h1 className='font-light'>PEER</h1>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto px-6 py-16 grid md:grid-cols-5 gap-12'>
            <div className='col-span-4'>
                <h2 className='font-light mb-6'>Overview</h2>
                <p className='text-muted leading-relaxed mb-4'>
                    Before every successful product, there is a project spec sheet that contains vital info like the
                    problem/solution statements, tech stack, milestones, and more. Without a great product spec sheet,
                    the project is doomed from the start.
                </p>
                <p className='text-muted leading-relaxed mb-8'>
                    PEER is a revolutionary product that analyzes and grades product specs. Simply invite
                    the Discord bot to your server, enter in the command followed by the link to your Notion Page containing the
                    product spec, and you're all set. Powered through GPT-3 and the Notion API, this Discord.py bot
                    streamlines the review process.
                </p>
                <div className='flex gap-4'>
                    <a href='https://www.youtube.com/watch?v=gn_WUHvFJT0' target='_blank' rel='noreferrer'>
                        <button className='px-8 py-3 text-sm'>Demo</button>
                    </a>
                    <a href='https://github.com/organization-x/peer-help' target='_blank' rel='noreferrer'>
                        <button className='px-8 py-3 text-sm'>Code</button>
                    </a>
                </div>
            </div>

            <div className='col-span-4 md:col-span-1'>
                <div className='border border-white/10 rounded-lg p-6'>
                    <p className='text-xs uppercase tracking-[0.2em] text-muted mb-4'>Stack</p>
                    <div className='space-y-3'>
                        <p className='text-sm text-soft'>GPT-3</p>
                        <p className='text-sm text-soft'>Discord.py</p>
                        <p className='text-sm text-soft'>Notion API</p>
                        <p className='text-sm text-soft'>OpenAI API</p>
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

export default Peer
