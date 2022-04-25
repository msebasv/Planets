import React from 'react'

import './Slider.css'

import Carousel, {
  slidesToShowPlugin,
  arrowsPlugin,
} from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

import { RiRocket2Fill } from 'react-icons/ri'

import Card from '../card/Card'

const Slider = () => {
  return (
    <div
      className="slider_container"
      data-aos="fade-down"
      data-aos-duration="2000"
    >
      <Carousel
        plugins={[
          'infinite',
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 3,
            },
          },
          {
            resolve: arrowsPlugin,
            options: {
              arrowLeft: <RiRocket2Fill className="arrow_left" />,
              arrowRight: <RiRocket2Fill className="arrow_right" />,
              addArrowClickHandler: true,
            },
          },
        ]}
        breakpoints={{
          1045: {
            plugins: [
              'infinite',
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 2,
                },
              },
              {
                resolve: arrowsPlugin,
                options: {
                  arrowLeft: <RiRocket2Fill className="arrow_left" />,
                  arrowRight: <RiRocket2Fill className="arrow_right" />,
                  addArrowClickHandler: true,
                },
              },
            ],
          },
          850: {
            plugins: [
              'infinite',
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 1,
                },
              },
              {
                resolve: arrowsPlugin,
                options: {
                  arrowLeft: <RiRocket2Fill className="arrow_left" />,
                  arrowRight: <RiRocket2Fill className="arrow_right" />,
                  addArrowClickHandler: true,
                },
              },
            ],
          },
        }}
        animationSpeed={1000}
        slides={Card}
      />
    </div>
  )
}

export default Slider
