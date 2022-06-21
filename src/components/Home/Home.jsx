import React from 'react'
import './home.scss'
import yellow from '../../assets/yellow-bg.png'

const Home = () => {
  return (
    <div className='p__header section__padding' id='home'>
      <div className="p__header-content">
        <p className='above-header'>Junior Web Developer</p>
        <hr className='header-horiz_line'/>
        <h1 className="header-text">Hello, my name <br />
          is Tamara Vuksan</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
           Quas ipsum vel laboriosam quos, omnis qui modi quae, quia <br />
           ea impedit officia. Distinctio voluptatibus voluptatum <br />
           totam voluptate soluta, officia necessitatibus sunt.</p>

        <div className="p__header-content_button">
          <button type='button'>Download CV</button>
        </div>
      </div>
      <div className="p__header-image">
        <img src={yellow} className="header-img" />
      </div>
    </div>
  )
}

export default Home