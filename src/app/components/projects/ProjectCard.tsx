import React from 'react'
import { Project } from '@/app/lib/definitions'
import { TechIcon } from './TechIcon'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
    proj: Project
}

const buttonStyle = 'bg-headers text-white-text p-3 rounded-xl w-full text-center';

export const ProjectCard:React.FC<ProjectCardProps> = ({proj}) => {
  return (
    <div className='bg-box-bg rounded-xl shadow-xl my-5 mr-5 p-4 min-w-xs flex flex-col'> 
      <Image src={proj.image} alt={proj.title} width={200} height={80} className='w-full min-w-xs rounded-xl'/>

      <div className='flex justify-between'>
        <h3>{proj.title}</h3>
        <div className='flex'>{proj.techStack.map((tech) => <TechIcon key={tech} logoName={tech}/>)}</div>
      </div>

      <p>{proj.tagline}</p>
      <div className='grow'/> 

      <div className='flex mt-4'>
        <p className={`${buttonStyle} mr-2 cursor-pointer`}>Learn More</p>
        <Link href={proj.github} className={buttonStyle}>GitHub</Link>
      </div>
    </div>
  )
}