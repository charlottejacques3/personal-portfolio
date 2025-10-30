'use client'

import React, { useState } from 'react'
import Image from 'next/image'

interface TechIconProps {
  logoName: string,
  small: boolean
}

export const TechIcon:React.FC<TechIconProps> = ({logoName, small}) => {

  const [hover, setHover] = useState<boolean>(false);

  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={`flex ${small ? 'flex-col-reverse' : 'flex-col p-2 rounded-xl transition-all hover:transform-[scale(1.5)] hover:bg-hover-grey/30'}`} >
      <Image src={`/logos/${logoName}.png`} alt={logoName} width={200} height={200} className={`m-0.5 mt-2 cursor-pointer text-center mx-auto ${small ? 'w-7 h-7' : 'w-14 h-14'}`}/>
      {hover && <p className={`text-center text-xs ${small ? 'fixed mb-10 bg-hover-grey p-1 rounded-lg' : ''}`}>{logoName}</p>}
    </div>
  )
}