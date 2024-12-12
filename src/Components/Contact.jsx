import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import './contact.css';
import { Button, TextField, Typography } from "@mui/material";
import emailjs from 'emailjs-com';  // Import EmailJS

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");  // State for success/error messages

  // EmailJS Configuration
  const sendEmail = (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    const templateParams = {
      from_name: name,
      from_email: email,
      from_phone: mobile,
      message: message,
    };

    // Sending email using EmailJS
    emailjs.send('service_97or0vq', 'template_lq16y1c', templateParams, 'GTCRPpE_tAxJeqY3n')
      .then((response) => {
        setStatusMessage("Message sent successfully!");  // Success message
        setName('');
        setEmail('');
        setMobile('');
        setMessage('');
      }, (err) => {
        setStatusMessage("Failed to send the message. Please try again.");  // Error message
      });
  };

  return (
    <>
      <div className="container contact" id="contact">
        <Typography variant="h3" gutterBottom color={"gold"}>CONTACT ME</Typography>
        
        <div className="contactform">
          <form onSubmit={sendEmail}> {/* Add onSubmit handler to trigger sendEmail function */}
            <TextField
              label="Enter Your Name"
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
              label="Enter Your Email"
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
              label="Enter Your Mobile No"
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
              label=" Your Message"
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
                Send
              </Button>
            </div>
          </form>
          
          {/* Display Status Message */}
          {statusMessage && (
            <Typography variant="h6" align="center" style={{ marginTop: "20px", color: "gold" }}>
              {statusMessage}
            </Typography>
          )}
        </div>

        {/* Social Media Icons */}
        <div className="contact-icon" data-aos="zoom-in-up" data-aos-duration="1000">
          <a href="https://www.instagram.com/pabitra_chin2/"  className="items">
            <FaInstagram className="icons" />
          </a>
          <a href="https://www.facebook.com/pabitrakumar.sahoo.904/" className="items">
            <CiFacebook className="icons" />
          </a>
          <a href="https://www.linkedin.com/in/pabitra-kumar-sahoo-874202237/" className="items">
            <CiLinkedin className="icons" />
          </a>
          <a href="https://x.com/PabitraSahoo98" className="items">
            <FaSquareXTwitter className="icons" />
          </a>
          <a href="https://github.com/pabitrasahoo98"  className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a href="mailto:pksahoo530@gmail.com"  className="items">
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
