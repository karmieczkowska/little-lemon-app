import React from 'react'
import '../styles/Footer.css'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome
            size={20}
            style={{color: "#fff", marginRight: "2rem"}}
            />
            <div>
              <p>Little Lemon Restaurant</p>
              <p>New York, USA</p>
            </div>
          </div>
          <div className="phone">
            <h4><FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/>
            111-222-333</h4>
          </div>
          <div className="email">
            <h4><FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/>
            littlelemon@reastaurant.com</h4>
          </div>
        </div>
        <div className="right">
          <h4>About the company</h4>
          <p>Little Lomon is a charming neighbourhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
          <div className="social">
          <FaFacebook size={30} style={{color: "#fff", marginRight: "1rem"}}/>
          <FaTwitter size={30} style={{color: "#fff", marginRight: "1rem"}}/>
          <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer