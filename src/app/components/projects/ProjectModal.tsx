import { Project } from '@/app/lib/definitions'
import React from 'react'
import { Modal } from '../Modal'
import { TechTag } from './TechTag'

interface ProjectModalProps {
  proj: Project
  isHidden: boolean
  close: Function
}

export const ProjectModal:React.FC<ProjectModalProps> = ({proj, isHidden, close}) => {
  return (
    <Modal header={proj.title} isHidden={isHidden} close={close}>
      <div>
        <div className='flex flex-wrap items-center'>
          <p className='font-bold'>Tech Stack:</p>
          {proj.techStack.map((tech) => <TechTag key={tech} name={tech}/>)}
        </div>
        <p className='mt-2'>{proj.description}</p>
      </div>
    </Modal>
  )
}