import React from 'react'
import {Icon32LogoVk} from '@vkontakte/icons';
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
        <a href="https://vk.com/leprokuda" target="_blank"><Icon32LogoVk/></a>
        <a href="https://github.com/leprokuda" target="_blank"><FaGithub size={32}/></a>
        <a href="https://instagram.com/leprokuda" target="_blank"><BsInstagram size={32}/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; leprokuda <br/> All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer