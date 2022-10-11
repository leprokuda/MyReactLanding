import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import { Icon24LogoVk } from '@vkontakte/icons';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://vk.com/leprokuda" target="_blank"><Icon24LogoVk width={21.45} height={21.45} /></a>
      <a href="https://github.com/leprokuda" target="_blank"><FaGithub /></a>
      <a href="https://instagram.com/leprokuda" target="_blank"><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials