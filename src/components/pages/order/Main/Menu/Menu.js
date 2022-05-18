import React from "react"
import styled from "styled-components"
import Fruit from "./Fruit"

export default function Menu() {
  return (
    <MenuStyled>
      Menu
      <Fruit />
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
  border: 1px solid blue;
`
