import React from 'react'
import './about.css'
import ME from '../../assets/img/about__me.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderActive} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About me"/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>6 Months Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>5 friends and 2 company</small>
            </article>

            <article className="about__card">
              <VscFolderActive className="about__icon"/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
            I am 23 years old. <br/>
            I have an education as an information security specialist.
            Also took several courses on frontend software development and testing.
            I know CRM systems well, both from the user's side and from the integrator's side. <br/>
            Experience in development 8 months + <br/>
            Now I am looking for a permanent job on a remote basis. <br/>
            My dream: to become a sought-after fullstack developer <br/>
            Write to me, I will be glad to cooperate with you, as well as to communicate and exchange experiences!
          </p>

          <a href="#contacts" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About