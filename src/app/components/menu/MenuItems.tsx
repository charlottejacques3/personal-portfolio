import React from 'react'
import { Link } from 'react-scroll'
import { sections } from '../../data'

interface MenuItemsProps {
  desktop: boolean,
  close?: () => void
}

export const MenuItems:React.FC<MenuItemsProps> = ({desktop, close}) => {
  return (
    <div className={desktop ? 'flex justify-around lg:mx-36 md:mx-16 text-white-text text-2xl' : 'font-rokkitt text-center text-5xl leading-20'}>
      {sections.map((section) => 
        <Link key={section.id} to={section.id} activeClass='text-background' spy={true} smooth={true} offset={-100} duration={500}
          onClick={() => close && close()}
        >
          <p className='cursor-pointer hover:text-background hover:underline'>{section.title}</p>
        </Link>
      )}
    </div>
  )
}
