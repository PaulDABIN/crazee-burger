
import { Link } from '@reach/router'
import React from 'react'
import { useState } from "react"

export default function LoginPage() {
  //state
  const [inputValue, setInputValue] = useState("")
  const [username, setUsername ]= useState("")
  
  //comportements
  const handleSubmit = (event) => {
    event.preventDefault()
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

      <form action="submit" onSubmit={handleSubmit}>
        <p>Connectez-vous</p>
        <input type="text" placeholder="Entrez un prénom...." value={inputValue} onChange={handleChange}/>
        <button type="submit">Accéder à l'espace</button>
      </form>
    </div>
  )
}
