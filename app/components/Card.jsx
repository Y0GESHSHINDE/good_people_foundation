import React from 'react'

function card({ image, name, location, company }) {
  return (
    <div className='flex w-[270px] sm:w-[170px] xl:w-[140px] 2xl:w-[170px]  h-[199px] md:h-[150px] flex-col items-center rounded-lg bg-white shadow  '>
      <img
        src={image}
        alt={name}
        className='h-24 w-full rounded-t-lg object-cover object-top md:h-16 lg:h-20'
      />
      <h3 className='mt-2 text-[18px] font-bold text-[#000000] md:text-[15px]'>
        {name}
      </h3>
      <p className='text-[14px] text-[#6A6A6A] md:text-[13px]'>
        {location}
      </p>
      <p className='text-center text-[11px] font-bold text-[#5A5A5A] md:text-[9px] lg:text-[11px]'>
        {company}
      </p>
    </div>
  )
}

export default card
