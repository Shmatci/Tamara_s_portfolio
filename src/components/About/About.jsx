import React from 'react'
import './about.scss'
import riba from '../../assets/riba.png'

const About = () => {
  return (
    <div className="p__about" id='about'>
      <div className="p__about-text-container">
        <div className="title">
          <h2 className="about-title">About me</h2>
          <hr className='about-horiz_line'/>
        </div>
        <p className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos delectus, <br />
        quidem distinctio labore sed ut voluptate veritatis, laudantium, laborum ratione quos magni <br />
        eveniet aliquid consequatur nam. Ut distinctio neque nemo.</p>
        <div className="about-buttons">
          <button className="about__button-github">Github</button>
          <div className="divider"/>
          <button className="about__button-behance">Behance</button>
        </div>
      </div>
      <div className="image-container">
        <img src={riba} alt="personalImage" className="image"/>
      </div>
    </div>
  )
}

export default About