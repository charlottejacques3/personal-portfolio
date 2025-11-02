'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import { Modal } from '../Modal';
import { MenuItems } from './MenuItems';

export const MobileMenu = () => {

  const [hover, setHover] = useState<boolean>(false);
  const [modalHidden, setModalHidden] = useState<boolean>(true);

  return (
    <>
      <Image 
        onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} 
        onClick={() => setModalHidden(false)}
        src={hover ? '/menu_hover.png' : '/menu.png'} 
        width={30}
        height={30}
        alt='Menu icon' 
        className='ml-auto'
      />
      <Modal header='' isHidden={modalHidden} close={() => setModalHidden(true)}>
        <MenuItems desktop={false} close={() => setModalHidden(true)}/>
      </Modal>
    </>
  );
}
