import React from 'react'
import './Join.css'
import test1 from '../../assets/test1.png'
import test2 from '../../assets/test2.png'
import test3 from '../../assets/test3.png'

const Join = () => {
  return (
    <>
      <section className='join'>
        <div className="container">
            <div className="join_row">
                <div className="join_row1">
                   <div className="join_row1_text">
                    <img src="images/logo1.png" alt="logo1" />
                    <h2>Extreme Sports Will Test Your Limits And Push The
                    Boundaries To The Max</h2>
                    <p>Be Prepared To Experience The New Adventures</p>
                   </div>
                   <div className="join_row1_button">
                    <button>Join Our Club</button>
                    <button>View The Demo</button>
                   </div>
                </div>
                <div className="join_row2">
                    <div className="join_row2_card" style={{backgroundImage:`url(${test1})`}}>
                        <div className="card_text">
                            <h2>Sports Videos</h2>
                            <h3>Get Inspired</h3>
                            <hr />
                            <p>Dolor sit amet magna</p>
                        </div>
                    </div>
                    <div className="join_row2_card" style={{backgroundImage:`url(${test2})`}}>
                        <div className="card_text">
                            <h2>Sports Videos</h2>
                            <h3>Get Inspired</h3>
                            <hr />
                            <p>Dolor sit amet magna</p>
                        </div>
                    </div>
                    <div className="join_row2_card" style={{backgroundImage:`url(${test3})`}}>
                        <div className="card_text">
                            <h2>Sports Videos</h2>
                            <h3>Get Inspired</h3>
                            <hr />
                            <p>Dolor sit amet magna</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Join