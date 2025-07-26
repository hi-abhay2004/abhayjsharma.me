"use client"
import React from 'react'
// import NavBar from '../navBar/page'
import HeroSection from '../../pages/heroSection/page'
import AboutMeSection from '../aboutmesection/page'
import Threads from '../ui-components/Threads/page'
import TechSkills from '../techskill/page'
import ProjectsSection from '../ui-components/ProjectSection/page'
const Landing = () => {
  return (
    <>
    <section  className=' w-full min-h-screen flex flex-col'>
      {/* <NavBar/> */}
      <HeroSection/>
      {/* Add more sections or components as needed */}
    <AboutMeSection/>
    <TechSkills/>
    <div className='relative  w-full h-[100px] md:left-0  md:bottom-0 bottom-52 md:h-[300px]'>
        <Threads
          amplitude={2 }
          distance={0}
          enableMouseInteraction={true}
             className="w-full h-full"
        />
      </div>
      <ProjectsSection/>
    </section>
 </>
  )
}

export default Landing