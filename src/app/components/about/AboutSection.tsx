import React from 'react'
import Image from 'next/image';
import { greeting, bio } from '@/app/data';
import { IconLink } from './IconLink';

export const AboutSection = () => {

  return (
    <div className='lg:flex lg:m-20'>

      {/* headshot and socials */}
      <div className='w-xs h-xs m-auto'>
        <Image src='/headshot.png' alt='Headshot' width={320} height={320} className='min-w-xs min-h-xs'/>
        <div className='flex justify-center'> 
          <IconLink href='https://www.linkedin.com/in/charlotte-jacques-9472a6337/' icon='/socials/linkedin.png' alt='LinkedIn icon with hyperlink'/>
          <IconLink href='https://github.com/charlottejacques3' icon='/socials/github.png' alt='GitHub icon with hyperlink'/>
        </div>
      </div>

      {/* bio */}
      <div className='ml-20 h-xs content-center'>
        <h1>{greeting}</h1> 
        {bio}
      </div>
    </div>
  );
}