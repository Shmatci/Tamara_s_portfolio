import React from 'react'
import riba from '../../assets/riba.png'

import './projects.scss'
import { FaGithub, FaArrowRight } from 'react-icons/fa'


const Projects = () => {
  return (
    <div className='p__projects' id='projects'>
      <div className="p__projects-heading">
        <h1>Projects</h1>
        <hr className='horiz_line'/>
      </div>
      <div className="p__projects-container-all">
        <div className="p__projects-container">
          <div className="image">
            <img src={riba} alt="" />
          </div>
          <div className="hover-text-frame">
            <h3>UX/UI Website React JS</h3>
            <div className="icons">
              <a href="https://github.com/Shmatci/UI-UX-Website-React-JS">
                <FaGithub className='git-icon'/>
              </a>
              <a href="https://github.com/Shmatci/UI-UX-Website-React-JS" className='icon'>
                <FaArrowRight className='web-icon'/>
              </a>
            </div>
          </div>
        </div>

        <div className="p__projects-container">
          <div className="image">
            <img src={riba} alt="" />
          </div>
          <div className="hover-text-frame">
            <h3>Portfolio Website</h3>
            <div className="icons">
              <a href="https://github.com/Shmatci/UI-UX-Website-React-JS">
                <FaGithub className='git-icon'/>
              </a>
              <a href="https://github.com/Shmatci/UI-UX-Website-React-JS" className='icon'>
                <FaArrowRight className='web-icon'/>
              </a>
            </div>
          </div>
        </div>

        <div className="p__projects-container">
          <div className="image">
            <img src={riba} alt="" />
          </div>
          <div className="hover-text-frame">
            <h3>Full Stack ecommerce React app</h3>
            <div className="icons">
              <a href="https://github.com/Shmatci/FullStack_ecommerce_reactApp">
                <FaGithub className='git-icon'/>
              </a>
              <a href="#" className='icon'>
                <FaArrowRight className='web-icon' />
              </a>
            </div>
          </div>
        </div>

        <div className="p__projects-container">
          <div className="image">
            <img src={riba} alt="" />
          </div>
          <div className="hover-text-frame">
            <h3>Portfolio in React</h3>
            <div className="icons">
              <a href="https://github.com/Shmatci/portfolio_react">
                <FaGithub className='git-icon'/>
              </a>
              <a href="https://micael-portfolio-example.netlify.app" className='icon'>
                <FaArrowRight className='web-icon'/>
              </a>
            </div>
          </div>
        </div>

        <div className="p__projects-container">
          <div className="image">
            <img src={riba} alt="" />
          </div>
          <div className="hover-text-frame">
            <h3>Movieland App</h3>
            <div className="icons">
              <a href="https://github.com/Shmatci/Movieland_app">
                <FaGithub className='git-icon'/>
              </a>
              <a href="#" className='icon'>
                <FaArrowRight className='web-icon'/>
              </a>
            </div>
          </div>
        </div>

        <div className="p__projects-container">
          <div className="image">
            <img src={riba} alt="" />
          </div>
          <div className="hover-text-frame">
            <h3>UI-UX Webiste React JS</h3>
            <div className="icons">
              <a href="https://github.com/Shmatci/UI-UX-Website-React-JS">
                <FaGithub className='git-icon'/>
              </a>
              <a href="https://ui-ux-website-react-js.netlify.app" className='icon'>
                <FaArrowRight className='web-icon'/>
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Projects