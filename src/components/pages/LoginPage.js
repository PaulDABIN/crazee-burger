
import { Link } from '@reach/router'
import React from 'react'
import { useState } from "react"
import styled from 'styled-components'
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
      <Form handleSubmit={handleSubmit} inputValue={inputValue} handleChange={handleChange} />
    </LoginPageStyled>
  )
}


const LoginPageStyled = styled.div`
height: 100vh;
width: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

&::before {
  content: "";
  background: url(/images/login-background.jpg) rgba(0, 0, 0, 0.7);
  background-size: cover;
  background-position: center;
  background-blend-mode: darken;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}
`
