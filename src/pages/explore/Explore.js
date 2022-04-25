import React from 'react'

import './Explore.css'
import Slider from '../../components/slider/Slider'

const Explore = () => {
  return (
    <div
      className="explore_container"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <Slider />
    </div>
  )
}

export default Explore
