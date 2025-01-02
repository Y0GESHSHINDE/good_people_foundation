import React from 'react'
import members from './members'
import Card from './Card'
function PeopleSection() {
  return (
    <div className='container mx-auto'>
      <div className='ms-2 mt-8 text-[#000000] text-center sm:flex justify-between '>
        <div className='kumbh-sans-bold text-[18px]'>Good People</div>
        <div className=' me-2 kumbh-sans-Regular text-[14px] ' >View All</div>
      </div>

      <div className='kumbh-sans-light ms-2 text-center text-[15.8px] text-[#777272] sm:text-left'>
        Total 239 individuals has joined to be part of this initiative so far
        from 100 places.{' '}
      </div>
      <div className='me-10s ms-2 flex flex-col items-center gap-4 sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 2xl:grid-cols-8'>
        <Card
          image={members[0].image}
          name={members[0].name}
          location={members[0].location}
          company={members[0].company}
        />
        <Card
          image={members[1].image}
          name={members[1].name}
          location={members[1].location}
          company={members[1].company}
        />
        <Card
          image={members[2].image}
          name={members[2].name}
          location={members[2].location}
          company={members[2].company}
        />
        <Card
          image={members[3].image}
          name={members[3].name}
          location={members[3].location}
          company={members[3].company}
        />
        <Card
          image={members[4].image}
          name={members[4].name}
          location={members[4].location}
          company={members[4].company}
        />
        <Card
          image={members[5].image}
          name={members[5].name}
          location={members[5].location}
          company={members[5].company}
        />
        <Card
          image={members[6].image}
          name={members[6].name}
          location={members[6].location}
          company={members[6].company}
        />
        <Card
          image={members[7].image}
          name={members[7].name}
          location={members[7].location}
          company={members[7].company}
        />
      </div>
    </div>
  )
}

export default PeopleSection
