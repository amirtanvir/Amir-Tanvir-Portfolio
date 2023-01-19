import React, { useEffect, useState } from 'react'
import { Nav, Hero, Projects, Footer, ContactUs } from './components/index'
import './App.css'
import AboutUs from './components/aboutus'
import Testimonials from './components/testimonials'

function App() {

  return (
    <div className="App">
      <div className='overflow-hidden'>

          <Nav />
          <Hero />
          <Projects />
          <AboutUs />
          <Testimonials />
          <ContactUs />
          <Footer />

      </div>
    </div>
  )
}

export default App
