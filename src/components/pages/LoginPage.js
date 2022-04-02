
import { Link } from '@reach/router'
import React from 'react'
import { useState } from "react"

export default function LoginPage() {
  //state
  const [nom, setNom] = useState("Pomme")
  const [username, setUsername ]= useState("")
  
  //comportements
  const handleSubmit = (event) => {
    event.preventDefault()
    setUsername(nom)
  }

  const handleChange = (event) => {
    setNom(event.target.value)
  }

  //render
  return (
    <div>
      <div>Bienvenue chez nous</div>

      <p>Bonjour {username}</p>

      <form action="submit" onSubmit={handleSubmit}>
        <p>Connectez-vous</p>
        <input type="text" placeholder="Entrez un nom...." value={nom} onChange={handleChange}/>
        <button type="submit">Accéder à l'espace</button>
      </form>
    </div>
  )
}
