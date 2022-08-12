import React from 'react'
import { images } from '../../constants';

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

        {/* First container  */}

        <div className="p__projects-container">
          <div className="image">
            <img src={images.uiux} alt="" />
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

        {/* Second container  */}        

        <div className="p__projects-container">
          <div className="image">
            <img src={images.movieland} alt="" />
          </div>
          <div className="hover-text-frame">
            <h3>Movieland App</h3>
            <div className="icons">
              <a href="https://github.com/Shmatci/Movieland_app">
                <FaGithub className='git-icon'/>
              </a>
              <a href="https://noname-app.netlify.app/" className='icon'>
                <FaArrowRight className='web-icon'/>
              </a>
            </div>
          </div>
        </div>

        {/* Third container  */}

        <div className="p__projects-container">
          <div className="image">
            <img src={images.micael} alt="" />
          </div>
          <div className="hover-text-frame">
            <h3>Portfolio in React</h3>
            <div className="icons">
              <a href="https://github.com/Shmatci/portfolio_react">
                <FaGithub className='git-icon'/>
              </a>
              <a href="https://micael-portfolio-example.netlify.app/" className='icon'>
                <FaArrowRight className='web-icon'/>
              </a>
            </div>
          </div>
        </div>

        {/* Fourth container  */}        

        <div className="p__projects-container">
          <div className="image">
            <img src={images.fitness} alt="" />
          </div>
          <div className="hover-text-frame">
            <h3>Fitness Excersise App</h3>
            <div className="icons">
              <a href="https://github.com/Shmatci/Fitness_excerciseApp">
                <FaGithub className='git-icon'/>
              </a>
              <a href="https://github.com/Shmatci/FullStack_ecommerce_reactApp" className='icon'>
                <FaArrowRight className='web-icon'/>
              </a>
            </div>
          </div>
        </div>

        {/* Fifth container  */}        

        <div className="p__projects-container">
          <div className="image">
            <img src={images.loading} alt="" />
          </div>
          <div className="hover-text-frame">
            <h3>React Admin Dashboard</h3>
            <div className="icons">
              <a href="https://github.com/Shmatci/React_admin_dashboard">
                <FaGithub className='git-icon'/>
              </a>
              <a href="#" className='icon'>
                <FaArrowRight className='web-icon' />
              </a>
            </div>
          </div>
        </div>

        {/* Last container  */}        

        <div className="p__projects-container">
          <div className="image">
            <img src={images.loading} alt="" />
          </div>
          <div className="hover-text-frame">
            <h3>Ecommerce web shop - in process</h3>
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
       
      </div>
    </div>
  )
}

export default Projects