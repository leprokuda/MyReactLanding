import React from 'react'
import {Icon24LogoVk} from "@vkontakte/icons";
import {FaGithub} from "react-icons/fa";
import {BsInstagram} from "react-icons/bs";

import './footer.css'


const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo"></a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contacts">Contacts</a></li>
      </ul>
      
      <div className="footer__socials">
        <a href="https://vk.com/leprokuda" target="_blank"><Icon24LogoVk width={21.45} height={21.45}/></a>
        <a href="https://github.com/leprokuda" target="_blank"><FaGithub/></a>
        <a href="https://instagram.com/leprokuda" target="_blank"><BsInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; leprokuda All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer