import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Nav, Hero, Services, LatestWorks } from './components/index.js'

function App() {

  return (
    <div className="App">
      <Nav />
      <Hero />
      <Services />
      <LatestWorks />
    </div>
  )
}

export default App
