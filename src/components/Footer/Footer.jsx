import React from 'react';
import "./Footer.css";
import {  FaTwitter, FaInstagram, FaGithubAlt, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer bg-dark section-p' id = "footer" >
        <div className='container'>
            <div className='section-title'>
                <h3 className='text-brown'>Follow <span className='text-white'>Me</span></h3>
            </div>
            <div className='footer-content '>
                <ul className='footer-social-links flex flex-c '>
                    <li>
                        <a href = "https://github.com/stephenonchieku1" className='text-white'>
                            <FaGithubAlt/>
                        </a>
                    </li>
                    <li>
                        <a href = "https://twitter.com/StephenOnchieku" className='text-white'>
                            <FaTwitter />
                        </a>
                    </li>
                    <li>
                        <a href = "https://www.instagram.com/xtrevasone/" className='text-white'>
                            <FaInstagram />
                        </a>
                    </li>
                    <li>
                        <a href = "https://www.linkedin.com/in/stephen-onchieku-70297121b/" className='text-white'>
                            <FaLinkedin />
                        </a>
                    </li>
                 
                 
                </ul>
                <p className='text-center fs-14 text-white op-07 fw-3 ls-1 reserved-text'>All Rights Reserved &copy;since 2022</p>
               <p>Copyright  © {new Date().getFullYear()} </p>
               <p>STEPHEN ONCHIEKU </p>
            </div>
        </div>
    </div>
  )
}

export default Footer