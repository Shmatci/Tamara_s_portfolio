import React from 'react'
import { About, Home, Navbar, Projects, Footer } from './components'
import './index.scss'

const App = () => {
  return (
    <div className='app__container'>
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