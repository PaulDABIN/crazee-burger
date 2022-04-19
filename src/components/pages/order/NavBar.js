import React from "react"
import styled from "styled-components"
import { theme } from "../../../theme/index"

export default function NavBar() {
  return <NavBarStyled>NavBar</NavBarStyled>
}

const NavBarStyled = styled.div`
  border: 1px solid blue;
  color: ${theme.colors.black};
  background-color: ${theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  padding: 0px 20px;
  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};
  border-bottom: 1px solid ${theme.colors.greyLight};

  .icon {
    width: 30px;
    height: 30px;
  }
`
