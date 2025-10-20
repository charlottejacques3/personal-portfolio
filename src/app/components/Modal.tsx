"use client"

import React, { PropsWithChildren, ReactNode, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

type ModalProps = {
  children: ReactNode,
  header: string,
  isHidden: boolean,
  close: () => void
}

export const Modal = ({children, header, isHidden, close}: PropsWithChildren<ModalProps>) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const modal = (
    <div className='fixed top-0 left-0 w-full h-full bg-black/40' hidden={isHidden} onClick={() => close()}>
      <div className='bg-white-text fixed w-full md:w-3/4 lg:w-1/2 h-full md:h-auto top-1/2 left-1/2 -translate-1/2 p-5 rounded-xl shadow-xl' onClick={(e) => e.stopPropagation()}>
        <button type="button" className="absolute top-2 right-4 hover:bg-gray-300/30 px-2 py-0.5 rounded-4xl cursor-pointer" onClick={() => close()}>X</button>
        <h3 className='mb-3'>{header}</h3>
        {children}
      </div>
    </div>
  )

  return createPortal(modal, document.body)
}
