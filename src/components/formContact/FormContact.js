import React from 'react'

import './FormContact.css'

const FormContact = () => {
  return (
    <div className="container_form_contact">
      <h1>Let's Go</h1>
      <form className="form_contact">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="E-mail" />
        <textarea placeholder="Message" />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default FormContact
