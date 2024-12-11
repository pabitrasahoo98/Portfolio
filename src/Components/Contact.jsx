import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import './contact.css';
import { Button, TextField, Typography } from "@mui/material";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <div className="container contact" id="contact">
        <Typography variant="h3" gutterBottom color={"gold"}>CONTACT ME</Typography>
        
        <div className="contactform">
          <form>
            <TextField
              label="Name"
              fullWidth
              margin="normal"
              variant="outlined"
              value={name}
              name="from_name"
              onChange={(e) => setName(e.target.value)}
              required
              sx={{
                '& .MuiInputBase-root': {
                  backgroundColor: '#d9d9d9',
                }
              }}
            />
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              variant="outlined"
              type="email"
              value={email}
              name="from_email"
              onChange={(e) => setEmail(e.target.value)}
              required
              sx={{
                '& .MuiInputBase-root': {
                  backgroundColor: '#d9d9d9',
                }
              }}
            />
            <TextField
              label="Mobile"
              fullWidth
              margin="normal"
              variant="outlined"
              name="from_phone"
              type="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
              sx={{
                '& .MuiInputBase-root': {
                  backgroundColor: '#d9d9d9',
                }
              }}
            />
            <TextField
              label="Message"
              fullWidth
              margin="normal"
              variant="outlined"
              multiline
              rows={4}
              value={message}
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              required
              sx={{
                '& .MuiInputBase-root': {
                  backgroundColor: '#d9d9d9',
                }
              }}
            />
            
            {/* Wrapping div for button centering */}
            <div className="button-container">
              <Button
                type="submit"
                variant="contained"
                style={{
                  backgroundColor: "gold",
                  padding: "10px 20px",
                  marginTop: "20px",
                }}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>

        {/* Social Media Icons */}
        <div className="contact-icon" data-aos="zoom-in-up" data-aos-duration="1000">
          <a href="https://www.instagram.com" target="_blank" className="items">
            <FaInstagram className="icons" />
          </a>
          <a href="https://www.facebook.com" target="_blank" className="items">
            <CiFacebook className="icons" />
          </a>
          <a href="https://www.linkedin.com/in/pabitra-kumar-sahoo-874202237/" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
          <a href="https://twitter.com" target="_blank" className="items">
            <FaSquareXTwitter className="icons" />
          </a>
          <a href="https://github.com/pabitrasahoo98" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a href="mailto:webdevmastery@gmail.com" target="_blank" className="items">
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
