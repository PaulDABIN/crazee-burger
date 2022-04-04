
import { Link } from '@reach/router'
import React from 'react'
import { useState } from "react"
import Form from '../molecules/Form'

export default function LoginPage() {
  //state
  const [inputValue, setInputValue] = useState("")
  const [username, setUsername ]= useState("")

  
  //comportements
  const handleSubmit = (event) => {
    event.preventDefault() //permet d'empecher l'évènement par defaut du onSubmit 
    setUsername(inputValue)
    setInputValue("")
  }

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  //render
  return (
    <div>
      <div>Bienvenue chez nous</div>

      <p>Bonjour {username}</p>

      <Form handleSubmit={handleSubmit} inputValue={inputValue} handleChange={handleChange} />
    </div>
  )
}
