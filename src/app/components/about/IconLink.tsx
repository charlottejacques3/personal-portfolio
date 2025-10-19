'use client'

import React, { useState} from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { IconImage } from './IconImage';

interface IconLinkProps {
  href: string,
  alt: string,
  icon: string
}

export const IconLink:React.FC<IconLinkProps> = ({href, alt, icon}) => {

  const [hover, setHover] = useState<boolean>(false);

  return (
    <Link href={href} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <IconImage icon={icon} alt={alt} hover={hover}/>
    </Link>
  );
}