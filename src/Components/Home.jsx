import React from 'react'
import Layout from './Layout'
import './Home.css'
import pdf from '../Pdf/resume_PabitraKumarSahoo.pdf'
import hero from '../images/hero.jpg'
import { Typography } from '@mui/material'

const Home = () => {
  return (
   <Layout>
    <div className="home">
      <div className="left">
      <Typography variant="h3" color={"#ffffff"} sx={{
                my: 2,
                fontSize: '60px',
                '@media (max-width: 600px)': {
                    fontSize: '30px',
                },
            }}>Pabitra kumarSahoo</Typography>
        <a href={pdf} download="ResumePabitra_sahoo.pdf" className="btn btn-outline-warning">Download Resume</a>
      </div>
      <div className="right">
        <div className="img">
        <img src={hero} alt="" />
        </div>
        
      </div>
    </div>
   </Layout>
  
     
  )
}

export default Home
