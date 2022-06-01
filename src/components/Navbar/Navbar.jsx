import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './navbar.css'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='p__navbar'> 
      <div className="p__navbar-links">
        <div className="p__navbar-links_logo">
          <p><a href="#logo">Tamara Vuksan</a></p>
        </div>
        <div className="p__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#about">About</a></p>
          <p><a href="#projects">Projects</a></p>
        </div>
      </div>
      <div className="p__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color='#FDC435' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#FDC435' size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="p__navbar-menu_container scale-up-center">
            <div className="p__navbar-menu_container-links">
              <p><a href="#home">Home</a></p>
              <p><a href="#about">About</a></p>
              <p><a href="#projects">Projects</a></p>
            </div>
          </div>
        )}
      </div>

    </div>
  )
}

export default Navbar