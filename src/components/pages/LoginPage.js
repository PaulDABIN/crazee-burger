
import { Link } from '@reach/router'
import React from 'react'
import { useState } from "react"
import styledComponents from 'styled-components'
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
    <LoginPageStyled >
      <div className='title'>Bienvenue chez nous</div>

      <p>Bonjour {username}</p>

      <Form handleSubmit={handleSubmit} inputValue={inputValue} handleChange={handleChange} />
    </LoginPageStyled>
  )
}

const LoginPageStyled = styledComponents.div`
  background: blue;

  .title {
    color : yellow;
  }
  
  p{
    color : red;
  }
`
