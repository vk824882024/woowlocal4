import React from "react";
import './App.css'
import image8 from './logotext.jpg'
// import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";
import Parabola from "./Parabola";

function Footer() {
  return (
    <div className="container-fluid">
      <Parabola title="Join Our WhatsApp Channel" text="Stay updated with the latest news, offers, and excljusive content."/>
      
 <footer className=" container-fluid  py-5" style={{backgroundColor: "#6f42c1",borderRadius:20}}>
      
      <div className="container">
        
        <div className="row text-center text-md-start">
          {/* Logo & Description */}
          <div className="col-md-4 mb-4">
            <img src={image8} width={200}></img>
            <p style={{color:"white"}}  >
             WoowLocal is a revolutionary multivendor hyperlocal marketplace that transforms how communities shop and connect. Our mobile app bridges the gap between digital convenience and local business vitality, offering a seamless "Buy Online Pickup In Store" experience.
            </p>
            <a href="https://play.google.com/store" target="_blank" rel="noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                style={{ height: "50px" }}
              />
            </a>
          </div>

          {/* Support Links */}
          <div className="col-md-4 mb-4">
            <h2 className="fw-bold text-warning">Support</h2>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">About us</a></li>
              <li><a href="/" className="text-white text-decoration-none">Woow coins</a></li>
              <li><a href="/" className="text-white text-decoration-none">Privacy Policy</a></li>
               <li><a href="/" className="text-white text-decoration-none">Terms and Conditions</a></li>
                  <li><a href="/" className="text-white text-decoration-none">Disclaimer</a></li>
                   <li><a href="/" className="text-white text-decoration-none">Cookies Policy</a></li>
                    <li><a href="/" className="text-white text-decoration-none">WoowLocal Blog</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold text-warning">Contact Us</h5>
            <p className="text-white">
              📍 Tirunelveli  
            </p>
            <p className="text-white">📧 info@woowlocal.com</p>
            <p className="text-white">📞 +91 7200987500</p>
          </div>
        </div>

        <div className="text-center mt-4 border-top pt-3">
          <p className="mb-0 text-light">
            © 2025 WoowLocal Retail Technologies Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    </div>
   
  );
}

export default Footer;
