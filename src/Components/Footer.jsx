import React from 'react'
import "./Footer.css"
import portfolio1 from "../images/Portfolio3.png"

const Footer = () => {
  return (
  <div className='contact_us'>
    <div className='footer'>
        <div className='leftFooter'>
            <h4>Connect Me</h4>
            <p>Email : pksahoo530@gmail.com</p>
            <p>Mobile : 99388000359</p>
        </div>
        <div className='midFooter'>
            <img src={portfolio1} alt="Portfolio" />
            <p>LET'S BUILD SOMETHING AMAZING TOGETHER</p>
            <p>Copyright 2025 &copy; Pabitra Kumar Sahoo</p>
        </div>
        <div className='rightFooter'>
            <h4>Follow me</h4>
            <a href="https://www.linkedin.com/in/pabitra-kumar-sahoo-874202237/">Linkedin</a>
            <a href="https://github.com/pabitrasahoo98">Github</a>
            <a href="https://www.facebook.com/pabitrakumar.sahoo.904/">Facebook</a>
            <a href="https://www.instagram.com/pabitra_chin2/">Instagram</a>
            <a href="https://x.com/PabitraSahoo98/">X</a>
            
        

        </div>
    </div>
    </div>
  )
}

export default Footer