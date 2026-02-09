import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import marvelImage from '../public/LogosForPersonalWebsite/marvelProject.jpeg'
import peerImage from '../public/LogosForPersonalWebsite/PEER.png.webp'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full py-24 px-6 bg-secondary'>
        <div className='max-w-[1240px] mx-auto'>
            <p className='section-heading'>Projects</p>
            <div className='divider mb-10' />
            <h2 className='mb-12 font-light'>What I've built</h2>

            <div className='grid md:grid-cols-2 gap-6'>
              <ProjectItem
                title='PEER'
                subtitle='Peer Editing and Efficiency Bot'
                backgroundImg={peerImage}
                projectUrl='/peer'
                tech='Discord.py / GPT-3'
              />
              <ProjectItem
                title='Marvel ChatBot'
                subtitle='AI-Powered Superhero Conversations'
                backgroundImg={marvelImage}
                projectUrl='/marvelChatbot'
                tech='Flask / GPT-3'
              />
            </div>
        </div>
    </div>
  )
}

export default Projects
