'use client'

import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic';

const MenuBarResponsive = dynamic(() => import('../menu/MenuBarResponsive'), { ssr: false });

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
      <div className='w-full my-auto'><MenuBarResponsive/></div>
    </div>
  );
}
