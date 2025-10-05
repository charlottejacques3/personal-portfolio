import React from 'react'
import { Experience } from '@/app/lib/definitions'
import Image from 'next/image'

interface ExperienceCardProps {
  exp: Experience
}

export const ExperienceCard:React.FC<ExperienceCardProps> = ({exp}) => {
  return (
    <div className={`bg-box-bg my-5 p-4 rounded-xl lg:flex lg:items-center shadow-xl ${exp.id%2==0?'lg:flex-row-reverse':''}`}> 
      <Image src={exp.image} alt={exp.alt} width={350} height={100} className='min-w-s max-h-52 border-headers border-6 rounded-xl m-auto lg:m-0' 
      />
      <div className={`lg:flex-2 ${exp.id%2==1?'lg:ml-10':'lg:ml-4'}`}>
        <h3>{exp.title}</h3>
        <p>{exp.company}</p>
        <p>{exp.dateRange}</p>
        <ul className='list-disc ml-4 mt-4'>
          {exp.bulletPoints.map((point) => <li key={point}>{point}</li>)}
        </ul>
      </div>
    </div>
  )
}