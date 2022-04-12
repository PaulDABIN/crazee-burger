import React, { useState } from "react"
import styled from "styled-components"
import { theme } from "../../../theme/index"
import PrimaryButton from "../../reusable/PrimaryButton"
import TextInput from "../../reusable/TextInput"

export default function LoginForm() {
  //State
  const [username, setUsername] = useState("")

  //comportement
  const handleSubmit = (event) => {
    event.preventDefault() //permet d'empecher l'évènement par defaut du onSubmit
  }

  const handleChange = (event) => {
    setUsername(event.target.value)
  }

  //rendering
  return (
    <LoginFormStyled action='submit' onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous</h1>
      <h2>Connectez-vous</h2>
      <hr />
      <TextInput placeholder={"Prénom"} value={username} onChange={handleChange} />
      <PrimaryButton label={"Accéder à l'espace"} />
    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 2.5rem 2rem;
  border-radius: 5px;
  font-family: "Amatic SC", cursive;

  hr {
    border: 1.5px solid #f56a2c;
    margin-bottom: 40px;
  }

  h1 {
    color: white;
    font-size: ${theme.fonts.P5};
  }

  h2 {
    color: #8e8b8b;
    margin: 20px 10px 10px;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P4};
  }

  button {
    width: 100%;
  }
`
