'use client'

import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { sections } from '../data'

export const MenuBar = () => {
  const [scrolling, setScrolling] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  return (
    <div className={`flex sticky top-0 z-10 bg-headers rounded-b-xl shadow-xl font-rokkitt text-background px-6 ${scrolling ? 'py-1' : 'py-6'}`}>
      <h3>
        <strong>C</strong>harlotte<br/><strong>J</strong>acques
      </h3>
      <div className='flex justify-around w-full my-auto mx-36 text-white-text'>
        {sections.map((section) => 
          <Link key={section.id} to={section.id} activeClass='text-background' spy={true} smooth={true} offset={-100} duration={500}>
            <h3 className='cursor-pointer hover:text-background hover:underline'>{section.title}</h3>
          </Link>
        )}
      </div>
    </div>
  )
}
