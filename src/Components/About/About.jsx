import React from 'react'
import './About.css'
import bg from '../../assets/bannerbg.png'
import './About.css'

const About = () => {
  return (
    <>
      <section className=' bg-no-repeat bg-cover bg-center' style={{backgroundImage:`url(${bg})`}}>
         <div className="container">
          <div className="about_row">
          <div className="about_text">
              <h2>Experience The Spirit Of Adventure Sports</h2>
           </div>
           <div className="about_button">
             <button>Explore Activities</button>
             <button>Who We Are</button>
           </div>
          </div>
         </div>
      </section>
    </>
  )
}

export default About