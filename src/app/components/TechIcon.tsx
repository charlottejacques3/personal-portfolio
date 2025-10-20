import React from 'react'
import Image from 'next/image'
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface TechIconProps {
  logoName: string,
  size: number
}

export const TechIcon:React.FC<TechIconProps> = ({logoName, size}) => {
  const sizeClass = `w-${size} h-${size}`;

  return (
    <Image src={`/logos/${logoName}.png`} alt={logoName} width={20} height={20} className={cn(`m-0.5 mt-2 ${sizeClass} cursor-pointer`)}/>
  )
}

// 