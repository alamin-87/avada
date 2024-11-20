import React from 'react'
import './Passion.css'
import { Link } from 'react-router-dom'

const Passion = () => {
  return (
    <>
      <section className='passion'>
         <div className="container">
            <div className="passion_row">
                <div className="passion_row1">
                    <div className="row1_heading">
                        <h2>Share The Passion</h2>
                        <h3>Extreme Sports News</h3>
                        <hr />
                    </div>
                    <div className="row1_body">
                        <p>Dolor sit amet consectetur adipiscing elit sed con eiusmod tempor incididunt labore etys dolore magna aliqua. Quis ipsum suspendisse ultrices gravida
                          risus ipsum dolore commodo viverra maecenas.
                        </p>
                    </div>
                </div>
                <div className="passion_row2">
                    <div className="row2_single_card">
                        <img src="images/news1.png" alt="news1" />
                        <h2>Paragliding Adventures 
                        Across The World</h2>
                        <p>Integer amet miut ipsum molestie bibendum vitae sitat ligula fermentum tellus</p>
                        <hr />
                        <Link to="/">Read Article</Link>
                    </div>
                    <div className="row2_single_card">
                        <img src="images/news1.png" alt="news1" />
                        <h2>Paragliding Adventures 
                        Across The World</h2>
                        <p>Integer amet miut ipsum molestie bibendum vitae sitat ligula fermentum tellus</p>
                        <hr />
                        <Link to="/">Read Article</Link>
                    </div>
                    <div className="row2_single_card">
                        <img src="images/news1.png" alt="news1" />
                        <h2>Paragliding Adventures 
                        Across The World</h2>
                        <p>Integer amet miut ipsum molestie bibendum vitae sitat ligula fermentum tellus</p>
                        <hr />
                        <Link to="/">Read Article</Link>
                    </div>
                </div>
                <div className="passion_row3">
                  <img src="images/t_logo1.png" alt="logo1" />
                  <img src="images/t_logo2.png" alt="logo2" />
                  <img src="images/t_logo3.png" alt="logo3" />
                  <img src="images/t_logo4.png" alt="logo4" />
                  <img src="images/t_logo5.png" alt="logo5" />
                  <img src="images/t_logo16.png" alt="logo16" />
                </div>
            </div>
         </div>
      </section>
    </>
  )
}

export default Passion