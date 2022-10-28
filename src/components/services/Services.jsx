import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Create a visually attractive company website</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Increase the engagement of the target audience</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Animate the graphics  to make the project alive</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Structure information to manage attention</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Complete architecture design, work on navigation</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Сreating a corporate identity of the company</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Page-by-page layout of the website</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Adapting the layout for different devices</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>SEO-optimization of a web application</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Development of individual services</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Landing pages, business cards, corporate websites</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Social networks, bulletin boards, catalogs and much more</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Promotion and promotion in social networks (SMM)</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Contextual advertising</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Promotion of mobile applications</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Сreating texts for a website</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Photos and illustrations for your project</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Infographics for the needs of the project</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services