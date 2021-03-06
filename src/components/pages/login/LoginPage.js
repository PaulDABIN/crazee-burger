import { Link } from "@reach/router"
import React from "react"
import { useState } from "react"
import styled from "styled-components"
import LoginForm from "./LoginForm"
import Logo from "../../reusable/Logo"

export default function LoginPage() {
  //render
  return (
    <LoginPageStyled>
      <Logo className={"logo"} />
      <LoginForm />
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

  .logo {
    transform: scale(2.5);
  }
`
