import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
      <section className='footer'>
        <div className="footer_row">
        <div className="first_img">
            <img src="images/footer_image1.png" alt="" />
        </div>
        <div className="footer_text">
            <div className="container">
                <div className="footer_logo">
                    <img src="images/logo.png" alt="logo" />
                </div>
                <div className="footer_body">
                    <button>Join Our Club</button>
                    <p>Dolor sit amet ipsum consectetur adipiscing
                    elit sed eiusmod tempor incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices ipsum sed dolor.</p>
                </div>
                <hr />
                <div className="contact">
                    <h2>Contact Us</h2>
                    <div className="contact_p">
                    <p>586 Avada Avenue, Avadaville 30221-USA</p>
                    <p>Email: ext-sports@my-domain.com</p>
                    <p>Phone: (555) 802-1234</p>
                    </div>
                </div>
                <div className="footer_last">
                    <p>© 2021 | Avada Theme by ThemeFusion | All Rights Reserved.</p>
                </div>
            </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default Footer