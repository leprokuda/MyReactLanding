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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque consequuntur ea maiores natus omnis pariatur quo ut voluptatibus. Distinctio incidunt numquam pariatur possimus provident? Cumque laboriosam natus officiis soluta?
          </p>

          <a href="#contacts" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About