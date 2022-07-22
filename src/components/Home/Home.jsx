import React from 'react'
import './home.scss'
import TypewriterComponent from 'typewriter-effect'
import yellow from '../../assets/yellow-bg.png'

// const Home = () => {
//   return (
//     <div className='p__header section__padding' id='home'>
//       <div className="p__header-content">
//         <p className='above-header'>Junior Web Developer</p>
//         <hr className='header-horiz_line'/>
//         <h1 className="header-text">Hello, my name <br />
//           is <span style={{color: "#FDC435"}}>Tamara</span> Vuksan</h1>
//         <p>I am a self-taught developer who studied Architecture, <br />
//            worked as a Freelance Graphic Designer and has a variety <br />
//            of experience in customer facing roles.  <br />
//            Please take a look at my CV clicking on the button bellow.</p>

//         <a href="https://www.linkedin.com/in/tamara-vuksan-15119ab1/overlay/1635494330105/single-media-viewer/" className="p__header-content_button">
//           <button type='button'>Resume</button>
//         </a>
//       </div>
//       <div className="p__header-image">
//         <img src={yellow} className="header-img" />
//       </div>
//     </div>
//   )
// }

// export default Home

const Home = () => {
  return (
    <div className='p__header section__padding' id='home'>
      <div className="p__header-content">
        <h2 className="header-text">Hello, <br />
          <h1><span style={{color: "#25282B", weight: "400"}}>I am</span>
            <TypewriterComponent className="type"
              onInit={(typewriter) => {
                typewriter

                .typeString("Tamara Vuksan!")
                .pauseFor(1000)
                .deleteAll()

                .typeString("a Front-end Developer!")
                .pauseFor(1000)
                .deleteAll()

                .typeString("a Graphic Designer!")
                .pauseFor(1000)
                .deleteAll()

                .typeString("hiking enthusiast...")
                .pauseFor(1000)
                .deleteAll()

                .typeString("cat lover...")
                .pauseFor(1000)
                .deleteAll()
                .start()
              }}
              />
            </h1>
          </h2>
          <hr className='header-horiz_line'/>
        <p>I am a self-taught developer who studied Architecture, <br />
           worked as a Freelance Graphic Designer and has a variety <br />
           of experience in customer facing roles.  <br />
           Please take a look at my CV clicking on the button bellow.</p>

        <a href="https://www.linkedin.com/in/tamara-vuksan-15119ab1/overlay/1635494330105/single-media-viewer/" className="p__header-content_button">
          <button type='button'>Resume</button>
        </a>
      </div>
      <div className="p__header-image">
        <img src={yellow} className="header-img" />
      </div>
    </div>
  )
}

export default Home