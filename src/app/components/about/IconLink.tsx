import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

interface IconLinkProps {
  href: string,
  alt: string,
  icon: string
}

export const IconLink:React.FC<IconLinkProps> = ({href, alt, icon}) => {

  return (
    <Link href={href}>
      <Image src={icon} alt={alt} width={30} height={30} className='m-1'/>
    </Link>
  );
}