import React from 'react'
import { experience } from '@/app/data'
import { ExperienceCard } from './ExperienceCard';

export const ExperienceSection = () => {

  return (
    <div className='m-20'>
      <h1>Experience</h1>
      {experience.map((item) => <ExperienceCard key={item.id} exp={item}/>)}
    </div>
  );
}