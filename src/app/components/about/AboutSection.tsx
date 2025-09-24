import React from 'react'
import Image from 'next/image';
import { greeting, bio } from '@/app/data';
import { IconLink } from './IconLink';

export const AboutSection = () => {

  return (
    <div className='flex m-20'>

      {/* headshot and socials */}
      <div className='mr-20'>
        <Image src='/headshot.png' alt='Headshot' width={350} height={350}/>
        <div className='flex justify-center'> 
          <IconLink href='https://www.linkedin.com/in/charlotte-jacques-9472a6337/' icon='/socials/linkedin.png' alt='LinkedIn icon with hyperlink'/>
          <IconLink href='https://github.com/charlottejacques3' icon='/socials/github.png' alt='GitHub icon with hyperlink'/>
        </div>
      </div>

      {/* bio */}
      <div>
        <h1>{greeting}</h1> 
        {bio}
      </div>
    </div>
  );
}