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
        <p className="about-text">
        Hi there, thank you for making interest in my portfolio. Let me tell you a little <br />
        something about me. I have studied Architecture but life had different ideas for <br />
        me. For a while I worked as a Graphic but moving to the UK and last couple of <br />
        years made me persue a different path than originally planned. Hence the desicion <br />
        to go into Development. I took the self-taught route and got to learn "Basics of <br />
        Web Development" from University of Michigan and their Coursera course, <br />
        "Introduction to computer science and programming" from MIT, "CS50" and "CS50 <br />
        Web" from Harvard University. <br />
        I am very eager to learn and make a succesful career. </p>
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