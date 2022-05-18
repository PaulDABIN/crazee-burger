import React from "react"
import styled from "styled-components"
import Card from "../../../../reusable/Card"
import { fakeBurgers1 } from "../../../../../fakeData/fakeData"

export default function Menu() {
  return (
    <MenuStyled>
      {fakeBurgers1.map((burger) => (
        <Card id={burger.id} price={burger.price} imageSource={burger.imageSource} title={burger.title} />
      ))}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
  border: 1px solid blue;
  display: flex;
  padding-top: 50px;
  justify-content: space-evenly;
`
