import React from 'react'
import "./Footer.css"
import portfolio1 from "../images/Portfolio3.png"

const Footer = () => {
  return (
  <div className='contact_us'>
    <div className='footer'>
        <div className='leftFooter'>
            <h4>DOWNLOAD OUR APP</h4>
            <p>Downlod App for Android and IOS mobile phone</p>
        </div>
        <div className='midFooter'>
            <img src={portfolio1} alt="Portfolio" style={{}} />
            <p>High quality is my first priority</p>
            <p>Copyright 2025 &copy; Pabitra Kumar Sahoo</p>
        </div>
        <div className='rightFooter'>
            <h4>FOLLOW ME</h4>
            <a href="https://www.linkedin.com/in/pabitra-kumar-sahoo-874202237/">Linkedin</a>
            <a href="https://www.facebook.com/pabitrakumar.sahoo.904/">Facebook</a>
            <a href="https://www.instagram.com/pabitra_chin2/">Instagram</a>
        

        </div>
    </div>
    </div>
  )
}

export default Footer