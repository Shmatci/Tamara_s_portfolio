import React from 'react'
import './footer.scss'
import { FaGithub, FaLinkedin, FaBehanceSquare } from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='p__footer'>
      <div className="p__footer-social">
        <div className="social-icons">
          <a href="https://github.com/Shmatci" className="footer-icon">
            <FaGithub className='github-icon'/>
          </a>
          <a href="https://www.linkedin.com/in/tamara-vuksan-15119ab1/" className="footer-icon">
            <FaLinkedin className='linkedin-icon' />
          </a>
          <a href="https://www.behance.net/Tamaravuks8eb6" className="footer-icon">
            <FaBehanceSquare className='behance-icon'/>
          </a>
        </div>
        <div className="footer-text">
          <p>- Tamara Vuksan 2022 -</p>
        </div>
      </div>
    </div>
  )
}

export default Footer