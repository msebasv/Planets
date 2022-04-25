import React from 'react'

import './Contact.css'

import FormContact from '../../components/formContact/FormContact'
import Social from '../../components/socialNetworks/SocialNetworks'

const Contact = () => {
  return (
    <div
      className="contact_container"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="title_card">
        <h1 className="title" data-aos="fade-down" data-aos-duration="2000">
          Contact us
        </h1>
        <div className="cards_container">
          <FormContact />
          <Social />
        </div>
      </div>
    </div>
  )
}

export default Contact
