import { Project } from '@/app/lib/definitions'
import React from 'react'

interface ProjectModalProps {
  proj: Project
  isHidden: boolean
}

export const ProjectModal:React.FC<ProjectModalProps> = ({proj, isHidden}) => {
  return (
    <div className='fixed top-0 left-0 w-full h-full'>
      <div className='bg-white-text fixed w-full md:w-3/4 lg:w-1/2 h-auto top-1/2 left-1/2 -translate-1/2' hidden={isHidden}>
        <h3>{proj.title}</h3>
        <p>{proj.description}</p>
      </div>
    </div>
  )
}