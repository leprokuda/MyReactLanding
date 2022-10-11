import React from 'react'
import {MdOutlineMail} from 'react-icons/md'
import {TbBrandTelegram} from 'react-icons/tb'
import {BsWhatsapp} from 'react-icons/bs'

import './contacts.css'

const Contacts = () => {
  return (
    <section id='contacts'>
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>
      
      <div className="container contacts__container">
        <div className="contacts__options">
          <article className="contacts__option">
            <MdOutlineMail/>
            <h4>Email</h4>
            <h5>leprokuda@yandex.ru</h5>
            <a href="mailto:leprokuda@yandex.ru" target="_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className="contacts__option">
            <TbBrandTelegram/>
            <h4>Telegram</h4>
            <h5>@leprokuda</h5>
            <a href="https://t.me/leprokuda" target="_blank">Send a message</a>
          </article>

          <article className="contacts__option">
            <BsWhatsapp/>
            <h4>WhatsApp</h4>
            <h5>+7(996)543-51-91</h5>
            <a href="https://api.whatsapp.com/send?phone=79965435191&text=" target="_blank">Send a message</a>
          </article>
        </div>
        <form action=""></form>
      </div>
    </section>
  )
}

export default Contacts