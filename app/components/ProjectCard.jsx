import React from 'react'

function ProjectCard() {
  return (
    <div>
      <div className='relative mt-16 h-[319px] w-[281px] bg-[#FFFFFF] bg-clip-padding '>
        <img
          src='./Gav.png'
          alt='Raosaheb Ghuge'
          className='absolute left-1/2 top-[-20%] mt-3 h-28 w-28 -translate-x-1/2 transform rounded-t-lg md:h-20 md:w-20 lg:h-28 lg:w-28'
        />
        <p className='font-dmSans p-4 pt-16 text-[15px] font-light text-[#727272] md:text-[11px] lg:pt-20 lg:text-[15px]'>
          This is a community village development project through which we are
          creating a social ecosystem for old age people, aging population,
          youth, and women. This Gaogotha will also create a themed village
          where people would love to stay and enjoy.
        </p>
      </div>
    </div>
  )
}

export default ProjectCard
