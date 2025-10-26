import React from 'react'
import { skills } from '@/app/data'
import { TechIcon } from '../TechIcon'

export const SkillsSection = () => {
  return (
    <div className='m-20'>
      <h1>Skills</h1>
      <div className='flex lg:justify-between flex-wrap'>
        {skills.map((skill) => <TechIcon key={skill} logoName={skill} small={false}/>)}
      </div>
    </div>
  )
}