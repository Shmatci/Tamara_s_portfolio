import React from 'react'
import { About, Home, Navbar, Projects, Footer } from './components'
import './index.css'

const App = () => {
  return (
    <div className='App'>
        <div className="gradient__bg">
            <Navbar />
            <Home />
        </div>
        <About />
        <Projects />
        <Footer />
    </div>
  )
}

export default App