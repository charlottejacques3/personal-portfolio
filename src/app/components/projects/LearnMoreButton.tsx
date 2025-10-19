'use client'

import React, { useState } from 'react'
import { ProjectModal } from './ProjectModal';
import { BasicButton } from '../BasicButton';
import { Project } from '@/app/lib/definitions';

interface LearnMoreButtonProps {
  proj: Project
  className?: string
}

export const LearnMoreButton:React.FC<LearnMoreButtonProps> = ({proj, className}) => {

  const [modalHidden, setModalHidden] = useState<boolean>(true);

  return (
    <>
      <BasicButton text="Learn More" isButton={true} action={() => setModalHidden(false)} className={className}/>
      <ProjectModal proj={proj} isHidden={modalHidden} close={() => setModalHidden(true)}/>
    </>
  )
}