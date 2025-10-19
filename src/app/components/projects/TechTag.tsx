import React from 'react'
import Image from 'next/image'

interface TechTagProps {
  name: string
}

export const TechTag:React.FC<TechTagProps> = ({name}) => {
  return (
    <div className='flex rounded-xl bg-gray-300/30 hover:bg-gray-300/70 px-1 m-1 items-center cursor-default'>
      <Image src={`/logos/${name}.png`} alt={name} width={20} height={20} className='m-0.5 mt-2 w-5 h-5'/>
      <p className=''>{name}</p>
    </div>
  )
}
