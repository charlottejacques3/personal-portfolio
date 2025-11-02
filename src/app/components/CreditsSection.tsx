'use client'

import React, { useState } from 'react'
import Link from 'next/link';
import { Modal } from './Modal';
import { iconCredits } from '../data';

export const CreditsSection = () => {

  const [modalHidden, setModalHidden] = useState<boolean>(true);

  return (
    <>
      <p className='text-sm text-center text-gray-500 hover:underline hover:cursor-pointer' onClick={() => setModalHidden(false)}>Icon Credits</p>
      <Modal header='Icon Credits' isHidden={modalHidden} close={() => setModalHidden(true)}>
        <ul>
          {iconCredits.map((credit) => 
            <li key={credit.id}>
              <Link target="_blank" href={`https://icons8.com/icon/${credit.location}`} className='underline'>{credit.name}</Link> icon by <Link target="_blank" href='https://icons8.com' className='underline'>Icons8</Link>
            </li>
          )}
        </ul>
      </Modal>
    </>
  )
}
