import Link from 'next/link'
import React from 'react'

interface BasicButtonProps {
  text: string
  isButton: boolean
  action?: () => void
  href?: string
  className?: string
}


export const BasicButton:React.FC<BasicButtonProps> = ({text, isButton, action, href, className}) => {
  
  const buttonStyle = 'bg-headers text-white-text p-3 rounded-xl w-full text-center hover:bg-box-bg hover:text-headers hover:outline-2 outline-headers outline-offset-2';

  if (isButton && action) {
    return <button type="button" className={`${buttonStyle} ${className} cursor-pointer `} onClick={() => action()}>{text}</button>;
  } else if (!isButton && href) {
    return <Link target='_blank' href={href} className={`${buttonStyle} ${className}`}>{text}</Link>;
  }
}