import React from 'react'

import './Card.css'

import planets from '../../data/planets'

const Card = planets.map((card, index) => (
  <div className="card_container">
    <div className="card" key={index}>
      <img src={card.image} className="image" alt="Planets"/>
      <div className="container_title">
        <h2 className="title">{card.name}</h2>
      </div>
    </div>
  </div>
))

export default Card
