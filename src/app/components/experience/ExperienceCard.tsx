import React from 'react'
import { Experience } from '@/app/lib/definitions'
import Image from 'next/image'

interface ExperienceCardProps {
  exp: Experience
}

export const ExperienceCard:React.FC<ExperienceCardProps> = ({exp}) => {
  return (
    <div className='bg-box-bg my-5 p-4 rounded-xl flex justify-between'>
      <div>
        <h3>{exp.title}</h3>
        <p>{exp.company}</p>
        <p>{exp.dateRange}</p>
        <ul className='list-disc ml-4 mt-4'>
          {exp.bulletPoints.map((point) => <li key={point}>{point}</li>)}
        </ul>
      </div>
      {/* fix aspect ratios */}
      <Image src={exp.image} alt={exp.alt} width={350} height={100} className='border-headers border-6 rounded-xl'/>
    </div>
  )
}