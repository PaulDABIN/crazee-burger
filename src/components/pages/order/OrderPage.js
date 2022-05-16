import React from "react"
import styled from "styled-components"
import { theme } from "../../../theme"
import Main from "./Main/Main"
import Navbar from "./Navbar/Navbar"

export default function OrderPage({ name }) {
  return (
    <OrderPageStyled>
      <Navbar />
      <Main />
    </OrderPageStyled>
  )
}

const OrderPageStyled = styled.div`
  border-radius: ${theme.borderRadius.extraRound};
  display: flex;
  flex-direction: column;
  height: 95vh;
  width: 1400px;
  margin: auto;
  box-shadow: 0 0 8px 0 rgb(0 0 0 / 20%);
`
