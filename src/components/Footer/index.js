import React from 'react'
import './style.css';

/**
* @author
* @function Footer
**/

const Footer = (props) => {
  return(
    <footer className="text-center pb-5">
    <img src="images/jtmac_logo.PNG" className="logo" />
    <ul className="m-0 p-0">
      <li className="d-inline-block"><a href><i className="fab fa-facebook-square color_green" /></a></li>
      <li className="d-inline-block"><a href><i className="fab fa-twitter-square color_green" /></a></li>
      <li className="d-inline-block"><a href><i className="fab fa-youtube-square color_green" /></a></li>
      <li className="d-inline-block"><a href><i className="fas fa-envelope-square color_green" /></a></li>
      <li className="d-inline-block"><a href><i className="fab fa-linkedin color_green" /></a></li>
    </ul>
    <p>Dr.Jacob Thomas ©<a href="https://imitpark.com" target="_blank"><img src="images/imit_logo.svg" className="imit_logo" /></a>. All Rights Reserved</p>
  </footer>
   )

 }

export default Footer