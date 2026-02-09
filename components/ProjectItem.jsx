import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectItem = ({title, subtitle, backgroundImg, projectUrl, tech}) => {
  return (
    <div className='group relative overflow-hidden rounded-lg border border-white/5 hover:border-white/15 transition-all duration-500 cursor-pointer'>
        <Link href={projectUrl}>
            <div className='relative h-[300px] overflow-hidden'>
                <Image
                    className='object-cover group-hover:scale-105 transition-transform duration-700 ease-out'
                    src={backgroundImg}
                    alt={title}
                    fill
                />
                <div className='absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-all duration-500' />

                <div className='absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500'>
                    <p className='text-xs uppercase tracking-[0.2em] text-white/50 mb-2'>{tech}</p>
                    <h3 className='text-xl font-light text-white'>{title}</h3>
                    <p className='text-sm text-white/60 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>{subtitle}</p>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default ProjectItem
