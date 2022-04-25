import React from 'react'

import './About.css'

import AstronautAbout from '../../assets/images/astronaut2.png'

const About = () => {
  return (
    <div
      className="container_about"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <h1 data-aos="fade-down" data-aos-duration="2000">
        About
      </h1>
      <div className="about_description">
        <p data-aos="fade-right" data-aos-duration="2000">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non leo
          bibendum, pellentesque tellus at, feugiat libero. Vestibulum faucibus,
          ex et volutpat viverra, risus risus pharetra sem, sit amet laoreet
          ipsum sem vel sem. In eu luctus augue. Curabitur sit amet est non mi
          tincidunt placerat non auctor libero. Aliquam mattis nunc id nulla
          euismod pulvinar. Curabitur molestie odio viverra imperdiet viverra.
          Curabitur porttitor orci ut ex euismod porttitor. Sed dapibus, velit
          vel fermentum eleifend, sem purus malesuada arcu, ut egestas quam sem
          quis lacus.
        </p>
        <div>
          <img
            src={AstronautAbout}
            className="astronaut_image"
            data-aos="fade-left"
            data-aos-duration="2000"
            alt = "Astronaut"
          />
        </div>
      </div>
    </div>
  )
}

export default About
