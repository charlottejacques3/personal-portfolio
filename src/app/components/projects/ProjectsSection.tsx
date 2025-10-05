import React from 'react'
import { projects } from '@/app/data'
import { ProjectCard } from './ProjectCard'

export const ProjectsSection = () => {
  return (
    <div className='m-20'>
      <h1>Projects</h1>
      <div className='w-full inline-grid xl:grid-cols-3 lg:grid-cols-2'>
        {projects.map((proj) => <ProjectCard key={proj.id} proj={proj}/>)}
      </div>
    </div>
  )
}