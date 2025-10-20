import React from 'react'
import { skills } from '@/app/data'
import { TechIcon } from '../TechIcon'

export const SkillsSection = () => {
  return (
    <div className='m-20'>
      <h1>Skills</h1>
      <div className='flex'>
        {skills.map((skill) => <TechIcon key={skill} logoName={skill} size={7}/>)}
      </div>
    </div>
  )
}