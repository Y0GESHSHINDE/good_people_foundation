import React from 'react'
import ProjectCard from './ProjectCard'

function ProjectSection() {
  return (
    <div className='container mx-auto mt-[19px]' >
      <div className='ms-2 me-2 text-center sm:text-left' >
         <h1 className='kumbh-sans-Regular text-[18px] text-[#3E3737]' >Projects</h1>
         <h1 className='kumbh-sans-light text-[15px] text-[#777272]' >All the initiatives taken up by the all good people out there.</h1>
      </div>
      <div className='ms-2 me-2 text-left flex justify-center sm:block' >
         <ProjectCard/>
      </div>
    </div>
  )
}

export default ProjectSection