import React from 'react'
import './Advanture.css'
import CountUp from 'react-countup';

const Advanture = () => {
  return (
    <>
    <section className='advanture'>
       <div className="container">
         <div className="adventure_row">
            <div className="advanture_row1">
                <div className="advanture_row1_col1">
                    <h3>Feel The Excitement</h3>
                    <h2>Join Us And Embark On New Adventures</h2>
                    <span className='span1'></span>
                    <p className='textp'>Dolor sit amet consectetur adipiscing elits eiusmod tempor incididunts laboreyse dolore mag aliqua. Quis ipsum supendise ultrices gravid. Risus commodo viverra sed ipsum maecenas.</p>
                    <div className="point">
                        <span className='point_span'></span>
                        <p className='pointp'>Unde omnis iste natus error sit voluptatem dolore</p>
                    </div>
                    <div className="point">
                        <span className='point_span'></span>
                        <p className='pointp'>Unde omnis iste natus error sit voluptatem dolore</p>
                    </div>
                    <div className="point">
                        <span className='point_span'></span>
                        <p className='pointp'>Unde omnis iste natus error sit voluptatem dolore</p>
                    </div>
                    <button>Discover More</button>
                </div>
                <div className="advanture_row1_col2">
                    <img src="images/adventure1.png" alt="adventure1" />
                    <img src="images/Adventures2.png" alt="adventure2" />
                </div>
            </div>
            <div className="advanture_row2">
                <div className="first_count bg-[#FFF4E5]">
                    <div className="count_text">
                    <CountUp end={10} className='count' />
                    <span className='count'>+</span>
                    </div>
                    <p>Sports Activities</p>
                </div>
                <div className="first_count bg-[#E7FDE9]">
                    <div className="count_text">
                    <CountUp end={3} className='count' />
                    <span className='count'>k</span>
                    <span className='count'>+</span>
                    </div>
                    <p>Sports Activities</p>
                </div>
                <div className="first_count bg-[#F2F2FD]">
                    <div className="count_text">
                    <CountUp end={15} className='count' />
                    <span className='count'>+</span>
                    </div>
                    <p>Sports Activities</p>
                </div>

                <div className="first_count bg-[#FFF4E5]">
                    <div className="count_text">
                    <CountUp end={9} className='count' />
                    <span className='count'>.</span>
                    <CountUp end={5} className='count' />
                    </div>
                    <p>Sports Activities</p>
                </div>
            </div>
         </div>
       </div>
    </section>
    </>
  )
}

export default Advanture