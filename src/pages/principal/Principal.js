import React from 'react'
import MyName from '../../components/myName/MyName'
import './Principal.css'

const Principal = () => {
  return (
    <div
      className="container_principal"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <MyName />
    </div>
  )
}

export default Principal
