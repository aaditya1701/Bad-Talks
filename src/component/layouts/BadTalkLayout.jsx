import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import WhatisBad from '../Whatisbad/WhatIsBad'
import NewSection from '../NewSection'
import Footer from '../Footer/Footer'
import Landing from '../Landing/Landing'
import Map from '../Map'
import About from '../AboutUs/About'



export default function BadTalkLayout() {
  return (
    <>
      <Navbar />
    <div className="app bg-black">
      <Landing />
            <WhatisBad/>
             <About /> 
            <NewSection />
            <Map/>
            <Footer />
    </div>
    </>
  )
}
