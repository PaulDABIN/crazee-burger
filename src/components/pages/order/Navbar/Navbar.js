import React from "react"
import styled from "styled-components"
import { theme } from "../../../../theme/index"
import Logo from "../../../reusable/Logo"
import NavbarRight from "./NavbarRight"

export default function Navbar() {
  return (
    <NavbarStyled>
      <Logo onClick={() => window.location.reload()} />
      <NavbarRight />
    </NavbarStyled>
  )
}

const NavbarStyled = styled.div`
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
