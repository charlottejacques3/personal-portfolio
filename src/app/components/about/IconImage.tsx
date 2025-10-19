import React from 'react'
import Image from 'next/image'


interface IconImageProps {
  alt: string,
  icon: string,
  hover: boolean
}

export const IconImage:React.FC<IconImageProps> = ({alt, icon, hover}) => {
  return (
    <Image 
      src={hover ? `/socials/${icon}_hover.png` : `/socials/${icon}.png`} 
      alt={alt} width={30} height={30} className='m-1'
    />
  )
}
