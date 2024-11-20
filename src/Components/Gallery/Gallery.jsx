import React from 'react'
import './Gallery.css'
import gallery1 from '../../assets/gallery1.png'
import { Link } from 'react-router-dom'

const Gallery = () => {
  return (
    <>
      <section className='gallery' style={{backgroundImage:`url(${gallery1})`}}>
        <div className="container">
            <div className="gallery_row">
                <div className="gallery_row1">
                    <div className="row1_heading">
                        <h3>Feel The Excitement</h3>
                        <h2>Extreme Sports
                        Activities</h2>
                        <hr />
                    </div>
                    <div className="row1_p">
                      <p>Dolor sit amet consectetur adipiscing elit sed con eiusmod tempor incididunt labore etys dolore magna aliqua. Quis ipsum suspendisse ultrices gravida
                      risus ipsum dolore commodo viverra maecenas.</p>
                    </div>
                </div>
                <div className="gallery_row2">
                    <div className="row2_card1">
                        <div className="img">
                            <img src="images/sports1.png" alt="sports1" />
                        </div>
                        <div className="text">
                            <h2><Link to="/">Mountain Biking</Link></h2>
                            <p>Dolor sit amet magna</p>
                        </div>
                    </div>
                    <div className="row2_card1">
                        <div className="img">
                            <img src="images/sports2.png" alt="sports1" />
                        </div>
                        <div className="text">
                            <h2><Link to="/">Snow Sports</Link></h2>
                            <p>Dolor sit amet magna</p>
                        </div>
                    </div>
                    <div className="row2_card1">
                        <div className="img">
                            <img src="images/sports3.png" alt="sports1" />
                        </div>
                        <div className="text">
                            <h2><Link to="/">Surfing</Link></h2>
                            <p>Dolor sit amet magna</p>
                        </div>
                    </div>
                    <div className="row2_card1">
                        <div className="img">
                            <img src="images/sports4.png" alt="sports1" />
                        </div>
                        <div className="text">
                            <h2><Link to="/">Skateboarding</Link></h2>
                            <p>Dolor sit amet magna</p>
                        </div>
                    </div>
                    <div className="row2_card1">
                        <div className="img">
                            <img src="images/sports5.png" alt="sports1" />
                        </div>
                        <div className="text">
                            <h2><Link to="/">Jet Skiing</Link></h2>
                            <p>Dolor sit amet magna</p>
                        </div>
                    </div>
                    <div className="row2_card1">
                        <div className="img">
                            <img src="images/sports6.png" alt="sports1" />
                        </div>
                        <div className="text">
                            <h2><Link to="/">Ice Climbing</Link></h2>
                            <p>Dolor sit amet magna</p>
                        </div>
                    </div>
                </div>
                <div className="gallery_row3">
                    <h3>Extreme Sports</h3>
                </div>
            </div>
        </div>
        <div className="last_img">
          <img src="images/gallery2.png" alt="gallery2" />
        </div>
      </section>
    </>
  )
}

export default Gallery
