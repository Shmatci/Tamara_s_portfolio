import React from 'react'
import './footer.scss'
import { FaGithub, FaLinkedin, FaBehanceSquare } from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='p__footer'>
      <div className="p__footer-social">
        <div className="social-icons">
          <div className="footer-icon">
            <FaGithub className='github-icon'/>
          </div>
          <div className="footer-icon">
            <FaLinkedin className='linkedin-icon' />
          </div>
          <div className="footer-icon">
            <FaBehanceSquare className='behance-icon'/>
          </div>
        </div>
        <div className="footer-text">
          <p>- Tamara Vuksan 2022 -</p>
        </div>
      </div>
    </div>
  )
}

export default Footer