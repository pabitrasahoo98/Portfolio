import React from 'react'
import "./Footer.css"
import portfolio1 from "../images/Portfolio1.png"

const Footer = () => {
  return (
  <div className='contact_us'>
    <div className='footer'>
        <div className='leftFooter'>
            <h4>DOWNLOAD OUR APP</h4>
            <p>Downlod App for Android and IOS mobile phone</p>
           {/* <img src={playStore} alt="playstore" />
            <img src={appStore} alt="Appstore" />*/}
        </div>
        <div className='midFooter'>
            <img src={portfolio1} alt="NowGrocceries" />
            <p>High quality is our first priority</p>
            <p>Copyright 2024 &copy; NowGrocery</p>
        </div>
        <div className='rightFooter'>
            <h4>FOLLOW US</h4>
            
        <a href="https://www.instagram.com/nowgrocceries/">Instagram</a>
        <a href="https://www.facebook.com/profile.php?id=61557393482487">Facebook</a>

        </div>
    </div>
    </div>
  )
}

export default Footer