import React from 'react'
import riba from '../../assets/riba.png'

import './projects.scss'
import { FaGithub } from 'react-icons/fa'


const Projects = () => {
  return (
    <div className='p__projects' id='projects'>
      <div className="p__projects-heading">
        <h1 className="p__projects-title">Projects</h1>
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
              <a href="https://github.com/Shmatci/UI-UX-Website-React-JS" className='icon'>
                <i>< FaGithub /></i>
              </a>
              <a href="https://github.com/Shmatci/UI-UX-Website-React-JS" className='icon'>
                <i>< FaGithub /></i>
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
              <a href="https://github.com/Shmatci/UI-UX-Website-React-JS" className='icon'>
                <i>< FaGithub /></i>
              </a>
              <a href="https://github.com/Shmatci/UI-UX-Website-React-JS" className='icon'>
                <i>< FaGithub /></i>
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
              <a href="https://github.com/Shmatci/UI-UX-Website-React-JS" className='icon'>
                <FaGithub className='git-icon'/>
              </a>
              <a href="https://github.com/Shmatci/UI-UX-Website-React-JS" className='icon'>
                <i>< FaGithub /></i>
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
              <a href="https://github.com/Shmatci/UI-UX-Website-React-JS" className='icon'>
                <i>< FaGithub /></i>
              </a>
              <a href="https://github.com/Shmatci/UI-UX-Website-React-JS" className='icon'>
                <i>< FaGithub /></i>
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
              <a href="https://github.com/Shmatci/UI-UX-Website-React-JS" className='icon'>
                <i>< FaGithub /></i>
              </a>
              <a href="https://github.com/Shmatci/UI-UX-Website-React-JS" className='icon'>
                <i>< FaGithub /></i>
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
              <a href="https://github.com/Shmatci/UI-UX-Website-React-JS" className='icon'>
                <i>< FaGithub /></i>
              </a>
              <a href="https://github.com/Shmatci/UI-UX-Website-React-JS" className='icon'>
                <i>< FaGithub /></i>
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Projects