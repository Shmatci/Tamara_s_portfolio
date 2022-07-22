import React from 'react'
import './about.scss'
import { FaHtml5, FaNpm, FaPython, FaCss3Alt, FaReact, FaGit, FaJs, FaNodeJs, FaSass, FaWordpress, FaCat, FaFigma,  } from 'react-icons/fa'
import tamm from '../../assets/tamm.png'

const About = () => {
  return (
    <div className="p__about" id='about'>
      <div className="p__about-text-container">
        <div className="title">
          <h2>About me</h2>
          <hr className='about-horiz_line'/>
        </div>
        <p className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos delectus, <br />
        quidem distinctio labore sed ut voluptate veritatis, laudantium, laborum ratione quos magni <br />
        eveniet aliquid consequatur nam. Ut distinctio neque nemo.</p>
        <p>Some of the technologies that I have been using:</p>
        <div className="tech-icons">
          <FaHtml5 className='tech'/>
          <FaCss3Alt className='tech'/>
          <FaJs className='tech'/>
          <FaSass className='tech'/>
          <FaNodeJs className='tech'/>
          <FaReact className='tech'/>
          <FaNpm className='tech'/>
          <FaPython className='tech'/>
          <FaGit className='tech'/>
          <FaWordpress className='tech'/>
          <FaFigma className='tech'/>
        </div>
        <div className="about-buttons">
          <a href="https://github.com/Shmatci">
            <button className="about__button-github">Github</button>
          </a>
          <div className="divider"/>
          <a href="https://www.behance.net/Tamaravuks8eb6">
            <button className="about__button-behance">Behance</button>
          </a>
        </div>
      </div>
      <div className="image-container">
        <img src={tamm} alt="personalImage" className="image"/>
      </div>
    </div>
  )
}

export default About