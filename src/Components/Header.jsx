import React, { useState } from 'react';
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import MenuIcon from "@mui/icons-material/Menu";
import "./HeaderStyle.css";
import portfolio1 from "../images/Portfolio4.png";
import portfolio5 from "../images/Portfolio5.png";

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Box>
                <Link to={"/"}>
                    <img src={portfolio5} alt="Portfolio" style={{ height: "80px" }} />
                </Link>
            </Box>
            <Divider />
            <Typography variant="h6" color={"goldenrod"} sx={{
                my: 2,
                fontSize: '20px',
                '@media (max-width: 600px)': {
                    fontSize: '12px',
                },
            }}>
            </Typography>
            <ul className='mobile-navigation'>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/projects"}>Projects</Link></li>
                <li><Link to={"/experience"}>Experience</Link></li>
                <li><Link to={"/contact"}>Contact Me</Link></li>
            </ul>
        </Box>
    );

    return (
        <>
            <Box>
                <AppBar component={"nav"} sx={{ bgcolor: "#5e17eb", minHeight: "80px" }}>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        {/* Mobile Menu Icon */}
                        <IconButton color={'inherit'} aria-label='open drawer' edge="start" sx={{ mr: 2, display: { sm: "none" } }} onClick={handleDrawerToggle}>
                            <MenuIcon />
                        </IconButton>

                        {/* Logo */}
                        <Box>
                            <Link to={"/"}>
                                <img src={portfolio1} alt="Portfolio" style={{ height: "100px", width: '180px' }} />
                            </Link>
                        </Box>

                        {/* Desktop Menu */}
                        <Box sx={{ display: { xs: "none", sm: "block" } }}>
                            <ul className='navigation-menu'>
                                <li><Link to={"/"}>Home</Link></li>
                                <li><Link to={"/about"}>About</Link></li>
                                <li><Link to={"/projects"}>Projects</Link></li>
                                <li><Link to={"/experience"}>Experience</Link></li>
                                <li><Link to={"/contact"}>Contact Me</Link></li>
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
        </>
    );
};

export default Header;
