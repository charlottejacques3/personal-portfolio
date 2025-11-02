import React from 'react'
import { Project } from '@/app/lib/definitions'
import TechIcon from '../TechIcon'
import Image from 'next/image'
import { LearnMoreButton } from './LearnMoreButton'
import { BasicButton } from '../BasicButton'

interface ProjectCardProps {
    proj: Project
}

export const ProjectCard:React.FC<ProjectCardProps> = ({proj}) => {
  return (
    <div className='bg-box-bg rounded-xl shadow-xl my-5 mr-5 p-4 min-w-xs flex flex-col transition-all hover:transform-[scale(1.03)]'> 
      <Image src={`/projects/${proj.image}.png`} alt={proj.title} width={200} height={80} className='w-full min-w-xs rounded-xl'/>

      <div className='flex justify-between'>
        <h3>{proj.title}</h3>
        <div className='flex'>{proj.techStack.map((tech) => <TechIcon key={tech} logoName={tech} small={true}/>)}</div>
      </div>

      <p>{proj.tagline}</p>
      <div className='grow'/> 

      <div className='flex mt-4'>
        <LearnMoreButton proj={proj} className='mr-2'/>
        <BasicButton text='GitHub' isButton={false} href={proj.github}/>
      </div>
    </div>
  )
}