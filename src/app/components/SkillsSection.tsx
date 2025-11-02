'use client'

import React from 'react'
import dynamic from 'next/dynamic';
import { skills } from '@/app/lib/data'

const TechIcon = dynamic(() => import('./TechIcon'), { ssr: false });

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