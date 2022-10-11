import React from 'react'
import './nav.css'
import {IoHomeOutline} from 'react-icons/io5'
import {BiUserPin} from 'react-icons/bi'
import {BiBookBookmark} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageDetail} from 'react-icons/bi'
import {useState} from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><IoHomeOutline /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUserPin /></a>
      <a href="#experience" onClick={() => setActiveNav('#experiense')} className={activeNav === '#experiense' ? 'active' : ''}><BiBookBookmark /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contacts" onClick={() => setActiveNav('#contacts')} className={activeNav === '#contacts' ? 'active' : ''}><BiMessageDetail /></a>

    </nav>
  )
}

export default Nav