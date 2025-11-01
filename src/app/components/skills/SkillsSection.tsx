import React from 'react'
import { skills } from '@/app/data'
import { TechIcon } from '../TechIcon'

export const SkillsSection = () => {
  return (
    <div id='skills' className='m-20'>
      <h1>Skills</h1>
      <div className='grid lg:grid-cols-10 sm:grid-cols-5 grid-cols-4' >
        {skills.map((skill) => <TechIcon key={skill} logoName={skill} small={false}/>)}
      </div>
    </div>
  )
}

// flex lg:justify-between flex-wrap