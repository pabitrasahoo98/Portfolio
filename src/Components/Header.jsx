import React, { useState } from 'react';
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import { Link } from 'react-scroll'; // Import Link from react-scroll
import MenuIcon from "@mui/icons-material/Menu";
import "./HeaderStyle.css";
import portfolio1 from "../images/Portfolio4.png";
import portfolio5 from "../images/Portfolio6.png";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box>
        <Link to="home" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">
          <img src={portfolio5} alt="Portfolio" style={{ height: "80px" }} />
        </Link>
      </Box>
      <Divider />
      <ul className='mobile-navigation'>
        <li><Link to="home" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">Home</Link></li>
        <li><Link to="about" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">About</Link></li>
        <li><Link to="projects" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">Projects</Link></li>
        <li><Link to="experience" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">Experience</Link></li>
        <li><Link to="contact" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">Contact</Link></li>
      </ul>
    </Box>
  );

  return (
    <Box>
      <AppBar component={"nav"} sx={{ bgcolor: " rgb(11,26, 51)", minHeight: "60px" }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <IconButton color={'inherit'} aria-label='open drawer' edge="start" sx={{ mr: 2, display: { sm: "none" } }} onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <Box>
            <Link to="home" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">
              <img src={portfolio1} alt="Portfolio" style={{ height: "100px", width: '180px' }} />
            </Link>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <ul className='navigation-menu'>
              <li><Link to="home" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">Home</Link></li>
              <li><Link to="about" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">About</Link></li>
              <li><Link to="projects" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">Projects</Link></li>
              <li><Link to="experience" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">Experience</Link></li>
              <li><Link to="contact" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">Contact</Link></li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Box component="nav">
        <Drawer
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: 'block', sm: 'none' },
            "& .MuiDrawer-paper": { boxSizing: 'border-box', width: '240px' }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Header;
