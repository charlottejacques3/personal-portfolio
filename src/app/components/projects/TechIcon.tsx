import React from 'react'
import Image from 'next/image'

interface TechIconProps {
  logoName: string
}

export const TechIcon:React.FC<TechIconProps> = ({logoName}) => {
  return (
    <Image src={`/logos/${logoName}.png`} alt={logoName} width={20} height={20} className='m-0.5 mt-2 w-7 h-7 cursor-pointer'/>
  )
}