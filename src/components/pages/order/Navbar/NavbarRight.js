import React from "react"
import styled from "styled-components"
import { theme } from "../../../../theme"
import Profile from "./Profile"
import ToggleButton from "./ToggleButton"

export default function NavbarRight() {
  return (
    <NavBarRightStyled>
      <ToggleButton />
      <Profile />
    </NavBarRightStyled>
  )
}

const NavBarRightStyled = styled.div`
  /* background: lightgreen; */
  width: auto;
  min-width: 380px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .log-out-icon:visited {
    text-decoration: none;
  }

  .toaster {
    /* border: 1px solid red; */
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_black};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`
