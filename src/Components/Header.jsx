import React, { useState } from 'react'
import {AppBar,Box,Divider,Drawer,IconButton,Toolbar,Typography} from "@mui/material"
import { Link } from 'react-router-dom'
import MenuIcon from "@mui/icons-material/Menu"
import "./HeaderStyle.css";
import  Logo1 from "../images/logo512.png"



const Header = () => {

const [mobileOpen,setMobileOpen]=useState(false);
const handleDrawerToggle=()=>{
    setMobileOpen(!mobileOpen);
}
const drawer=(
    <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
        
         
                
                <Box>
                <Link to={"/"}>
                <Box>
                    <img src={Logo1} alt="Portfolio" style={{ height: "60px" }} />
                </Box>
                <Typography component={"div"} color={"goldenrod"} variant='h6'  sx={{flexGrow:1,my:1}}>
                PORTFOLIO
                </Typography>
                </Link>
                </Box>
                <Divider/>
                <Typography variant="h6" color={"goldenrod"} sx={{
      my: 2,
      fontSize: '20px', // Default font size
      '@media (max-width: 600px)': { // Media query for smaller screens
        fontSize: '12px', // Decrease font size for smaller screens
      },
    }}>
    </Typography>
                <ul className='mobile-navigation'>
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                        <Link to={"/about"}>About</Link>
                            
                        </li>
                        <li>
                            <Link to={"/projects"}>Projects</Link>
                        </li>
                        <li>
                        <Link to={"/experience"}>Experience</Link>
                        </li>
                        <li>
                            <Link to={"/contact"}>Contact Me</Link>
                        </li>
                    </ul>
    </Box>
)

  return (
    <>
    <Box>
        <AppBar component={"nav"} sx={{bgcolor:"#74703F" ,minHeight:"70px"}}>
            <Toolbar>
                <IconButton color={'inherit'} aria-label='open drawer' edge="start" sx={{mr:2,display:{sm:"none"},}} onClick={handleDrawerToggle}>
                    <MenuIcon/>
                </IconButton>
                <>
                <Box>
                    <img src={Logo1} alt="Portfolio" style={{ height: "50px" }}/>
                </Box>
                <Typography component={"div"} color={"goldenrod"} variant='h6'  sx={{flexGrow:1}}>
                PortFolio
                </Typography>
                </>
                <Box sx={{display:{xs:"none",sm:"block"}}}>
                    <ul className='navigation-menu'>
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                        <Link to={"/about"}>About</Link>
                        
                        </li>
                        <li>
                        <Link to={"/projects"}>Projects</Link>
                        </li>
                        <li>
                        <Link to={"/experience"}>Experience</Link>
                        </li>
                        <li>
                            <Link to={"/contact"}>Contact Me</Link>
                        </li>
                    </ul>
                </Box>
            </Toolbar>
        </AppBar>
        <Box component="nav">
            <Drawer variant='temporary'
             open={mobileOpen} 
             onClose={handleDrawerToggle}
              sx={{display:{xs:'block',sm:'none'},"& .MuiDrawer-paper":{boxSizing:'border-box',width:'240px',}}}
              
              >
                {drawer}
            </Drawer>

        </Box>
        <Box sx={{p:1}}>
            <Toolbar/>
        </Box>
        </Box>
    </>
  )
}

export default Header