import {React, useRef} from 'react'
import {MdOutlineMail} from 'react-icons/md'
import {TbBrandTelegram} from 'react-icons/tb'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com';

import './contacts.css'

const Contacts = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fzfepvr', 'template_t8qrz4i', form.current, 'yrZtM9ur4nVC8J2nQ')

    e.target.reset()
  };

  return (
    <section id='contacts'>
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>
      
      <div className="container contacts__container">
        <div className="contacts__options">
          <article className="contacts__option">
            <MdOutlineMail className="contacts__option-icon"/>
            <h4>Email</h4>
            <h5>leprokuda@yandex.ru</h5>
            <a href="mailto:leprokuda@yandex.ru" target="_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className="contacts__option">
            <TbBrandTelegram className="contacts__option-icon"/>
            <h4>Telegram</h4>
            <h5>@leprokuda</h5>
            <a href="https://t.me/leprokuda" target="_blank">Send a message</a>
          </article>

          <article className="contacts__option">
            <BsWhatsapp className="contacts__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+7(996)543-51-91</h5>
            <a href="https://api.whatsapp.com/send?phone=79965435191&text=" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contacts