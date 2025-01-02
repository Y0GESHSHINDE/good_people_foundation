import React from 'react'
import Navbar from '../components/Navbar'
import HeaderSection from '../components/HeaderSection'
import PeopleSection from '../components/PeopleSection'
import ProjectSection from '../components/ProjectSection'
import Footer from '../components/Footer'

function page() {
  return (
    <>
    <Navbar/>
    <HeaderSection/>
    <PeopleSection/>
    <ProjectSection/>
    <Footer/>
    </>
  )
}

export default page