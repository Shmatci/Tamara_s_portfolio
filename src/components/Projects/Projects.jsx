import React from 'react'
import riba from '../../assets/riba.png'

import Feature from '../Feature/Feature'
import './projects.css'


const Projects = () => {
  return (
    <div className='p__projects' id='projects'>
      <div className="p__projects-heading">
        <h1 className="p__projects-title">Projects</h1>
        <hr className='horiz_line'/>
      </div>
      <div className="p__projects-container-all">
        <div className="p__projects-container">
          <div className="text-frame">
            <Feature 
            title="UX/UI Website React JS" 
            text="orem, ipsum dolor sit amet consectetur adipisicing elit. Rem nihil exercitationem tempore eligendi, dolore, quas alias." 
            button="Preview Button" 
            codeButton="Github" 
            />

            <Feature 
            title="Portfolio Website" 
            text="orem, ipsum dolor sit amet consectetur adipisicing elit. Rem nihil exercitationem tempore eligendi, dolore, quas alias." 
            button="Preview Button" 
            codeButton="Github"  
            />                   

            <Feature 
            title="Full Stack ecommerce React app" 
            text="orem, ipsum dolor sit amet consectetur adipisicing elit. Rem nihil exercitationem tempore eligendi, dolore, quas alias." 
            button="Preview Button" 
            codeButton="Github" 
            />      
          </div>       
          <div className="p__projects-image">
            <Feature image={riba} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects