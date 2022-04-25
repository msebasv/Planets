import React from 'react'

import './SocialNetworks.css'

import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const SocialNetworks = () => {
  return (
    <div
      className="social_network"
      data-aos="fade-left"
      data-aos-duration="2000"
    >
      <h1>Follow US</h1>
      <div className="logo_social">
        <div className="container_facebook">
          <FaFacebookF className="facebook" />
        </div>
        <div className="container_instagram">
          <FaInstagram className="instagram" />
        </div>
        <div className="container_twitter">
          <FaTwitter className="twitter" />
        </div>
      </div>
    </div>
  )
}

export default SocialNetworks
