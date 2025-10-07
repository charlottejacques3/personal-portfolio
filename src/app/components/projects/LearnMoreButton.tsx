'use client'

import React, { useState } from 'react'
import { ProjectModal } from './ProjectModal';
import { Project } from '@/app/lib/definitions';

interface LearnMoreButtonProps {
  proj: Project
  style: string
}

export const LearnMoreButton:React.FC<LearnMoreButtonProps> = ({proj, style}) => {

  const [modalHidden, setModalHidden] = useState<boolean>(true);

  return (
    <>
      <button type="button" className={style} onClick={() => console.log ('hello') }>Learn More</button>
       <ProjectModal proj={proj} isHidden={modalHidden}/>
    </>
  )
}